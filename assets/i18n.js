/* Purple Academy — bilingual FR/EN.
   Le HTML reste écrit en français (langue source). Ce script remplace les textes
   par leur version anglaise à partir du dictionnaire ci-dessous, selon la langue
   choisie via le bouton FR / EN (mémorisée dans localStorage, comme marc-ernoult.fr).

   - Textes du HTML : la clé est le texte français (espaces normalisés).
   - Textes générés en JS : PA.t("clé", { variables }).
   - Pour ajouter une phrase : ajouter une ligne "français": "english" ci-dessous. */
(function () {
  var STORAGE_KEY = 'site-language';

  var DICT = {
    /* ---------- Navigation, en-tête, pied de page (communs) ---------- */
    "Mes sites": "My sites",
    "Profil": "Profile",
    "Académie": "Academy",
    "Ici": "Here",
    "L'offre": "Services",
    "Méthode": "Method",
    "À propos": "About",
    "Télécharger le guide": "Download the guide",
    "Ouvrir le menu": "Open menu",
    "Fermer le menu": "Close menu",
    "Navigation mobile": "Mobile navigation",
    "Changer de langue": "Switch language",
    "Ressources": "Resources",
    "Guide gratuit": "Free guide",
    "Mentions légales": "Legal notice",
    "Confidentialité · RGPD": "Privacy · GDPR",
    "Éducation financière et pilotage budgétaire pour reprendre la main sur votre argent, sereinement, sans jargon ni injonction.": "Financial education and budget management to take back control of your money — calmly, with no jargon and no lectures.",
    "Éducation financière et pilotage budgétaire, sans jargon.": "Financial education and budget management, no jargon.",
    "© 2026 Purple Academy — Tous droits réservés": "© 2026 Purple Academy — All rights reserved",
    "Édité en France · Marc Ernoult": "Published in France · Marc Ernoult",

    /* ---------- Accueil : méta ---------- */
    "Audit budget & conseil financier | Purple Academy": "Budget audit & financial coaching | Purple Academy",
    "Audit et conseil en gestion financière du quotidien. Reprenez la main sur votre argent avec une méthode concrète, sans jargon.": "Audit and advice on everyday personal finance. Take back control of your money with a practical method, no jargon.",

    /* ---------- Accueil : hero ---------- */
    "On ne pilote que ce que l'on": "You only manage what you",
    "mesure.": "measure.",
    "Audit personnalisé, méthode de budget mensuel, et vision long terme pour vos placements. On travaille sur vos vrais chiffres — pas sur un profil moyen théorique.": "A personalised audit, a monthly budgeting method, and a long-term view for your investments. We work on your real numbers — not on a theoretical average profile.",
    "Télécharger le guide gratuit": "Download the free guide",
    "Voir l'offre": "See the offer",
    "Exemple de relevé mensuel": "Sample monthly statement",
    "Relevé — Camille D.": "Statement — Camille D.",
    "Juil. 2026": "Jul. 2026",
    "Loyer + charges": "Rent + utilities",
    "fixe": "fixed",
    "− 890,00 €": "− €890.00",
    "Courses": "Groceries",
    "variable": "variable",
    "− 412,60 €": "− €412.60",
    "optimisé −38 €": "saved €38",
    "− 74,90 €": "− €74.90",
    "Plaisirs": "Leisure",
    "enveloppe": "envelope",
    "− 210,00 €": "− €210.00",
    "Épargne automatisée": "Automated savings",
    "+ 420,00 €": "+ €420.00",
    "Reste à vivre": "Disposable income",
    "Après 6 semaines d'accompagnement": "After 6 weeks of coaching",
    "+ 18 % vs. juin": "+ 18% vs. June",

    /* ---------- Accueil : baseline & chiffres ---------- */
    "Piloter votre argent, sans": "Managing your money, without",
    "jargon": "jargon",
    "ni tableau Excel abscons.": "or cryptic Excel spreadsheets.",
    "Chiffres clés": "Key figures",
    "personnes accompagnées": "people coached",
    "4,9/5": "4.9/5",
    "en satisfaction": "satisfaction",
    "Indépendant · zéro rétrocession": "Independent · zero kickbacks",
    "Depuis 2023": "Since 2023",
    "Guide téléchargé": "Guide downloaded",
    "+2 300 fois": "+2,300 times",
    "Réponse sous 48 h": "Reply within 48 h",

    /* ---------- Accueil : offre ---------- */
    "Deux axes.": "Two axes.",
    "Un cap.": "One direction.",
    "Que vous vouliez maîtriser vos dépenses du mois ou construire pour la décennie qui vient, l'approche part toujours de vos chiffres réels, jamais d'un profil moyen théorique.": "Whether you want to get a handle on this month's spending or build for the next decade, the approach always starts from your real numbers, never from a theoretical average profile.",
    "Gestion du budget au quotidien": "Everyday budget management",
    "Cartographier vos flux, arbitrer sans se priver, et poser une routine financière que vous tenez sans y penser.": "Map your cash flows, make trade-offs without deprivation, and set up a financial routine you keep without thinking about it.",
    "Cartographie complète — postes fixes, variables, plaisirs": "Complete mapping — fixed costs, variable costs, leisure",
    "Optimisation des récurrents (abonnements, énergie, banque)": "Optimising recurring costs (subscriptions, energy, banking)",
    "Système d'épargne automatisé, adapté à votre banque": "Automated savings system, adapted to your bank",
    "Suivi mensuel simple — papier, app ou tableur au choix": "Simple monthly tracking — paper, app or spreadsheet, your choice",
    "Exemple client · Camille, 32 ans": "Client example · Camille, 32",
    "« En 6 semaines,": "“In 6 weeks,",
    "+ 420 €": "+ €420",
    "d'épargne mensuelle automatisée, sans changer de train de vie. »": "of automated monthly savings, without changing my lifestyle.”",
    "Essayer le simulateur de budget": "Try the budget simulator",
    "Projection & placements long terme": "Projection & long-term investments",
    "Poser des objectifs chiffrés, choisir les bonnes enveloppes, et faire travailler votre argent en cohérence avec votre profil.": "Set quantified goals, choose the right investment wrappers, and put your money to work in line with your profile.",
    "Objectifs chiffrés à 3, 5 et 10 ans": "Quantified goals at 3, 5 and 10 years",
    "Panorama PEA · assurance-vie · PER · immobilier": "Overview: PEA (equity savings plan) · life insurance · PER (retirement plan) · real estate",
    "Allocation adaptée à votre profil de risque": "Allocation matched to your risk profile",
    "Vous restez décisionnaire — aucune vente de produit": "You stay in charge — no product sales",
    "Exemple client · Thomas, freelance": "Client example · Thomas, freelancer",
    "« Un cap chiffré sur 5 ans — je ne me demande plus si": "“A 5-year target with real numbers — I no longer wonder whether",
    "2 400 €": "€2,400",
    "mensuels sur PEA c'est trop ou pas assez. »": "a month into a PEA is too much or not enough.”",

    /* ---------- Accueil : méthode ---------- */
    "Trois étapes.": "Three steps.",
    "Un cap clair.": "A clear direction.",
    "Un accompagnement structuré, sans surprise. À chaque étape un livrable écrit, chiffré, qui vous reste.": "Structured coaching, no surprises. Every step comes with a written, quantified deliverable that stays with you.",
    "Diagnostic": "Assessment",
    "Audit complet : revenus, dépenses, épargne, dettes, projets. Le point de départ, sur vos vrais chiffres.": "Full audit: income, spending, savings, debts, projects. The starting point, based on your real numbers.",
    "Livrable": "Deliverable",
    "Cartographie PDF · 12 pages": "PDF map · 12 pages",
    "Plan d'action": "Action plan",
    "Feuille de route personnalisée : quick-wins, priorités, projections chiffrées à 6, 12 et 36 mois.": "Personalised roadmap: quick wins, priorities, projections at 6, 12 and 36 months.",
    "Plan chiffré + tableur": "Costed plan + spreadsheet",
    "Mise en œuvre": "Implementation",
    "Suivi mensuel, ajustements, transfert de compétence. Le jour où vous êtes autonome, on arrête.": "Monthly follow-up, adjustments, skills transfer. The day you're self-sufficient, we stop.",
    "Durée": "Duration",
    "3 à 6 mois": "3 to 6 months",
    "semaines": "weeks",
    "Délai moyen avant les premiers résultats mesurables, chez la grande majorité des personnes accompagnées.": "Average time before the first measurable results, for the vast majority of people I coach.",

    /* ---------- Accueil : guide ---------- */
    "Le guide d'auto-diagnostic": "The self-assessment",
    "budgétaire.": "budget guide.",
    "Un fichier prêt à remplir pour faire un premier état des lieux de vos finances en 15 minutes chrono. 100 % gratuit, aucune carte demandée.": "A ready-to-fill file to take stock of your finances in 15 minutes flat. 100% free, no card required.",
    "PDF + tableur": "PDF + spreadsheet",
    "Temps": "Time",
    "Prix": "Price",
    "Gratuit": "Free",
    "Formulaire · Guide": "Form · Guide",
    "Envoi immédiat": "Instant delivery",
    "Prénom": "First name",
    "Adresse email": "Email address",
    "vous@email.com": "you@email.com",
    "Recevoir le guide": "Get the guide",
    "Zéro spam · désabonnement en un clic": "Zero spam · unsubscribe in one click",
    "Merci ! Vérifiez votre boîte mail dans les prochaines minutes.": "Thank you! Check your inbox in the next few minutes.",
    "Une erreur est survenue. Réessayez ou écrivez à contact@marc-ernoult.fr.": "Something went wrong. Please try again or write to contact@marc-ernoult.fr.",
    "Merci d'utiliser une adresse email personnelle ou professionnelle (les adresses jetables ne sont pas acceptées).": "Please use a personal or work email address (disposable addresses are not accepted).",
    "Envoi en cours…": "Sending…",

    /* ---------- Accueil : à propos ---------- */
    "Qui écrit ces lignes ?": "Who is writing this?",
    "« Chacun devrait pouvoir": "“Everyone should be able to",
    "comprendre son argent": "understand their money",
    "sans se sentir noyé par le jargon des banques ou des assureurs. »": "without feeling drowned in the jargon of banks or insurers.”",
    "Marc Ernoult, consultant en éducation financière": "Marc Ernoult, financial education consultant",
    "Consultant · Éducation financière": "Consultant · Financial education",
    "Mon seul objectif à travers mon accompagnement, c'est de partager ma connaissance pour que les autres puissent s'enrichir. Par principe, j'estime que la plus grande des richesses est la connaissance — et c'est en vous partageant la mienne que j'aurai atteint mon objectif, et j'espère le vôtre, en optimisant votre budget.": "My only goal in coaching is to share what I know so that others can grow their wealth. As a matter of principle, I believe knowledge is the greatest wealth of all — and by sharing mine with you, I will have reached my goal, and I hope yours, by optimising your budget.",
    "Personnes accompagnées": "People coached",
    "4,9": "4.9",
    "Satisfaction moyenne": "Average satisfaction",
    "0 €": "€0",
    "Rétrocession touchée": "Kickbacks received",

    /* ---------- Accueil : témoignages ---------- */
    "Ce qu'en disent celles": "What the people",
    "et ceux que j'accompagne.": "I work with say.",
    "Trois retours choisis parmi 120+ accompagnements depuis 2023. Anonymisés à leur demande ou publiés sous prénom.": "Three testimonials picked from 120+ coaching journeys since 2023. Anonymised at their request or published under first name only.",
    "J'ai enfin compris où partait mon argent chaque mois. En six semaines j'ai automatisé mon épargne et arrêté de culpabiliser sur mes dépenses plaisir.": "I finally understood where my money goes every month. In six weeks I automated my savings and stopped feeling guilty about my leisure spending.",
    "Consultante · 32 ans": "Consultant · 32",
    "Approche pédagogique, jamais moralisatrice. Marc explique les placements comme personne — on sort avec un vrai plan et pas juste des concepts.": "A teaching approach, never preachy. Marc explains investments like no one else — you leave with a real plan, not just concepts.",
    "Développeur freelance": "Freelance developer",
    "On avait un projet d'achat immobilier mais aucune visibilité. Le plan d'action à trois ans nous a débloqués et rassurés en tant que couple.": "We had a home-buying project but no visibility. The three-year action plan unblocked us and reassured us as a couple.",

    /* ---------- Accueil : FAQ ---------- */
    "Les questions": "The questions",
    "qui reviennent.": "that keep coming up.",
    "Cinq questions posées à peu près à chaque premier appel. Si la vôtre n'y est pas, elle a sa place en bas de page.": "Five questions asked on pretty much every first call. If yours isn't here, it belongs in the form at the bottom of the page.",
    "Suis-je concerné même si je ne gagne pas beaucoup ?": "Is this for me even if I don't earn much?",
    "Absolument. La méthode marche à tout niveau de revenu. L'objectif n'est pas de gagner plus — c'est d'utiliser ce que vous avez avec intention.": "Absolutely. The method works at any income level. The goal isn't to earn more — it's to use what you have with intention.",
    "Vais-je devoir tout suivre dans un tableur ?": "Will I have to track everything in a spreadsheet?",
    "Non. Papier, application mobile, tableur simplifié — on choisit ensemble l'outil qui colle à votre quotidien.": "No. Paper, mobile app, simplified spreadsheet — we choose together the tool that fits your daily life.",
    "Est-ce que vous vendez des produits financiers ?": "Do you sell financial products?",
    "Non, je suis 100 % indépendant. Aucune rétrocession, aucun partenariat commercial. Vous restez toujours décisionnaire.": "No, I'm 100% independent. No kickbacks, no commercial partnerships. You always stay in charge of the decisions.",
    "Combien de temps dure l'accompagnement ?": "How long does the coaching last?",
    "D'une séance ponctuelle (diagnostic) à 6 mois de suivi mensuel, selon vos objectifs. On calibre ensemble au premier échange — gratuit.": "From a one-off session (assessment) to 6 months of monthly follow-up, depending on your goals. We calibrate together at the first conversation — free of charge.",
    "Comment se passe le premier contact ?": "What does the first contact look like?",
    "30 minutes en visio pour comprendre votre situation. Je propose ensuite un format adapté — ou vous oriente vers le guide gratuit si c'est ce qu'il vous faut.": "30 minutes by video call to understand your situation. I then suggest a suitable format — or point you to the free guide if that's all you need.",

    /* ---------- Accueil : contact ---------- */
    "Une question ? Écrivez-moi.": "A question? Write to me.",
    "Je réponds sous 48 h ouvrées. Pas de réponse automatique — c'est bien moi qui lis vos messages, un par un.": "I reply within 48 working hours. No auto-reply — it's really me reading your messages, one by one.",
    "Délai": "Response time",
    "48 h ouvrées": "48 working hours",
    "Ne pas remplir si humain :": "Leave empty if you're human:",
    "Formulaire · Contact": "Form · Contact",
    "Réponse 48 h": "Reply in 48 h",
    "Nom": "Name",
    "Votre nom": "Your name",
    "Parlez-moi de votre situation ou de votre question…": "Tell me about your situation or your question…",
    "Envoyer le message": "Send message",
    "Message reçu. Réponse sous 48 h ouvrées.": "Message received. I'll reply within 48 working hours.",
    "Une erreur est survenue. Réessayez ou écrivez-moi directement à contact@marc-ernoult.fr.": "Something went wrong. Please try again or write to me directly at contact@marc-ernoult.fr.",

    /* ---------- Simulateur ---------- */
    "Simulateur de budget — Purple Academy": "Budget simulator — Purple Academy",
    "Simulateur de budget Purple Academy — confrontez vos revenus et vos charges en quelques minutes et recevez un plan d'action par poste de dépense.": "Purple Academy budget simulator — compare your income and expenses in a few minutes and get an action plan for each spending category.",
    "— outil de démonstration, calcul 100 % local, aucune donnée saisie n'est envoyée ou sauvegardée.": "— demo tool, 100% local calculation, no data entered is sent or saved.",
    "Combien vous reste-t-il": "How much do you have",
    "vraiment": "really",
    "à la fin du mois ?": "left at the end of the month?",
    "Saisissez vos revenus et vos charges habituelles — loyer, alimentation, enfants, transports, abonnements, énergie, assurances, crédits, divers. Le simulateur calcule votre reste à vivre en direct et vous propose un plan d'action par poste.": "Enter your income and your usual expenses — rent, food, children, transport, subscriptions, energy, insurance, loans, miscellaneous. The simulator calculates your disposable income live and suggests an action plan for each expense category.",
    "🔒 Rien n'est enregistré": "🔒 Nothing is saved",
    "📊 Résultat instantané": "📊 Instant result",
    "Vos revenus": "Your income",
    "Revenus nets mensuels du foyer, toutes sources confondues.": "Monthly net household income, all sources combined.",
    "Revenus nets / mois": "Net income / month",
    "Vos charges mensuelles": "Your monthly expenses",
    "Si vous connaissez déjà votre budget mensuel pour un poste, indiquez directement le montant global. Pour les postes à plusieurs composantes (enfants, transports, abonnements, assurances), vous pouvez aussi cliquer sur « Détailler ce poste » pour décomposer et gagner du temps grâce aux suggestions.": "If you already know your monthly budget for a category, enter the overall amount directly. For categories with several components (children, transport, subscriptions, insurance), you can also click “Break down this category” to split it up and save time with the suggestions.",
    "Reste à vivre estimé": "Estimated disposable income",
    "Taux d'épargne possible": "Possible savings rate",
    "50 €": "€50",
    "Accédez au plan d'action complet et personnalisé, poste par poste, avec suivi mensuel.": "Get the full, personalised action plan, category by category, with monthly follow-up.",
    "Être recontacté(e) pour l'offre complète": "Request a call back for the full offer",
    "Maquette — aucun paiement n'est traité sur ce prototype.": "Mock-up — no payment is processed on this prototype.",
    "Votre plan d'action, poste par poste": "Your action plan, category by category",
    "Généré automatiquement à partir de vos saisies et de repères budgétaires standards (indicatif, non personnalisé).": "Automatically generated from your entries and standard budget benchmarks (indicative, not personalised).",
    "Renseignez vos revenus et vos charges ci-dessus pour générer votre plan d'action.": "Fill in your income and expenses above to generate your action plan.",
    "Ajoutez vos charges pour générer votre plan d'action.": "Add your expenses to generate your action plan.",
    "+ Détailler ce poste": "+ Break down this category",
    "← Revenir à la saisie simple": "← Back to simple entry",
    "+ Autre": "+ Other",
    "Sous-total détaillé": "Detailed subtotal",
    "Intitulé": "Label",
    "Supprimer cette ligne": "Delete this line",
    "Aucune ligne ajoutée pour l'instant — utilisez les boutons ci-dessus.": "No lines added yet — use the buttons above.",
    "Remplissez vos revenus et charges pour voir le résultat": "Fill in your income and expenses to see the result",
    "Vos charges dépassent vos revenus ce mois-ci.": "Your expenses exceed your income this month.",
    "Il vous reste ce montant une fois toutes les charges couvertes.": "This is what's left once all expenses are covered.",
    "Dépenses : {v}": "Spending: {v}",
    "Revenus : {v}": "Income: {v}",
    "{n} %": "{n}%",
    "{n} % des revenus": "{n}% of income",
    " · au-dessus du repère": " · above benchmark",
    "Ce poste reste dans un repère raisonnable (≤ {n} % des revenus).": "This category is within a reasonable benchmark (≤ {n}% of income).",

    /* Simulateur : catégories */
    "Loyer / charges": "Rent / utilities",
    "ou mensualité de crédit immobilier": "or mortgage payment",
    "Alimentation": "Food",
    "courses, cantine": "groceries, canteen",
    "Enfants": "Children",
    "garde, activités, fournitures": "childcare, activities, supplies",
    "Transports": "Transport",
    "carburant, transport en commun, entretien": "fuel, public transport, maintenance",
    "Abonnements": "Subscriptions",
    "streaming, téléphonie, internet, salle de sport": "streaming, phone, internet, gym",
    "Énergie": "Energy",
    "électricité, gaz, eau": "electricity, gas, water",
    "Assurances & mutuelle": "Insurance & health cover",
    "habitation, santé, auto, prévoyance": "home, health, car, life & disability",
    "Crédits": "Loans",
    "conso, auto, autres (hors immobilier)": "consumer, car, other (excl. mortgage)",
    "Dépenses diverses": "Miscellaneous",
    "loisirs, vêtements, imprévus": "leisure, clothing, unexpected costs",
    "Cliquez pour ajouter une ligne, puis indiquez le montant réel.": "Click to add a line, then enter the actual amount.",
    "Tarifs streaming à titre indicatif — ajustez-les selon votre offre réelle. Forfaits mobile, box et salle de sport varient trop pour être pré-remplis : le montant reste à votre charge.": "Streaming prices are indicative — adjust them to your actual plan. Mobile plans, internet boxes and gym fees vary too much to be pre-filled: the amount is up to you.",
    "Garde (crèche / nounou)": "Childcare (nursery / nanny)",
    "Activités extrascolaires": "Extracurricular activities",
    "Fournitures / achats": "Supplies / purchases",
    "Carburant": "Fuel",
    "Transport en commun / abonnement": "Public transport / pass",
    "Entretien véhicule": "Vehicle maintenance",
    "Forfait mobile Orange": "Orange mobile plan",
    "Forfait mobile SFR": "SFR mobile plan",
    "Forfait mobile Bouygues": "Bouygues mobile plan",
    "Box internet": "Internet box",
    "Salle de sport": "Gym",
    "Mutuelle santé": "Health insurance",
    "Assurance habitation": "Home insurance",
    "Assurance auto": "Car insurance",
    "Prévoyance": "Life & disability cover",

    /* Simulateur : conseils */
    "Vérifiez votre éligibilité aux APL/ALF si ce n'est pas déjà fait.": "Check whether you're eligible for housing benefits (APL/ALF) if you haven't already.",
    "Une colocation ou un déménagement vers un logement plus petit peut faire baisser ce poste de plusieurs centaines d'euros.": "Sharing a flat or moving to a smaller place can cut this category by several hundred euros.",
    "Si vous êtes locataire depuis plus de 3 ans, une renégociation ou une comparaison du marché local est possible.": "If you've been renting for more than 3 years, renegotiating or comparing with the local market is worth a try.",
    "Planifiez vos repas sur la semaine pour réduire le gaspillage et les achats impulsifs.": "Plan your meals for the week to cut waste and impulse purchases.",
    "Comparez les prix au kilo plutôt qu'à l'unité, et privilégiez les marques distributeur sur les produits de base.": "Compare prices per kilo rather than per item, and favour store brands for basic products.",
    "Limitez la livraison de repas, qui coûte en moyenne 2 à 3 fois plus cher qu'un repas préparé.": "Limit meal delivery, which costs on average 2 to 3 times more than a home-cooked meal.",
    "Vérifiez vos droits aux aides CAF (PAJE, complément de mode de garde, allocation de rentrée scolaire).": "Check your entitlement to CAF family benefits (PAJE, childcare supplement, back-to-school allowance).",
    "Regroupez les activités extrascolaires sur un seul enfant à la fois si le budget est serré, en alternant d'une année sur l'autre.": "If the budget is tight, concentrate extracurricular activities on one child at a time, alternating from one year to the next.",
    "Les dispositifs municipaux (tarifs cantine/activités selon quotient familial) sont souvent sous-utilisés — vérifiez votre quotient.": "Local council schemes (canteen/activity fees based on family quotient) are often under-used — check your quotient.",
    "Le covoiturage ou les transports en commun peuvent diviser ce poste par deux sur les trajets domicile-travail.": "Carpooling or public transport can halve this category on your commute.",
    "Un forfait d'entretien régulier évite les grosses réparations imprévues qui déséquilibrent le budget.": "A regular maintenance plan avoids big unexpected repairs that throw the budget off balance.",
    "Comparez les abonnements de transport en commun mensuels et annuels : l'annuel est souvent plus avantageux.": "Compare monthly and annual public transport passes: the annual one is often better value.",
    "Listez tous vos abonnements actifs — la moyenne des foyers en oublie 2 à 3 qu'ils n'utilisent plus.": "List all your active subscriptions — the average household forgets 2 to 3 that they no longer use.",
    "Regroupez ou résiliez les doublons (plusieurs plateformes de streaming, deux forfaits mobile).": "Merge or cancel duplicates (several streaming platforms, two mobile plans).",
    "Les offres duo/famille reviennent souvent moins cher que des abonnements individuels.": "Duo/family plans often cost less than individual subscriptions.",
    "Utilisez un comparateur d'offres d'énergie une fois par an, la concurrence a baissé les prix sur certains contrats.": "Use an energy offer comparison tool once a year — competition has lowered prices on some contracts.",
    "Les éco-gestes simples (température, veille des appareils) représentent 10 à 15 % d'économie sans investissement.": "Simple eco-habits (temperature, standby appliances) can save 10 to 15% with no investment.",
    "Une mensualisation lissée évite les pics de facture en hiver et facilite le pilotage du budget.": "Spreading payments monthly avoids winter bill spikes and makes budgeting easier.",
    "Faites un comparatif tous les 1 à 2 ans : la loi Hamon permet de résilier à tout moment après un an.": "Compare offers every 1 to 2 years: the Hamon law lets you cancel at any time after one year.",
    "Vérifiez les doublons de garanties entre vos contrats (carte bancaire, mutuelle, assurance habitation).": "Check for overlapping cover between your policies (bank card, health insurance, home insurance).",
    "Ajustez le niveau de mutuelle à vos besoins réels plutôt qu'à une offre standard trop complète.": "Match your health insurance level to your real needs rather than to an overly comprehensive standard offer.",
    "Priorisez le remboursement du crédit au taux le plus élevé en premier.": "Prioritise repaying the highest-rate loan first.",
    "Un rachat ou regroupement de crédits peut réduire vos mensualités si vous cumulez plusieurs emprunts.": "Refinancing or consolidating loans can lower your monthly payments if you have several.",
    "Évitez tout nouveau crédit à la consommation tant que ce poste dépasse le repère recommandé.": "Avoid any new consumer credit as long as this category is above the recommended benchmark.",
    "Fixez une enveloppe fixe pour ce poste et suivez-la chaque semaine plutôt qu'en fin de mois.": "Set a fixed envelope for this category and check it every week rather than at month-end.",
    "Séparez un petit compte \"plaisir\" du reste pour éviter que les imprévus grignotent l'épargne.": "Keep a small “fun” account separate from the rest so surprises don't eat into your savings.",
    "Les dépenses diverses sont souvent sous-estimées : elles méritent un suivi aussi rigoureux que le loyer.": "Miscellaneous spending is often underestimated: it deserves tracking as rigorous as rent.",

    /* ---------- Mentions légales ---------- */
    "Mentions légales — Purple Academy": "Legal notice — Purple Academy",
    "Mentions légales de Purple Academy — informations sur l'éditeur et l'hébergeur du site.": "Purple Academy legal notice — information about the publisher and host of the site.",
    "Informations légales": "Legal information",
    "Éditeur du site": "Site publisher",
    "Le site Purple Academy (academie.marc-ernoult.fr) est édité par :": "The Purple Academy site (academie.marc-ernoult.fr) is published by:",
    "Marc Ernoult, Entreprise Individuelle": "Marc Ernoult, sole proprietorship (Entreprise Individuelle)",
    "Numéro SIRET : 518 087 184 00033": "SIRET number: 518 087 184 00033",
    "Adresse : 8 allée Pablo Picasso, 59152 Chéreng, France": "Address: 8 allée Pablo Picasso, 59152 Chéreng, France",
    "Email :": "Email:",
    "Directeur de la publication": "Publication director",
    "Hébergement": "Hosting",
    "Le site est hébergé par : Vercel France (SAS)": "The site is hosted by: Vercel France (SAS)",
    "Adresse de l'hébergeur : 102 avenue des Champs-Élysées, 75008 Paris, France": "Host address: 102 avenue des Champs-Élysées, 75008 Paris, France",
    "Propriété intellectuelle": "Intellectual property",
    "L'ensemble des contenus présents sur ce site (textes, méthode, mise en forme) est la propriété de Marc Ernoult, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite.": "All content on this site (texts, method, layout) is the property of Marc Ernoult unless otherwise stated. Any reproduction without prior authorisation is prohibited.",
    "Nature de l'activité": "Nature of the business",
    "Purple Academy propose des contenus de formation et d'éducation financière autour du pilotage budgétaire, dans le cadre d'une activité commerciale de formation. Ce site ne propose ni ne distribue de produits financiers, et ne constitue pas un conseil en investissement réglementé au sens du Code monétaire et financier.": "Purple Academy offers training and financial education content on budget management, as part of a commercial training activity. This site does not offer or distribute financial products, and does not constitute regulated investment advice within the meaning of the French Monetary and Financial Code (Code monétaire et financier).",
    "Pour toute question relative à ces mentions légales :": "For any question about this legal notice:",
    "Voir aussi la politique de confidentialité →": "See also the privacy policy →",

    /* ---------- Confidentialité ---------- */
    "Confidentialité & RGPD — Purple Academy": "Privacy & GDPR — Purple Academy",
    "Politique de confidentialité et RGPD de Purple Academy — quelles données sont collectées, pourquoi, et vos droits.": "Purple Academy privacy and GDPR policy — what data is collected, why, and your rights.",
    "RGPD": "GDPR",
    "Confidentialité & protection des données": "Privacy & data protection",
    "⚠️ Contenu à finaliser :": "⚠️ Content to be finalised:",
    "l'adresse de l'éditeur (responsable de traitement) doit être complétée dans les mentions légales pour que cette politique soit pleinement conforme. Le reste ci-dessous décrit précisément ce que le site fait réellement.": "the publisher's address (data controller) must be completed in the legal notice for this policy to be fully compliant. The rest below describes precisely what the site actually does.",
    "Responsable de traitement": "Data controller",
    "Marc Ernoult, éditeur du site Purple Academy, est responsable du traitement des données décrites ci-dessous. Contact :": "Marc Ernoult, publisher of the Purple Academy site, is the controller of the data described below. Contact:",
    "Quelles données sont collectées, et pourquoi": "What data is collected, and why",
    "Ce site collecte des données uniquement lorsque vous remplissez volontairement l'un des deux formulaires suivants :": "This site only collects data when you voluntarily fill in one of the following two forms:",
    "Formulaire \"Recevoir le guide\"": "“Get the guide” form",
    ": prénom et adresse email, pour vous envoyer le guide d'auto-diagnostic budgétaire.": ": first name and email address, to send you the budget self-assessment guide.",
    "Formulaire de contact": "Contact form",
    ": nom, email et message, pour répondre à votre question.": ": name, email and message, to reply to your question.",
    "Aucune donnée n'est collectée par ailleurs : pas de compte utilisateur, pas de profilage, pas de revente de données à des tiers.": "No other data is collected: no user accounts, no profiling, no resale of data to third parties.",
    "Où sont hébergées vos données": "Where your data is hosted",
    "Les données envoyées via ces formulaires sont stockées dans une base de données sécurisée fournie par Supabase (hébergement en Europe, région Irlande), accessible uniquement par l'éditeur du site. Le site est configuré pour n'autoriser que l'envoi de nouvelles données depuis le formulaire — aucune lecture ni modification n'est possible depuis le site public.": "Data sent via these forms is stored in a secure database provided by Supabase (hosted in Europe, Ireland region), accessible only by the site publisher. The site is configured to only allow new data to be submitted from the form — no reading or modification is possible from the public site.",
    "Durée de conservation": "Retention period",
    "Les données sont conservées le temps nécessaire au traitement de votre demande (envoi du guide, réponse à votre message), et au maximum 3 ans à compter du dernier contact, sauf obligation légale contraire.": "Data is kept for as long as needed to process your request (sending the guide, replying to your message), and for a maximum of 3 years from the last contact, unless otherwise required by law.",
    "Cookies et mesure d'audience": "Cookies and audience measurement",
    "Ce site n'utilise actuellement aucun cookie de suivi ni d'outil d'analyse d'audience. Il charge les polices de caractères DM Sans depuis Google Fonts, ce qui peut entraîner un appel technique vers les serveurs de Google lors du chargement de la page. [Si un outil d'analyse (Google Analytics, Plausible…) est ajouté ultérieurement, cette section devra être mise à jour et un bandeau de consentement ajouté.]": "This site currently uses no tracking cookies or audience analytics tools. It loads the DM Sans typeface from Google Fonts, which may trigger a technical request to Google's servers when the page loads. [If an analytics tool (Google Analytics, Plausible…) is added later, this section will need to be updated and a consent banner added.]",
    "Vos droits": "Your rights",
    "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données, ainsi que d'un droit d'opposition. Pour exercer ces droits, écrivez à": "In accordance with the General Data Protection Regulation (GDPR), you have the right to access, rectify, erase and port your data, as well as the right to object. To exercise these rights, write to",
    ". Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).": ". You may also lodge a complaint with the CNIL (cnil.fr).",
    "Sécurité": "Security",
    "Les échanges avec le site sont chiffrés (HTTPS). La base de données est protégée par des règles d'accès strictes (row-level security) : seule l'insertion de nouvelles données est autorisée depuis le site, jamais leur lecture.": "Communication with the site is encrypted (HTTPS). The database is protected by strict access rules (row-level security): only the insertion of new data is allowed from the site, never reading it.",
    "← Voir les mentions légales": "← See the legal notice"
  };

  var lang = 'fr';
  try {
    var stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'fr' || stored === 'en') lang = stored;
  } catch (e) { /* stockage indisponible : on reste en français */ }

  var listeners = [];
  var textRecords = new WeakMap(); // nœud texte -> { orig, set }
  var attrRecords = new WeakMap(); // élément -> { attr: { orig, set } }

  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };
  var ATTR_SELECTOR = '[placeholder],[aria-label],[alt],[title],meta[name="description"]';
  var ATTR_NAMES = ['placeholder', 'aria-label', 'alt', 'title', 'content'];

  function norm(s) { return s.replace(/[\s  ]+/g, ' ').trim(); }

  // Texte dynamique : t("Dépenses : {v}", { v: "1 200 €" })
  function t(key, vars) {
    var out = (lang === 'en' && DICT[key]) || key;
    if (vars) {
      Object.keys(vars).forEach(function (k) { out = out.split('{' + k + '}').join(vars[k]); });
    }
    return out;
  }

  // Montant en euros au format de la langue
  function money(n, decimals) {
    var d = decimals || 0;
    if (lang === 'en') {
      var abs = Math.abs(n).toLocaleString('en-GB', { minimumFractionDigits: d, maximumFractionDigits: d });
      return (n < 0 ? '-' : '') + '€' + abs;
    }
    return n.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d }) + ' €';
  }

  function skipped(node) {
    var el = node.nodeType === 1 ? node : node.parentElement;
    for (; el; el = el.parentElement) {
      if (SKIP_TAGS[el.tagName] || el.hasAttribute('data-i18n-skip')) return true;
    }
    return false;
  }

  function translate(orig) {
    var en = DICT[norm(orig)];
    if (!en) return null;
    if (lang !== 'en') return orig;
    var lead = /^[:;,.!?]/.test(en) ? '' : orig.match(/^\s*/)[0];
    return lead + en + orig.match(/\s*$/)[0];
  }

  function applyText(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      if (skipped(node)) return;
      var rec = textRecords.get(node);
      var orig = rec && node.nodeValue === rec.set ? rec.orig : node.nodeValue;
      var next = translate(orig);
      if (next === null) return;
      textRecords.set(node, { orig: orig, set: next });
      if (node.nodeValue !== next) node.nodeValue = next;
    });
  }

  function applyAttrs(root) {
    var els = Array.prototype.slice.call(root.querySelectorAll(ATTR_SELECTOR));
    if (root.matches && root.matches(ATTR_SELECTOR)) els.push(root);
    els.forEach(function (el) {
      if (skipped(el)) return;
      var recs = attrRecords.get(el) || {};
      ATTR_NAMES.forEach(function (name) {
        if (name === 'content' && el.tagName !== 'META') return;
        if (!el.hasAttribute(name)) return;
        var rec = recs[name];
        var current = el.getAttribute(name);
        var orig = rec && current === rec.set ? rec.orig : current;
        var next = translate(orig);
        if (next === null) return;
        recs[name] = { orig: orig, set: next };
        if (current !== next) el.setAttribute(name, next);
      });
      attrRecords.set(el, recs);
    });
  }

  function apply(root) {
    root = root || document.documentElement;
    applyText(root);
    applyAttrs(root);
  }

  function syncToggles() {
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
      var fr = btn.querySelector('[data-lang="fr"]');
      var en = btn.querySelector('[data-lang="en"]');
      if (fr) fr.classList.toggle('on', lang === 'fr');
      if (en) en.classList.toggle('on', lang === 'en');
    });
  }

  function setLang(next) {
    if (next !== 'fr' && next !== 'en') return;
    lang = next;
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignoré */ }
    document.documentElement.lang = lang;
    apply();
    syncToggles();
    listeners.forEach(function (fn) { fn(lang); });
  }

  document.documentElement.lang = lang;

  window.PA = {
    get lang() { return lang; },
    t: t,
    money: money,
    apply: apply,
    setLang: setLang,
    onChange: function (fn) { listeners.push(fn); }
  };

  function init() {
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(lang === 'fr' ? 'en' : 'fr'); });
    });
    apply();
    syncToggles();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
