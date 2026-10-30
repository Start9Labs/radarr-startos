import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.4.10685:1',
  releaseNotes: {
    en_US:
      "Radarr starts while qBittorrent or a selected file manager is uninstalled, reconnects when it is reinstalled, and finishes connecting qBittorrent after an interrupted setup. Backups leave out Radarr's log database and its own scheduled backups.",
    es_ES:
      'Radarr arranca aunque qBittorrent o un gestor de archivos seleccionado esté desinstalado, se vuelve a conectar cuando se reinstala y termina de conectar qBittorrent tras una configuración interrumpida. Las copias de seguridad omiten la base de datos de registros de Radarr y sus propias copias programadas.',
    de_DE:
      'Radarr startet auch, wenn qBittorrent oder ein ausgewählter Dateimanager deinstalliert ist, verbindet sich nach einer Neuinstallation wieder und schließt die Verbindung zu qBittorrent nach einer unterbrochenen Einrichtung ab. Backups lassen Radarrs Protokolldatenbank und seine eigenen geplanten Sicherungen aus.',
    pl_PL:
      'Radarr uruchamia się, gdy qBittorrent lub wybrany menedżer plików jest odinstalowany, łączy się ponownie po ich ponownej instalacji i kończy łączenie z qBittorrent po przerwanej konfiguracji. Kopie zapasowe pomijają bazę dziennika Radarr i jego własne zaplanowane kopie.',
    fr_FR:
      'Radarr démarre même si qBittorrent ou un gestionnaire de fichiers sélectionné est désinstallé, se reconnecte quand il est réinstallé et termine la connexion à qBittorrent après une configuration interrompue. Les sauvegardes omettent la base de journaux de Radarr et ses propres sauvegardes planifiées.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
