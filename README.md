# RepoFlow App

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Stellar](https://img.shields.io/badge/network-Stellar-black)](https://stellar.org)

**UI/UX Design**: [Figma](https://www.figma.com/design/YIfpftK4oTxgaBW9QYlhC9/RepoFlow?node-id=0-1&t=8j83NZqYBAsn6fII-1)

Next.js frontend for RepoFlow — repo claiming, dependency graphs, funding dashboard.

## Technical Architecture

```
Browser (Next.js) → Freighter Wallet → Soroban RPC
                  → Backend API     → PostgreSQL
```

**Page flow**: Landing → GitHub OAuth → Dashboard → Claim Stepper (4 steps) → Dependency Graph

**Auth flow**: GitHub OAuth session + Freighter public key → unified identity context

## Local Development Setup

### Prerequisites

| Tool | Version | Install Command |
|------|---------|-----------------|
| Node.js | 20 LTS | https://nodejs.org/ |
| npm | 10+ | npm install -g npm@latest |
| Docker | latest | https://docker.com/ |

### Setup Commands

```bash
npm install
cp .env.example .env
npm run dev
```

## Technology Stack

| Component | Technology | Version |
|-----------|------------|---------|
| Frontend Framework | Next.js | 14+ |
| Language | TypeScript | 5.x |
| Wallet Integration | Freighter | latest |
| Blockchain | Stellar/Soroban | latest |
| Styling | Tailwind CSS | 3.x |
| State Management | React Context | - |
| Graph Visualization | D3.js | 7.x |
| API Client | Soroban SDK | latest |
| Backend API | REST | - |
| Database | PostgreSQL | 15+ |
| Infrastructure | Docker | latest |