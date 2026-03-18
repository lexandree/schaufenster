---
title: "TV Audience Forecaster"
description: "A time-series forecasting pipeline predicting hourly TV viewership by demographic. Extracted macro-seasonality with FFT, built an external event modeling layer, and rigorously benchmarked against Meta Prophet and ConvLSTM on a simulated AGF dataset."
pubDate: 2026-03-18
tags: ["Time-Series", "Prophet", "FFT", "ConvLSTM", "Data Science", "Python"]
githubUrl: "https://github.com/lexandree/tv-audience-forecaster"
featured: true
order: 3
---

## Project Overview

Television audience ratings (TVR) display complex, overlapping periodicities—daily primetime peaks, weekend effects, and annual seasonal shifts. Traditional forecasting models often struggle to capture these long-range macro-seasonal patterns while remaining responsive to sudden external events like national holidays or major sporting events.

This project implements a hybrid forecasting pipeline designed to handle demographically segmented viewership data (Age/Gender), utilizing Fast Fourier Transform (FFT) for robust seasonality extraction and benchmarking it against industry standards.

## Approach / Architecture

- **Signal Decomposition**: Used **Fast Fourier Transform (FFT)** to decompose the raw viewership signal into its constituent frequencies. This allowed for the identification and extraction of stable macroscopic seasonal patterns that are often missed by window-based autoregressive models.
- **External Event Modeling**: Built a specialized layer to adjust baseline forecasts for non-periodic events. This includes modeling the "World Cup effect," public holidays, and school breaks, which cause significant but predictable deviations from typical viewing habits.
- **Demographic Segmentation**: The pipeline processes multiple data streams simultaneously, ensuring that unique viewing behaviors of specific groups (e.g., 14-49 year-olds vs. 65+) are captured independently without cross-contamination.
- **Rigorous Benchmarking**: Built a comparative evaluation framework to test the FFT-based approach against **Meta Prophet** and deep learning architectures (**ConvLSTM**). Used a simulated dataset modeled after German AGF (Arbeitsgemeinschaft Fernsehforschung) standards to ensure high-fidelity testing.

## Results / Metrics

- **Long-Range Stability**: The FFT approach demonstrated significantly higher stability for year-ahead forecasts compared to Meta Prophet, which tended to accumulate error over long horizons due to its additive trend modeling.
- **Feature Extraction Win**: Successfully isolated the top-K dominant frequencies, reducing model complexity while retaining 95%+ of the variance in the macroscopic seasonal signal.
- **Hacker-Ready CLI**: Delivered as a modular Python CLI tool, enabling fast experimentation and integration into existing data pipelines.
