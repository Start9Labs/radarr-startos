import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.4.10685:5',
  releaseNotes: {
    en_US:
      'FileBrowser integration now requires FileBrowser Quantum 2.0.2-stable:3 or later; the original File Browser is no longer supported.',
    es_ES:
      'La integración con FileBrowser ahora requiere FileBrowser Quantum 2.0.2-stable:3 o posterior; el File Browser original ya no es compatible.',
    de_DE:
      'Die FileBrowser-Integration erfordert jetzt FileBrowser Quantum 2.0.2-stable:3 oder neuer; der ursprüngliche File Browser wird nicht mehr unterstützt.',
    pl_PL:
      'Integracja z FileBrowser wymaga teraz FileBrowser Quantum 2.0.2-stable:3 lub nowszego; oryginalny File Browser nie jest już obsługiwany.',
    fr_FR:
      "L'intégration FileBrowser nécessite désormais FileBrowser Quantum 2.0.2-stable:3 ou une version ultérieure ; le File Browser d'origine n'est plus pris en charge.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
