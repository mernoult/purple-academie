import { createClient } from "jsr:@supabase/supabase-js@2";
import { DISPOSABLE_DOMAINS } from "./disposable-domains.ts";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

async function hasValidMx(domain: string): Promise<boolean> {
  try {
    const records = await Deno.resolveDns(domain, "MX");
    return records.length > 0;
  } catch {
    return false;
  }
}

async function sendGuideEmail(email: string, prenom: string, signedUrl: string | null) {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) {
    console.error("RESEND_API_KEY manquant — email non envoyé");
    return;
  }
  const downloadSection = signedUrl
    ? `<a href="${signedUrl}" style="background:#7C3AED;color:#fff;padding:14px 24px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block;">Télécharger le guide</a>`
    : `<p>Le guide arrive très bientôt — nous te préviendrons dès qu'il sera prêt.</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Marc Ernoult <guide@contact.marc-ernoult.fr>",
      to: [email],
      subject: "Ton guide d'auto-diagnostic budgétaire",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
          <h1 style="font-size:22px;">Merci ${prenom} !</h1>
          <p>Voici ton guide d'auto-diagnostic budgétaire, prêt à remplir en 15 minutes.</p>
          <p style="margin: 28px 0;">${downloadSection}</p>
          <p style="color:#666;font-size:13px;">Ce lien expire dans 7 jours. Une question ? Réponds directement à cet email.</p>
        </div>
      `,
    }),
  });
  if (!res.ok) {
    console.error("Échec envoi Resend:", res.status, await res.text());
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return jsonResponse({ ok: false, reason: "method_not_allowed" }, 405);
  }

  let payload: { prenom?: string; email?: string; website?: string };
  try {
    payload = await req.json();
  } catch {
    return jsonResponse({ ok: false, reason: "invalid_body" }, 400);
  }

  const prenom = (payload.prenom ?? "").trim();
  const email = (payload.email ?? "").trim().toLowerCase();
  const honeypot = (payload.website ?? "").trim();

  // Bot détecté : on répond "succès" sans rien faire, pour ne pas alerter le bot.
  if (honeypot) {
    return jsonResponse({ ok: true }, 200);
  }

  if (!prenom || !EMAIL_RE.test(email)) {
    return jsonResponse({ ok: false, reason: "invalid_email" }, 422);
  }

  const domain = email.split("@")[1];

  if (DISPOSABLE_DOMAINS.has(domain)) {
    return jsonResponse({ ok: false, reason: "disposable_email" }, 422);
  }

  if (!(await hasValidMx(domain))) {
    return jsonResponse({ ok: false, reason: "invalid_email" }, 422);
  }

  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { error: insertError } = await supabaseAdmin.from("leads").insert({ prenom, email });
  if (insertError) {
    console.error("Insert leads échoué:", insertError);
    return jsonResponse({ ok: false, reason: "server_error" }, 500);
  }

  const { data: signedData } = await supabaseAdmin.storage
    .from("guides")
    .createSignedUrl("guide.pdf", 60 * 60 * 24 * 7);

  await sendGuideEmail(email, prenom, signedData?.signedUrl ?? null);

  return jsonResponse({ ok: true }, 200);
});
