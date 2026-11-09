import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.4.4.10685:5',
  releaseNotes: {
    en_US:
      'FileBrowser integration now requires FileBrowser Quantum 2.0.2-stable:3 or later; the original File Browser is no longer supported. If you use the original File Browser, switch it in the Marketplace: open File Browser, then under Alternative Implementations choose FileBrowser Quantum and select Switch. Your files and accounts carry over.',
    es_ES:
      'La integración con FileBrowser ahora requiere FileBrowser Quantum 2.0.2-stable:3 o posterior; el File Browser original ya no es compatible. Si usa el File Browser original, cámbielo en el Mercado: abra File Browser, luego en Implementaciones alternativas elija FileBrowser Quantum y seleccione Cambiar. Sus archivos y cuentas se conservan.',
    de_DE:
      'Die FileBrowser-Integration erfordert jetzt FileBrowser Quantum 2.0.2-stable:3 oder neuer; der ursprüngliche File Browser wird nicht mehr unterstützt. Wenn Sie den ursprünglichen File Browser verwenden, wechseln Sie im Marktplatz: Öffnen Sie File Browser, wählen Sie unter Alternative Implementierungen FileBrowser Quantum und dann Wechseln. Ihre Dateien und Konten bleiben erhalten.',
    pl_PL:
      'Integracja z FileBrowser wymaga teraz FileBrowser Quantum 2.0.2-stable:3 lub nowszego; oryginalny File Browser nie jest już obsługiwany. Jeśli używasz oryginalnego File Browser, przełącz go w Sklepie: otwórz File Browser, następnie w sekcji Alternatywne implementacje wybierz FileBrowser Quantum i kliknij Przełącz. Twoje pliki i konta zostaną zachowane.',
    fr_FR:
      "L'intégration FileBrowser nécessite désormais FileBrowser Quantum 2.0.2-stable:3 ou une version ultérieure ; le File Browser d'origine n'est plus pris en charge. Si vous utilisez le File Browser d'origine, changez-le dans la Bibliothèque de services : ouvrez File Browser, puis sous Implémentations alternatives choisissez FileBrowser Quantum et sélectionnez Changer. Vos fichiers et comptes sont conservés.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
