# Papliba Site Azure Deployment Plan

Status: Deployed

## Objective

Move the Papliba public product website into `sunnybharne/papliba-site` while reusing the existing Azure Static Web App and custom domains.

## Existing Azure Resource

- Subscription: `Prod`
- Resource group: `rg-prod-web-swc`
- Static Web App: `swa-papliba-prod-001`
- Location: `Central US`
- SKU: `Free`
- Current default hostname: `black-mud-09908ae10.7.azurestaticapps.net`
- Custom domains: `papliba.com` and `www.papliba.com`
- Stable inbound IP: `64.236.125.137`

## Repository Boundary

- `sunnybharne/papliba`: the local-first Papliba application.
- `sunnybharne/papliba-site`: the public marketing and documentation website.
- The application does not deploy a public cloud runtime.
- The website deploys static assets from `papliba-site/main` to Azure Static Web Apps.

## Deployment Configuration

- Build command: `npm run build`
- Build environment: `VITE_BASE_PATH=/`
- App location: `dist`
- API location: empty
- Deployment secret: `AZURE_STATIC_WEB_APPS_API_TOKEN_PAPLIBA`

## Migration Steps

1. Create the public `sunnybharne/papliba-site` repository.
2. Push the verified website to its `main` branch.
3. Add the existing Azure Static Web Apps deployment token as a repository secret.
4. Update the Static Web App source metadata to `sunnybharne/papliba-site`, branch `main`.
5. Run the website deployment workflow and verify the production domains.
6. Restore the local application on the `sunnybharne/papliba` main branch.

## DNS

No DNS cutover is required. The existing apex A record and `www` CNAME continue to target the same Azure Static Web App.

## Validation

- `npm run validate` passes.
- Desktop and mobile browser checks have no horizontal overflow or broken images.
- GitHub Actions deploys `papliba-site/main` successfully.
- `https://papliba.com/` and `https://www.papliba.com/` return HTTP 200.
- Azure reports both custom domains as ready.

## Deployment Record

- Initial separated-site commit: `bd34fb0`
- Website CI run: `33107159063` (successful)
- Azure deployment run: `33107158399` (successful)
- Application restore commit: `5360d20`
- Application CI run: `33107755142` (successful)
- Azure source repository: `https://github.com/sunnybharne/papliba-site`
- Verified: 2026-08-27
