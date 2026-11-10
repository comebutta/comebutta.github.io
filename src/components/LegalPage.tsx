import { Download } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { anchorId, parseLegal, splitBold, type Block } from "../legal/parse";

// Rende cliccabili e-mail e siti citati nel testo.
const LINK_RE = /([\w.-]+@[\w-]+(?:\.[\w-]+)+|www\.[\w-]+(?:\.[\w-]+)+)/g;

function linkify(text: string): ReactNode[] {
  return text.split(LINK_RE).map((part, i) => {
    if (i % 2 === 0) return part;
    const href = part.includes("@") ? `mailto:${part}` : `https://${part}`;
    return (
      <a key={i} href={href} className="text-primary underline underline-offset-2 hover:text-dark-green">
        {part}
      </a>
    );
  });
}

function Inline({ text }: { text: string }) {
  return (
    <>
      {splitBold(text).map((s, i) =>
        s.bold ? <strong key={i} className="font-semibold text-dark-green">{linkify(s.text)}</strong> : <Fragment key={i}>{linkify(s.text)}</Fragment>,
      )}
    </>
  );
}

/** Raggruppa gli elementi di elenco consecutivi (con eventuale secondo livello). */
function renderBlocks(blocks: Block[]): ReactNode[] {
  const out: ReactNode[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.type === "li") {
      const items: { text: string; sub: string[] }[] = [];
      while (i < blocks.length && blocks[i].type === "li") {
        const li = blocks[i] as Extract<Block, { type: "li" }>;
        if (li.level === 1 && items.length) items[items.length - 1].sub.push(li.text);
        else items.push({ text: li.text, sub: [] });
        i++;
      }
      i--;
      out.push(
        <ul key={`ul-${i}`} className="mb-4 list-disc space-y-1.5 pl-6">
          {items.map((it, j) => (
            <li key={j}>
              <Inline text={it.text} />
              {it.sub.length > 0 && (
                <ul className="mt-1.5 list-[circle] space-y-1.5 pl-6">
                  {it.sub.map((s, k) => <li key={k}><Inline text={s} /></li>)}
                </ul>
              )}
            </li>
          ))}
        </ul>,
      );
      continue;
    }
    switch (b.type) {
      case "title":
      case "sign":
        break; // il titolo è reso nell'intestazione; le firme servono solo nel documento
      case "subtitle":
        out.push(<p key={i} className="mb-1 text-dark-green/70">{b.text}</p>);
        break;
      case "part":
        out.push(<h2 key={i} className="mt-14 mb-2 border-b border-dark-green/10 pb-3 text-2xl font-bold text-dark-green">{b.text}</h2>);
        break;
      case "h2":
        out.push(<h2 key={i} id={anchorId(b.text)} className="mt-10 mb-3 scroll-mt-20 text-xl font-bold text-dark-green">{b.text}</h2>);
        break;
      case "h3":
        out.push(<h3 key={i} className="mt-6 mb-2 text-lg font-semibold text-dark-green">{b.text}</h3>);
        break;
      case "p":
        out.push(<p key={i} className="mb-4"><Inline text={b.text} /></p>);
        break;
      case "table":
        out.push(
          <div key={i} className="mb-6 overflow-x-auto rounded-lg border border-dark-green/10">
            <table className="w-full text-left text-base">
              <thead className="bg-pale-green">
                <tr>{b.rows[0].map((c, j) => <th key={j} scope="col" className="p-3 font-semibold text-dark-green">{c}</th>)}</tr>
              </thead>
              <tbody>
                {b.rows.slice(1).map((r, j) => (
                  <tr key={j} className="border-t border-dark-green/10 align-top">
                    {r.map((c, k) => <td key={k} className="p-3"><Inline text={c} /></td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
        break;
    }
  }
  return out;
}

export function LegalPage({ source, pdf }: { source: string; pdf: string }) {
  const blocks = parseLegal(source);
  const title = blocks.find((b) => b.type === "title");
  return (
    <main className="bg-white px-4 py-12 sm:py-16">
      <article className="mx-auto max-w-[72ch] text-base leading-relaxed text-dark-green/90">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-dark-green sm:text-4xl">
          {title && "text" in title ? title.text : ""}
        </h1>
        {renderBlocks(blocks)}
        <p className="mt-12 border-t border-dark-green/10 pt-6">
          <a
            href={pdf}
            download
            className="inline-flex items-center gap-2 rounded-md border border-primary/30 px-4 py-2.5 font-medium text-primary hover:bg-pale-green focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Download className="h-4 w-4" aria-hidden />
            Scarica il PDF
          </a>
        </p>
      </article>
    </main>
  );
}
