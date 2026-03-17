# Research: Portfolio Setup

## Astro Template Selection

- **Decision**: Use `vinitshahdeo/portfolio` (Stellar Astro Dev Portfolio Template) or a similar minimalist Astro template (like `astro-paper` or `astro-minimal-portfolio-template`). For this implementation, we will use a highly-rated minimalist approach focusing on Markdown (MDX) content.
- **Rationale**: Astro is perfectly suited for content-driven static sites like portfolios. It ships zero JS by default, yielding perfect Lighthouse scores. Tailwind CSS allows for rapid, utility-first styling without bloat. The use of a pre-existing template aligns with the specification's requirement to focus on content over "flashy design" and avoid reinventing the wheel.
- **Alternatives considered**: 
  - Jekyll/Hugo: While classic, they lack the modern component architecture of Astro and React integrations.
  - Next.js: Overkill for a purely static portfolio, and the static export features are sometimes more complex than Astro's native SSG approach.
  - Building from scratch: Rejected per spec guidelines; wastes time on layout instead of content.

## Deployment Strategy

- **Decision**: GitHub Pages using GitHub Actions.
- **Rationale**: The specification requires hosting on GitHub Pages. Using GitHub Actions to build the Astro site and deploy it to the `gh-pages` branch is the standard, most reliable method for Astro.

## Content Management

- **Decision**: Markdown (MDX) collections for projects.
- **Rationale**: Allows writing rich content (like the required "Problem statement", "Approach/Architecture", and "Results/Metrics") using standard Markdown, while supporting custom components if needed. Astro's Content Collections API provides type safety for frontmatter.