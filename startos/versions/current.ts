import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '7.0.3.10918:0',
  releaseNotes: {
    en_US: `Updated Radarr to 7.0.3.

- New: Trakt Smart List import lists and sorting by popularity
- New: audio and subtitle tracks listed individually in media info
- New: custom headers for ntfy notifications and full Transmission label support
- Fix: grabs no longer marked as failed when qBittorrent already has the release
- Fix: matching searched movies by IMDb ID in indexer results

The first start after updating upgrades Radarr's database, which can take several minutes on a large library.

[Full release notes](https://github.com/Radarr/Radarr/releases/tag/v7.0.3.10918)`,
    es_ES: `Radarr actualizado a 7.0.3.

- Nuevo: listas de importación Trakt Smart List y ordenación por popularidad
- Nuevo: las pistas de audio y subtítulos aparecen por separado en la información multimedia
- Nuevo: cabeceras personalizadas para notificaciones de ntfy y compatibilidad completa con etiquetas de Transmission
- Corrección: las descargas ya no se marcan como fallidas cuando qBittorrent ya tiene la versión
- Corrección: coincidencia de películas buscadas por ID de IMDb en los resultados de los indexadores

El primer arranque tras la actualización actualiza la base de datos de Radarr, lo que puede tardar varios minutos en una biblioteca grande.

[Notas completas de la versión](https://github.com/Radarr/Radarr/releases/tag/v7.0.3.10918)`,
    de_DE: `Radarr auf 7.0.3 aktualisiert.

- Neu: Trakt-Smart-List-Importlisten und Sortierung nach Beliebtheit
- Neu: Audio- und Untertitelspuren werden in den Medieninformationen einzeln aufgeführt
- Neu: eigene Header für ntfy-Benachrichtigungen und vollständige Unterstützung für Transmission-Labels
- Behoben: Downloads werden nicht mehr als fehlgeschlagen markiert, wenn qBittorrent die Veröffentlichung bereits hat
- Behoben: Zuordnung gesuchter Filme über die IMDb-ID in Indexer-Ergebnissen

Beim ersten Start nach dem Update wird die Datenbank von Radarr aktualisiert; bei einer großen Bibliothek kann das einige Minuten dauern.

[Vollständige Versionshinweise](https://github.com/Radarr/Radarr/releases/tag/v7.0.3.10918)`,
    pl_PL: `Zaktualizowano Radarr do wersji 7.0.3.

- Nowość: listy importu Trakt Smart List i sortowanie według popularności
- Nowość: ścieżki audio i napisów wyświetlane osobno w informacjach o multimediach
- Nowość: własne nagłówki w powiadomieniach ntfy i pełna obsługa etykiet Transmission
- Poprawka: pobrania nie są już oznaczane jako nieudane, gdy qBittorrent ma już dane wydanie
- Poprawka: dopasowywanie wyszukiwanych filmów po identyfikatorze IMDb w wynikach indekserów

Pierwsze uruchomienie po aktualizacji aktualizuje bazę danych Radarr, co przy dużej bibliotece może potrwać kilka minut.

[Pełne informacje o wydaniu](https://github.com/Radarr/Radarr/releases/tag/v7.0.3.10918)`,
    fr_FR: `Radarr mis à jour vers 7.0.3.

- Nouveau : listes d’importation Trakt Smart List et tri par popularité
- Nouveau : pistes audio et de sous-titres affichées séparément dans les informations média
- Nouveau : en-têtes personnalisés pour les notifications ntfy et prise en charge complète des étiquettes Transmission
- Correctif : les téléchargements ne sont plus marqués comme échoués lorsque qBittorrent possède déjà la version
- Correctif : correspondance des films recherchés par identifiant IMDb dans les résultats des indexeurs

Le premier démarrage après la mise à jour met à niveau la base de données de Radarr, ce qui peut prendre plusieurs minutes avec une grande bibliothèque.

[Notes de version complètes](https://github.com/Radarr/Radarr/releases/tag/v7.0.3.10918)`,
  },
  migrations: { up: async () => {}, down: IMPOSSIBLE },
})
