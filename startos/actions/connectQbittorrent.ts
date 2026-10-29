import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const connectQbittorrent = sdk.Action.withoutInput(
  'connect-qbittorrent',
  async ({ effects }) => {
    const connected = await storeJson
      .read((s) => s.qbittorrentConnected)
      .const(effects)
    return {
      name: connected
        ? i18n('Disconnect qBittorrent')
        : i18n('Connect qBittorrent'),
      description: i18n(
        'Add qBittorrent on this server as a download client in Radarr, and keep its address and login up to date. Changing it restarts Radarr.',
      ),
      warning: connected
        ? i18n('Removes the qBittorrent (StartOS) download client from Radarr.')
        : null,
      allowedStatuses: 'any',
      group: null,
      visibility: 'enabled',
    }
  },
  async ({ effects }) => {
    const connected = await storeJson.read((s) => s.qbittorrentConnected).once()
    await storeJson.merge(effects, { qbittorrentConnected: !connected })
    return null
  },
)
