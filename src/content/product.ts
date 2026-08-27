export const product = {
  name: 'Papliba',
  version: '0.7.0',
  siteVersion: __APP_VERSION__,
  phase: 'Local alpha',
  repository: 'https://github.com/sunnybharne/papliba',
  siteRepository: 'https://github.com/sunnybharne/papliba-site',
  site: 'https://papliba.com/',
} as const;

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'Docs', to: '/docs' },
  { label: 'Roadmap', to: '/roadmap' },
] as const;
