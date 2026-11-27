# INEO Website

Prototype of the bilingual portal for the **Instituto Nacional de Eletrônica Orgânica e Sustentável** (INEO).

## Principles

- **White-first visual identity:** generous white space, dark blue hierarchy, and blue/green accents matching the official INEO logo.
- **Science starts on the homepage:** three interactive scientific explanations, with a motion control and support for reduced-motion preferences.
- **Bilingual by design:** Portuguese and English share the same content structure and URL. The chosen language is saved locally.
- **Renewed research programme:** four strategic application areas (energy, health, agriculture and sustainable electronics), cross-cutting modelling/AI, seven geographic hubs and an external link to the earlier archive.
- **OpenAlex publication discovery:** a daily refreshed catalogue of articles and reviews by an initial, user-supplied 16-researcher ORCID cohort; automated candidates are clearly distinct from verified INEO project output.
- **Easy team maintenance:** no frameworks, package installation, external backend or build step required for local development.
- **Preserved institutional memory:** a bilingual history page with archival text, interactive explanations and references, plus a five-photo locally hosted gallery from the previous site.
- **Annual meeting:** top navigation and a dedicated landing page linking to the 2026 Workshop proceedings on Even3; this is not a registration link.

## Run locally

In this directory:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. A local HTTP server is recommended because publications are fetched from a JSON file.

## GitHub Pages

This repository includes `.github/workflows/pages.yml`, which prepares and publishes the static site when changes are pushed to the `main` branch, when manually dispatched, and on a daily schedule (07:25 UTC, 04:25 São Paulo).

On GitHub, open **Settings → Pages → Build and deployment → Source → GitHub Actions**.

GitHub Pages availability for private repositories depends on the GitHub plan and repository settings. Keep the repository private during development if desired, and verify eligibility before enabling public publication.

The public project URL is <https://serfiuslab.github.io/ineo-website/>. Deployment is verified through the GitHub Actions workflow.

## Additional pages

- `historia.html`: historical account of organic electronics and the INEO network. The Portuguese and English paragraphs live in `history.js`, together with an interactive timeline and conceptual conducting-polymer illustration.
- `galeria.html`: photographic archive with five locally hosted web-resolution captures of the public photo carousel on the earlier Google Site. `gallery.js` stores the local paths, contextual bilingual captions and lightbox interactions. Files live in `assets/gallery/`. They are preservation copies from the public site, **not original camera files**; replace them with higher-resolution approved originals when received, preserving source acknowledgement. Do not guess personal names, event dates or locations absent visible evidence.
- `encontro.html`: **Encontro INEO Anual** landing page linking to the [INEO Workshop 2026 proceedings on Even3](https://www.even3.com.br/anais/workshop-do-ineo-2026/). Proceedings are not the same as future event registration; add a separate registration CTA only when officially confirmed.
- `subpages.css`: styling for these editorial pages, with the shared header and logo handled by `styles.css`.

The original historical text includes membership counts and references to the period ending in 2023. It is clearly marked as archival, not current. Bibliographic references are transcribed from the earlier website and may need normalization. The current institutional name is *Instituto Nacional de Eletrônica Orgânica e Sustentável*.

The header uses the original INEO logo asset without modifying the PNG. The crop and scale can be adjusted in the `.brand-crop` rules of `styles.css`; do not alter the original logo or clip its subtitle.

## OpenAlex automation and publication discovery

Filipe supplied 16 researcher names, institutional abbreviations and ORCIDs for a first search cohort. This is **not an official, complete INEO membership roster**. They are maintained in `content/researchers.json`. To add someone, append a `name`, `institution` and valid `orcid` entry, then run the checks below.

The GitHub Actions workflow runs `scripts/sync-openalex.mjs` **every day**, on manual dispatch and on pushes to `main`. At build time, it looks up each ORCID in OpenAlex, retrieves the full paginated list of articles and reviews associated with that ORCID, deduplicates overlapping works by DOI (or OpenAlex work ID when no DOI exists), and writes `dist/content/openalex.json`. This file, rather than a live API request from the visitor's browser, powers the static catalogue. An API error stops deployment, preserving the previously published version; the workflow logs profile-level retrieval counts and overall totals.

OpenAlex supports basic page-based pagination up to 10,000 results. The sync refuses to truncate a researcher beyond that limit. It has retry/backoff for `429` and transient server errors, and reports any author profile that OpenAlex cannot resolve.

The build can make occasional anonymous API requests without a key. **For a sustained production workflow, create a free OpenAlex key and store it in the GitHub repository as an Actions secret named `OPENALEX_API_KEY`** (Settings → Secrets and variables → Actions → New repository secret). The key is only injected into the GitHub Actions process, never embedded in HTML, browser JavaScript or published JSON. See the [current OpenAlex authentication guide](https://help.openalex.org/api/authentication/).

The visible catalogue groups results by publication year, descending, with title search, year and researcher filters, and a Load More control. Every automated card is labeled as OpenAlex metadata, not an independently verified INEO result. A paper by a selected researcher is **not automatically INEO-funded** or a result of the renewed institute. OpenAlex metadata can contain errors and must be reviewed before being included in institutional reports.

The repository deliberately keeps the source `content/openalex.json` as an empty preview placeholder. The actual refreshed dataset is generated into `dist/` for each successful deployment, avoiding daily auto-commits or mixing unreviewed records into curated source material.

For local automated checks (which use deterministic mock OpenAlex responses rather than network access):

```bash
node scripts/test-openalex.mjs
node scripts/validate.mjs
```

## Add individually verified INEO publications

Edit `content/publications.json`. Each verified record follows this structure:

```json
{
  "schemaVersion": 1,
  "lastReviewed": "2026-11-27",
  "publications": [
    {
      "title": "Example title — replace with a verified publication",
      "authors": ["First Author", "Second Author"],
      "year": 2026,
      "journal": "Journal title",
      "topic": "Organic devices",
      "doi": "10.0000/example",
      "verified": true
    }
  ]
}
```

The example above is documentation only: the curated catalogue starts empty. A manually curated record is rendered only when `verified` is `true`, the title is present and the year is valid. These records remain separate from the automated OpenAlex candidates and take precedence when the same DOI appears in both sources.

Human review is required to determine a paper's relationship to INEO and any funding acknowledgment. The automated OpenAlex feed is displayed in an explicitly unverified researcher-output section, not entered into this reviewed register.

## Translation maintenance

All user-facing interface copy lives in `translations.pt` and `translations.en` in `app.js`. Add the same key to both languages when extending the site. Proper names and DOI metadata are not translated.

Script URLs in the four HTML entrypoints have a version query string. Change the version when releasing JavaScript changes to GitHub Pages, so browsers do not reuse an older cached translation or gallery script.

Long-form historical narratives are stored in matching `pt` and `en` sections inside `history.js`. Gallery archival captions likewise have PT/EN entries in `gallery.js`. Run the validation script to check page links, dictionary parity, historical sections and the five locally bundled gallery photos.

## Content status

This is a working **development prototype**, not a verified replacement of the INEO institutional record. Filipe provided the approved renewal proposal under the 2024 INCT call. Its four strategic research application areas and seven hubs inform the current descriptions. The submission's detailed personal and financial contents remain private and are not committed here. Leadership, current researcher rosters, participating-institution totals, award details and publication attribution still require editorial confirmation. Prior research-group output is not counted as newly funded INEO publications. Historical links are retained during migration.

Original INEO website: <https://sites.google.com/unesp.br/ineo2020/in%C3%ADcio>

## Accessibility

The project includes semantic landmarks, keyboard-operated tabs, visible focus, bilingual labels, responsive layout, live text updates, a skip link and a motion pause button. SVG scientific figures are explicitly marked as schematic and not experimental results.

