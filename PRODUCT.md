# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Grand public, tous profils : toute personne souhaitant apprendre les bases du pilotage budgétaire et de l'épargne, y compris des débutants complets en finance personnelle. Pas de segmentation par âge, revenu ou situation professionnelle.

## Product Purpose

Rendre l'éducation financière accessible à tous. Le site propose des contenus pédagogiques sur le pilotage budgétaire et des méthodes simples pour mieux gérer ses finances, faire des économies intelligentes, et se projeter vers des objectifs financiers court/moyen/long terme (y compris les bases de l'investissement et l'optimisation de placements).

## Positioning

Une méthode personnelle éprouvée par le consultant lui-même : jeune cadre en poste, passionné de gestion de patrimoine et d'éducation financière, qui partage des méthodes concrètes qu'il applique à sa propre gestion financière — pas une méthode générique ou théorique. L'approche se distingue aussi par le refus du discours culpabilisant : économiser sans frustration, sans sacrifier son confort de vie.

## Operating Context

- Page d'accueil : introduction personnelle du consultant, présentation de l'offre (2 axes : gestion du budget quotidien / projection financière), téléchargement gratuit d'un guide de diagnostic budgétaire via CTA violet en header.
- Formulaire de contact en bas de page (Nom, Email, Message), validation email obligatoire, protection anti-spam, bouton "Envoyer le message" en violet.
- Section blog prévue pour contenus pédagogiques et SEO (non encore implémentée).
- Backend léger via Supabase : le formulaire guide (`#guide`) et le formulaire de contact écrivent dans une base Postgres sécurisée (RLS, insert-only, aucune lecture publique). Le formulaire guide passe par une Edge Function (`subscribe-guide`) qui filtre les emails jetables/invalides (liste de domaines connus + vérification MX) et envoie automatiquement un email (via Resend) contenant un lien sécurisé et temporaire (7 jours) vers le PDF du guide, stocké dans un bucket Supabase Storage privé (`guides`).

## Capabilities and Constraints

- Site vitrine statique à ce stade : pas de compte utilisateur, pas d'espace membre, pas de paiement en ligne.
- Le téléchargement du guide budgétaire a un backend fonctionnel (Supabase + Resend). Le PDF réel doit être déposé manuellement dans le bucket Storage `guides` (remplace un fichier placeholder) — aucune interface d'upload dans le site lui-même.
- Blog : structure prévue mais contenu et système de publication non encore construits.

## Brand Commitments

- Nom : Purple Academy.
- Couleur primaire : violet `#7C3AED` (CTA, liens, accents).
- Typographies : DM Serif Display (titres/serif), DM Sans (texte courant).
- Référence de design évoquée dans le brief initial : univers épuré et moderne façon site de coach/consultant premium (ex. thamikabbaj.com).

## Evidence on Hand

Aucune preuve sociale disponible pour l'instant (pas de témoignages clients, pas de résultats chiffrés, pas de guide PDF réel). Ne pas fabriquer de témoignages, chiffres ou études de cas — s'appuyer sur le positionnement et l'expertise personnelle du consultant comme preuve de crédibilité tant qu'aucune preuve concrète n'est fournie.

## Product Principles

1. Accessibilité avant tout : le contenu et le ton doivent rester compréhensibles par un débutant complet en finance.
2. Pas de culpabilisation : le message est "reprendre le contrôle sans frustration", jamais moralisateur sur les dépenses.
3. Crédibilité par l'expertise personnelle, pas par la preuve sociale fabriquée — honnêteté tant que les vraies preuves ne sont pas disponibles.
4. Un CTA clair et unique par intention principale (télécharger le guide budget en priorité).

## Accessibility & Inclusion

Aucune exigence spécifique établie à ce jour au-delà des bonnes pratiques standard (contraste, lisibilité, formulaires accessibles).
