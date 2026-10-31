# ⚡ webgpu-browser-agent-boilerplate

[![WebGPU](https://img.shields.io/badge/WebGPU-Chromium-blue)](https://www.w3.org/TR/webgpu/)
[![MCP](https://img.shields.io/badge/MCP-Browser%20Tools-orange)](https://modelcontextprotocol.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A lightweight reference architecture for running **client-side AI Agent tool loops inside Chromium browsers via WebGPU** at **$0 cloud inference cost**, paired with **deterministic queue pagination deduplication** and **search-state isolation**.

---

## 🎯 Why Client-Side Browser Agents?

1. **Zero Cloud Inference Cost & Zero Network Hop:** Offloads lightweight triage, classification, and tool-routing directly onto the user's local GPU via Chromium's `navigator.gpu` (**WebGPU**) pipeline.
2. **Idempotent Queue Prefetching & Deduplication:** When an in-browser agent prefetches paginated issue queues in background chunks, duplicate items across continuation tokens are automatically deduplicated before updating UI state—breaking early when a continuation page yields zero new unique IDs.
3. **Strict Search-State Reset:** Prevents stale items from prior search queries from bleeding into active table views.

---

## 🚀 Quickstart

```bash
# Serve index.html locally in any WebGPU-enabled Chromium browser (Chrome / Edge 113+)
npx serve .
```

---

## 📄 License

MIT License — Created by **[Priti Jha](https://priti24.github.io/portfolio/)**.
