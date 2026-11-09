import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.4.10685:5',
  releaseNotes: {
    en_US:
      'Radarr now requires FileBrowser Quantum; the original File Browser is no longer supported.',
    es_ES:
      'Radarr ahora requiere FileBrowser Quantum; el File Browser original ya no es compatible.',
    de_DE:
      'Radarr erfordert jetzt FileBrowser Quantum; der ursprüngliche File Browser wird nicht mehr unterstützt.',
    pl_PL:
      'Radarr wymaga teraz FileBrowser Quantum; oryginalny File Browser nie jest już obsługiwany.',
    fr_FR:
      "Radarr nécessite désormais FileBrowser Quantum ; le File Browser d'origine n'est plus pris en charge.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
