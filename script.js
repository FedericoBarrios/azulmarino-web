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
    nav_home: "Inicio", nav_jose: "José Ignacio",

    hero_eyebrow: "José Ignacio · Uruguay",
    hero_title: "Donde el campo, la arena y el mar se encuentran",
    hero_text: "12 suites exclusivas en una zona natural única, a 400 metros de la playa.",
    hero_cta: "Consultar disponibilidad",

    qb_checkin: "Llegada", qb_checkout: "Salida", qb_guests: "Huéspedes", qb_submit: "Consultar",

    intro_eyebrow: "Nuestra posada",
    intro_title: "Paz & naturaleza",
    intro_p1: "La Posada Azul Marino ofrece 12 suites exclusivas en medio de una zona natural muy atractiva de José Ignacio, donde el campo, la arena y el mar se fusionan de forma única. Se encuentra a tan solo 400 mts de la playa, 2 km del pueblo de José Ignacio y 5 km de la laguna Garzón.",
    intro_p2: "Es atendida por sus propios dueños, lo que hace que nuestro huésped disfrute de su estadía con las mejores recomendaciones de la zona.",
    about2_p1: "Todos los días se sirve un desayuno continental con frutas, panes y zumos naturales (opciones sin gluten).",
    about2_p2: "Contamos con un salón principal donde están la recepción, el bar y el living con TV y estufa a leña. También ofrecemos piscina climatizada al aire libre, bicicletas y estacionamiento.",
    about2_highlight: "Te aseguramos tranquilidad, privacidad y confort.",

    reasons_eyebrow: "Por qué Azul Marino",
    reasons_title: "¿Por qué elegir Azul Marino?",
    reason1_t: "Comodidad",
    reason1_p: "12 habitaciones con acceso independiente (sin pasar por recepción) y terraza exclusiva. Tranquilidad, privacidad y confort garantizado.",
    reason2_t: "Paz y naturaleza",
    reason2_p: "Pioneros en la zona, siendo la primera posada en Arenas de José Ignacio. Atendida por sus propios dueños.",
    reason3_t: "Servicio personalizado",
    reason3_p: "Nuestra atención a todos los detalles hará que tu estadía sea 100% confortable. Asesoramiento y gestión de reservas en restoranes, actividades y paseos.",

    rooms_eyebrow: "Alojamiento",
    rooms_title: "Las habitaciones",
    rooms_lead: "Todas las habitaciones incluyen desayuno continental, servicio de mucama y ropa blanca.",
    room1_t: "Doble Jardín",
    room1_p: "Suite acogedora con vista y acceso al jardín. Ideal para una escapada tranquila.",
    room2_t: "Doble Superior",
    room2_p: "Más espacio y confort, con terraza privada y una ambientación luminosa.",
    room3_t: "Doble Superior + Jacuzzi",
    room3_p: "Nuestra suite más completa, con jacuzzi privado para una experiencia especial.",
    room_popular: "Más elegida", room_book: "Reservar esta suite", room_reserve: "Reservar",
    am_breakfast: "Desayuno incluido", am_terrace: "Terraza exclusiva", am_wifi: "WiFi gratis",
    am_space: "Mayor espacio", am_jacuzzi: "Jacuzzi privado",
    am_cleaning: "Servicio de limpieza", am_linens: "Ropa blanca incluida", am_access: "Acceso independiente",
    room_view: "Ver habitación", room_amen_title: "Servicios de la suite",
    back_home: "← Volver al inicio", room_photos: "Fotos de la suite",
    nav_rates: "Tarifas y políticas",
    price_estimate: "Precio estimado",
    price_invalid: "La salida debe ser posterior a la llegada.",
    price_closed: "La posada está cerrada en junio, julio y agosto.",
    price_pick_room: "Elegí una habitación para ver el precio.",
    price_consult: "Consultanos el precio para estas fechas.",
    night: "noche", nights: "noches",
    pol_title: "Tarifas y Políticas",
    pol_intro: "Toda la información sobre temporadas, precios y cancelaciones de Azul Marino.",
    pol_price_title: "Precios",
    pol_price_text: "El precio depende de la temporada y la disponibilidad. Escribinos por WhatsApp con tus fechas y te confirmamos la tarifa y la reserva.",
    pol_seasons_title: "Temporadas y cancelación",
    pol_closed_title: "Temporada de cierre",
    pol_closed_text: "La posada permanece cerrada durante junio, julio y agosto.",
    pol_dates: "Fechas", pol_cancel: "Cancelación",
    ji_eyebrow: "El lugar",
    ji_title: "José Ignacio",
    ji_p1: "José Ignacio es un balneario ubicado en Maldonado, Uruguay, a 20 minutos de Punta del Este. Es una pequeña península que se interna en el mar a lo largo de sus dos kilómetros de largo y 800 metros de ancho. De un lado, mirando al Oeste, está la Playa Mansa, con sus pequeños barcos pesqueros y sus mágicos atardeceres. Del otro, al Este, la Playa Brava, ancha y de imponentes olas.",
    ji_p2: "Un pueblo seductor y delicado, ideal para disfrutar de un buen descanso. Un balneario donde la tranquilidad y la paz solo son interrumpidas por el viento: «aquí solo corre el viento», se suele decir.",
    ji_p3: "El Faro, símbolo del lugar, fue construido en 1877 en el extremo más saliente y rocoso de la península. Se puede visitar a diario y apreciar desde la altura las bellezas del lugar.",
    ji_p4: "Un complemento para el viajero es la gastronomía: sus restaurantes son un polo de atracción para quienes buscan los mejores frutos del mar y platos originales y de tendencia.",
    ji_p5: "Las playas hacen del lugar un paraíso, ideal para la práctica de deportes como surf, kite y vela.",
    ji_activities_title: "Durante tu estadía podrás disfrutar de actividades como",
    act_1: "Cabalgatas", act_2: "Paseos en bici", act_3: "Caminatas", act_4: "Fogones",
    act_5: "Pesca", act_6: "Bodegas", act_7: "Clases de surf", act_8: "Yoga",
    act_9: "Galerías de arte", act_10: "Gastronomía", act_11: "Lagunas", act_12: "El Faro",
    room1_long: "Una suite luminosa con acceso directo al jardín y terraza propia, pensada para desconectar. Cama doble confortable, baño privado y todos los detalles para una estadía tranquila a pocos metros de la playa.",
    room2_long: "Nuestra suite de mayor espacio y confort, con terraza privada y una ambientación luminosa y serena. Ideal para quienes buscan un plus de comodidad sin resignar la privacidad que caracteriza a Azul Marino.",
    room3_long: "La experiencia más completa: una suite amplia con jacuzzi privado para relajarte después de un día de playa. Terraza exclusiva, acceso independiente y la atención personalizada de la posada.",

    services_eyebrow: "Servicios",
    services_title: "Servicios de la posada",
    services_lead: "Para nosotros, tu confort es nuestro mayor placer.",
    srv_breakfast: "Desayuno continental incluido, en el bar o en tu habitación sin cargo (opciones sin gluten)",
    srv_pool: "Piscina abierta climatizada",
    srv_bikes: "Bicicletas a disposición",
    srv_wifi: "WiFi gratis en toda la posada",
    srv_parking: "Estacionamiento",
    srv_beach: "Sillas y sombrillas para la playa",
    srv_towels: "Servicio de toallas",
    srv_lounge: "Living con bar, estufa a leña y TV",
    srv_advice: "Asesoramiento y gestión de reservas en restoranes, actividades y paseos",
    services_plus: "Y además...",
    srv_chairs: "Sillas para playa", srv_umbrellas: "Sombrillas",
    srv_feat_breakfast_t: "Desayuno incluido",
    srv_feat_breakfast_p: "Olvidate de salir a buscar dónde desayunar: está incluido, en el bar o en tu habitación sin cargo.",
    srv_feat_bar_t: "Bar",
    srv_feat_bar_p: "Nada mejor que un bar a pocos pasos de la habitación. Tragos, bebidas y más.",
    testi_eyebrow: "Testimonios",
    testi_title: "Lo que dicen nuestros huéspedes",

    gallery_eyebrow: "Galería",
    gallery_title: "Un vistazo a Azul Marino",

    book_eyebrow: "Reservá tu estadía",
    book_title: "Confirmá tu reserva por WhatsApp",
    book_text: "Completá el formulario y te llevamos directo a WhatsApp con tu pedido ya escrito. Te confirmamos disponibilidad y el mejor precio a la brevedad.",
    book_p1: "✓ Confirmación directa con los propietarios",
    book_p2: "✓ Mejor precio garantizado",
    book_p3: "✓ Sin cargos ni pagos online",
    f_name: "Nombre y apellido", f_room: "Habitación", f_room_any: "Sin preferencia",
    f_email: "Email", f_phone: "Teléfono", f_country: "País de residencia",
    wa_email: "Email", wa_phone: "Teléfono", wa_country: "País de residencia",
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
    nav_home: "Home", nav_jose: "José Ignacio",

    hero_eyebrow: "José Ignacio · Uruguay",
    hero_title: "Where the countryside, the sand and the sea meet",
    hero_text: "12 exclusive suites in a unique natural setting, 400 metres from the beach.",
    hero_cta: "Check availability",

    qb_checkin: "Check-in", qb_checkout: "Check-out", qb_guests: "Guests", qb_submit: "Check",

    intro_eyebrow: "Our inn",
    intro_title: "Peace & nature",
    intro_p1: "Posada Azul Marino offers 12 exclusive suites within a beautiful natural area of José Ignacio, where countryside, sand and sea blend in a unique way. It sits just 400 m from the beach, 2 km from the village of José Ignacio and 5 km from Garzón lagoon.",
    intro_p2: "It is run by its own owners, so our guests enjoy their stay with the best local recommendations.",
    about2_p1: "Every day we serve a continental breakfast with fruit, breads and fresh juices (gluten-free options).",
    about2_p2: "There is a main lounge with the reception, the bar and a living room with TV and a wood stove. We also offer a heated outdoor pool, bicycles and parking.",
    about2_highlight: "We guarantee calm, privacy and comfort.",

    reasons_eyebrow: "Why Azul Marino",
    reasons_title: "Why choose Azul Marino?",
    reason1_t: "Comfort",
    reason1_p: "12 rooms with private entrance (no need to pass through reception) and an exclusive terrace. Calm, privacy and comfort guaranteed.",
    reason2_t: "Peace and nature",
    reason2_p: "Pioneers in the area — the first inn in Arenas de José Ignacio. Run by its own owners.",
    reason3_t: "Personalised service",
    reason3_p: "Our attention to every detail makes your stay 100% comfortable. Advice and booking of restaurants, activities and tours.",

    rooms_eyebrow: "Accommodation",
    rooms_title: "The rooms",
    rooms_lead: "All rooms include continental breakfast, housekeeping and linens.",
    room1_t: "Garden Double",
    room1_p: "A cosy suite with garden views and access. Ideal for a peaceful getaway.",
    room2_t: "Superior Double",
    room2_p: "More space and comfort, with a private terrace and bright ambience.",
    room3_t: "Superior Double + Jacuzzi",
    room3_p: "Our most complete suite, with a private jacuzzi for a special experience.",
    room_popular: "Most popular", room_book: "Book this suite", room_reserve: "Book",
    am_breakfast: "Breakfast included", am_terrace: "Private terrace", am_wifi: "Free WiFi",
    am_space: "More space", am_jacuzzi: "Private jacuzzi",
    am_cleaning: "Housekeeping", am_linens: "Linens included", am_access: "Private entrance",
    room_view: "View room", room_amen_title: "Suite amenities",
    back_home: "← Back to home", room_photos: "Suite photos",
    nav_rates: "Rates & policies",
    price_estimate: "Estimated price",
    price_invalid: "Check-out must be after check-in.",
    price_closed: "The inn is closed in June, July and August.",
    price_pick_room: "Choose a room to see the price.",
    price_consult: "Ask us the price for these dates.",
    night: "night", nights: "nights",
    pol_title: "Rates & Policies",
    pol_intro: "Everything about Azul Marino's seasons, prices and cancellations.",
    pol_price_title: "Prices",
    pol_price_text: "Prices depend on the season and availability. Message us on WhatsApp with your dates and we'll confirm the rate and your booking.",
    pol_seasons_title: "Seasons & cancellation",
    pol_closed_title: "Closing season",
    pol_closed_text: "The inn remains closed during June, July and August.",
    pol_dates: "Dates", pol_cancel: "Cancellation",
    ji_eyebrow: "The place",
    ji_title: "José Ignacio",
    ji_p1: "José Ignacio is a seaside town in Maldonado, Uruguay, 20 minutes from Punta del Este. It's a small peninsula reaching into the sea, two kilometres long and 800 metres wide. To the West lies Playa Mansa, with its small fishing boats and magical sunsets; to the East, Playa Brava, wide and with impressive waves.",
    ji_p2: "A charming, delicate village, ideal for a proper rest — a place where calm and peace are interrupted only by the wind: “here only the wind blows,” people like to say.",
    ji_p3: "The Lighthouse, symbol of the town, was built in 1877 on the rocky tip of the peninsula. It can be visited daily, with beautiful views from the top.",
    ji_p4: "Gastronomy is a highlight for travellers: its restaurants draw those seeking the best seafood and original, on-trend dishes.",
    ji_p5: "The beaches make it a paradise, ideal for surfing, kitesurfing and sailing.",
    ji_activities_title: "During your stay you can enjoy activities such as",
    act_1: "Horseback riding", act_2: "Bike rides", act_3: "Hikes", act_4: "Campfires",
    act_5: "Fishing", act_6: "Wineries", act_7: "Surf lessons", act_8: "Yoga",
    act_9: "Art galleries", act_10: "Gastronomy", act_11: "Lagoons", act_12: "The Lighthouse",
    room1_long: "A bright suite with direct garden access and its own terrace, made for switching off. Comfortable double bed, private bathroom and every detail for a peaceful stay just steps from the beach.",
    room2_long: "Our most spacious and comfortable suite, with a private terrace and a bright, serene atmosphere. Ideal for those seeking extra comfort without giving up the privacy that defines Azul Marino.",
    room3_long: "The most complete experience: a spacious suite with a private jacuzzi to unwind after a day at the beach. Exclusive terrace, private entrance and the inn's personalised service.",

    services_eyebrow: "Services",
    services_title: "Inn services",
    services_lead: "For us, your comfort is our greatest pleasure.",
    srv_breakfast: "Continental breakfast included, at the bar or in your room at no charge (gluten-free options)",
    srv_pool: "Open heated pool",
    srv_bikes: "Bicycles available",
    srv_wifi: "Free WiFi throughout the inn",
    srv_parking: "Parking",
    srv_beach: "Beach chairs and umbrellas",
    srv_towels: "Towel service",
    srv_lounge: "Living room with bar, wood stove and TV",
    srv_advice: "Advice and booking of restaurants, activities and tours",
    services_plus: "And more...",
    srv_chairs: "Beach chairs", srv_umbrellas: "Beach umbrellas",
    srv_feat_breakfast_t: "Breakfast included",
    srv_feat_breakfast_p: "No need to head out for breakfast: it's included, at the bar or in your room at no charge.",
    srv_feat_bar_t: "Bar",
    srv_feat_bar_p: "Nothing better than a bar just steps from your room. Cocktails, drinks and more.",
    testi_eyebrow: "Testimonials",
    testi_title: "What our guests say",

    gallery_eyebrow: "Gallery",
    gallery_title: "A glimpse of Azul Marino",

    book_eyebrow: "Book your stay",
    book_title: "Confirm your booking via WhatsApp",
    book_text: "Fill in the form and we'll take you straight to WhatsApp with your request ready. We'll confirm availability and the best price shortly.",
    book_p1: "✓ Direct confirmation with the owners",
    book_p2: "✓ Best price guaranteed",
    book_p3: "✓ No online charges or payments",
    f_name: "Full name", f_room: "Room", f_room_any: "No preference",
    f_email: "Email", f_phone: "Phone", f_country: "Country of residence",
    wa_email: "Email", wa_phone: "Phone", wa_country: "Country of residence",
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
    nav_home: "Início", nav_jose: "José Ignacio",

    hero_eyebrow: "José Ignacio · Uruguai",
    hero_title: "Onde o campo, a areia e o mar se encontram",
    hero_text: "12 suítes exclusivas em um cenário natural único, a 400 metros da praia.",
    hero_cta: "Ver disponibilidade",

    qb_checkin: "Chegada", qb_checkout: "Saída", qb_guests: "Hóspedes", qb_submit: "Consultar",

    intro_eyebrow: "Nossa pousada",
    intro_title: "Paz & natureza",
    intro_p1: "A Posada Azul Marino oferece 12 suítes exclusivas em meio a uma zona natural muito atraente de José Ignacio, onde o campo, a areia e o mar se fundem de forma única. Fica a apenas 400 m da praia, 2 km do povoado de José Ignacio e 5 km da lagoa Garzón.",
    intro_p2: "É atendida pelos próprios donos, o que faz com que nosso hóspede aproveite a estadia com as melhores recomendações da região.",
    about2_p1: "Todos os dias servimos um café da manhã continental com frutas, pães e sucos naturais (opções sem glúten).",
    about2_p2: "Temos um salão principal com a recepção, o bar e o living com TV e lareira a lenha. Também oferecemos piscina aquecida ao ar livre, bicicletas e estacionamento.",
    about2_highlight: "Garantimos tranquilidade, privacidade e conforto.",

    reasons_eyebrow: "Por que Azul Marino",
    reasons_title: "Por que escolher a Azul Marino?",
    reason1_t: "Conforto",
    reason1_p: "12 quartos com entrada independente (sem passar pela recepção) e terraço exclusivo. Tranquilidade, privacidade e conforto garantidos.",
    reason2_t: "Paz e natureza",
    reason2_p: "Pioneiros na região, sendo a primeira pousada em Arenas de José Ignacio. Atendida pelos próprios donos.",
    reason3_t: "Atendimento personalizado",
    reason3_p: "Nossa atenção a todos os detalhes fará sua estadia 100% confortável. Assessoria e reservas em restaurantes, atividades e passeios.",

    rooms_eyebrow: "Hospedagem",
    rooms_title: "Os quartos",
    rooms_lead: "Todos os quartos incluem café da manhã continental, serviço de limpeza e roupa de cama.",
    room1_t: "Duplo Jardim",
    room1_p: "Suíte aconchegante com vista e acesso ao jardim. Ideal para uma escapada tranquila.",
    room2_t: "Duplo Superior",
    room2_p: "Mais espaço e conforto, com terraço privativo e ambiente luminoso.",
    room3_t: "Duplo Superior + Jacuzzi",
    room3_p: "Nossa suíte mais completa, com jacuzzi privativo para uma experiência especial.",
    room_popular: "Mais escolhida", room_book: "Reservar esta suíte", room_reserve: "Reservar",
    am_breakfast: "Café da manhã incluído", am_terrace: "Terraço exclusivo", am_wifi: "WiFi grátis",
    am_space: "Mais espaço", am_jacuzzi: "Jacuzzi privativo",
    am_cleaning: "Serviço de limpeza", am_linens: "Roupa de cama incluída", am_access: "Entrada independente",
    room_view: "Ver quarto", room_amen_title: "Comodidades da suíte",
    back_home: "← Voltar ao início", room_photos: "Fotos da suíte",
    nav_rates: "Tarifas e políticas",
    price_estimate: "Preço estimado",
    price_invalid: "A saída deve ser posterior à chegada.",
    price_closed: "A pousada está fechada em junho, julho e agosto.",
    price_pick_room: "Escolha um quarto para ver o preço.",
    price_consult: "Consulte o preço para estas datas.",
    night: "noite", nights: "noites",
    pol_title: "Tarifas e Políticas",
    pol_intro: "Tudo sobre temporadas, preços e cancelamentos da Azul Marino.",
    pol_price_title: "Preços",
    pol_price_text: "Os preços dependem da temporada e da disponibilidade. Escreva pelo WhatsApp com suas datas e confirmamos a tarifa e a reserva.",
    pol_seasons_title: "Temporadas e cancelamento",
    pol_closed_title: "Temporada de fechamento",
    pol_closed_text: "A pousada permanece fechada durante junho, julho e agosto.",
    pol_dates: "Datas", pol_cancel: "Cancelamento",
    ji_eyebrow: "O lugar",
    ji_title: "José Ignacio",
    ji_p1: "José Ignacio é um balneário em Maldonado, Uruguai, a 20 minutos de Punta del Este. É uma pequena península que entra no mar ao longo de seus dois quilômetros de comprimento e 800 metros de largura. De um lado, a Oeste, a Playa Mansa, com seus pequenos barcos de pesca e pores do sol mágicos; do outro, a Leste, a Playa Brava, larga e de ondas imponentes.",
    ji_p2: "Um povoado sedutor e delicado, ideal para um bom descanso. Um balneário onde a tranquilidade e a paz só são interrompidas pelo vento: «aqui só corre o vento», costuma-se dizer.",
    ji_p3: "O Farol, símbolo do lugar, foi construído em 1877 na ponta rochosa da península. Pode ser visitado diariamente, com belas vistas do alto.",
    ji_p4: "A gastronomia é um complemento para o viajante: seus restaurantes atraem quem busca os melhores frutos do mar e pratos originais e de tendência.",
    ji_p5: "As praias fazem do lugar um paraíso, ideal para surfe, kite e vela.",
    ji_activities_title: "Durante sua estadia você poderá desfrutar de atividades como",
    act_1: "Cavalgadas", act_2: "Passeios de bike", act_3: "Caminhadas", act_4: "Fogueiras",
    act_5: "Pesca", act_6: "Vinícolas", act_7: "Aulas de surfe", act_8: "Yoga",
    act_9: "Galerias de arte", act_10: "Gastronomia", act_11: "Lagoas", act_12: "O Farol",
    room1_long: "Uma suíte luminosa com acesso direto ao jardim e terraço próprio, pensada para desconectar. Cama de casal confortável, banheiro privativo e todos os detalhes para uma estadia tranquila a poucos metros da praia.",
    room2_long: "Nossa suíte com mais espaço e conforto, com terraço privativo e um ambiente luminoso e sereno. Ideal para quem busca um conforto extra sem abrir mão da privacidade que caracteriza a Azul Marino.",
    room3_long: "A experiência mais completa: uma suíte ampla com jacuzzi privativo para relaxar depois de um dia de praia. Terraço exclusivo, entrada independente e o atendimento personalizado da pousada.",

    services_eyebrow: "Serviços",
    services_title: "Serviços da pousada",
    services_lead: "Para nós, o seu conforto é o nosso maior prazer.",
    srv_breakfast: "Café da manhã continental incluído, no bar ou no seu quarto sem custo (opções sem glúten)",
    srv_pool: "Piscina aberta aquecida",
    srv_bikes: "Bicicletas à disposição",
    srv_wifi: "WiFi grátis em toda a pousada",
    srv_parking: "Estacionamento",
    srv_beach: "Cadeiras e guarda-sóis para a praia",
    srv_towels: "Serviço de toalhas",
    srv_lounge: "Living com bar, lareira a lenha e TV",
    srv_advice: "Assessoria e reservas em restaurantes, atividades e passeios",
    services_plus: "E ainda...",
    srv_chairs: "Cadeiras de praia", srv_umbrellas: "Guarda-sóis",
    srv_feat_breakfast_t: "Café da manhã incluído",
    srv_feat_breakfast_p: "Esqueça de sair para procurar onde tomar café: está incluído, no bar ou no seu quarto sem custo.",
    srv_feat_bar_t: "Bar",
    srv_feat_bar_p: "Nada melhor que um bar a poucos passos do quarto. Drinks, bebidas e mais.",
    testi_eyebrow: "Depoimentos",
    testi_title: "O que dizem nossos hóspedes",

    gallery_eyebrow: "Galeria",
    gallery_title: "Um olhar sobre a Azul Marino",

    book_eyebrow: "Reserve sua estadia",
    book_title: "Confirme sua reserva pelo WhatsApp",
    book_text: "Preencha o formulário e levamos você direto ao WhatsApp com o pedido já escrito. Confirmamos disponibilidade e o melhor preço em breve.",
    book_p1: "✓ Confirmação direta com os proprietários",
    book_p2: "✓ Melhor preço garantido",
    book_p3: "✓ Sem cobranças ou pagamentos online",
    f_name: "Nome completo", f_room: "Quarto", f_room_any: "Sem preferência",
    f_email: "E-mail", f_phone: "Telefone", f_country: "País de residência",
    wa_email: "E-mail", wa_phone: "Telefone", wa_country: "País de residência",
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

/* ---------- CONFIGURACIÓN DE HABITACIONES ----------
   images: nombres de archivo dentro de assets/habitaciones/<folder>/
   (dejá el array vacío [] y se muestran placeholders hasta cargar fotos) */
const ROOMS = {
  "doble-jardin": {
    key: "room1", folder: "doble-jardin",
    amenities: ["am_breakfast", "am_terrace", "am_access", "am_wifi", "am_cleaning", "am_linens"],
    images: ["0. portada.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
  },
  "doble-superior": {
    key: "room2", folder: "doble-superior",
    amenities: ["am_breakfast", "am_terrace", "am_space", "am_wifi", "am_cleaning", "am_linens"],
    images: ["0. portada.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"],
  },
  "doble-superior-jacuzzi": {
    key: "room3", folder: "doble-superior-jacuzzi",
    amenities: ["am_breakfast", "am_jacuzzi", "am_terrace", "am_wifi", "am_cleaning", "am_access"],
    images: ["0. portada.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
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

  // Re-renderizar contenido dinámico según la página
  if (typeof window.__renderRoom === "function") window.__renderRoom();
  if (typeof window.__renderPolicies === "function") window.__renderPolicies();
  if (typeof updatePrice === "function") updatePrice();
}

function t(key) { return (I18N[currentLang] && I18N[currentLang][key]) || I18N.es[key] || key; }

/* ---------- Construir y abrir WhatsApp ---------- */
function openWhatsApp({ name, email, phone, country, checkin, checkout, guests, room, comments, price }) {
  const lines = [t("wa_greeting"), ""];
  if (name)    lines.push(`${t("wa_name")}: ${name}`);
  if (email)   lines.push(`${t("wa_email")}: ${email}`);
  if (phone)   lines.push(`${t("wa_phone")}: ${phone}`);
  if (country) lines.push(`${t("wa_country")}: ${country}`);
  lines.push(`${t("wa_checkin")}: ${checkin}`);
  lines.push(`${t("wa_checkout")}: ${checkout}`);
  lines.push(`${t("wa_guests")}: ${guests}`);
  if (room)     lines.push(`${t("wa_room")}: ${room}`);
  // PRECIO ESTIMADO DESACTIVADO (a pedido): descomentar para volver a incluirlo
  // if (price)    lines.push(`${t("price_estimate")}: ${price}`);
  if (comments) lines.push(`${t("wa_comments")}: ${comments}`);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener");
}

/* ============================================================
   PRECIOS Y TEMPORADAS (leen de config.js -> CONFIG)
   ============================================================ */
function _md(s) { const [m, d] = s.split("-").map(Number); return m * 100 + d; }

function seasonForDate(date) {
  const md = (date.getMonth() + 1) * 100 + date.getDate();
  for (const s of CONFIG.temporadas) {
    const f = _md(s.desde), t = _md(s.hasta);
    if (f <= t) { if (md >= f && md <= t) return s; }
    else { if (md >= f || md <= t) return s; }   // temporada que cruza fin de año
  }
  return null;
}
function isClosedDate(date) { return CONFIG.mesesCerrados.includes(date.getMonth()); }
function parseDateInput(str) { const [y, m, d] = str.split("-").map(Number); return new Date(y, m - 1, d); }

/* ---- Precios desde planilla de Google (con respaldo a config.js) ---- */
let PRICE_OVERRIDES = []; // se llena desde la planilla, si hay

const HEADER_TO_SLUG = {
  "doble-jardin": "doble-jardin", "doble jardin": "doble-jardin", "doble jardín": "doble-jardin",
  "doble-superior": "doble-superior", "doble superior": "doble-superior",
  "doble-superior-jacuzzi": "doble-superior-jacuzzi",
  "doble superior + jacuzzi": "doble-superior-jacuzzi", "doble superior jacuzzi": "doble-superior-jacuzzi",
};

function parseSheetDate(s) {
  s = (s || "").trim();
  let m;
  if ((m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/))) return new Date(+m[1], +m[2] - 1, +m[3]);
  if ((m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/))) return new Date(+m[3], +m[2] - 1, +m[1]); // DD/MM/AAAA
  return null;
}

function splitCsvLine(line) {
  const res = []; let cur = "", q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') { if (q && line[i + 1] === '"') { cur += '"'; i++; } else q = !q; }
    else if (c === "," && !q) { res.push(cur); cur = ""; }
    else cur += c;
  }
  res.push(cur);
  return res;
}

function parsePriceCsv(text) {
  const rows = text.split(/\r?\n/).filter((r) => r.trim() !== "");
  if (rows.length < 2) return [];
  const headers = splitCsvLine(rows[0]).map((h) => h.trim().toLowerCase());
  const iDesde = headers.indexOf("desde"), iHasta = headers.indexOf("hasta");
  if (iDesde < 0 || iHasta < 0) return [];
  const roomCols = [];
  headers.forEach((h, idx) => { const slug = HEADER_TO_SLUG[h]; if (slug) roomCols.push({ idx, slug }); });
  const out = [];
  for (let r = 1; r < rows.length; r++) {
    const cells = splitCsvLine(rows[r]);
    const d1 = parseSheetDate(cells[iDesde]), d2 = parseSheetDate(cells[iHasta]);
    if (!d1 || !d2) continue;
    const precios = {};
    roomCols.forEach((rc) => {
      const v = parseFloat((cells[rc.idx] || "").replace(",", ".").replace(/[^\d.]/g, ""));
      if (!isNaN(v) && v > 0) precios[rc.slug] = v;
    });
    if (Object.keys(precios).length) out.push({ desde: d1, hasta: d2, precios });
  }
  return out;
}

async function loadPriceSheet() {
  if (!CONFIG.preciosSheetUrl) return;
  try {
    const resp = await fetch(CONFIG.preciosSheetUrl, { cache: "no-store" });
    if (!resp.ok) return;
    PRICE_OVERRIDES = parsePriceCsv(await resp.text());
    if (typeof updatePrice === "function") updatePrice();
    if (typeof window.__renderPolicies === "function") window.__renderPolicies();
  } catch (e) { /* silencioso: se usan los precios de config.js */ }
}

// Precio de UNA noche: primero la planilla (por rango de fechas), si no, la temporada de config.js
function priceForNight(roomSlug, date) {
  for (const o of PRICE_OVERRIDES) {
    if (date >= o.desde && date <= o.hasta) {
      const p = o.precios[roomSlug];
      if (p != null) return p;
    }
  }
  const s = seasonForDate(date);
  return s && s.precios ? s.precios[roomSlug] : null;
}

// slug de habitación a partir del nombre en español (value del <select>)
function slugForRoomName(name) {
  for (const slug in ROOMS) { if (I18N.es[ROOMS[slug].key + "_t"] === name) return slug; }
  return null;
}

// Calcula noches y total de una estadía
function priceForStay(roomSlug, ciStr, coStr) {
  const res = { nights: 0, total: 0, unknown: false, closed: false, invalid: false };
  if (!ciStr || !coStr) { res.invalid = true; return res; }
  const ci = parseDateInput(ciStr), co = parseDateInput(coStr);
  if (!(co > ci)) { res.invalid = true; return res; }
  const d = new Date(ci);
  while (d < co) {
    res.nights++;
    if (isClosedDate(d)) { res.closed = true; }
    else {
      const price = priceForNight(roomSlug, d);
      if (price == null) res.unknown = true; else res.total += price;
    }
    d.setDate(d.getDate() + 1);
  }
  return res;
}

// Actualiza el cartel de precio en el formulario de reserva
function updatePrice() {
  const el = document.getElementById("bfPrice");
  if (!el) return;
  const ci = document.getElementById("bfCheckin").value;
  const co = document.getElementById("bfCheckout").value;
  const roomName = document.getElementById("bfRoom").value;
  const slug = slugForRoomName(roomName);

  el.dataset.total = "";
  if (!ci || !co) { el.textContent = ""; el.classList.remove("price-warn"); return; }

  const r = priceForStay(slug, ci, co);
  if (r.invalid) { el.textContent = t("price_invalid"); el.classList.add("price-warn"); return; }
  if (r.closed)  { el.textContent = t("price_closed");  el.classList.add("price-warn"); return; }

  // Sin advertencias que mostrar
  el.textContent = "";
  el.classList.remove("price-warn");

  /* ---- PRECIO ESTIMADO EN LA WEB (DESACTIVADO a pedido) ----
     Para volver a mostrar el precio, descomentá este bloque
     (y también la línea "price" del mensaje en openWhatsApp()).
  if (!slug)     { el.textContent = t("price_pick_room"); el.classList.remove("price-warn"); return; }
  if (r.unknown || r.total === 0) { el.textContent = t("price_consult"); el.classList.remove("price-warn"); return; }
  const nightsLabel = r.nights === 1 ? t("night") : t("nights");
  const amount = `${CONFIG.moneda} ${r.total.toLocaleString("en-US")}`;
  el.textContent = `${t("price_estimate")}: ${amount} · ${r.nights} ${nightsLabel}`;
  el.dataset.total = amount;
  ---- fin PRECIO ESTIMADO ---- */
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
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
  }

  // Logo: si la imagen no existe, mostrar el texto de respaldo
  const logoImg = document.querySelector(".logo-img");
  if (logoImg) {
    const showLogoText = () => {
      logoImg.style.display = "none";
      const txt = logoImg.nextElementSibling;
      if (txt) txt.style.display = "flex";
    };
    if (logoImg.complete && logoImg.naturalWidth === 0) showLogoText();
    logoImg.addEventListener("error", showLogoText);
  }

  // Menú móvil
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  // Año en footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Fecha mínima = hoy
  const today = new Date().toISOString().split("T")[0];
  document.querySelectorAll('input[type="date"]').forEach((i) => i.setAttribute("min", today));

  // Al elegir la llegada, la salida no puede ser anterior y toma esa fecha por defecto
  function linkDates(ciId, coId) {
    const ci = document.getElementById(ciId), co = document.getElementById(coId);
    if (!ci || !co) return;
    ci.addEventListener("change", () => {
      if (!ci.value) return;
      co.min = ci.value;
      if (!co.value || co.value < ci.value) co.value = ci.value;
    });
  }
  linkDates("qbCheckin", "qbCheckout");
  linkDates("bfCheckin", "bfCheckout");

  // Barra rápida -> pasa datos al formulario y baja a reservar
  const qbSubmit = document.getElementById("qbSubmit");
  if (qbSubmit) {
    qbSubmit.addEventListener("click", () => {
      const ci = document.getElementById("qbCheckin").value;
      const co = document.getElementById("qbCheckout").value;
      const g  = document.getElementById("qbGuests").value;
      if (ci) document.getElementById("bfCheckin").value = ci;
      if (co) document.getElementById("bfCheckout").value = co;
      document.getElementById("bfGuests").value = g;
      document.getElementById("reservar").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Botones "Reservar esta suite" -> preseleccionan habitación
  document.querySelectorAll(".room-book").forEach((btn) => {
    btn.addEventListener("click", () => {
      const room = btn.getAttribute("data-room");
      const sel = document.getElementById("bfRoom");
      if (sel) sel.value = room;
      const target = document.getElementById("reservar");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Miniatura de cada tarjeta de habitación (home) = primera foto de su carpeta
  document.querySelectorAll(".rooms-grid .room-media").forEach((el) => {
    const q = (el.getAttribute("href") || "").split("?")[1] || "";
    const slug = new URLSearchParams(q).get("room");
    const room = ROOMS[slug];
    if (room && room.images.length) {
      el.style.backgroundImage = `url('assets/habitaciones/${room.folder}/${room.images[0]}')`;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
      el.classList.remove("ph");
    }
  });

  // Preseleccionar habitación si llega ?room=slug (desde la página de la suite)
  const roomParam = new URLSearchParams(location.search).get("room");
  if (roomParam && ROOMS[roomParam]) {
    const sel = document.getElementById("bfRoom");
    const name = I18N.es[ROOMS[roomParam].key + "_t"]; // el value del <option> está en español
    if (sel && name) sel.value = name;
  }

  // Envío del formulario -> WhatsApp
  const bookForm = document.getElementById("bookForm");
  if (bookForm) {
    // Cálculo de precio en vivo al cambiar fechas o habitación
    ["bfCheckin", "bfCheckout", "bfRoom"].forEach((id) => {
      const elx = document.getElementById(id);
      if (elx) elx.addEventListener("change", updatePrice);
    });
    updatePrice();

    bookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const checkin  = document.getElementById("bfCheckin").value;
      const checkout = document.getElementById("bfCheckout").value;
      if (!checkin || !checkout) { alert(t("alert_dates")); return; }

      const roomName = document.getElementById("bfRoom").value;
      const r = priceForStay(slugForRoomName(roomName), checkin, checkout);
      if (r.invalid) { alert(t("price_invalid")); return; }
      if (r.closed)  { alert(t("price_closed"));  return; }

      openWhatsApp({
        name:     document.getElementById("bfName").value.trim(),
        email:    document.getElementById("bfEmail").value.trim(),
        phone:    document.getElementById("bfPhone").value.trim(),
        country:  document.getElementById("bfCountry").value.trim(),
        checkin,
        checkout,
        guests:   document.getElementById("bfGuests").value,
        room:     roomName,
        price:    document.getElementById("bfPrice").dataset.total || "",
        comments: document.getElementById("bfMsg").value.trim(),
      });
    });
  }

  // Página de Tarifas y Políticas
  initPoliciesPage();

  // Cargar precios desde la planilla de Google (si está configurada)
  loadPriceSheet();

  // Página de habitación (habitacion.html)
  initRoomPage();
});

/* ============================================================
   PÁGINA DE HABITACIÓN (habitacion.html?room=slug)
   ============================================================ */
function initRoomPage() {
  const page = document.getElementById("roomPage");
  if (!page) return;

  const slug = new URLSearchParams(location.search).get("room");
  const room = ROOMS[slug];

  if (!room) { location.href = "index.html#habitaciones"; return; }

  const imgPath = (file) => `assets/habitaciones/${room.folder}/${file}`;
  let activeIdx = 0;

  // Render que se re-ejecuta al cambiar idioma
  window.__renderRoom = function () {
    const name = t(room.key + "_t");
    document.title = name + " · Azul Marino";

    const titleEl = document.getElementById("rpTitle");
    const descEl  = document.getElementById("rpDesc");
    if (titleEl) titleEl.textContent = name;
    if (descEl)  descEl.textContent = t(room.key + "_long");

    // Amenities
    const amenEl = document.getElementById("rpAmenities");
    if (amenEl) {
      amenEl.innerHTML = "";
      room.amenities.forEach((k) => {
        const li = document.createElement("li");
        li.textContent = t(k);
        amenEl.appendChild(li);
      });
    }

    // Botón reservar -> vuelve a la home con la habitación preseleccionada
    const bookBtn = document.getElementById("rpBook");
    if (bookBtn) {
      bookBtn.textContent = t("room_book");
      bookBtn.setAttribute("href", `index.html?room=${slug}#reservar`);
    }
  };

  // Galería (se arma una sola vez; las imágenes no dependen del idioma)
  const mainWrap = document.getElementById("rpMain");
  const thumbsEl = document.getElementById("rpThumbs");

  function setMain(idx) {
    activeIdx = (idx + room.images.length) % room.images.length;
    mainWrap.innerHTML = "";
    const img = document.createElement("img");
    img.src = imgPath(room.images[activeIdx]);
    img.alt = t(room.key + "_t");
    img.addEventListener("click", () => openLightbox(activeIdx));
    mainWrap.appendChild(img);
    thumbsEl.querySelectorAll("button").forEach((b, i) =>
      b.classList.toggle("active", i === activeIdx));
  }

  if (room.images.length > 0) {
    // Miniaturas
    room.images.forEach((file, i) => {
      const b = document.createElement("button");
      const im = document.createElement("img");
      im.src = imgPath(file);
      im.alt = "";
      b.appendChild(im);
      b.addEventListener("click", () => setMain(i));
      thumbsEl.appendChild(b);
    });
    // Flechas
    const prev = document.getElementById("rpPrev");
    const next = document.getElementById("rpNext");
    if (prev) prev.addEventListener("click", () => setMain(activeIdx - 1));
    if (next) next.addEventListener("click", () => setMain(activeIdx + 1));
    setMain(0);
  } else {
    // Sin fotos aún -> placeholder
    mainWrap.classList.add("ph");
    mainWrap.setAttribute("data-ph", "Fotos próximamente");
  }

  // Lightbox
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  function openLightbox(idx) {
    if (!lb) return;
    lbImg.src = imgPath(room.images[idx]);
    lb.classList.add("open");
  }
  if (lb) {
    lb.addEventListener("click", (e) => {
      if (e.target.id === "lbNext") { setMain(activeIdx + 1); lbImg.src = imgPath(room.images[activeIdx]); return; }
      if (e.target.id === "lbPrev") { setMain(activeIdx - 1); lbImg.src = imgPath(room.images[activeIdx]); return; }
      lb.classList.remove("open");
    });
  }

  window.__renderRoom();
}

/* ============================================================
   PÁGINA DE TARIFAS Y POLÍTICAS (politicas.html)
   ============================================================ */
function initPoliciesPage() {
  const page = document.getElementById("policiesPage");
  if (!page) return;

  const fmt = (md) => { const [m, d] = md.split("-"); return `${d}/${m}`; };

  window.__renderPolicies = function () {
    const wrap = document.getElementById("polSeasons");
    if (!wrap) return;
    wrap.innerHTML = "";
    CONFIG.temporadas.forEach((s) => {
      const card = document.createElement("div");
      card.className = "pol-season";
      card.innerHTML =
        `<h3>${s.nombre[currentLang] || s.nombre.es}</h3>` +
        `<p class="pol-range">${t("pol_dates")}: ${fmt(s.desde)} – ${fmt(s.hasta)}</p>` +
        `<p><strong>${t("pol_cancel")}:</strong> ${s.cancelacion[currentLang] || s.cancelacion.es}</p>`;
      wrap.appendChild(card);
    });
  };

  window.__renderPolicies();
}
