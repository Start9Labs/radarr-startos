import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.4.10685:4',
  releaseNotes: {
    en_US:
      'Container maintenance update to LinuxServer build ls326; Radarr remains at 6.4.4.10685. [Full changes](https://github.com/linuxserver/docker-radarr/compare/6.4.4.10685-ls325...6.4.4.10685-ls326).',
    es_ES:
      'Actualización de mantenimiento del contenedor a la compilación ls326 de LinuxServer; Radarr sigue en 6.4.4.10685. [Todos los cambios](https://github.com/linuxserver/docker-radarr/compare/6.4.4.10685-ls325...6.4.4.10685-ls326).',
    de_DE:
      'Wartungsupdate des Containers auf LinuxServer-Build ls326; Radarr bleibt bei 6.4.4.10685. [Alle Änderungen](https://github.com/linuxserver/docker-radarr/compare/6.4.4.10685-ls325...6.4.4.10685-ls326).',
    pl_PL:
      'Aktualizacja konserwacyjna kontenera do kompilacji LinuxServer ls326; Radarr pozostaje w wersji 6.4.4.10685. [Wszystkie zmiany](https://github.com/linuxserver/docker-radarr/compare/6.4.4.10685-ls325...6.4.4.10685-ls326).',
    fr_FR:
      'Mise à jour de maintenance du conteneur vers la compilation LinuxServer ls326 ; Radarr reste en version 6.4.4.10685. [Tous les changements](https://github.com/linuxserver/docker-radarr/compare/6.4.4.10685-ls325...6.4.4.10685-ls326).',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
