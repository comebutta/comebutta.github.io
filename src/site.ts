// Dati condivisi del sito: URL, contatti e dati societari (da visura camerale).
export const SITE_URL = "https://www.comebutta.com";
export const APP_URL = "https://app.comebutta.com";

export const CONTACTS = {
  phone: "+39 328 737 1221",
  telLink: "tel:+393287371221",
  whatsappLink: "https://wa.me/393287371221",
  email: "info@comebutta.com",
  pec: "amm.comebutta.srl@pec.it",
} as const;

export const COMPANY = {
  name: "Come Butta S.r.l.",
  address: "Corso Ventidue Marzo 30, 20135 Milano",
  vat: "14941800964",
  rea: "MI-2816931",
  capital: "€ 10.000 i.v.",
} as const;
