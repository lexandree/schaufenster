---
title: "VAE Marketing Impact Analysis"
description: "Production-ready machine learning pipeline using Variational Autoencoders (VAE) to quantify the impact of marketing stimuli on consumer behavior. Training tracking via Weights & Biases."
pubDate: 2023-11-20
tags: ["Python", "PyTorch", "Deep Learning", "VAE", "Weights & Biases", "Retail Data"]
githubUrl: "https://github.com/lexandree/vae-marketing-impact"
featured: false
order: 4
---

## Problem Statement

Traditional marketing analytics often fail to capture the complex, non-linear ways consumers respond to targeted campaigns. Understanding the true latent factors driving customer behavior in response to marketing stimuli is critical for ROI optimization.

## Approach / Architecture

Applied advanced representation learning to real-world retail data:
*   **Dataset**: Utilized the extensive **Dunnhumby** transaction dataset, representing massive, noisy, real-world consumer purchasing patterns.
*   **Architecture**: Built a Deep Variational Autoencoder (VAE) using **PyTorch**. Explicitly implemented the reparameterization trick and combined Reconstruction Loss with KL Divergence to force the model to learn a structured latent space.
*   **Engineering Standards**: Enforced strict modularity (separating preprocessing, model architecture, and training loops), optimized Pandas data types for memory efficiency, and integrated **Weights & Biases (WandB)** for comprehensive experiment tracking and hyperparameter logging.

## Results / Metrics

*   **Business Impact**: Successfully mapped complex purchasing behaviors into a lower-dimensional latent space, enabling the isolation of distinct customer segments and the quantification of campaign uplift.
*   **Technical Robustness**: Delivered a fully typed, documented, and reproducible deep learning pipeline suitable for production deployment, with full observability via WandB.
