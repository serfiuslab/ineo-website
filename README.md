# INEO Website

Prototype of the bilingual portal for the **Instituto Nacional de Eletrônica Orgânica e Sustentável** (INEO).

## Principles

- **White-first visual identity:** generous white space, dark blue hierarchy, and blue/green accents matching the official INEO logo.
- **Science starts on the homepage:** three interactive scientific explanations, with a motion control and support for reduced-motion preferences.
- **Bilingual by design:** Portuguese and English share the same content structure and URL. The chosen language is saved locally.
- **Renewed research programme:** four strategic application areas (energy, health, agriculture and sustainable electronics), cross-cutting modelling/AI, seven geographic hubs and an external link to the earlier archive.
- **Verified scholarly records:** an empty, ready-to-use catalogue accepts manually validated publications. We do not infer funding or network membership from a DOI alone.
- **Easy team maintenance:** no frameworks, package installation, external backend or build step required for local development.
- **Preserved institutional memory:** a bilingual history page with archival text, interactive explanations and references, plus a six-photo gallery from the previous site.
- **Annual meeting:** top navigation and a dedicated landing page, ready for the verified Even3 link Filipe will provide.

## Run locally

In this directory:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. A local HTTP server is recommended because publications are fetched from a JSON file.

## GitHub Pages

This repository includes `.github/workflows/pages.yml`, which prepares and publishes the static site when changes are pushed to the `main` branch.

On GitHub, open **Settings → Pages → Build and deployment → Source → GitHub Actions**.

GitHub Pages availability for private repositories depends on the GitHub plan and repository settings. Keep the repository private during development if desired, and verify eligibility before enabling public publication.

The public project URL is <https://serfiuslab.github.io/ineo-website/>. Deployment is verified through the GitHub Actions workflow.

## Additional pages

- `historia.html`: historical account of organic electronics and the INEO network. The Portuguese and English paragraphs live in `history.js`, together with an interactive timeline and conceptual conducting-polymer illustration.
- `galeria.html`: photographic archive with six carousel images extracted from the previous public Google Site. `gallery.js` stores the source image URLs and the lightbox interactions. These images are externally hosted until the institute supplies approved original files; keep their source acknowledgement and do not invent individual captions or dates.
- `encontro.html`: temporary landing page for **Encontro INEO Anual**. Once Filipe supplies the confirmed Even3 URL, update the visible link or destination without guessing an edition, date or registration information.
- `subpages.css`: styling for these editorial pages, with the shared header and logo handled by `styles.css`.

The original historical text includes membership counts and references to the period ending in 2023. It is clearly marked as archival, not current. Bibliographic references are transcribed from the earlier website and may need normalization. The current institutional name is *Instituto Nacional de Eletrônica Orgânica e Sustentável*.

The header uses the original INEO logo asset without modifying the PNG. The crop and scale can be adjusted in the `.brand-crop` rules of `styles.css`; do not alter the original logo or clip its subtitle.

## Add publications

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

The example above is documentation only: the actual catalogue starts empty. A record is rendered only when `verified` is `true`, the title is present and the year is valid.

Potential future sources for candidate records: OpenAlex, ORCID and Crossref. Their metadata may help create a *review queue*, but human review is required to determine a paper's relationship to INEO and any funding acknowledgment. Do not auto-publish unreviewed candidates.

## Translation maintenance

All user-facing interface copy lives in `translations.pt` and `translations.en` in `app.js`. Add the same key to both languages when extending the site. Proper names and DOI metadata are not translated.

Long-form historical narratives are stored in matching `pt` and `en` sections inside `history.js`. Gallery archival captions likewise have PT/EN entries in `gallery.js`. Run the validation script to check page links, dictionary parity, historical sections and the six gallery sources.

## Content status

This is a working **development prototype**, not a verified replacement of the INEO institutional record. Filipe provided the approved renewal proposal under the 2024 INCT call. Its four strategic research application areas and seven hubs inform the current descriptions. The submission's detailed personal and financial contents remain private and are not committed here. Leadership, current researcher rosters, participating-institution totals, award details and publication attribution still require editorial confirmation. Prior research-group output is not counted as newly funded INEO publications. Historical links are retained during migration.

Original INEO website: <https://sites.google.com/unesp.br/ineo2020/in%C3%ADcio>

## Accessibility

The project includes semantic landmarks, keyboard-operated tabs, visible focus, bilingual labels, responsive layout, live text updates, a skip link and a motion pause button. SVG scientific figures are explicitly marked as schematic and not experimental results.

