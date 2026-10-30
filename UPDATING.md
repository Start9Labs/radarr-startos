# Updating Radarr

## Determining the upstream version

Upstream is the LinuxServer image `lscr.io/linuxserver/radarr`, pinned in `startos/manifest/index.ts`:

```typescript
source: { dockerTag: 'lscr.io/linuxserver/radarr:6.4.4.10685-ls324' },
```

LinuxServer tags its stable builds `<radarr version>-ls<build>`; its GitHub release marked Latest is the stable one (`nightly-*` and `develop-*` are not):

```bash
gh release view -R linuxserver/docker-radarr --json tagName -q .tagName
```

Confirm the tag ships both architectures before pinning it:

```bash
docker manifest inspect lscr.io/linuxserver/radarr:<tag> | jq -r '.manifests[].platform.architecture'
```

## Applying the bump

1. Read Radarr's release notes (`gh release view -R Radarr/Radarr v<version>`) between the old and new versions. A major version can change the host-config API or `config.xml` keys this package writes; check both against `startos/main.ts` and `startos/fileModels/config.xml.ts`.
2. Edit `dockerTag` in `startos/manifest/index.ts`.
3. Edit `startos/versions/current.ts`: the version is the Radarr version without the `-ls` suffix (`'6.4.4.10685:0'`), with localized release notes. A new LinuxServer build of the same Radarr version is a downstream revision bump (`:1`).
4. Install on a box and confirm the login still works and an old password is rejected after Reset Admin Password.
