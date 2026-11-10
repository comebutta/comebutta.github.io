// Parser del markup minimale usato per i testi legali (src/legal/*.txt).
// Stesso formato letto da scripts/legal-docs.cjs per generare .docx e .pdf.
//   "# "  titolo           "@"   sottotitolo        "## Parte" parte
//   "## " articolo         "### " sotto-articolo    "- " / "-- " elenco (livello 1/2)
//   "|a|b" riga di tabella (la prima è l'intestazione)   "!SIGN" blocco firme (solo documenti)
//   **testo** grassetto

export type Block =
  | { type: "title" | "subtitle" | "part" | "h2" | "h3" | "p"; text: string }
  | { type: "li"; level: 0 | 1; text: string }
  | { type: "table"; rows: string[][] }
  | { type: "sign" };

export function parseLegal(src: string): Block[] {
  const blocks: Block[] = [];
  for (const line of src.split("\n")) {
    if (!line.trim()) continue;
    const last = blocks[blocks.length - 1];
    if (line.startsWith("|")) {
      const cells = line.slice(1).split("|").map((c) => c.trim());
      if (last?.type === "table") last.rows.push(cells);
      else blocks.push({ type: "table", rows: [cells] });
    } else if (line.startsWith("# ")) blocks.push({ type: "title", text: line.slice(2) });
    else if (line.startsWith("@")) blocks.push({ type: "subtitle", text: line.slice(1) });
    else if (line.startsWith("## Parte")) blocks.push({ type: "part", text: line.slice(3) });
    else if (line.startsWith("### ")) blocks.push({ type: "h3", text: line.slice(4) });
    else if (line.startsWith("## ")) blocks.push({ type: "h2", text: line.slice(3) });
    else if (line.startsWith("-- ")) blocks.push({ type: "li", level: 1, text: line.slice(3) });
    else if (line.startsWith("- ")) blocks.push({ type: "li", level: 0, text: line.slice(2) });
    else if (line.trim() === "!SIGN") blocks.push({ type: "sign" });
    else blocks.push({ type: "p", text: line });
  }
  return blocks;
}

/** Spezza il testo in parti normali e in grassetto (**...**). */
export function splitBold(text: string): { text: string; bold: boolean }[] {
  return text
    .split(/(\*\*[^*]+\*\*)/)
    .filter(Boolean)
    .map((t) => (t.startsWith("**") ? { text: t.slice(2, -2), bold: true } : { text: t, bold: false }));
}

/** Id stabile per le ancore degli articoli, es. "4. Finalità e basi giuridiche" -> "art-4". */
export function anchorId(heading: string): string | undefined {
  const m = heading.match(/^(\d+(?:\.\d+)?)\./);
  return m ? `art-${m[1].replace(".", "-")}` : undefined;
}
