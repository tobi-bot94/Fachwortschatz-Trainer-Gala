#!/usr/bin/env python3
"""Baut aus src/app.html und src/data/*.js eine einzige HTML-Datei.

  python3 build.py

Ergebnis:
  index.html       – vollständige Seite (für GitHub Pages, USB-Stick, Moodle …)
"""
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "src"

data = "\n".join(p.read_text(encoding="utf-8") for p in sorted((SRC / "data").glob("*.js")))
app = (SRC / "app.html").read_text(encoding="utf-8").replace("/*@DATA@*/", data)
head, body = app.split("<!--BODY-->", 1)

page = (
    "<!doctype html>\n<html lang=\"de\">\n<head>\n"
    "<meta charset=\"utf-8\">\n"
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n"
    "<meta name=\"description\" content=\"Fachwortschatz-Trainer für die Ausbildung Gärtner/in im Garten- und Landschaftsbau (NRW) – mit Übersetzungen in 9 Sprachen.\">\n"
    "<meta name=\"theme-color\" content=\"#25402f\">\n"
    + head + "</head>\n<body>\n" + body + "</body>\n</html>\n"
)
(ROOT / "index.html").write_text(page, encoding="utf-8")
print(f"index.html geschrieben ({len(page.encode('utf-8')) // 1024} KB)")
