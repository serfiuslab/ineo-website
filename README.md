# INEO Website

Prototype of the bilingual portal for the **Instituto Nacional de Eletrônica Orgânica e Sustentável** (INEO).

## Principles

- **White-first visual identity:** generous white space, dark blue hierarchy, and blue/green accents matching the official INEO logo.
- **Science starts on the homepage:** three interactive scientific explanations, with a motion control and support for reduced-motion preferences.
- **Bilingual by design:** Portuguese and English share the same content structure and URL. The chosen language is saved locally.
- **Institutional continuity:** historical INEO research areas, seven geographic hubs, events, training, and an external link to the earlier archive.
- **Verified scholarly records:** an empty, ready-to-use catalogue accepts manually validated publications. We do not infer funding or network membership from a DOI alone.
- **Easy team maintenance:** no frameworks, package installation, external backend or build step required for local development.

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

When deployed from `serfiuslab/ineo-website`, the expected project URL is `https://serfiuslab.github.io/ineo-website/` (provided Pages is enabled and deployment succeeds).

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

## Content status

This is a working **development prototype**, not a verified replacement of the INEO institutional record. The three research areas and seven hubs come from the prior institutional website; the current composition of the steering committee and the network has not yet been validated. Historical links are retained during migration.

Original INEO website: <https://sites.google.com/unesp.br/ineo2020/in%C3%ADcio>

## Accessibility

The project includes semantic landmarks, keyboard-operated tabs, visible focus, bilingual labels, responsive layout, live text updates, a skip link and a motion pause button. SVG scientific figures are explicitly marked as schematic and not experimental results.

