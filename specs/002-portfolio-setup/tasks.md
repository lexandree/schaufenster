---
description: "Task list for Schaufenster Portfolio Setup"
---

# Tasks: Schaufenster Portfolio Setup

**Input**: Design documents from `/specs/002-portfolio-setup/`
**Prerequisites**: plan.md (required), spec.md (required), data-model.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Astro project using `vinitshahdeo/portfolio` template (or similar minimalist template) in the root directory.
- [x] T002 Configure `astro.config.mjs` for static site generation (`output: 'static'`) and set `site` URL for GitHub Pages.
- [x] T003 Clean up template placeholder content in `src/pages/` and `src/content/` to prepare for custom content.
- [x] T004 Install necessary dependencies (`npm install`).

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 Create Zod schema for `Project` entity in `src/content/config.ts` based on `data-model.md`.
- [x] T006 Update existing `ProjectCard` component (or create `src/components/ProjectCard.astro`) to support tags, githubUrl, and demoUrl.
- [x] T007 Setup general layout components (Header, Footer, Main) in `src/layouts/` to align with the minimalist "engineering lab" aesthetic.

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - The 30-Second Recruiter Screen (Priority: P1) 🎯 MVP

**Goal**: Quickly communicate the candidate's value immediately via the hero section.

**Independent Test**: Can be fully tested by opening the site and verifying that the hero section clearly states "Full-Stack Developer & Data Scientist" and provides immediate, visible links to GitHub, Kaggle, HuggingFace, and Email without scrolling.

### Implementation for User Story 1

- [x] T008 [US1] Update the Hero section in `src/pages/index.astro` with the required bio ("Full-Stack Developer & Data Scientist").
- [x] T009 [US1] Add visible profile links (GitHub, Kaggle, HuggingFace, Email) to the Hero component or `src/pages/index.astro`.
- [x] T010 [US1] Apply minimal styling (Tailwind CSS) to ensure the Hero section is clean, readable, and requires no scrolling to see the links.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Deep Dive into ML Systems (Priority: P1)

**Goal**: Demonstrate engineering maturity by highlighting production-ready ML systems.

**Independent Test**: Can be tested by navigating to the "Projects" section and verifying the presence and structure of the "Roentgen for Docs" and "Graph RAG for German Laws" project cards.

### Implementation for User Story 2

- [x] T011 [P] [US2] Create MDX content file for Graph RAG at `src/content/projects/graph-rag.md` (flagship project).
- [x] T012 [P] [US2] Create MDX content file for Roentgen for Docs at `src/content/projects/roentgen-for-docs.md`.
- [x] T013 [US2] Update `src/pages/index.astro` (or a dedicated projects page) to map and display the projects collection, ensuring "featured" projects like Graph RAG are visually prioritized.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Evaluating DS Methodology (Priority: P2)

**Goal**: Review candidate's approach to research, benchmarking, and business impact.

**Independent Test**: Can be tested by verifying the content of the "tv-audience-forecaster" and "VAE Marketing Impact Analysis" cards.

### Implementation for User Story 3

- [x] T014 [P] [US3] Create MDX content file for TV Audience Forecaster at `src/content/projects/tv-audience-forecaster.md`.
- [x] T015 [P] [US3] Create MDX content file for VAE Marketing Impact Analysis at `src/content/projects/vae-marketing.md`.
- [x] T016 [US3] Ensure the project card grid layout in `src/pages/index.astro` elegantly handles the addition of these new items without breaking the minimalist aesthetic.

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and deployment.

- [x] T017 Test the site performance using Google Lighthouse to ensure a score of 95+.
- [x] T018 Create a GitHub Actions workflow file `.github/workflows/deploy.yml` for automated deployment to GitHub Pages.
- [x] T019 Update `README.md` with instructions on how to run the site locally.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - US1 (Phase 3) and US2 (Phase 4) can run in parallel.
  - US3 (Phase 5) should ideally follow US2 or run in parallel once the project list layout is stable.
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### Parallel Opportunities

- Creation of Markdown files (`src/content/projects/*.md`) in Phase 4 and Phase 5 can be done entirely in parallel.
- US1 (Hero section) and US2 (Projects structure) can be worked on concurrently by different developers.

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1 (Hero & Links)
4. **STOP and VALIDATE**: Test User Story 1 independently.

### Incremental Delivery

1. Follow MVP with Phase 4 (ML System Projects) - Test.
2. Follow with Phase 5 (DS Projects) - Test.
3. Finish with Phase 6 (Polish & Deploy).
