# Radarr

## Documentation

- [Radarr Quick Start Guide](https://github.com/Servarr/Wiki/blob/master/radarr/quick-start-guide.md) — the upstream walkthrough of first setup
- [Radarr Settings](https://github.com/Servarr/Wiki/blob/master/radarr/settings.md) — every settings page explained
- [Radarr FAQ](https://github.com/Servarr/Wiki/blob/master/radarr/faq.md) — common questions about searching, importing and quality
- [Radarr Troubleshooting](https://github.com/Servarr/Wiki/blob/master/radarr/troubleshooting.md) — diagnosing failed downloads and imports

## What you get on StartOS

- The Radarr web interface, behind a login that is set up for you.
- qBittorrent on this server connected as Radarr's download client, kept up to date for you.
- Indexers from Prowlarr on this server, once you connect Radarr from Prowlarr.
- Your movie library kept in FileBrowser Quantum or NextExplorer, where you can browse the files and where Jellyfin can read them.
- Radarr's settings, history and library database in StartOS backups. The movie files are backed up with FileBrowser Quantum or NextExplorer.

## Getting set up

1. Install FileBrowser Quantum or NextExplorer, if you have neither.
2. Run **Set Admin Password** and save the username and password it shows.
3. Run **Media Storage** and choose FileBrowser Quantum, NextExplorer, or both.
4. In qBittorrent, run **Set Download Location** and choose the same file manager. Radarr can only import downloads it can see, and moves them fastest when they are on the same file manager as your library.
5. Run **Connect qBittorrent**.
6. If you use Prowlarr, connect Radarr from Prowlarr's **Connect Apps** action. Indexers you add in Prowlarr then appear in Radarr on their own.
7. Start Radarr, open the Web UI, and sign in.
8. In your file manager, create a folder for your movies, such as `movies`.
9. In Radarr, go to **Settings → Media Management → Root Folders → Add Root Folder** and pick that folder:
   - FileBrowser Quantum: `/mnt/filebrowser/movies`
   - NextExplorer: `/mnt/nextexplorer/<location>/movies`, where `<location>` is one of NextExplorer's locations, such as `Files`
10. Point a Jellyfin library at the same folder, then add movies in Radarr with **Movies → Add New**.

## Using Radarr

- **Reset Admin Password** generates a new password and restarts Radarr. The old password stops working.
- **Media Storage** changes which file managers Radarr can use, and restarts Radarr.
- **Connect qBittorrent** / **Disconnect qBittorrent** adds qBittorrent as a download client, or removes Radarr's `qBittorrent (StartOS)` download client. The connection follows qBittorrent automatically; there is nothing to redo when qBittorrent's password changes.
- Radarr's login is managed by StartOS: changing the username or authentication method in Radarr's settings is undone on the next restart. Use **Reset Admin Password** instead.
