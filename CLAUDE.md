# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page site for a French financial-education / budgeting-coaching business (independent consultant). Full content/structure spec: @Brief.md

## Stack

- Plain HTML/CSS/JS in `index.html` — no build step, no package manager, no framework.
- Deploy target: Netlify or Vercel (static hosting).
- Staying static intentionally: forms/DB/admin features mentioned in the brief are not yet implemented and should not assume a custom backend unless the user says the stack decision has changed.

## Brand

- Primary color: violet `#7C3AED` (CTA buttons, links, accents).
- Fonts: `DM Serif Display` (headings/serif), `DM Sans` (body), loaded via Google Fonts.
- Design reference points are listed in @Brief.md.

## Skill

`/site` (`.claude/skills/site/SKILL.md`) scaffolds a full site from a description: picks art direction via the `ui-ux-pro-max` skill, sources components from the 21st.dev MCP, and does a self-review pass (contrast, spacing, typography) before handing back.
