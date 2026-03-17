---
title: "TV Audience Forecaster"
description: "Time-series forecasting CLI tool designed to predict hourly TV ratings (TVR) segmented by age and gender using Fast Fourier Transform."
pubDate: 2024-05-15
tags: ["Python", "Time Series", "FFT", "Prophet", "ConvLSTM"]
githubUrl: "https://github.com/lexandree/tv-audience-forecaster"
featured: false
order: 3
---

## Problem Statement

Broadcasters and advertisers require highly accurate, granular forecasts of TV audience sizes (TVR) broken down by specific demographic segments (age/gender) to optimize ad placements and content scheduling over a full year.

## Approach / Architecture

A robust data science research methodology evaluating multiple modeling spaces:
*   **Core Engine**: Utilizes **Fast Fourier Transform (FFT)** to extract complex, macroscopic macroscopic seasonal patterns from historical data.
*   **Event Overlay**: Extends the base FFT model with external event impact modeling (e.g., national holidays, sporting events like the World Cup).
*   **Benchmarking**: Rigorously benchmarked the FFT approach against Meta's **Prophet** and deep learning models (**ConvLSTM**) using synthetic and historical datasets to prove methodological superiority.

## Results / Metrics

*   **Demographic Granularity**: Successfully segmented and forecasted distinct viewing patterns without conflating data streams.
*   **Long-Term Accuracy**: The FFT approach demonstrated robust long-term extrapolations, effectively capturing multi-year seasonalities that standard autoregressive models missed.
