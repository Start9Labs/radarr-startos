# Updating Radarr

## Determining the upstream version

Upstream is the LinuxServer image `lscr.io/linuxserver/radarr`, pinned in `startos/manifest/index.ts`:

```typescript
source: { dockerTag: 'lscr.io/linuxserver/radarr:<radarr version>-ls<build>' },
```

LinuxServer tags its stable builds `<radarr version>-ls<build>` (`nightly-*` and `develop-*` are not stable). Published images can precede GitHub releases; find the newest stable build among recently published registry tags instead of relying on GitHub's Latest badge:

```bash
curl -fsSL 'https://hub.docker.com/v2/repositories/linuxserver/radarr/tags?page_size=100&ordering=last_updated' \
  | jq -r '.results[].name | select(test("^[0-9]+(\\.[0-9]+)*-ls[0-9]+$"))' \
  | sort -V | tail -n 1
```

Confirm the tag ships both architectures before pinning it:

```bash
docker manifest inspect lscr.io/linuxserver/radarr:<tag> | jq -r '.manifests[].platform.architecture'
```

## Applying the bump

1. Read Radarr's release notes (`gh release view -R Radarr/Radarr v<version>`) between the old and new versions. A major version can change the host-config API or `config.xml` keys this package writes; check both against `startos/main.ts` and `startos/fileModels/config.xml.ts`.
2. Edit `dockerTag` in `startos/manifest/index.ts`.
3. Edit `startos/versions/current.ts`: the version is the Radarr version without the `-ls` suffix (`'<radarr version>:0'`). A new LinuxServer build of the same Radarr version is a downstream revision bump (`:1`).
4. Confirm the API still accepts host-config credential updates, the qBittorrent schema still supports API-key authentication, and the `Nzbget` schema still has `host`, `port`, `useSsl`, `username`, `password` and `movieCategory` fields; reconciliation silently skips a field the schema lacks. Keep the shared media mount points unchanged.
