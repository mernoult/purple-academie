---
name: Purple Academy
description: Compagnon budgétaire chaleureux et structuré — fond crème, cartes arrondies à ombres douces, violet en aplats généreux.
colors:
  violet:
    value: "#7C3AED"
  violet-ink:
    value: "#4C1D95"
  violet-soft:
    value: "#F1E9FE"
  violet-soft-2:
    value: "#E9DCFC"
  cream:
    value: "#FBF7F1"
  cream-2:
    value: "#F3ECE1"
  white:
    value: "#FFFFFF"
  ink:
    value: "#2A2438"
  ink-2:
    value: "#554F68"
  muted:
    value: "#8B849A"
  error:
    value: "#B91C1C"
typography:
  display:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 5.6vw, 4.4rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  title:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "10px"
  md: "14px"
  lg: "20px"
  xl: "28px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  2xl: "100px"
components:
  button-primary:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "15px 26px"
  button-primary-hover:
    backgroundColor: "{colors.violet-ink}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "15px 26px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "32px"
---

# Design System: Purple Academy

## Overview

**Creative North Star: "Le Compagnon Budgétaire"**

Purple Academy a basculé d'un registre éditorial froid (cahier de comptes, filets durs, angles droits) vers un registre chaleureux et structuré : un compagnon financier qui rassure avant d'impressionner. La méthode reste rigoureuse — vrais chiffres, étapes numérotées, livrables concrets — mais elle s'exprime désormais à travers des cartes blanches arrondies, des ombres douces et un fond crème, jamais à travers des lignes dures ou des surfaces froides.

Une seule famille typographique (DM Sans) porte tout le système, du display massif aux petits labels, avec la hiérarchie construite par le poids et la taille plutôt que par un changement de police. Le violet de marque reste la seule couleur d'accent — aucune deuxième teinte n'a été introduite : la chaleur vient de la forme (arrondi, ombre, fond crème), pas d'une palette élargie.

**Anti-références confirmées** : pas de lignes dures ni d'angles droits systématiques (direction précédente), pas de deuxième couleur d'accent, pas de police serif ou mono pour l'identité visuelle.

**Key Characteristics:**
- Cartes blanches arrondies (10–28px selon le rôle) sur fond crème, jamais de filets structurels durs
- Ombres douces teintées de violet (offset + flou), jamais d'ombre à angle vif ni de bordure latérale colorée
- Une seule couleur d'accent : le violet, en aplat généreux (CTA, panneau Méthode) ou en teinte douce `--violet-soft` pour les surfaces secondaires
- Typographie 100 % DM Sans, hiérarchie par le poids (400 → 800)
- Un warm highlight (fond violet doux + texte violet-ink) remplace l'italique pour l'emphase dans les titres

## Colors

Palette chaude à un seul accent : crème/blanc pour les surfaces, violet pour l'action et l'emphase, rouge réservé aux erreurs de formulaire.

### Primary
- **Violet** (`#7C3AED`) : CTA pleins, panneau Méthode en aplat, icônes de marque.
- **Violet Encre** (`#4C1D95`) : état hover/pressed des CTA, texte d'emphase sur fond clair, liens actifs.

### Neutral
- **Crème** (`#FBF7F1`) : fond de page par défaut — chaleureux, jamais blanc pur.
- **Crème Foncé** (`#F3ECE1`) : fond des sections alternées (Témoignages) et bordures discrètes.
- **Blanc** (`#FFFFFF`) : fond des cartes, contraste doux avec le crème pour les faire flotter.
- **Encre** (`#2A2438`) : texte principal, fond du footer — noir teinté violet, jamais un noir pur froid.
- **Encre Secondaire** (`#554F68`) : texte de corps (lead, body).
- **Muted** (`#8B849A`) : labels secondaires, légendes.

### Semantic
- **Violet Doux** (`#F1E9FE`) : fond des surfaces secondaires (highlight de mot, chips, callouts, panneau stat) — la seule "deuxième teinte", dérivée du violet, pas une couleur étrangère.
- **Erreur** (`#B91C1C`) : état d'erreur des formulaires uniquement.

### Named Rules
**La Règle de la Teinte Unique.** Toute couleur autre que le crème/blanc/encre est une déclinaison du violet (aplat, encre foncée, ou teinte douce). Aucune deuxième couleur d'accent n'est introduite, conformément au choix explicite de l'utilisateur.

## Typography

**Display Font:** DM Sans (avec repli system-ui, sans-serif) — unique famille du système
**Character:** Une seule police, tout le contraste vient du poids (400 à 800) et de la taille — enregistre "app moderne", jamais mélangé à un serif ou un mono pour l'identité.

### Hierarchy
- **Display / H1** (800, `clamp(2.3rem, 5.6vw, 4.4rem)`, line-height 1.04) : titre du hero.
- **Title / H2** (800, `clamp(1.9rem, 3.8vw, 2.9rem)`, line-height 1.08) : titres de section.
- **H3** (700, 1.15–1.5rem) : titres de carte.
- **Lead** (400, 1.2rem, line-height 1.5, max 46ch) : chapô sous le H1.
- **Body** (400, 1rem, line-height 1.65, max 62ch) : texte courant.
- **Label** (600, .8–.95rem) : labels de champ, tags — jamais en majuscules systématiques.
- **Amount** (700, tabular-nums) : montants, alignés en chiffres tabulaires même en DM Sans.

### Named Rules
**La Règle de la Famille Unique.** DM Sans porte tout le système. Introduire une deuxième police (serif ou mono) romprait la promesse "100 % sans-serif moderne" validée avec l'utilisateur.

## Layout

Conteneur `.wrap` en `max-width: 1200px`, `padding: 0 40px` (20px mobile, breakpoint 680px). Sections espacées par du padding généreux (`100px` desktop, `80px` en variante "tight") plutôt que par des filets — la respiration vient de l'espace, pas de la ligne. Composition asymétrique conservée (hero 1.2fr/1fr, guide 1.15fr/1fr, contact 1fr/1.15fr) ; grilles à 2 colonnes → 1 colonne sous 900px.

## Elevation & Depth

Système à ombres douces et systématiques : chaque carte (`.axis`, `.voice`, `.form-box`, `.ledger`, `.faq details`) porte une ombre avec offset et flou (`--shadow-sm` à `--shadow-lg`), jamais un flou nul ni une ombre dure. Le violet teinte légèrement les ombres des éléments les plus importants (CTA, carte ledger) pour renforcer l'identité sans ajouter de couleur.

### Named Rules
**La Règle de l'Ombre Douce.** Toute ombre porte un offset et un flou perceptible. Une ombre à flou nul (`0 0 0 Npx`, style néobrutaliste) est bannie — elle appartenait à la direction précédente, abandonnée par ce redesign.

## Shapes

Système arrondi modéré : rayons de 10px (boutons, inputs, petits badges) à 28px (grandes cartes, panneau Méthode, footer). Aucun angle droit dur ; les seules formes carrées sont les petits badges numérotés (axis-num, step-dot), volontairement à coins arrondis eux aussi (10-14px), jamais 0.

### Named Rules
**La Règle de l'Arrondi Modéré.** Tous les rayons restent dans la fourchette 10–28px selon l'échelle de l'élément — jamais 0 (dur, abandonné), jamais au-delà de 28px ou en pilule pour un conteneur large (éviterait de sombrer dans le style "bulle" excessif).

## Components

### Buttons
- **Shape:** coins arrondis 10px, fond blanc ou violet selon le rôle, pas de bordure dure.
- **Primary (`.btn.solid`):** fond `--violet`, texte blanc, ombre douce ; hover → fond `--violet-ink` + léger soulèvement (`translateY(-2px)`) et ombre plus prononcée.
- **Secondary (`.btn`):** fond blanc, ombre légère ; hover → léger soulèvement, bordure teintée violet doux.
- **Focus:** anneau 2px `--violet`, offset 2px.

### Cartes (Offre, Témoignages, FAQ)
- **Forme:** coins arrondis 20px, fond blanc, ombre douce (`--shadow-sm`), pas de bordure visible.
- **Callout interne (`.axis-example`):** fond `--violet-soft` (pas de bordure latérale — la précédente bordure de 3px a été retirée dans ce redesign).

### Champs de formulaire (`.field`)
- **Style:** input/textarea bordés (1.5px `--cream-2`), fond crème, coins arrondis 10px — pas de style "ligne soulignée".
- **Focus:** bordure violette + fond blanc.

### Ledger (composant signature, conservé)
- **Description:** carte blanche flottante à coins très arrondis (28px) et ombre prononcée, montants en DM Sans gras tabular-nums (plus de mono). Le delta positif est une pilule violet-doux, plus de chip lime.

### Accordéon FAQ (`.faq`)
- **Style:** chaque question est une carte arrondie indépendante avec ombre douce ; le signe `+` est un badge circulaire violet-doux qui devient violet plein et pivote à l'ouverture.

### Navigation (`.masthead`)
- **Style:** logo en badge carré arrondi violet ("PA"), liens en pilules qui se teintent de violet doux au survol (pas de soulignement animé).

## Do's and Don'ts

### Do:
- **Do** garder tous les rayons entre 10 et 28px selon l'échelle de l'élément.
- **Do** utiliser des ombres avec offset + flou pour toute élévation.
- **Do** garder DM Sans comme unique famille typographique.
- **Do** limiter la couleur au violet (aplat, encre, ou teinte douce) — pas de deuxième accent.
- **Do** faire flotter les CTA au survol (`translateY` + ombre) plutôt qu'inverser durement les couleurs.

### Don't:
- **Don't** réintroduire des angles droits ou des filets structurels durs — c'est la direction abandonnée.
- **Don't** ajouter une deuxième couleur d'accent (confirmé explicitement par l'utilisateur : violet seul).
- **Don't** utiliser une police serif ou mono pour du texte visible — 100 % sans-serif.
- **Don't** utiliser une bordure latérale colorée sur une carte ou un callout (pattern "side-tab", banni).
- **Don't** fabriquer de témoignages, chiffres ou preuves sociales non confirmés (voir PRODUCT.md → Evidence on Hand).
