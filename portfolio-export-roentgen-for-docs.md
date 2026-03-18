---
title: "Roentgen for Docs"
description: "A secure, privacy-first diagnostic bot using MedGemma-1.5-4B. It separates local GPU inference from a public Telegram interface via reverse SSH tunnels, offering a lightweight alternative to enterprise medical systems."
pubDate: 2025-10-01
tags: ["Python", "MedGemma", "FastAPI", "Telegram API", "llama.cpp", "Reverse SSH"]
githubUrl: "https://github.com/lexandree/roentgen-for-docs"
featured: false
order: 2
---

## Problem Statement
Medical LLMs like MedGemma require significant GPU resources, but handling sensitive patient data on public clouds poses severe privacy risks. Professional, integrated medical systems are prohibitively expensive and slow to deploy. This project was built to bypass these enterprise bottlenecks, providing a "hacker-style," lightweight alternative that allows medical professionals to get immediate, secure diagnostic insights using state-of-the-art open weights models on standard consumer hardware.

## Approach / Architecture
The system is designed as a distributed ML pipeline prioritizing strict data residency and access control:
- **Inference Disconnect**: The architecture physically separates the public-facing Telegram bot (hosted on Oracle Cloud) from the heavy-lifting inference engine running locally on a GPU (e.g., GTX 1060 6GB).
- **Secure Tunneling**: Communication between the cloud bot and local inference engine is strictly routed through a **secure reverse SSH tunnel**. This ensures the local GPU server is never exposed to the public internet and requires no complex firewall configurations.
- **Interactive ROI (Region of Interest)**: To combat the tendency of LLMs to distort non-square images during downscaling, the bot implements custom image preprocessing. It allows doctors to use interactive commands to zoom into specific quadrants (e.g., Top-Left, Bottom-Right) of an X-ray, preserving critical diagnostic resolution.
- **Edge Optimization**: The backend utilizes `llama.cpp` (`llama-server`) for efficient inference. It employs a multi-slot KV cache for instantaneous persona switching (e.g., Radiologist to Pediatrician) and utilizes **GBNF grammar constraints** to physically prevent hallucinations and enforce strict clinical reporting formats.
- **Access Control**: A dual-layer whitelist (a local SQLite DB synced with a Google Drive JSON config) ensures only authorized personnel can interact with the model.

## Results / Metrics
* **Security Compliance**: Achieved a true zero-trust external footprint for the local inference engine. Patient data never rests on public servers.
* **Format Adherence**: The implementation of GBNF constraints guaranteed 100% adherence to the requested `Findings: ... Impression: ...` reporting structure, completely eliminating formatting errors.
* **Accuracy Improvement**: The interactive ROI center-cropping successfully bypassed standard LLM resolution limits, maintaining high diagnostic accuracy for localized lung and bone structures.
