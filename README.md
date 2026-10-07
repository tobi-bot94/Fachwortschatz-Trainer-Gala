# Fachwortschatz-Trainer GaLaBau

Lern-App für den Fachwortschatz in der dualen Ausbildung **Gärtner/in (NRW)** an der **Elly-Heuss-Knapp-Schule**.
Eine einzige HTML-Datei: kein Login, keine App, keine Kosten.

## Inhalt

- **394 Fachwörter**
  - **Grundstufe (1. Jahr)** für alle Fachrichtungen: Lernfelder 1–4
  - **Garten- und Landschaftsbau:** Lernfelder 5–12 (2. und 3. Jahr)
  - **Weitere Fachrichtungen** mit eigenen Themen für das 2. und 3. Jahr:
    Zierpflanzenbau, Baumschule, Friedhofsgärtnerei, Gemüsebau, Obstbau, Staudengärtnerei
    (vorläufig, aus Fachwissen zusammengestellt – noch ohne Unterlagen der Schule)
  - **Pflanzenkunde** für alle (zuerst: Was bedeutet der botanische Name? Danach Laub- und Nadelgehölze, Stauden, Gräser, Kletterpflanzen)
- Jedes Wort mit Artikel, Plural, Erklärung in einfacher Sprache, Beispielsatz und Bildhilfe.
- **Übersetzungen in 8 Sprachen:** Arabisch, Ukrainisch, Persisch/Dari, Türkisch, Russisch, Englisch, Polnisch, Rumänisch.
  Arabisch und Persisch werden von rechts nach links angezeigt.
- Artikel farbig wie im DaZ-Unterricht: **der** blau, **die** rot, **das** grün.
- Oberfläche zweisprachig (Deutsch + gewählte Sprache).

## Aufbau für Lernende

1. Sprache wählen und **Hilfe-Stufe** wählen:
   - **A – Viel Hilfe:** Übersetzung immer sichtbar, Artikel in Farbe, 3 Antworten, Tipps
   - **B – Etwas Hilfe:** Karte umdrehen für die Übersetzung, 4 Antworten, Tipps
   - **C – Ohne Hilfe:** keine Farben, Fachwort mit Artikel selbst schreiben
2. **Fachrichtung**, Ausbildungsjahr und **Themen (Unterkategorien)** wählen, auch gemischt.
3. Üben: **Lernen** (Lernkarten mit Vorlesen) → **Zuordnen** → **Quiz** → **Rückmeldung**.
   Die Rückmeldung zeigt, welche Wörter sitzen und welche wiederholt werden sollten.
   Die Wörter zum Wiederholen lassen sich gezielt üben.

Gestufte Tipps im Quiz: Artikel-Regeln (z. B. *-ung → die*), die Regel für zusammengesetzte Wörter
(das letzte Wort bestimmt den Artikel), Anfangsbuchstaben und Übersetzung.

Der Lernstand wird nur im Browser des eigenen Geräts gespeichert (localStorage). Es werden keine Daten verschickt.

## Für Lehrkräfte

Über „Bereich für Lehrkräfte“ in der App:
- **QR-Code** und Link für die Klasse erzeugen
- **Übersetzungstabelle** als CSV herunterladen oder kopieren (zum Prüfen durch Muttersprachler:innen)
- Übersicht, welche Übersetzungen noch fehlen

> **Wichtig:** Alle Übersetzungen sind KI-generiert und noch **nicht geprüft**.
> Die Lernfeld-Gliederung ist **vorläufig** und wird an die didaktische Jahresplanung der Schule angepasst.

## Online stellen mit GitHub Pages (für den QR-Code)

1. Auf GitHub: **Settings → Pages**
2. Bei *Build and deployment* → *Source*: **Deploy from a branch**
3. Branch wählen (z. B. `main`), Ordner **/ (root)**, **Save**
4. Nach 1–2 Minuten ist die App erreichbar unter
   `https://tobi-bot94.github.io/Fachwortschatz-Trainer-Gala/`

Die Datei `index.html` kann auch einfach per Moodle, Teams, USB-Stick oder Mail weitergegeben werden.

## Wörter ändern oder ergänzen

Die Wörter stehen in `src/data/*.js`, eine Zeile pro Wort (Format siehe `src/data/00_meta.js`).
Danach neu bauen:

```
python3 build.py
```

Das erzeugt die fertige `index.html`.
