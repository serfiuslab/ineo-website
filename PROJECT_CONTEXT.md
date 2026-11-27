# INEO Website: Project Context and Design Decisions

> This is the canonical handoff for future Codex sessions. Read it before making architectural, scientific, content, or visual decisions. The user and Serena developed this brief through a longer design conversation that is not necessarily available in a new coding task.

## Project identity

- **Institution:** INEO, *Instituto Nacional de Eletrônica Orgânica e Sustentável* (National Institute of Organic and Sustainable Electronics).
- **Repository:** `serfiuslab/ineo-website`, owned by the user's GitHub account. The account name is only a repository owner identifier; do not associate the old SERFIUS research group identity with the INEO website.
- **Initial developer/editor:** Prof. Dr. Filipe Camargo Dalmatti Alves Lima, collaborating with Serena (ChatGPT/Codex). Additional INEO staff may maintain the site later.
- **Official visual asset:** `assets/ineo-logo.png`, supplied by Filipe. It has blue electronic-circuit lettering, a green molecular ring and a white background. Do not redraw or change the official mark without explicit permission.
- **Existing institutional source:** <https://sites.google.com/unesp.br/ineo2020/in%C3%ADcio>. Treat it as a *historical source*, not automatically current governance or membership data.

## Decisions already made with Filipe

1. **White background is non-negotiable.** The whole visual direction is light, spacious and predominantly white, coordinating with the official logo. Use dark/electric blue, green and subtle cool grays as restrained accents. Do not propose a dark-theme redesign unless Filipe changes this requirement.
2. **A scientific portal, not a conventional brochure.** The visitor should encounter meaningful scientific interactivity on the home page. The starting idea is an elegant molecular/charge/device explainer, suitable for both specialists and curious students.
3. **UI/UX is the primary design priority.** Filipe is comfortable retaining the existing institutional information architecture. Modernize the navigation, discovery, accessibility, mobile experience and publication workflows without imposing a large structural reorganization.
4. **Bilingual Portuguese and English.** Use one codebase and an explicit PT/EN language toggle. Translate meaningful UI text, figure labels, accessible names and explanatory content. Proper names and DOIs remain unchanged.
5. **Scientific credibility matters.** Explanations should be accurate and approachable, not infantilized. Mark schematic illustrations as conceptual, distinguish models from measurements, provide context, assumptions and limitations, and explain that an organic material is not automatically environmentally sustainable.
6. **GitHub Pages is the intended hosting platform.** Keep the project deployable as static assets, through GitHub Actions where appropriate. Do not move it to another hosting provider without asking.
7. **Initially lightweight and maintainable.** Filipe is the only developer for now, but an INEO editorial team will maintain content later. Prefer understandable source files, validated data, simple editorial procedures and documented decisions over unnecessary framework complexity.

## Institutional information architecture

The previous website includes Home, History, Research Areas, Management Committee, Participating Researchers, regional Hubs, Workshops, Publications and Short Courses, with additional News, innovation initiatives and an English version.

The historical research headings are:

- Electronic devices: organic structures and nanostructured systems, OLED, OPV and OFET devices, electronic/optical properties and device performance.
- Biosensors: thin films, interfaces, physicochemical properties, sensing in real environments and data analysis.
- Molecular and device modelling: molecular interactions, electronic structure, morphology, and electronic/ionic transport.

The **seven historical hubs** are Campinas; North/Northeast/Central-West; Paraná; Rio-Minas; São Carlos; Santa Catarina; and São Paulo. Membership and leadership under the renewed INEO must be verified before publication as current facts.

## The approved renewal proposal (source provided by Filipe, November 2026)

Filipe supplied the 27-page proposal submitted under the 2024 INCT call and confirmed that the renewed INEO project was selected. The proposal is a research and institutional **plan**, not a report of achieved results. The original submission is not included in this public repository because it contains personal identifiers, individual commitments and detailed financial information.

The renewed proposal defines **four strategic application areas**, which supersede the old three-area navigation in the public research cards:

1. Renewable energy: organic photovoltaics, energy conversion and storage, lightweight/flexible batteries and supercapacitors.
2. Health: portable biosensors, wearables and biomedical diagnostics/monitoring.
3. Agriculture: environmental sensors, precision agriculture and responsible use of natural resources.
4. Sustainable electronics: printed/flexible devices, renewable materials, greener synthesis, biodegradability, reuse and recyclability studied across the device life cycle.

These four areas are supported by **cross-cutting methods**, not replaced by them: synthesis/characterization, electronic-structure and molecular/device modelling, experimental device engineering, data science/AI, and training. The proposal additionally includes neuromorphic electronics, international collaboration, scientific outreach and knowledge transfer. Do not imply that all subtopics are already operational or that all prototypes have been demonstrated.

The proposal places the headquarters at **IFSC/USP** and retains the **seven regional hubs** enumerated above. It describes a steering committee and a multi-institutional network; **do not publish a current committee roster or definitive membership counts without editorial validation**. Historical continuity refers to the previous INEO coordinated by Roberto Faria from 2009 to 2024. A named proponent appears in the source, but submitting the proposal is not by itself confirmation of the published leadership roster.

The proposal cites approximately 1,500 publications and some trained researchers as **prior output from participating groups**. These are neither publications generated by the renewed project nor individually verified INEO-funded records. Do not put them in the public site's live scholarly catalogue or a performance counter without validated provenance. Likewise, proposed targets, institutional partnerships and award dates should not be presented as completed outcomes.

Sustainability is a research objective requiring evidence across production, use and end-of-life, not a guaranteed property of organic matter. The text emphasizes green synthesis, solvent reuse, biodegradability, circularity and avoiding harmful compounds. The proposal relates especially to UN SDGs 7 (energy), 9 (innovation/infrastructure) and 12 (responsible production/consumption).

The public site was updated to reflect this four-area structure with cautious wording. The original PDF remains outside the repository and must not be uploaded or copied into public assets without explicit authorization.

Do not invent or silently carry over contact addresses, funding award numbers, leadership, updated researcher lists, bibliometric counts, funding acknowledgements, current news or conference dates.

## Intended visitor journeys

- **Curious learner:** open the white scientific homepage, manipulate or step through a schematic molecular explanation, explore OLEDs/OPVs/OFETs/biosensors, then learn how researchers investigate them.
- **Researcher or collaborator:** quickly navigate to research areas, hubs, investigators, publications and institutional contacts.
- **Student:** discover introductory scientific content, short courses, workshops and opportunities for further reading.
- **Editorial team:** add validated publication records and update text without needing extensive front-end development skills.

## Science interaction direction

The current home-page prototype has three stages: **structure, charge and device**. It combines native SVG and CSS animation, accessible tabs, a pause control and `prefers-reduced-motion`. It is a *conceptual* figure, not a claim about actual transport trajectories or measured device structures.

Later chapters may expand to conjugation and electronic levels; morphology and charge transport; OLED, organic photovoltaic and OFET operation; biosensors; and sustainability across the material life cycle. Keep teaching interactive, concise and scientifically qualified. KonoLab's educational design patterns are a useful inspiration, but the INEO site must have its own independent institutional identity.

## Publication aggregation: planned, not implemented

The objective is a living, searchable catalogue for scientific works associated with the INEO network. OpenAlex, ORCID and Crossref can supply **candidate metadata**, but an article authored by an INEO researcher is not automatically an INEO-funded publication.

The planned workflow is: retrieve candidates, deduplicate by DOI, associate authors with verified researchers, have an editor validate inclusion and attribution, then publish checked records. Never fill the public site with speculative bibliographic data or imply funding without evidence.

The prototype's `content/publications.json` is intentionally empty. Only entries with `verified: true`, a title and a valid year are displayed. Searching and filtering logic is ready for validated records. The schema is documented in `README.md`.

## Existing implementation

- `index.html`: one-page institutional portal with interactive scientific hero, institute, research, discovery, network hubs, publications, activities, and footer.
- The research section now presents the renewed project's four strategic application areas; synthesis, characterization, modelling and AI are identified as cross-cutting methods.
- `styles.css`: responsive light visual system with a predominantly white background and accessible focus states.
- `app.js`: PT/EN dictionary, scientific-stage controls, reduced-motion interaction, historic hub selector and publication catalogue rendering.
- `assets/ineo-logo.png`: official supplied logo; retain original bytes.
- `content/publications.json`: verified-publication data source, intentionally empty.
- `scripts/validate.mjs`: checks bilingual key parity, local anchors, JSON schema, logo presence, and reduced-motion support.
- `.github/workflows/pages.yml`: static deploy workflow for GitHub Pages when Pages is enabled.
- `README.md`: setup, publication schema, deployment and limitations.

Run `node --check app.js && node scripts/validate.mjs` before committing content or UI changes.

## Current limitations / next tasks

This is an **initial prototype**, not a verified public institutional launch. The public GitHub Pages URL was successfully deployed on November 27, 2026. Continue visual/mobile QA after changes; improve interactive scientific depth; confirm the renewed INEO's governing roster, network counts, institutional contacts and final award details; curate network and paper data; and obtain Filipe's design approval before treating the result as final.

## How to collaborate in future conversations

When a new Codex task starts, read `AGENTS.md`, `PROJECT_CONTEXT.md` and `README.md`, inspect the current files, and continue from the repository state. Do not require Filipe to re-explain the white-background rule, bilingual requirement, official logo or scientific-portal concept. For new major decisions, ask one focused question at a time and keep the dialogue in Brazilian Portuguese unless requested otherwise.
