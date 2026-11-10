// Genera .docx (in ../legal) e .pdf (in public/) dai testi in src/legal/*.txt.
// Uso: npm run legal   (richiede Google Chrome installato, per la stampa in PDF)
// Il formato del markup è descritto in src/legal/parse.ts.
// Markup: "# " titolo, "@" sottotitolo, "## Parte" H1, "## " H2, "### " H3,
// "- " elenco, "-- " sotto-elenco, "|a|b" riga tabella (prima = intestazione),
// "!SIGN" blocco firme, **grassetto**.
const fs = require('fs');
const path = require('path');
const d = require('docx');

const FONT = 'Arial';
const FOOTER = 'Come Butta S.r.l. – Corso Ventidue Marzo 30, 20135 Milano – C.F./P.IVA 14941800964 – REA MI-2816931';

function runs(text, extra = {}) {
  return text.split(/(\*\*[^*]+\*\*)/).filter(Boolean).map((t) =>
    t.startsWith('**') ? new d.TextRun({ text: t.slice(2, -2), bold: true, ...extra }) : new d.TextRun({ text: t, ...extra }));
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const htmlInline = (s) => esc(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

function parse(src) {
  const blocks = [];
  for (const line of src.split('\n')) {
    if (!line.trim()) continue;
    const last = blocks[blocks.length - 1];
    if (line.startsWith('|')) {
      const cells = line.slice(1).split('|').map((c) => c.trim());
      if (last && last.type === 'table') last.rows.push(cells);
      else blocks.push({ type: 'table', rows: [cells] });
    } else if (line.startsWith('# ')) blocks.push({ type: 'title', text: line.slice(2) });
    else if (line.startsWith('@')) blocks.push({ type: 'subtitle', text: line.slice(1) });
    else if (line.startsWith('## Parte')) blocks.push({ type: 'h1', text: line.slice(3) });
    else if (line.startsWith('### ')) blocks.push({ type: 'h3', text: line.slice(4) });
    else if (line.startsWith('## ')) blocks.push({ type: 'h2', text: line.slice(3) });
    else if (line.startsWith('-- ')) blocks.push({ type: 'li', level: 1, text: line.slice(3) });
    else if (line.startsWith('- ')) blocks.push({ type: 'li', level: 0, text: line.slice(2) });
    else if (line.trim() === '!SIGN') blocks.push({ type: 'sign' });
    else blocks.push({ type: 'p', text: line });
  }
  return blocks;
}

function toDocx(blocks, title) {
  const W = 9638; // A4 con margini 2 cm
  const children = [];
  const border = { style: d.BorderStyle.SINGLE, size: 4, color: 'BFBFBF' };
  const borders = { top: border, bottom: border, left: border, right: border };
  for (const b of blocks) {
    if (b.type === 'title') children.push(new d.Paragraph({ heading: d.HeadingLevel.TITLE, children: [new d.TextRun(b.text)] }));
    else if (b.type === 'subtitle') children.push(new d.Paragraph({ spacing: { after: 60 }, children: [new d.TextRun({ text: b.text, italics: true, color: '595959' })] }));
    else if (b.type === 'h1') children.push(new d.Paragraph({ heading: d.HeadingLevel.HEADING_1, children: [new d.TextRun(b.text)] }));
    else if (b.type === 'h2') children.push(new d.Paragraph({ heading: d.HeadingLevel.HEADING_2, children: [new d.TextRun(b.text)] }));
    else if (b.type === 'h3') children.push(new d.Paragraph({ heading: d.HeadingLevel.HEADING_3, children: [new d.TextRun(b.text)] }));
    else if (b.type === 'li') children.push(new d.Paragraph({ numbering: { reference: 'bullets', level: b.level }, alignment: d.AlignmentType.JUSTIFIED, children: runs(b.text) }));
    else if (b.type === 'p') children.push(new d.Paragraph({ alignment: d.AlignmentType.JUSTIFIED, children: runs(b.text) }));
    else if (b.type === 'table') {
      const cols = [Math.round(W * 0.45), W - Math.round(W * 0.45)];
      children.push(new d.Table({
        width: { size: W, type: d.WidthType.DXA }, columnWidths: cols,
        rows: b.rows.map((r, i) => new d.TableRow({
          tableHeader: i === 0,
          children: r.map((c, j) => new d.TableCell({
            width: { size: cols[j], type: d.WidthType.DXA }, borders,
            margins: { top: 80, bottom: 80, left: 120, right: 120 },
            shading: i === 0 ? { type: d.ShadingType.CLEAR, color: 'auto', fill: 'E8F0EA' } : undefined,
            children: [new d.Paragraph({ spacing: { after: 0 }, children: runs(c, i === 0 ? { bold: true } : {}) })],
          })),
        })),
      }));
      children.push(new d.Paragraph({ spacing: { after: 0 }, children: [] }));
    } else if (b.type === 'sign') {
      children.push(new d.Paragraph({ spacing: { before: 480 }, children: [new d.TextRun('Luogo e data: ______________________________')] }));
      children.push(new d.Paragraph({ spacing: { before: 360 }, children: [new d.TextRun('Il Cliente (timbro e firma del legale rappresentante): ______________________________')] }));
    }
  }
  const hd = (size, before, after, color) => ({ run: { font: FONT, size, bold: true, color }, paragraph: { spacing: { before, after }, keepNext: true } });
  return new d.Document({
    creator: 'Come Butta S.r.l.', title,
    styles: {
      default: { document: { run: { font: FONT, size: 20 }, paragraph: { spacing: { after: 120, line: 276 } } } },
      paragraphStyles: [
        { id: 'Title', name: 'Title', basedOn: 'Normal', run: { font: FONT, size: 40, bold: true, color: '1F3B2D' }, paragraph: { spacing: { before: 0, after: 120 } } },
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, ...hd(28, 360, 120, '1F3B2D'), paragraph: { spacing: { before: 360, after: 120 }, keepNext: true, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, ...hd(23, 240, 80, '2E5A43'), paragraph: { spacing: { before: 240, after: 80 }, keepNext: true, outlineLevel: 1 } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, ...hd(21, 160, 60, '404040'), paragraph: { spacing: { before: 160, after: 60 }, keepNext: true, outlineLevel: 2 } },
      ],
    },
    numbering: { config: [{ reference: 'bullets', levels: [
      { level: 0, format: d.LevelFormat.BULLET, text: '•', alignment: d.AlignmentType.LEFT, style: { paragraph: { indent: { left: 567, hanging: 283 } } } },
      { level: 1, format: d.LevelFormat.BULLET, text: '–', alignment: d.AlignmentType.LEFT, style: { paragraph: { indent: { left: 1134, hanging: 283 } } } },
    ] }] },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } },
      footers: { default: new d.Footer({ children: [new d.Paragraph({ alignment: d.AlignmentType.CENTER, children: [
        new d.TextRun({ text: FOOTER + '   |   pag. ', size: 14, color: '7F7F7F' }),
        new d.TextRun({ children: [d.PageNumber.CURRENT], size: 14, color: '7F7F7F' }),
      ] })] }) },
      children,
    }],
  });
}

function toHtml(blocks, title) {
  const out = [];
  let list = null;
  const closeList = () => { if (list !== null) { out.push(list === 1 ? '</ul></li></ul>' : '</ul>'); list = null; } };
  for (const b of blocks) {
    if (b.type === 'li') {
      if (list === null) { out.push('<ul>'); list = 0; }
      if (b.level === 1 && list === 0) { out.push('<ul>'); list = 1; }
      if (b.level === 0 && list === 1) { out.push('</ul>'); list = 0; }
      out.push(`<li>${htmlInline(b.text)}</li>`);
      continue;
    }
    closeList();
    if (b.type === 'title') out.push(`<h1>${esc(b.text)}</h1>`);
    else if (b.type === 'subtitle') out.push(`<p class="sub">${esc(b.text)}</p>`);
    else if (b.type === 'h1') out.push(`<h2 class="part">${esc(b.text)}</h2>`);
    else if (b.type === 'h2') out.push(`<h2>${esc(b.text)}</h2>`);
    else if (b.type === 'h3') out.push(`<h3>${esc(b.text)}</h3>`);
    else if (b.type === 'p') out.push(`<p>${htmlInline(b.text)}</p>`);
    else if (b.type === 'table') out.push('<table>' + b.rows.map((r, i) => '<tr>' + r.map((c) => `<${i ? 'td' : 'th'}>${htmlInline(c)}</${i ? 'td' : 'th'}>`).join('') + '</tr>').join('') + '</table>');
    else if (b.type === 'sign') out.push('<p class="sign">Luogo e data: ______________________________</p><p class="sign">Il Cliente (timbro e firma del legale rappresentante): ______________________________</p>');
  }
  closeList();
  return `<!doctype html><html lang="it"><head><meta charset="utf-8"><title>${esc(title)}</title><style>
@page{size:A4;margin:20mm 20mm 22mm;@bottom-center{content:"${FOOTER} | pag. " counter(page);font:7pt Arial;color:#7f7f7f}}
body{font:10pt/1.45 Arial,sans-serif;color:#222}h1{font-size:20pt;color:#1f3b2d;margin:0 0 6pt}
h2{font-size:11.5pt;color:#2e5a43;margin:14pt 0 4pt;break-after:avoid}h2.part{font-size:14pt;color:#1f3b2d;margin-top:20pt}
h3{font-size:10.5pt;color:#404040;margin:9pt 0 3pt;break-after:avoid}p{margin:0 0 6pt;text-align:justify}.sub{font-style:italic;color:#595959;margin:0 0 3pt}
ul{margin:0 0 6pt;padding-left:22pt}li{margin:0 0 3pt;text-align:justify}table{border-collapse:collapse;width:100%;margin:4pt 0 10pt}
th,td{border:1px solid #bfbfbf;padding:4pt 6pt;vertical-align:top;text-align:left}th{background:#e8f0ea}tr{break-inside:avoid}.sign{margin-top:24pt}
</style></head><body>${out.join('\n')}</body></html>`;
}

const { execFileSync } = require('child_process');
const os = require('os');
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const ROOT = path.resolve(__dirname, '..');
const DOCS = [
  { src: 'privacy.txt', docx: 'Privacy_Policy_ComeButta.docx', pdf: 'privacy-policy.pdf', title: 'Informativa sulla privacy – Come Butta' },
  { src: 'termini-e-condizioni.txt', docx: 'Termini_e_Condizioni_ComeButta.docx', pdf: 'termini-e-condizioni.pdf', title: 'Termini e Condizioni – Come Butta' },
];

(async () => {
  const outDocx = path.resolve(ROOT, '..', 'legal');
  fs.mkdirSync(outDocx, { recursive: true });
  for (const doc of DOCS) {
    const blocks = parse(fs.readFileSync(path.join(ROOT, 'src/legal', doc.src), 'utf8'));
    fs.writeFileSync(path.join(outDocx, doc.docx), await d.Packer.toBuffer(toDocx(blocks, doc.title)));
    const tmp = path.join(os.tmpdir(), `legal-${Date.now()}.html`);
    fs.writeFileSync(tmp, toHtml(blocks, doc.title));
    execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', `--print-to-pdf=${path.join(ROOT, 'public', doc.pdf)}`, `file://${tmp}`], { stdio: 'ignore' });
    fs.unlinkSync(tmp);
    console.log('ok', doc.docx, doc.pdf);
  }
})();
