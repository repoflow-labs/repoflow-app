# repoflow-app
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![Stellar](https://img.shields.io/badge/network-Stellar-black)](https://stellar.org) [![Next.js](https://img.shields.io/badge/next.js-14-black)](https://nextjs.org)

Next.js 14 frontend for RepoFlow — repo claiming, dependency graph, and OSS funding on Stellar.

## Architecture
Browser → Freighter Wallet → Soroban RPC → repoflow-indexer API → PostgreSQL
Auth: GitHub OAuth session + Freighter key → unified identity context

## Tech Stack
| Component | Technology | Version |
|---|---|---|
| Framework | Next.js App Router | 14 |
| Language | TypeScript | strict |
| Styling | Tailwind CSS | 3 |
| Wallet | Freighter API | latest |
| Graph | D3.js | 7 |
| Data fetching | SWR | 2 |

## Local Setup
```bash
git clone https://github.com/repoflow-labs/repoflow-app
cd repoflow-app && npm install && cp .env.example .env && npm run dev
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