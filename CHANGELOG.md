# Changelog

All notable changes to **Casefile Jobs** are documented in this file.

## Fork Point

Casefile Jobs was forked from **Dossier `v1.15.0`** ([AienTech/dossier](https://github.com/AienTech/dossier)):
- Upstream commit: `dfaabe407b95a03228c8d59c610ddb54998c81ed` (*Dossier 1.15.0*, 2026-11-18)
- Upstream tag: `v1.15.0` (`6c6c4c469bb23305654550ed15deb16087564973`)
- Branch base commit before rebrand: `3ac2314546377ab6da9b26833b5e45b1cbe5d84d`

## [Unreleased] - 2026-11-23

### Changed
- Rebranded the standalone project identity to **Casefile Jobs** (`AlienBTw/casefile-jobs`) across the web app, desktop app, static site, documentation, package manifests, Docker Compose, and GitHub workflows.
- Updated repository, releases, upgrade guide, and AGPL-3.0 Section 13 source links to `https://github.com/AlienBTw/casefile-jobs`.
- Removed AienTech Discord, GitHub Sponsors, and Buy Me a Coffee links and funding configuration.
- Disabled upstream AienTech telemetry (`telemetry.dossier.aien.me`) and stopped querying `api.dossier.aien.me` for announcements or the portal catalog unless `DOSSIER_API_URL` is explicitly configured by the operator.
- Preserved `DOSSIER_*` environment variables, database names, cookies, export/theme format identifiers, and internal code symbols for compatibility with existing self-hosted setups and data exports.

### Added
- `NOTICE` and `CHANGELOG.md` documenting upstream Dossier attribution, fork point, and modification history.
- `THIRD_PARTY_NOTICES.md` inventorying npm and desktop dependency licenses and bundled OFL-1.1 fonts.
- `password.txt` and `scratch/` rules in `.gitignore`.

### Fixed
- Replaced remaining user-facing `Dossier` strings in the password-hash helper, webhook `User-Agent` header (`CasefileJobs/<version>`), MCP connector and notification webhook hints, and email conversation test fixture.
- Stabilized React 19 async transition state updates in `RecurringSearches` / `SearchEditor` and widened `timed-fetch` test server delays beyond undici's `FastTimer` 499 ms tick granularity.

### Security
- Pinned transitive `effect` to `3.22.5` via `package.json` `resolutions` to address `GHSA-7589-6fvf-x4pw`.

## Pre-fork Additions on Top of Dossier 1.15.0 (2026-11-02 to 2026-11-19)

### Added
- **Profile**: Added a `github` basics field (`b1acaa4`).
- **MCP connector**: Added the read-only `list_agent_candidates` tool for listing job-agent candidates from Positions (`5e7a0a1`, `efd868c`, `3ac2314`).

### Changed
- **Resume tailoring**: Tightened the tailoring prompt and capped tailored skills to a relevant subset (`b174de7`, `daa2a2f`, `f43f1f0`).
- **Tooling & tests**: Enabled the test suite to run on Windows (`3cab485`) and excluded local `scratch/` scripts from `tsconfig.json` (`1a79785`).
