# Data Model: Portfolio Projects

## Entity: `Project`

The core data entity in this portfolio is the `Project`, representing a single portfolio piece (e.g., Graph RAG, Roentgen for Docs).

### Storage

Projects will be stored as Markdown (or MDX) files in an Astro Content Collection (e.g., `src/content/projects/`).

### Frontmatter Schema (Zod definition in Astro)

```typescript
import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().optional(),
    tags: z.array(z.string()), // e.g., ['Python', 'Neo4j', 'LightGBM']
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false), // To highlight flagship projects like Graph RAG
    order: z.number().optional(), // For manual sorting
  }),
});
```

### Content Structure (Markdown Body)

The body of the markdown file will enforce the required structure defined in the specification:

1.  **Problem Statement**: What is the context and challenge?
2.  **Approach / Architecture**: How was it solved? (e.g., "secure reverse SSH tunnel")
3.  **Results / Metrics**: What was the impact? (e.g., "Baseline RMSE vs. Model RMSE")

*Example `src/content/projects/graph-rag.md`:*

```markdown
---
title: Graph RAG for German Laws
description: Advanced AI Architecture using Neo4j and LLM Reasoning for legal text retrieval.
tags: ['Python', 'Neo4j', 'LLM', 'GraphRAG']
githubUrl: https://github.com/username/graph-rag
featured: true
order: 1
---

## Problem Statement
Legal texts are inherently graph-like...

## Approach / Architecture
Ingestion layer to semantic triples to Neo4j...

## Results / Metrics
Significant reduction in hallucinations compared to vector search...
```