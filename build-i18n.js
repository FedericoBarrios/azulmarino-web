/* ============================================================
   AZUL MARINO · Generador de versiones por idioma (SEO)
   ------------------------------------------------------------
   Toma las páginas en español (raíz) + las traducciones de
   script.js y genera copias ya traducidas en /en y /pt, con el
   texto "horneado" en el HTML (para Google), hreflang y canonical.

   USO:  node build-i18n.js
   (correr cada vez que cambien textos; el deploy es el de siempre)
   ============================================================ */
const fs = require("fs");
const path = require("path");

const root = __dirname;
const DOMAIN = "https://azulmarino.com.uy";
const LANGS = ["en", "pt"];
const PAGES = ["index.html", "habitacion.html", "politicas.html", "jose-ignacio.html"];

// --- Cargar el objeto I18N desde script.js ---
const scriptSrc = fs.readFileSync(path.join(root, "script.js"), "utf8");
const marker = "const I18N = {";
const start = scriptSrc.indexOf(marker);
let depth = 0, end = -1;
for (let j = start + marker.length - 1; j < scriptSrc.length; j++) {
  const c = scriptSrc[j];
  if (c === "{") depth++;
  else if (c === "}") { depth--; if (depth === 0) { end = j; break; } }
}
const I18N = eval("(" + scriptSrc.slice(start + marker.length - 1, end + 1) + ")");

// --- Títulos y descripciones por página e idioma ---
const META = {
  "index.html": {
    en: { title: "Azul Marino · Boutique Inn · José Ignacio, Uruguay", desc: "Azul Marino, boutique inn in José Ignacio. 12 exclusive suites where countryside, sand and sea meet. 400 m from the beach." },
    pt: { title: "Azul Marino · Pousada Boutique · José Ignacio, Uruguai", desc: "Azul Marino, pousada boutique em José Ignacio. 12 suítes exclusivas onde o campo, a areia e o mar se encontram. A 400 m da praia." },
  },
  "habitacion.html": {
    en: { title: "Room · Azul Marino", desc: "Suites at Azul Marino, boutique inn in José Ignacio." },
    pt: { title: "Quarto · Azul Marino", desc: "Suítes da Azul Marino, pousada boutique em José Ignacio." },
  },
  "politicas.html": {
    en: { title: "Rates & Policies · Azul Marino", desc: "Seasons, prices and cancellation policies at Azul Marino, inn in José Ignacio." },
    pt: { title: "Tarifas e Políticas · Azul Marino", desc: "Temporadas, preços e políticas de cancelamento da Azul Marino, pousada em José Ignacio." },
  },
  "jose-ignacio.html": {
    en: { title: "José Ignacio · Azul Marino", desc: "José Ignacio, Maldonado, Uruguay: beaches, the Lighthouse, gastronomy and activities. The area around Azul Marino." },
    pt: { title: "José Ignacio · Azul Marino", desc: "José Ignacio, Maldonado, Uruguai: praias, o Farol, gastronomia e atividades. A região onde fica a Azul Marino." },
  },
};
const CANON = { "index.html": "/", "habitacion.html": "/habitacion.html", "politicas.html": "/politicas.html", "jose-ignacio.html": "/jose-ignacio.html" };
const OG_LOCALE = { en: "en_US", pt: "pt_BR" };

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s) => esc(s).replace(/"/g, "&quot;");

function translate(html, lang) {
  const dict = I18N[lang] || {};
  // Texto de elementos con data-i18n
  for (const key of Object.keys(I18N.es)) {
    const val = dict[key];
    if (val === undefined) continue;
    const re = new RegExp('(<[^>]*\\sdata-i18n="' + key + '"[^>]*>)([^<]*)(<)', "g");
    html = html.replace(re, (m, p1, p2, p3) => p1 + esc(val) + p3);
  }
  // Atributos title traducidos (data-i18n-title)
  html = html.replace(/data-i18n-title="(\w+)"([^>]*?)\stitle="[^"]*"/g, (m, key, mid) => {
    const val = dict[key] !== undefined ? dict[key] : (I18N.es[key] || "");
    return 'data-i18n-title="' + key + '"' + mid + ' title="' + escAttr(val) + '"';
  });
  return html;
}

function buildPage(lang, page) {
  let html = fs.readFileSync(path.join(root, page), "utf8");
  const meta = META[page][lang];

  html = translate(html, lang);
  html = html.replace('<html lang="es">', '<html lang="' + lang + '">');
  html = html.replace(/<title>[^<]*<\/title>/, "<title>" + esc(meta.title) + "</title>");
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, (m, a, b) => a + escAttr(meta.desc) + b);
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, (m, a, b) => a + escAttr(meta.title) + b);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, (m, a, b) => a + escAttr(meta.desc) + b);
  html = html.replace(/(<meta property="og:locale" content=")[^"]*(")/, (m, a, b) => a + OG_LOCALE[lang] + b);
  html = html.replace(/content="assets\//g, 'content="' + DOMAIN + '/assets/');

  // canonical -> URL de esta versión
  const can = DOMAIN + "/" + lang + CANON[page];
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, (m, a, b) => a + can + b);

  // rutas de recursos (están en la raíz) -> subir un nivel
  html = html.replace(/href="styles\.css"/g, 'href="../styles.css"');
  html = html.replace(/src="script\.js"/g, 'src="../script.js"');
  html = html.replace(/src="config\.js"/g, 'src="../config.js"');
  html = html.replace(/href="favicon\.svg"/g, 'href="../favicon.svg"');
  html = html.replace(/(src|href)="assets\//g, '$1="../assets/'); // ej: logo del header

  const dir = path.join(root, lang);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, page), html, "utf8");
  console.log("  generado /" + lang + "/" + page);
}

// --- Generar todas las versiones ---
for (const lang of LANGS) for (const page of PAGES) buildPage(lang, page);

// --- sitemap.xml ---
const sitemapPages = ["index.html", "politicas.html", "jose-ignacio.html"];
const urls = [];
for (const page of sitemapPages) {
  urls.push(DOMAIN + CANON[page]);
  for (const lang of LANGS) urls.push(DOMAIN + "/" + lang + CANON[page]);
}
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => "  <url><loc>" + u + "</loc></url>").join("\n") +
  "\n</urlset>\n";
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap, "utf8");
console.log("  generado sitemap.xml (" + urls.length + " URLs)");

// --- robots.txt ---
fs.writeFileSync(path.join(root, "robots.txt"),
  "User-agent: *\nAllow: /\nSitemap: " + DOMAIN + "/sitemap.xml\n", "utf8");
console.log("  generado robots.txt");

console.log("Listo.");
