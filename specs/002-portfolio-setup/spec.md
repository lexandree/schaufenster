# Feature Specification: Schaufenster Portfolio Website

**Feature Branch**: `002-portfolio-setup`
**Created**: 2026-03-16
**Status**: Draft
**Input**: User description: "Create a personal portfolio website named "Schaufenster" hosted on GitHub Pages..."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - The 30-Second Recruiter Screen (Priority: P1)

As a technical recruiter or hiring manager, I want to quickly understand the candidate's core competencies within the first few seconds of opening the site, so I can determine if their profile matches our open roles.

**Why this priority**: This is the primary funnel. If the site fails to communicate the candidate's value immediately, the rest of the content will not be seen.

**Independent Test**: Can be fully tested by opening the site and verifying that the hero section clearly states "Full-Stack Developer & Data Scientist" and provides immediate, visible links to GitHub, Kaggle, HuggingFace, and Email without scrolling.

**Acceptance Scenarios**:

1. **Given** a user lands on the homepage, **When** the page loads, **Then** they see a short, impactful bio and direct links to professional profiles.
2. **Given** a user is viewing the hero section, **When** they click the GitHub/Kaggle/HuggingFace links, **Then** they are directed to the correct external profiles in a new tab.

---

### User Story 2 - Deep Dive into ML Systems (Priority: P1)

As an Engineering Manager, I want to see evidence that the candidate can build production-ready ML systems, not just Jupyter notebooks, so I can assess their engineering maturity.

**Why this priority**: Demonstrating engineering maturity (system design, deployment, security) is the key differentiator for mid-to-senior ML roles.

**Independent Test**: Can be tested by navigating to the "Projects" section and verifying the presence and structure of the "Roentgen for Docs" and "Graph RAG for German Laws" project cards.

**Acceptance Scenarios**:

1. **Given** the user is in the Projects section, **When** they view the "Roentgen for Docs" card, **Then** they see the problem statement, the architectural approach ("secure reverse SSH tunnel", "GPU backend"), and a link to the GitHub repository.
2. **Given** the user is in the Projects section, **When** they view the "Graph RAG for German Laws" card, **Then** it is visually distinguished as the flagship project and highlights "Neo4j" and "LLM Reasoning".

---

### User Story 3 - Evaluating DS Methodology (Priority: P2)

As a Lead Data Scientist, I want to review the candidate's approach to research, benchmarking, and business impact, so I can evaluate their analytical rigor.

**Why this priority**: Validates the candidate's core Data Science competencies (time series, representation learning).

**Independent Test**: Can be tested by verifying the content of the "tv-audience-forecaster" and "VAE Marketing Impact Analysis" cards.

**Acceptance Scenarios**:

1. **Given** the user is reviewing the "tv-audience-forecaster" project, **When** they read the description, **Then** they clearly see the methodologies compared (FFT, Prophet, ConvLSTM).
2. **Given** the user is reviewing the "VAE Marketing Impact Analysis" project, **When** they read the results, **Then** they see the business impact highlighted alongside the advanced ML technique (representation learning on Dunnhumby dataset).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST be a static website capable of being hosted on GitHub Pages.
- **FR-002**: The system MUST provide a single-page or simple multi-page layout.
- **FR-003**: The system MUST display a Hero section containing a short bio ("Full-Stack Developer & Data Scientist") and links to external professional profiles (GitHub, Kaggle, HuggingFace, Email).
- **FR-004**: The system MUST display a Projects section featuring at least four specific projects: Graph RAG for German Laws, Roentgen for Docs, tv-audience-forecaster, and VAE Marketing Impact Analysis.
- **FR-005**: The system MUST structure each project presentation to include: Title, Problem statement, Approach/Architecture, Results/Metrics, Tech Stack (as visual tags), and external Links (GitHub Repo, Live Demo).
- **FR-006**: The system MUST visually prioritize or highlight the "Graph RAG for German Laws" project as the flagship piece.
- **FR-007**: The system MUST use an existing, highly-rated minimalist template to ensure a professional, "engineering lab" aesthetic without excessive custom styling.
- **FR-008**: The system MUST manage its core content (like project details) using Markdown (or MDX) to facilitate easy future updates.

### Non-Functional Requirements (Aesthetics & Performance)

- **NFR-001**: The site MUST load extremely quickly, aiming for high performance scores (e.g., near 100 on Lighthouse).
- **NFR-002**: The visual design MUST be minimalist and developer-centric, prioritizing content readability over flashy animations.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The website is successfully deployed and publicly accessible via GitHub Pages.
- **SC-002**: A user can navigate from the homepage to any project description and external links in 1 click (or 0 clicks if single-page).
- **SC-003**: The site achieves a Google Lighthouse Performance score of 95 or higher on desktop.
- **SC-004**: Adding a new project to the portfolio takes less than 10 minutes of developer time by simply adding a new Markdown/MDX file, without modifying core layout code.
