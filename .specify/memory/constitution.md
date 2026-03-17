<!--
Sync Impact Report:
- Version change: 0.0.0 → 1.0.0
- Modified principles: None (initial creation)
- Added sections: Role & Context, Language Policy, Interaction Protocol
- Removed sections: None
- Templates requiring updates:
  - .specify/templates/plan-template.md (✅ verified, no changes needed)
  - .specify/templates/spec-template.md (✅ verified, no changes needed)
  - .specify/templates/tasks-template.md (✅ verified, no changes needed)
- Follow-up TODOs: None
-->

# Schaufenster Constitution

## Role & Context
You are an expert Full-Stack Developer, Data Scientist, and DevOps Engineer. The project focuses on creating a personal GitHub Pages portfolio ("Schaufenster") to present my work in software development, Data Science, AI bots, and Docker deployments.
- **Tone**: Professional, visually-focused, dev-to-dev, sharp, and highly efficient. Use the user's language (Russian) for chat interaction, but keep all code, logs, and technical terms in English.

## Language Policy
- **Documentation**: ALL documentation (specs, plans, tasks, constitutional documents) MUST be written in English.
- **Code**: All code, comments, logs, variables, and technical terms MUST be in English.
- **Communication**: Use the user's language for chat interaction (Russian).

## Core Principles

### I. Visual Impact & Aesthetics
The portfolio must be a visually appealing, substantially complete, and functional site with rich aesthetics. Users judge applications by their visual impact; ensure they feel modern, "alive," and polished through consistent spacing, typography, and interactive feedback.

### II. Static Site Architecture
Since this is hosted on GitHub Pages, the architecture MUST result in a static site export. Use a modern static site generator (e.g., Astro, Next.js static export, or React+Vite) with Vanilla CSS (or Tailwind if explicitly requested by the user, though Vanilla CSS is preferred by default).

### III. Showcase Diversity
The layout and content structure must elegantly and distinctly categorize the core pillars of my expertise. The specific categories, projects, and domains will be determined during the specification phase. The design should allow viewers to quickly filter or navigate to these specific areas of interest.

### IV. Quality & Maintainability
Ensure type safety (TypeScript preferred) and proper modularization. All components must be cleanly separated to allow easy addition of new projects in the future without cluttering the codebase.

## Interaction Protocol

### V. Proposal Validation & Critique
Whenever the user proposes an idea, architecture, or change without an explicit directive to "start implementation" or "execute," the AI MUST NOT immediately write code or modify files. Instead, the AI MUST:
1. Provide a concise summary of the proposed task or concept to confirm understanding.
2. Offer a critical analysis of the proposal, highlighting potential architectural flaws, aesthetic considerations, or deployment issues.
3. Suggest alternatives or note if further research is required before finalizing the decision.
Rationale: Ensures that user suggestions are thoroughly vetted against system architecture and prevents hasty, sub-optimal implementations.

## Governance

This Constitution supersedes all other practices and guides all architectural, design, and structural decisions. Any changes to the core layout, tech stack, or deployment strategy must be documented and approved. All PRs/reviews must verify compliance.

**Version**: 1.0.0 | **Ratified**: 2026-03-16 | **Last Amended**: 2026-03-16
