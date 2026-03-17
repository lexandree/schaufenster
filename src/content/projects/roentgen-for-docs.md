---
title: "Roentgen for Docs"
description: "Secure, production-ready diagnostic bot powered by MedGemma 1.5, separating local GPU inference from public-facing Telegram interfaces via SSH."
pubDate: 2025-10-01
tags: ["Python", "MedGemma", "Distributed Systems", "Telegram Bot", "Security"]
githubUrl: "https://github.com/lexandree/roentgen-for-docs"
featured: false
order: 2
---

## Problem Statement

Medical professionals need quick access to specialized AI assistance (like MedGemma) without compromising patient data security or hospital network integrity. Hosting the entire stack on a public cloud poses significant data privacy risks.

## Approach / Architecture

Designed as a distributed ML system prioritizing security and modularity:
*   **Backend (Local GPU)**: Runs MedGemma 1.5 locally (via `llama-cpp-python` with GGUF) on a secure server, keeping all inference and patient data processing strictly in-house.
*   **Frontend (Cloud)**: A lightweight, stateless Telegram bot hosted on Oracle Cloud handles user interaction.
*   **Secure Communication**: The two components communicate exclusively via a **secure reverse SSH tunnel**, ensuring the local server is never directly exposed to the internet.

## Results / Metrics

*   **Security Compliance**: Achieved a zero-trust external footprint for the inference engine.
*   **System Reliability**: Implemented graceful error handling allowing the bot to survive local server disconnects without crashing.
*   **Performance**: Maintained low-latency response times suitable for fast-paced medical workflows by utilizing GPU offloading.
