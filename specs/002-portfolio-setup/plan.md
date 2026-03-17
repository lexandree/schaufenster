# Implementation Plan: Schaufenster Portfolio

**Branch**: `002-portfolio-setup` | **Date**: 2026-03-16 | **Spec**: [Link to Spec](spec.md)
**Input**: Feature specification from `specs/002-portfolio-setup/spec.md`

## Summary

Create a highly minimalist, visually appealing, and professional portfolio website ("Schaufenster") using an Astro + Tailwind CSS template. The site will be a static export hosted on GitHub Pages, featuring a concise hero section and a detailed projects section. The projects section will highlight four key projects (Graph RAG, Roentgen for Docs, tv-audience-forecaster, VAE Marketing) focusing on their architecture, methodologies, and metrics. Content will be driven by Markdown (MDX) for easy updates.

## Technical Context

**Language/Version**: TypeScript / Astro 4.x
**Primary Dependencies**: Astro, Tailwind CSS, Preact/React (if needed by template)
**Storage**: File system (Markdown/MDX Content Collections)
**Testing**: Astro built-in checks, Lighthouse for performance
**Target Platform**: GitHub Pages (Static Site)
**Project Type**: Static Website
**Performance Goals**: 95+ Lighthouse score
**Constraints**: Must be statically exported (`output: 'static'`)
**Scale/Scope**: Single developer portfolio, a few pages/projects

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Visual Impact & Aesthetics**: PASS. We are using a pre-existing, highly-rated minimalist template to ensure a polished look without massive custom CSS effort.
- **II. Static Site Architecture**: PASS. Astro is configured for static export, perfectly suited for GitHub Pages.
- **III. Showcase Diversity**: PASS. Project cards will utilize `tags` to clearly delineate disciplines (ML System, Data Science, etc.).
- **IV. Quality & Maintainability**: PASS. Astro's Content Collections provide type safety (via Zod) for frontmatter, ensuring maintainability.
- **V. Proposal Validation & Critique**: PASS. This plan represents the validation and architectural synthesis before coding.

## Project Structure

### Documentation (this feature)

```text
specs/002-portfolio-setup/
├── plan.md              # This file
├── research.md          # Technology and template selection
├── data-model.md        # Frontmatter schema for projects
├── quickstart.md        # How to run and add projects
├── contracts/           # Empty (no external APIs exposed)
└── checklists/          
    └── requirements.md  # Spec validation checklist
```

### Source Code (repository root)

```text
# Single project (Astro structure)
src/
├── components/      # UI components (Header, ProjectCard, etc.)
├── content/         
│   ├── config.ts    # Content collections schema
│   └── projects/    # Markdown files for projects
├── layouts/         # Base page layouts
└── pages/           # Route entry points (index.astro)
public/              # Static assets (images, favicons)
astro.config.mjs     # Astro configuration
tailwind.config.mjs  # Tailwind configuration
package.json         # Dependencies
```

**Structure Decision**: Standard Astro single-project layout using Content Collections for project data.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

*(No violations. The architecture is straightforward and aligns perfectly with the constitution.)*