---
title: "Multilingual Chatbot for Telegram / Knowledge base"
description: "Advanced AI Architecture using Neo4j and LLM Reasoning for legal text retrieval. Transcends standard vector search by understanding complex legal dependencies."
pubDate: 2026-03-15
tags: ["Python", "Neo4j", "LLMs", "Knowledge Graph", "Langchain", "LangGraph"]
featured: false
order: 10
---

## Problem Statement

Navigating legal texts is inherently complex because laws constantly reference other laws, amendments, and court rulings. Traditional Vector RAG (Retrieval-Augmented Generation) struggles with these deep, interconnected dependencies, often returning isolated paragraphs without their crucial legal context. The challenge was to build a system that understands the *graph-like* structure of German law.

## Approach / Architecture

This project implements a full Knowledge Graph-based RAG pipeline:
1.  **Ingestion & LLM Preprocessing**: Raw legal texts (PDF/HTML) are parsed, and an LLM extracts semantic triples (subject, relation, object) to understand relationships (e.g., *§433 BGB* → `requires` → *payment obligation*).
2.  **Graph Construction**: The extracted entities and relationships are loaded into a **Neo4j** graph database, creating a robust legal knowledge graph.
3.  **Graph Retrieval & Reasoning**: Instead of simple nearest-neighbor search, the system traverses the graph. When asked about a buyer's obligations, it can follow the nodes from `buyer` -> `contract of sale` -> `§433 BGB` before synthesizing the answer.

## Results / Metrics

*   **Architectural Superiority**: Successfully maps multi-hop legal references that standard vector embeddings miss entirely.
*   **Accuracy Improvement**: Drastic reduction in LLM hallucinations when querying complex legal chains, as the graph enforces logical constraints during retrieval.
