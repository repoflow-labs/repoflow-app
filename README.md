# repoflow-app
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![Stellar](https://img.shields.io/badge/network-Stellar-black)](https://stellar.org) [![Next.js](https://img.shields.io/badge/next.js-14-black)](https://nextjs.org)

**UI/UX Design**: [Figma](https://www.figma.com/design/YIfpftK4oTxgaBW9QYlhC9/RepoFlow?node-id=0-1&t=8j83NZqYBAsn6fII-1)

Next.js frontend for RepoFlow — repo claiming, dependency graphs, funding dashboard.

## Technical Architecture
```
Browser (Next.js) → Freighter Wallet → Soroban RPC
                  → Backend API     → PostgreSQL
```
**Page flow**: Landing → GitHub OAuth → Dashboard → Claim Stepper (4 steps) → Dependency Graph
**Auth flow**: GitHub OAuth session + Freighter public key → unified identity context

## Tech Stack
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

## Local Setup
```bash
npm install
cp .env.example .env
npm run dev
```
Open http://localhost:3000

## Key Pages
| Route | Description |
|---|---|
| / | Landing |
| /dashboard | Repo overview |
| /repos/claim | 4-step claim flow |
| /graph | D3 dependency canvas |
| /funding | Earnings + withdrawals |

## Related Repos
| Repo | Role |
|---|---|
| [repoflow-contract](https://github.com/repoflow-labs/repoflow-contract) | Soroban smart contract |
| [repoflow-indexer](https://github.com/repoflow-labs/repoflow-indexer) | Backend API |
| [repoflow-sdk](https://github.com/repoflow-labs/repoflow-sdk) | TypeScript SDK |