// Entry delle pagine legali (privacy/index.html, termini-e-condizioni/index.html).
// Il documento da mostrare è indicato da <body data-doc="...">.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Footer } from "./components/Footer";
import { LegalPage } from "./components/LegalPage";
import { Navbar } from "./components/Navbar";
import privacy from "./legal/privacy.txt?raw";
import termini from "./legal/termini-e-condizioni.txt?raw";

const DOCS: Record<string, { source: string; pdf: string }> = {
  privacy: { source: privacy, pdf: "/privacy-policy.pdf" },
  termini: { source: termini, pdf: "/termini-e-condizioni.pdf" },
};

const doc = DOCS[document.body.dataset.doc ?? ""] ?? DOCS.privacy;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar isHome={false} />
    <LegalPage source={doc.source} pdf={doc.pdf} />
    <Footer />
  </StrictMode>,
);
