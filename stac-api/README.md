# STAC API (minimal)

Dieses Verzeichnis enthält eine minimale, lokale Implementierung der STAC API (Collections & Collection Search Extension) zum Entwickeln und Testen.

Voraussetzungen
- Node.js (>= 18 empfohlen)
- npm

Schnellstart

1. Abhängigkeiten installieren

```powershell
cd stac-api
npm install
```

2. Server starten

```powershell
npm start
```

Der Server läuft standardmäßig auf Port 8080. Verfügbare Endpunkte (minimal):
- `GET /conformance` — listet unterstützte Conformance-URIs
- `GET /collections` — listet alle Collections (in-memory Beispieldaten)
- `GET /collections/:id` — einzelne Collection
- `POST /search` — Collection-Suche (body: { q: "text" })

Hinweis
Diese Implementierung ist eine Bootstrap-Version mit in-memory Daten (für Entwicklung und frühe Integrationstests). Nächste Schritte:
- DB-Anbindung (Postgres + PostGIS)
- Reale CQL2-Parsing-Integration (cql2-rs as WASM oder pycql2)
- Tests und CI
