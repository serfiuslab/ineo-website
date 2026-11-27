# INEO Website: Working Instructions for Coding Agents

Read `PROJECT_CONTEXT.md` completely before making changes. Then read `README.md` and inspect the existing implementation. These files preserve user decisions from conversations that may not be visible to a new task.

## Invariants

- Keep a **predominantly white background** and the supplied official INEO logo unchanged.
- Preserve the site's independent INEO identity. `serfiuslab` is the GitHub account name, not the site's public research-group brand.
- Keep **Portuguese and English** in feature parity. Add and revise translation keys in both dictionaries; translate figure labels and accessible text as well as visible content.
- Prioritize scientific usefulness, interaction, accessibility and mobile UX. Preserve the institutional navigation structure unless asked to change it.
- Distinguish schematic scientific illustrations from actual data and do not claim that all organic materials are sustainable.
- Do not invent current institutional leaders, researchers, award numbers, contacts, research output, news or funding attribution.
- Treat the old Google Sites pages as historical reference, not automatically current content.
- Keep GitHub Pages as the selected hosting platform; do not silently deploy to other services.
- Only publish human-verified publication metadata. Candidate retrieval is not proof that a paper belongs to INEO.

## Development

- The current implementation is plain HTML, CSS and JavaScript, with no build dependencies. Preserve simplicity unless there is an agreed reason to change architecture.
- Keep source comments and technical documentation in English. Speak with Filipe in Brazilian Portuguese.
- Maintain keyboard controls, semantic markup, readable contrast, visible focus and reduced-motion handling.
- Run `node --check app.js && node scripts/validate.mjs` after edits. Report which checks were actually run and which browser tests remain pending.
- Update `PROJECT_CONTEXT.md` for new lasting decisions and `README.md` for new maintenance procedures.
- Follow the user's collaborative preference: work in small verified steps, discussing significant UI/UX choices rather than making unrequested sweeping changes.
