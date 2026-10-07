/* Fachwortschatz-Trainer GaLaBau – Datenformat
 *
 * Jede Zeile in "w" ist ein Wort, Felder getrennt mit |
 *  0 Artikel (der/die/das)
 *  1 Wort (ohne Artikel)
 *  2 Plural mit Artikel ("die Spaten") oder "–" wenn es keinen Plural gibt
 *  3 botanischer Name (nur bei Pflanzen, sonst leer)
 *  4 Erklärung in einfacher Sprache
 *  5 Beispielsatz (enthält das Wort genau so wie in Feld 1)
 *  6 Bildhilfe (Emoji, darf leer sein)
 *  7–15 Übersetzungen: ar | uk | fa | tr | ru | en | pl | ti | ro
 *       (leer = Übersetzung fehlt noch)
 *
 * ALLE Übersetzungen sind KI-generiert und müssen vor dem Einsatz geprüft werden.
 * Die Lernfeld-Struktur ist vorläufig und wird an die DJP der Schule angepasst.
 */
const TR_ORDER = ['ar', 'uk', 'fa', 'tr', 'ru', 'en', 'pl', 'ti', 'ro'];
const DATA = { lf: [] };
