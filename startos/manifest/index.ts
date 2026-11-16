import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'radarr',
  title: 'Radarr',
  license: 'GPL-3.0',
  packageRepo: 'https://github.com/Start9Labs/radarr-startos',
  upstreamRepo: 'https://github.com/Radarr/Radarr',
  marketingUrl: 'https://radarr.video/',
  donationUrl: 'https://radarr.video/donate',
  description: { short, long },
  volumes: ['startos', 'main', 'public'],
  images: {
    radarr: {
      source: { dockerTag: 'lscr.io/linuxserver/radarr:7.0.3.10918-ls328' },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
