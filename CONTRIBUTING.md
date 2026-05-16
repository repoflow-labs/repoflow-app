# Contributing to RepoFlow App

## 1. Fork-and-Pull Git Workflow

- Fork → clone → upstream: `git remote add upstream https://github.com/repoflow-labs/repoflow-app.git`
- Branch naming: `feature/<scope>` | `fix/<scope>` | `docs/<scope>` | `chore/<scope>`
- Never commit directly to main
- Rebase on upstream/main before PR; merge commits prohibited

## 2. Commit Message Convention (Angular, enforced)

Format: `<type>(<scope>): <imperative subject ≤72 chars>`

Types: feat | fix | docs | chore | test | refactor | perf

Scopes: ui, wallet, auth, graph, ci, deps

Examples:
- `feat(ui): implement 4-step ClaimStepper component`
- `fix(wallet): handle Freighter connection timeout gracefully`
- `feat(graph): add D3 force-directed dependency graph canvas`
- `chore(deps): upgrade @soroban-react to v3`

Breaking changes: `BREAKING CHANGE: <description>` in commit footer

## 3. PR Submission Requirements

- All CI checks must pass before requesting review
- Component render and wallet interaction tests required
- Closes # in PR description
- PR title follows same Angular convention
- Minimum one maintainer approval before merge