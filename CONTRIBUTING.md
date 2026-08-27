# Contributing to the Papliba site

This repository contains the public product and documentation site. Application changes belong in
[`sunnybharne/papliba`](https://github.com/sunnybharne/papliba).

## Before opening code

For a substantial information-architecture or visual change, open an issue first so the product
story and acceptance criteria are clear.

## Development setup

```bash
nvm use
npm ci
npm run dev
```

## Branches and commits

- Create a focused branch from `main`.
- Use [Conventional Commits](https://www.conventionalcommits.org/), for example `feat: add product capability section` or `docs: clarify local setup`.
- Keep claims honest: use **available**, **in progress**, or **planned** consistently.
- Do not mix unrelated formatting or refactors into a feature.

Husky checks staged files before commit and validates the commit message. CI remains authoritative.

## Validate a change

```bash
npm run validate
```

For visual changes, check at least one wide and one narrow viewport, keyboard navigation, visible focus, and reduced-motion behavior.

## Pull requests

A pull request should explain:

1. the user or contributor problem;
2. what changed and what did not;
3. how the change was verified;
4. whether product, documentation, or roadmap claims changed.

Screenshots are helpful for visible changes. Never include credentials or private local workspace content.

## Conduct and security

Participation is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). Report vulnerabilities through the private process in [SECURITY.md](SECURITY.md), not a public issue.
