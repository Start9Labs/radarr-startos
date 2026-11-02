import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.4.10685:2',
  releaseNotes: {
    en_US:
      'Updated the LinuxServer image to 6.4.4.10685-ls325, refreshing curl and libcurl to 8.23.0. Radarr remains at 6.4.4.10685. Full changes: https://github.com/linuxserver/docker-radarr/compare/6.4.4.10685-ls324...6.4.4.10685-ls325',
    es_ES:
      'Imagen de LinuxServer actualizada a 6.4.4.10685-ls325, con curl y libcurl 8.23.0. Radarr sigue en 6.4.4.10685. Todos los cambios: https://github.com/linuxserver/docker-radarr/compare/6.4.4.10685-ls324...6.4.4.10685-ls325',
    de_DE:
      'LinuxServer-Image auf 6.4.4.10685-ls325 aktualisiert, mit curl und libcurl 8.23.0. Radarr bleibt bei 6.4.4.10685. Alle Änderungen: https://github.com/linuxserver/docker-radarr/compare/6.4.4.10685-ls324...6.4.4.10685-ls325',
    pl_PL:
      'Zaktualizowano obraz LinuxServer do 6.4.4.10685-ls325, z curl i libcurl 8.23.0. Radarr pozostaje w wersji 6.4.4.10685. Wszystkie zmiany: https://github.com/linuxserver/docker-radarr/compare/6.4.4.10685-ls324...6.4.4.10685-ls325',
    fr_FR:
      'Image LinuxServer mise à jour vers 6.4.4.10685-ls325, avec curl et libcurl 8.23.0. Radarr reste en version 6.4.4.10685. Tous les changements : https://github.com/linuxserver/docker-radarr/compare/6.4.4.10685-ls324...6.4.4.10685-ls325',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
