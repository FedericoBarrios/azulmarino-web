/* ============================================================
   Azul Marino · Posada · Lógica del sitio
   - Traducciones ES / EN / PT
   - Cambio de idioma
   - Menú móvil + header con scroll
   - Reserva por WhatsApp
   ============================================================ */

// >>> Número de WhatsApp de la posada (formato internacional, sin + ni espacios)
const WHATSAPP_NUMBER = "59898949309";

/* ---------- TRADUCCIONES ---------- */
const I18N = {
  es: {
    logo_sub: "Posada · José Ignacio",
    nav_rooms: "Habitaciones", nav_services: "Servicios", nav_gallery: "Galería",
    nav_contact: "Contacto", nav_book: "Reservar",

    hero_eyebrow: "José Ignacio · Uruguay",
    hero_title: "Donde el campo, la arena y el mar se encuentran",
    hero_text: "12 suites exclusivas en una zona natural única, a 400 metros de la playa.",
    hero_cta: "Consultar disponibilidad",

    qb_checkin: "Llegada", qb_checkout: "Salida", qb_guests: "Huéspedes", qb_submit: "Consultar",

    intro_eyebrow: "Nuestra posada",
    intro_title: "Un refugio natural, operado por sus propietarios",
    intro_p1: "Azul Marino nació como pionera en la zona: un lugar donde el campo, la arena y el mar conviven en calma. Cada suite tiene acceso independiente y terraza exclusiva, pensada para tu privacidad.",
    intro_p2: "Estamos a 400 metros de la playa, a 2 km del pueblo de José Ignacio y a 5 km de la laguna Garzón. Un punto perfecto para descansar y explorar.",

    reasons_eyebrow: "Por qué Azul Marino",
    reasons_title: "Tres razones para quedarte",
    reason1_t: "Comodidad con privacidad",
    reason1_p: "Suites independientes con terraza propia. Tu espacio, sin interrupciones.",
    reason2_t: "Paz y naturaleza",
    reason2_p: "Pioneros en la zona, rodeados de campo, arena y mar en total tranquilidad.",
    reason3_t: "Servicio personalizado",
    reason3_p: "Operada por sus dueños, con atención a todos los detalles de tu estadía.",

    rooms_eyebrow: "Alojamiento",
    rooms_title: "Nuestras suites",
    rooms_lead: "Todas incluyen desayuno, servicio de limpieza y ropa blanca. Acceso independiente y terraza exclusiva.",
    room1_t: "Doble Jardín",
    room1_p: "Suite acogedora con vista y acceso al jardín. Ideal para una escapada tranquila.",
    room2_t: "Doble Superior",
    room2_p: "Más espacio y confort, con terraza privada y una ambientación luminosa.",
    room3_t: "Doble Superior + Jacuzzi",
    room3_p: "Nuestra suite más completa, con jacuzzi privado para una experiencia especial.",
    room_popular: "Más elegida", room_book: "Reservar esta suite",
    am_breakfast: "Desayuno incluido", am_terrace: "Terraza exclusiva", am_wifi: "WiFi gratis",
    am_space: "Mayor espacio", am_jacuzzi: "Jacuzzi privado",

    services_eyebrow: "Todo incluido",
    services_title: "Servicios de la posada",
    srv_breakfast: "Desayuno continental diario, con opciones sin gluten",
    srv_pool: "Piscina climatizada exterior",
    srv_bikes: "Bicicletas a disposición",
    srv_wifi: "WiFi gratuito",
    srv_parking: "Estacionamiento",
    srv_beach: "Sillas de playa y sombrillas",
    srv_towels: "Servicio de toallas",
    srv_lounge: "Salón con bar, living y estufa de leña",
    srv_advice: "Asesoramiento de restaurantes y actividades",

    gallery_eyebrow: "Galería",
    gallery_title: "Un vistazo a Azul Marino",

    book_eyebrow: "Reservá tu estadía",
    book_title: "Confirmá tu reserva por WhatsApp",
    book_text: "Completá el formulario y te llevamos directo a WhatsApp con tu pedido ya escrito. Te confirmamos disponibilidad y el mejor precio a la brevedad.",
    book_p1: "✓ Confirmación directa con los propietarios",
    book_p2: "✓ Mejor precio garantizado",
    book_p3: "✓ Sin cargos ni pagos online",
    f_name: "Nombre y apellido", f_room: "Habitación", f_room_any: "Sin preferencia",
    f_msg: "Comentarios (opcional)", f_submit: "Enviar por WhatsApp",

    contact_eyebrow: "Contacto",
    contact_title: "Estamos para ayudarte",
    contact_addr_t: "Dirección", contact_phone_t: "Teléfono",

    footer_tag: "Posada boutique en José Ignacio, Uruguay.",

    // Mensaje de WhatsApp
    wa_greeting: "¡Hola Azul Marino! Quisiera consultar disponibilidad.",
    wa_name: "Nombre", wa_checkin: "Llegada", wa_checkout: "Salida",
    wa_guests: "Huéspedes", wa_room: "Habitación", wa_comments: "Comentarios",
    alert_dates: "Por favor completá las fechas de llegada y salida.",
  },

  en: {
    logo_sub: "Inn · José Ignacio",
    nav_rooms: "Rooms", nav_services: "Services", nav_gallery: "Gallery",
    nav_contact: "Contact", nav_book: "Book now",

    hero_eyebrow: "José Ignacio · Uruguay",
    hero_title: "Where the countryside, the sand and the sea meet",
    hero_text: "12 exclusive suites in a unique natural setting, 400 metres from the beach.",
    hero_cta: "Check availability",

    qb_checkin: "Check-in", qb_checkout: "Check-out", qb_guests: "Guests", qb_submit: "Check",

    intro_eyebrow: "Our inn",
    intro_title: "A natural retreat, run by its owners",
    intro_p1: "Azul Marino was a pioneer in the area: a place where countryside, sand and sea coexist in calm. Every suite has its own private entrance and terrace, designed for your privacy.",
    intro_p2: "We are 400 metres from the beach, 2 km from the village of José Ignacio and 5 km from Garzón lagoon. A perfect base to rest and explore.",

    reasons_eyebrow: "Why Azul Marino",
    reasons_title: "Three reasons to stay",
    reason1_t: "Comfort with privacy",
    reason1_p: "Independent suites with their own terrace. Your space, uninterrupted.",
    reason2_t: "Peace and nature",
    reason2_p: "Pioneers in the area, surrounded by countryside, sand and sea in total calm.",
    reason3_t: "Personalised service",
    reason3_p: "Owner-run, with attention to every detail of your stay.",

    rooms_eyebrow: "Accommodation",
    rooms_title: "Our suites",
    rooms_lead: "All include breakfast, housekeeping and linens. Private entrance and exclusive terrace.",
    room1_t: "Garden Double",
    room1_p: "A cosy suite with garden views and access. Ideal for a peaceful getaway.",
    room2_t: "Superior Double",
    room2_p: "More space and comfort, with a private terrace and bright ambience.",
    room3_t: "Superior Double + Jacuzzi",
    room3_p: "Our most complete suite, with a private jacuzzi for a special experience.",
    room_popular: "Most popular", room_book: "Book this suite",
    am_breakfast: "Breakfast included", am_terrace: "Private terrace", am_wifi: "Free WiFi",
    am_space: "More space", am_jacuzzi: "Private jacuzzi",

    services_eyebrow: "All included",
    services_title: "Inn services",
    srv_breakfast: "Daily continental breakfast, with gluten-free options",
    srv_pool: "Heated outdoor pool",
    srv_bikes: "Bicycles available",
    srv_wifi: "Free WiFi",
    srv_parking: "Parking",
    srv_beach: "Beach chairs and umbrellas",
    srv_towels: "Towel service",
    srv_lounge: "Lounge with bar, living room and wood stove",
    srv_advice: "Restaurant and activity recommendations",

    gallery_eyebrow: "Gallery",
    gallery_title: "A glimpse of Azul Marino",

    book_eyebrow: "Book your stay",
    book_title: "Confirm your booking via WhatsApp",
    book_text: "Fill in the form and we'll take you straight to WhatsApp with your request ready. We'll confirm availability and the best price shortly.",
    book_p1: "✓ Direct confirmation with the owners",
    book_p2: "✓ Best price guaranteed",
    book_p3: "✓ No online charges or payments",
    f_name: "Full name", f_room: "Room", f_room_any: "No preference",
    f_msg: "Comments (optional)", f_submit: "Send via WhatsApp",

    contact_eyebrow: "Contact",
    contact_title: "We're here to help",
    contact_addr_t: "Address", contact_phone_t: "Phone",

    footer_tag: "Boutique inn in José Ignacio, Uruguay.",

    wa_greeting: "Hello Azul Marino! I'd like to check availability.",
    wa_name: "Name", wa_checkin: "Check-in", wa_checkout: "Check-out",
    wa_guests: "Guests", wa_room: "Room", wa_comments: "Comments",
    alert_dates: "Please fill in the check-in and check-out dates.",
  },

  pt: {
    logo_sub: "Pousada · José Ignacio",
    nav_rooms: "Quartos", nav_services: "Serviços", nav_gallery: "Galeria",
    nav_contact: "Contato", nav_book: "Reservar",

    hero_eyebrow: "José Ignacio · Uruguai",
    hero_title: "Onde o campo, a areia e o mar se encontram",
    hero_text: "12 suítes exclusivas em um cenário natural único, a 400 metros da praia.",
    hero_cta: "Ver disponibilidade",

    qb_checkin: "Chegada", qb_checkout: "Saída", qb_guests: "Hóspedes", qb_submit: "Consultar",

    intro_eyebrow: "Nossa pousada",
    intro_title: "Um refúgio natural, gerido pelos proprietários",
    intro_p1: "A Azul Marino nasceu como pioneira na região: um lugar onde campo, areia e mar convivem em calma. Cada suíte tem entrada independente e terraço exclusivo, pensados para a sua privacidade.",
    intro_p2: "Estamos a 400 metros da praia, a 2 km do povoado de José Ignacio e a 5 km da lagoa Garzón. Um ponto perfeito para descansar e explorar.",

    reasons_eyebrow: "Por que Azul Marino",
    reasons_title: "Três razões para ficar",
    reason1_t: "Conforto com privacidade",
    reason1_p: "Suítes independentes com terraço próprio. Seu espaço, sem interrupções.",
    reason2_t: "Paz e natureza",
    reason2_p: "Pioneiros na região, cercados por campo, areia e mar em total tranquilidade.",
    reason3_t: "Atendimento personalizado",
    reason3_p: "Gerida pelos donos, com atenção a todos os detalhes da sua estadia.",

    rooms_eyebrow: "Hospedagem",
    rooms_title: "Nossas suítes",
    rooms_lead: "Todas incluem café da manhã, limpeza e roupa de cama. Entrada independente e terraço exclusivo.",
    room1_t: "Duplo Jardim",
    room1_p: "Suíte aconchegante com vista e acesso ao jardim. Ideal para uma escapada tranquila.",
    room2_t: "Duplo Superior",
    room2_p: "Mais espaço e conforto, com terraço privativo e ambiente luminoso.",
    room3_t: "Duplo Superior + Jacuzzi",
    room3_p: "Nossa suíte mais completa, com jacuzzi privativo para uma experiência especial.",
    room_popular: "Mais escolhida", room_book: "Reservar esta suíte",
    am_breakfast: "Café da manhã incluído", am_terrace: "Terraço exclusivo", am_wifi: "WiFi grátis",
    am_space: "Mais espaço", am_jacuzzi: "Jacuzzi privativo",

    services_eyebrow: "Tudo incluído",
    services_title: "Serviços da pousada",
    srv_breakfast: "Café da manhã continental diário, com opções sem glúten",
    srv_pool: "Piscina aquecida externa",
    srv_bikes: "Bicicletas à disposição",
    srv_wifi: "WiFi gratuito",
    srv_parking: "Estacionamento",
    srv_beach: "Cadeiras de praia e guarda-sóis",
    srv_towels: "Serviço de toalhas",
    srv_lounge: "Salão com bar, living e lareira a lenha",
    srv_advice: "Recomendações de restaurantes e atividades",

    gallery_eyebrow: "Galeria",
    gallery_title: "Um olhar sobre a Azul Marino",

    book_eyebrow: "Reserve sua estadia",
    book_title: "Confirme sua reserva pelo WhatsApp",
    book_text: "Preencha o formulário e levamos você direto ao WhatsApp com o pedido já escrito. Confirmamos disponibilidade e o melhor preço em breve.",
    book_p1: "✓ Confirmação direta com os proprietários",
    book_p2: "✓ Melhor preço garantido",
    book_p3: "✓ Sem cobranças ou pagamentos online",
    f_name: "Nome completo", f_room: "Quarto", f_room_any: "Sem preferência",
    f_msg: "Comentários (opcional)", f_submit: "Enviar pelo WhatsApp",

    contact_eyebrow: "Contato",
    contact_title: "Estamos aqui para ajudar",
    contact_addr_t: "Endereço", contact_phone_t: "Telefone",

    footer_tag: "Pousada boutique em José Ignacio, Uruguai.",

    wa_greeting: "Olá Azul Marino! Gostaria de consultar a disponibilidade.",
    wa_name: "Nome", wa_checkin: "Chegada", wa_checkout: "Saída",
    wa_guests: "Hóspedes", wa_room: "Quarto", wa_comments: "Comentários",
    alert_dates: "Por favor, preencha as datas de chegada e saída.",
  },
};

let currentLang = "es";

/* ---------- Aplicar idioma ---------- */
function applyLang(lang) {
  if (!I18N[lang]) lang = "es";
  currentLang = lang;
  const dict = I18N[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  try { localStorage.setItem("azulmarino_lang", lang); } catch (e) {}
}

function t(key) { return (I18N[currentLang] && I18N[currentLang][key]) || I18N.es[key] || key; }

/* ---------- Construir y abrir WhatsApp ---------- */
function openWhatsApp({ name, checkin, checkout, guests, room, comments }) {
  const lines = [t("wa_greeting"), ""];
  if (name)     lines.push(`${t("wa_name")}: ${name}`);
  lines.push(`${t("wa_checkin")}: ${checkin}`);
  lines.push(`${t("wa_checkout")}: ${checkout}`);
  lines.push(`${t("wa_guests")}: ${guests}`);
  if (room)     lines.push(`${t("wa_room")}: ${room}`);
  if (comments) lines.push(`${t("wa_comments")}: ${comments}`);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank");
}

/* ---------- Inicialización ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // Idioma guardado o del navegador
  let saved;
  try { saved = localStorage.getItem("azulmarino_lang"); } catch (e) {}
  const browser = (navigator.language || "es").slice(0, 2);
  applyLang(saved || (I18N[browser] ? browser : "es"));

  // Botones de idioma
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.addEventListener("click", () => applyLang(b.dataset.lang));
  });

  // Header con scroll
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll);

  // Menú móvil
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

  // Año en footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Fecha mínima = hoy
  const today = new Date().toISOString().split("T")[0];
  document.querySelectorAll('input[type="date"]').forEach((i) => i.setAttribute("min", today));

  // Barra rápida -> pasa datos al formulario y baja a reservar
  document.getElementById("qbSubmit").addEventListener("click", () => {
    const ci = document.getElementById("qbCheckin").value;
    const co = document.getElementById("qbCheckout").value;
    const g  = document.getElementById("qbGuests").value;
    if (ci) document.getElementById("bfCheckin").value = ci;
    if (co) document.getElementById("bfCheckout").value = co;
    document.getElementById("bfGuests").value = g;
    document.getElementById("reservar").scrollIntoView({ behavior: "smooth" });
  });

  // Botones "Reservar esta suite" -> preseleccionan habitación
  document.querySelectorAll(".room-book").forEach((btn) => {
    btn.addEventListener("click", () => {
      const room = btn.getAttribute("data-room");
      const sel = document.getElementById("bfRoom");
      if (sel) sel.value = room;
      document.getElementById("reservar").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Envío del formulario -> WhatsApp
  document.getElementById("bookForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const checkin  = document.getElementById("bfCheckin").value;
    const checkout = document.getElementById("bfCheckout").value;
    if (!checkin || !checkout) { alert(t("alert_dates")); return; }

    openWhatsApp({
      name:     document.getElementById("bfName").value.trim(),
      checkin,
      checkout,
      guests:   document.getElementById("bfGuests").value,
      room:     document.getElementById("bfRoom").value,
      comments: document.getElementById("bfMsg").value.trim(),
    });
  });
});
