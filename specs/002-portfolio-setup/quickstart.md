# Quickstart: Schaufenster Portfolio

This guide explains how to run the portfolio locally and add new projects.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (or pnpm/yarn)

## Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repo-url> schaufenster
   cd schaufenster
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Local Development

Start the Astro development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

## Adding a New Project

1. Navigate to the projects content collection: `src/content/projects/`
2. Create a new markdown file (e.g., `my-new-project.md`).
3. Add the required frontmatter and content structure:

   ```markdown
   ---
   title: "Project Title"
   description: "A short, one-sentence description."
   tags: ["Tech1", "Tech2"]
   githubUrl: "https://github.com/..."
   demoUrl: "https://huggingface.co/spaces/..."
   featured: false
   order: 5
   ---

   ## Problem Statement
   [Describe the problem]

   ## Approach / Architecture
   [Describe the solution]

   ## Results / Metrics
   [Share quantifiable outcomes]
   ```

4. Save the file. Astro's dev server will automatically reload, and the new project will appear on the site.

## Building for Production

To create a production-ready static build:

```bash
npm run build
```

The output will be generated in the `dist/` directory, ready to be deployed to GitHub Pages.