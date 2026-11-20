import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '7.0.3.10918:1',
  releaseNotes: {
    en_US:
      'Added Connect Prowlarr: Radarr now connects itself to Prowlarr on this server, which syncs its indexers to Radarr. If Prowlarr already syncs to Radarr, the connection is kept automatically.',
    es_ES:
      'Se añadió Conectar Prowlarr: Radarr ahora se conecta por sí mismo a Prowlarr en este servidor, que sincroniza sus indexadores con Radarr. Si Prowlarr ya sincroniza con Radarr, la conexión se mantiene automáticamente.',
    de_DE:
      'Prowlarr verbinden hinzugefügt: Radarr verbindet sich jetzt selbst mit Prowlarr auf diesem Server, das seine Indexer mit Radarr synchronisiert. Synchronisiert Prowlarr bereits mit Radarr, bleibt die Verbindung automatisch bestehen.',
    pl_PL:
      'Dodano Połącz Prowlarr: Radarr sam łączy się teraz z Prowlarr na tym serwerze, który synchronizuje do niego swoje indeksatory. Jeśli Prowlarr już synchronizuje się z Radarr, połączenie zostaje zachowane automatycznie.',
    fr_FR:
      'Ajout de Connecter Prowlarr : Radarr se connecte désormais lui-même à Prowlarr sur ce serveur, qui synchronise ses indexeurs avec Radarr. Si Prowlarr synchronise déjà Radarr, la connexion est conservée automatiquement.',
  },
  migrations: { up: async () => {}, down: IMPOSSIBLE },
})
