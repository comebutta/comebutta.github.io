import { describe, expect, it } from "vitest";
import privacy from "./privacy.txt?raw";
import termini from "./termini-e-condizioni.txt?raw";
import { anchorId, parseLegal, splitBold } from "./parse";

describe("parseLegal", () => {
  it("riconosce titoli, elenchi, tabelle e firme", () => {
    const blocks = parseLegal("# T\n@sub\n## Parte I\n## 1. Art\n### 1.1 Sub\ntesto\n- a\n-- b\n|h1|h2\n|c1|c2\n!SIGN\n");
    expect(blocks.map((b) => b.type)).toEqual(["title", "subtitle", "part", "h2", "h3", "p", "li", "li", "table", "sign"]);
    expect(blocks[8]).toEqual({ type: "table", rows: [["h1", "h2"], ["c1", "c2"]] });
  });

  it("i testi reali hanno un titolo e articoli numerati", () => {
    for (const src of [privacy, termini]) {
      const blocks = parseLegal(src);
      expect(blocks[0].type).toBe("title");
      expect(blocks.filter((b) => b.type === "h2").length).toBeGreaterThan(10);
    }
  });
});

describe("helpers", () => {
  it("splitBold separa il grassetto", () => {
    expect(splitBold("a **b** c")).toEqual([
      { text: "a ", bold: false },
      { text: "b", bold: true },
      { text: " c", bold: false },
    ]);
  });

  it("anchorId usa il numero dell'articolo", () => {
    expect(anchorId("4. Finalità")).toBe("art-4");
    expect(anchorId("Parte II")).toBeUndefined();
  });
});
