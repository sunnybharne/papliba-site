# Papliba Site

Public product and documentation website for [Papliba](https://papliba.com/), a local-first visual workflow builder.

The application source lives in [sunnybharne/papliba](https://github.com/sunnybharne/papliba). This repository contains only the public website and its Azure Static Web Apps deployment workflow.

## Local development

Requirements:

- Node.js 24 LTS
- npm 11 or newer

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run validate
```

## Hosting

The production build is deployed to Azure Static Web Apps from `main` and serves `papliba.com` and `www.papliba.com`.

## License

Licensed under the [Apache License 2.0](LICENSE).
