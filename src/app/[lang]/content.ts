export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const hasLocale = (l: string): l is Locale => (locales as readonly string[]).includes(l);

const WA = "17863652119";
export const waLink = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

type Case = {
  tab: string;
  industry: string;
  client: string;
  tag: string;
  before: string;
  bigNum: string;
  bigLabel: string;
  metrics: { val: string; key: string }[];
  rows: { k: string; v: string }[];
};

const es = {
  meta: {
    title: "Astra Agency | Más clientes para negocios de servicios",
    description:
      "Publicidad en Instagram y Facebook para spas, med spas, salones, dentistas y negocios de servicios. Clientes de tu zona que te escriben listos para agendar.",
  },
  wa: "Hola, vengo de la web de Astra y quiero una auditoría gratuita de mi publicidad.",
  nav: {
    links: [
      { id: "problem", label: "Problema" },
      { id: "cases", label: "Casos" },
      { id: "why", label: "Por qué Astra" },
      { id: "start", label: "Primer mes" },
      { id: "questions", label: "Preguntas" },
    ],
    cta: "Escríbenos",
    menu: "Menú",
  },
  hero: {
    badge: "Agencia de publicidad para negocios de servicios",
    l1: "Más citas.",
    l2: "Más clientes.",
    l3: "Todas las semanas.",
    sub: "Publicidad en Instagram y Facebook para spas, med spas, salones, dentistas y negocios de servicios. Atraemos clientes de tu zona que te escriben",
    subStrong: "listos para agendar.",
    bullets: [
      { b: "Clientes de tu zona.", t: "Anuncios dirigidos solo a quien puede llegar a tu negocio." },
      { b: "Medido en clientes, no en clics.", t: "Cada semana ves cuántos clientes llegaron y cuánto costó cada uno." },
      { b: "Tu cuenta, a tu nombre.", t: "La cuenta publicitaria y los datos son tuyos, siempre." },
    ],
    cta: "Quiero más clientes",
    note: "Sin compromiso. Te respondemos por WhatsApp.",
    mock: {
      chat1: "Hola, vi su anuncio. ¿Tienen cita para este viernes?",
      chat2: "¡Hola! Sí, tenemos 10:00 y 3:30. ¿Cuál prefieres?",
      chat3: "La de las 3:30, por favor",
      booked: "Agendada",
      agenda: "Agenda de la semana",
      leads: "Clientes nuevos",
      week: "Esta semana",
      days: ["L", "M", "M", "J", "V", "S"],
    },
  },
  glance: [
    { k: "Experiencia", v: "5 años", d: "en marketing digital" },
    { k: "Enfoque", v: "Clientes", d: "cada decisión se mide en citas y ventas" },
    { k: "Comunicación", v: "24/7", d: "WhatsApp directo con tu equipo" },
    { k: "Revisión", v: "Semanal", d: "métricas y ajustes cada semana" },
  ],
  marquee: ["Spas", "Med spas", "Salones de belleza", "Dentistas", "Clínicas dentales", "Servicios a domicilio", "Negocios locales", "Negocios de servicios"],
  problem: {
    label: "El problema",
    t1: "Dónde se pierden",
    t2: "tus clientes.",
    sub: "Ya pagaste publicidad y la agenda sigue igual. Casi siempre falla una de estas tres cosas.",
    items: [
      { k: "Problema 1", t: "Anuncios para cualquiera.", d: "Te escribe gente fuera de tu zona o que solo pregunta el precio y desaparece." },
      { k: "Problema 2", t: "Mensajes sin cita.", d: "Preguntan, les respondes tarde o sin un horario concreto, y no vuelven a escribir." },
      { k: "Problema 3", t: "Dinero sin control.", d: "Nadie te dice cuántos clientes llegaron ni cuánto te costó cada uno. Cada decisión es una apuesta." },
    ],
    close: "Astra corrige las tres: a quién le llega el anuncio, qué pasa con cada mensaje y cuánto te cuesta cada cliente.",
  },
  cases: {
    label: "Casos de éxito",
    t1: "Negocios reales.",
    t2: "Números reales.",
    sub: "Resultados de clientes de Astra.",
    situation: "La situación",
    before: "Antes de Astra",
    results: "Resultados",
    list: [
      {
        tab: "IDACA",
        industry: "Diagnóstico médico",
        client: "IDACA",
        tag: "Imágenes de diagnóstico · 9 sedes",
        before:
          "IDACA facturaba $809K al mes entre 9 sedes, pero no sabía cuáles traían los ingresos. El presupuesto se repartía igual entre todas, nada se movía y llevaban 6 meses sin crecer, pagando reportes de clics e impresiones que no decían nada útil.",
        bigNum: "$1.12M",
        bigLabel: "Ingresos mensuales en 90 días, desde $809K",
        metrics: [
          { val: "+38%", key: "Crecimiento de ingresos" },
          { val: "Día 60", key: "Superaron $1M al mes" },
        ],
        rows: [
          { k: "Inversión", v: "$10K → $14K al mes" },
          { k: "Plazo", v: "90 días" },
          { k: "Canal", v: "Instagram y Facebook" },
        ],
      },
      {
        tab: "Daniela Rebollo",
        industry: "Nutrición",
        client: "Daniela Rebollo",
        tag: "Nutrióloga · Programa Reconecta · México",
        before:
          "Daniela Rebollo es nutrióloga y tiene un programa propio para mujeres en perimenopausia y menopausia. Necesitaba llenar su agenda de consultas con pacientes interesadas en su programa.",
        bigNum: "Agenda llena",
        bigLabel: "Consultas agendadas con publicidad en Instagram y Facebook",
        metrics: [
          { val: "Guía", key: "Gratuita, para captar interesadas" },
          { val: "Llamada", key: "Agendada desde la página de venta" },
        ],
        rows: [
          { k: "Embudo", v: "Guía en PDF → llamada agendada" },
          { k: "Canal", v: "Instagram y Facebook" },
          { k: "Industria", v: "Salud y nutrición" },
        ],
      },
      {
        tab: "Brian Importa",
        industry: "Servicios",
        client: "Brian Importa",
        tag: "Importación China → Venezuela · Puerta a puerta",
        before:
          "Brian Importa ya tenía campañas activas cuando llegó a Astra. El objetivo era que la publicidad trajera más ventas en todos sus servicios.",
        bigNum: "+40%",
        bigLabel: "Ventas en todos sus servicios, como mínimo",
        metrics: [
          { val: "+40%", key: "Aumento mínimo en ventas" },
          { val: "Todos", key: "Los servicios que crecieron" },
        ],
        rows: [
          { k: "Punto de partida", v: "Campañas ya activas" },
          { k: "Servicio", v: "Importación puerta a puerta" },
          { k: "Canal", v: "Instagram y Facebook" },
        ],
      },
      {
        tab: "Xcore.fit",
        industry: "Software",
        client: "Xcore.fit",
        tag: "Software para gimnasios · 12 países",
        before:
          "Xcore.fit operaba en 12 países, pero casi todos sus clientes nuevos llegaban por referidos o por viajes del equipo de ventas. Crecía, pero dependía por completo del esfuerzo humano: si el equipo se detenía, se detenían las ventas.",
        bigNum: "8–12",
        bigLabel: "Gimnasios nuevos al mes, en varios países a la vez",
        metrics: [
          { val: "$5K", key: "Inversión mensual" },
          { val: "12", key: "Países activos" },
        ],
        rows: [
          { k: "Antes", v: "Referidos y viajes" },
          { k: "Ahora", v: "Captación automática y calificación por chat" },
          { k: "Modelo", v: "Suscripción mensual" },
        ],
      },
      {
        tab: "Tu Proyecto Fitness",
        industry: "Gimnasios",
        client: "Tu Proyecto Fitness",
        tag: "Diseño de gimnasios · Alto valor · Latinoamérica",
        before:
          "Tu Proyecto Fitness tenía una oferta de alto valor, pero sus ventas dependían de referidos y del boca a boca. Ya había probado publicidad, pero los contactos que llegaban no estaban calificados y le hacían perder tiempo al equipo.",
        bigNum: "38x",
        bigLabel: "Retorno: $6K invertidos → $230K en ventas",
        metrics: [
          { val: "$200K+", key: "Valor de un solo cliente" },
          { val: "2 meses", key: "Plazo" },
        ],
        rows: [
          { k: "Inversión", v: "$6K en total" },
          { k: "Canal", v: "Instagram y Facebook" },
          { k: "Clave", v: "El diseño 3D como puerta de entrada" },
        ],
      },
      {
        tab: "OneTool",
        industry: "Herramientas",
        client: "OneTool",
        tag: "Herramientas · Colombia",
        before:
          "OneTool hacía 25 pedidos al día y el costo por compra subía cada mes. El fundador manejaba los anuncios solo, sin saber qué funcionaba. Cada vez que subía el presupuesto, cada venta costaba más.",
        bigNum: "70+",
        bigLabel: "Pedidos diarios en 3.5 meses, desde 25",
        metrics: [
          { val: "50%", key: "Menos costo por venta" },
          { val: "3.5 meses", key: "Plazo" },
        ],
        rows: [
          { k: "Inversión", v: "$2,500 → $5,000 al mes" },
          { k: "Ventas", v: "$4M → $8-9M COP por semana" },
          { k: "Canal", v: "Instagram y Facebook" },
        ],
      },
    ] as Case[],
    logos: "Confían en Astra",
  },
  testimonials: {
    label: "Testimonios",
    t1: "Lo que dicen",
    t2: "nuestros clientes.",
    list: [
      {
        quote: "Antes de Astra invertíamos $10K al mes sin saber qué funcionaba. En 60 días pasamos el millón de dólares de ingresos mensuales. Solo la claridad ya valió la pena.",
        photo: "/testimonial-idaca.png",
        name: "Leyse Orlando",
        role: "Gerente General · IDACA",
      },
      {
        quote: "Pasamos de 35 pedidos al día a más de 100 en 75 días. Tuvimos que pausar porque nos quedamos sin inventario, un problema que nunca había tenido.",
        photo: "/testimonial-onetool.png",
        name: "Oswaldo Arias",
        role: "CEO · OneTool · Colombia",
      },
      {
        quote: "Dependíamos por completo de los referidos. Ahora entran entre 8 y 12 gimnasios nuevos cada mes en 12 países, en automático.",
        photo: "/testimonial-xcore.png",
        name: "José Quintero",
        role: "CEO · Xcore.fit · México",
      },
    ],
  },
  why: {
    label: "Por qué Astra",
    t1: "No todas las agencias",
    t2: "son iguales.",
    other: "Otras agencias",
    astra: "Astra Agency",
    rows: [
      ["Un junior que no conoces maneja tu cuenta", "Quien arma tu plan maneja tu cuenta"],
      ["Reportes llenos de clics e impresiones", "Ves cuántos clientes llegan y cuánto cuesta cada uno"],
      ["La cuenta queda a su nombre", "Tu cuenta, a tu nombre, siempre"],
      ["Meses de prueba antes de ver algo", "Primeros resultados en 30 días"],
      ["El mismo anuncio para todos sus clientes", "Anuncios para tu servicio y tu zona"],
    ],
  },
  start: {
    label: "Primer mes",
    t1: "Así arranca",
    t2: "tu primer mes.",
    sub: "Cuatro etapas, en orden. De la primera llamada a tus primeros clientes en 14 días o menos.",
    steps: [
      { k: "Día 1 a 3", t: "Estudio", d: "Llamada inicial, revisión de tu cuenta, de tu zona y de tu competencia." },
      { k: "Día 4 a 7", t: "Anuncios", d: "Guiones, piezas y textos pensados para tu servicio y tu cliente." },
      { k: "Día 8 a 14", t: "Lanzamiento", d: "Campañas activas y WhatsApp conectado. Llegan los primeros mensajes." },
      { k: "Semana 3 en adelante", t: "Mejora constante", d: "Revisión semanal: lo que trae clientes se escala, lo que no se corta." },
    ],
  },
  faq: {
    label: "Preguntas",
    t1: "Preguntas que",
    t2: "seguro tienes.",
    list: [
      { q: "¿Trabajan con negocios que nunca han hecho publicidad?", a: "Sí. Empezamos midiendo qué servicio y qué anuncio traen clientes, y desde ahí crecemos con lo que funciona." },
      { q: "¿Cuánto tengo que invertir en anuncios?", a: "Depende de tu servicio, tu ciudad y cuántos clientes quieres al mes. En la primera conversación te damos una cifra concreta para tu caso." },
      { q: "¿En cuánto tiempo veo resultados?", a: "Las campañas salen en las primeras 2 semanas y los primeros resultados se miden dentro de los primeros 30 días." },
      { q: "¿La cuenta publicitaria queda a mi nombre?", a: "Sí, siempre. La cuenta, los anuncios y los datos son tuyos. Si un día dejas de trabajar con nosotros, todo se queda contigo." },
      { q: "¿Atienden en español y en inglés?", a: "Sí. Trabajamos con negocios en Estados Unidos y Latinoamérica, en los dos idiomas." },
    ],
  },
  cta: {
    label: "Auditoría gratuita",
    t1: "Llena tu agenda con",
    t2: "clientes de tu zona.",
    sub: "Escríbenos por WhatsApp. Revisamos tu negocio y tu publicidad, y te decimos qué haríamos. Sin presión.",
    button: "Escríbenos por WhatsApp",
    note: "Para negocios de servicios en Estados Unidos y Latinoamérica.",
  },
  footer: "© 2026 Astra Agency. Todos los derechos reservados.",
  langSwitch: "EN",
};

export type Dict = typeof es;

const en: Dict = {
  meta: {
    title: "Astra Agency | More clients for service businesses",
    description:
      "Instagram and Facebook ads for spas, med spas, salons, dentists and service businesses. People from your area who reach out ready to book.",
  },
  wa: "Hi, I came from Astra's website and I'd like a free audit of my ads.",
  nav: {
    links: [
      { id: "problem", label: "Problem" },
      { id: "cases", label: "Results" },
      { id: "why", label: "Why Astra" },
      { id: "start", label: "First month" },
      { id: "questions", label: "FAQ" },
    ],
    cta: "Message us",
    menu: "Menu",
  },
  hero: {
    badge: "Ad agency for service businesses",
    l1: "More bookings.",
    l2: "More clients.",
    l3: "Every week.",
    sub: "Instagram and Facebook ads for spas, med spas, salons, dentists and service businesses. We bring in people from your area who reach out",
    subStrong: "ready to book.",
    bullets: [
      { b: "Clients from your area.", t: "Ads shown only to people who can actually get to your business." },
      { b: "Measured in clients, not clicks.", t: "Every week you see how many clients came in and what each one cost." },
      { b: "Your account, your name.", t: "The ad account and the data are yours, always." },
    ],
    cta: "I want more clients",
    note: "No commitment. We reply on WhatsApp.",
    mock: {
      chat1: "Hi, I saw your ad. Any openings this Friday?",
      chat2: "Hi! Yes, we have 10:00 and 3:30. Which one works?",
      chat3: "3:30 please",
      booked: "Booked",
      agenda: "This week's calendar",
      leads: "New clients",
      week: "This week",
      days: ["M", "T", "W", "T", "F", "S"],
    },
  },
  glance: [
    { k: "Experience", v: "5 years", d: "in digital marketing" },
    { k: "Focus", v: "Clients", d: "every decision measured in bookings and sales" },
    { k: "Communication", v: "24/7", d: "direct WhatsApp with your team" },
    { k: "Review", v: "Weekly", d: "metrics and adjustments every week" },
  ],
  marquee: ["Spas", "Med spas", "Beauty salons", "Dentists", "Dental clinics", "Home services", "Local businesses", "Service businesses"],
  problem: {
    label: "The problem",
    t1: "Where you're losing",
    t2: "your clients.",
    sub: "You already paid for ads and your calendar looks the same. It's almost always one of these three things.",
    items: [
      { k: "Problem 1", t: "Ads shown to anyone.", d: "You get messages from people outside your area, or who only ask for prices and disappear." },
      { k: "Problem 2", t: "Messages, no bookings.", d: "They ask, the reply comes late or without a concrete time, and they never write back." },
      { k: "Problem 3", t: "Money without control.", d: "Nobody tells you how many clients came in or what each one cost. Every decision is a guess." },
    ],
    close: "Astra fixes all three: who sees the ad, what happens with every message, and what each client costs you.",
  },
  cases: {
    label: "Results",
    t1: "Real businesses.",
    t2: "Real numbers.",
    sub: "Results from Astra clients.",
    situation: "The situation",
    before: "Before Astra",
    results: "Results",
    list: [
      {
        tab: "IDACA",
        industry: "Medical imaging",
        client: "IDACA",
        tag: "Diagnostic imaging · 9 locations",
        before:
          "IDACA was making $809K a month across 9 locations, but had no idea which ones were driving revenue. Budget was split evenly, nothing moved, and growth had been flat for 6 months while they paid for reports full of clicks and impressions.",
        bigNum: "$1.12M",
        bigLabel: "Monthly revenue in 90 days, up from $809K",
        metrics: [
          { val: "+38%", key: "Revenue growth" },
          { val: "Day 60", key: "Crossed $1M a month" },
        ],
        rows: [
          { k: "Ad spend", v: "$10K → $14K/mo" },
          { k: "Timeline", v: "90 days" },
          { k: "Channel", v: "Instagram and Facebook" },
        ],
      },
      {
        tab: "Daniela Rebollo",
        industry: "Nutrition",
        client: "Daniela Rebollo",
        tag: "Nutritionist · Reconecta program · Mexico",
        before:
          "Daniela Rebollo is a nutritionist with her own program for women in perimenopause and menopause. She needed to fill her consultation calendar with patients interested in her program.",
        bigNum: "Fully booked",
        bigLabel: "Consultations booked through Instagram and Facebook ads",
        metrics: [
          { val: "Guide", key: "Free, to capture interested women" },
          { val: "Call", key: "Booked from the sales page" },
        ],
        rows: [
          { k: "Funnel", v: "PDF guide → booked call" },
          { k: "Channel", v: "Instagram and Facebook" },
          { k: "Industry", v: "Health and nutrition" },
        ],
      },
      {
        tab: "Brian Importa",
        industry: "Services",
        client: "Brian Importa",
        tag: "China → Venezuela imports · Door to door",
        before:
          "Brian Importa already had campaigns running when they came to Astra. The goal was to make the ads bring in more sales across every service.",
        bigNum: "+40%",
        bigLabel: "Sales across all services, at minimum",
        metrics: [
          { val: "+40%", key: "Minimum sales increase" },
          { val: "All", key: "Services that grew" },
        ],
        rows: [
          { k: "Starting point", v: "Campaigns already running" },
          { k: "Service", v: "Door-to-door imports" },
          { k: "Channel", v: "Instagram and Facebook" },
        ],
      },
      {
        tab: "Xcore.fit",
        industry: "Software",
        client: "Xcore.fit",
        tag: "Gym software · 12 countries",
        before:
          "Xcore.fit operated in 12 countries, but almost every new client came from a referral or a sales trip. Growth was real, but fully dependent on human effort: if the team stopped, sales stopped.",
        bigNum: "8–12",
        bigLabel: "New gyms a month, across several countries at once",
        metrics: [
          { val: "$5K", key: "Monthly ad spend" },
          { val: "12", key: "Active countries" },
        ],
        rows: [
          { k: "Before", v: "Referrals and travel" },
          { k: "Now", v: "Automated lead flow and chat qualification" },
          { k: "Model", v: "Monthly subscription" },
        ],
      },
      {
        tab: "Tu Proyecto Fitness",
        industry: "Gyms",
        client: "Tu Proyecto Fitness",
        tag: "Gym design · High ticket · Latin America",
        before:
          "Tu Proyecto Fitness had a strong high-ticket offer, but sales ran on referrals and word of mouth. They had tried ads before, but the leads weren't qualified and wasted the team's time.",
        bigNum: "38x",
        bigLabel: "Return: $6K spent → $230K in sales",
        metrics: [
          { val: "$200K+", key: "Value of a single client" },
          { val: "2 months", key: "Timeline" },
        ],
        rows: [
          { k: "Ad spend", v: "$6K total" },
          { k: "Channel", v: "Instagram and Facebook" },
          { k: "Key", v: "3D design as the entry point" },
        ],
      },
      {
        tab: "OneTool",
        industry: "Tools",
        client: "OneTool",
        tag: "Tools · Colombia",
        before:
          "OneTool was doing 25 orders a day and the cost per purchase kept rising every month. The founder ran the ads alone with no clarity on what worked. Every budget increase made each sale more expensive.",
        bigNum: "70+",
        bigLabel: "Daily orders in 3.5 months, up from 25",
        metrics: [
          { val: "50%", key: "Lower cost per sale" },
          { val: "3.5 mo", key: "Timeline" },
        ],
        rows: [
          { k: "Ad spend", v: "$2,500 → $5,000/mo" },
          { k: "Sales", v: "$4M → $8-9M COP per week" },
          { k: "Channel", v: "Instagram and Facebook" },
        ],
      },
    ],
    logos: "Trusted by",
  },
  testimonials: {
    label: "Testimonials",
    t1: "What our",
    t2: "clients say.",
    list: [
      {
        quote: "Before Astra, we were spending $10K a month with no idea what was working. Within 60 days we crossed $1M in monthly revenue. The clarity alone was worth it.",
        photo: "/testimonial-idaca.png",
        name: "Leyse Orlando",
        role: "General Manager · IDACA",
      },
      {
        quote: "We went from 35 orders a day to over 100 in 75 days. We had to pause because we ran out of inventory, a problem I'd never had before.",
        photo: "/testimonial-onetool.png",
        name: "Oswaldo Arias",
        role: "CEO · OneTool · Colombia",
      },
      {
        quote: "We were completely dependent on referrals. Now we have 8 to 12 new gyms signing every month across 12 countries, on autopilot.",
        photo: "/testimonial-xcore.png",
        name: "José Quintero",
        role: "CEO · Xcore.fit · Mexico",
      },
    ],
  },
  why: {
    label: "Why Astra",
    t1: "Not all agencies",
    t2: "are the same.",
    other: "Other agencies",
    astra: "Astra Agency",
    rows: [
      ["A junior you never met runs your account", "The strategist who builds your plan runs your account"],
      ["Reports full of clicks and impressions", "You see how many clients come in and what each one costs"],
      ["They own your ad account", "Your account, your name, always"],
      ["Months of \"testing\" before anything moves", "First results within 30 days"],
      ["The same ad for every client", "Ads built for your service and your area"],
    ],
  },
  start: {
    label: "First month",
    t1: "How your",
    t2: "first month starts.",
    sub: "Four stages, in order. From the first call to your first clients in 14 days or less.",
    steps: [
      { k: "Day 1 to 3", t: "Research", d: "Kickoff call, review of your account, your area and your competitors." },
      { k: "Day 4 to 7", t: "Ads", d: "Scripts, creatives and copy built for your service and your client." },
      { k: "Day 8 to 14", t: "Launch", d: "Campaigns live and WhatsApp connected. The first messages come in." },
      { k: "Week 3 onward", t: "Constant improvement", d: "Weekly review: what brings clients gets scaled, what doesn't gets cut." },
    ],
  },
  faq: {
    label: "FAQ",
    t1: "Questions you",
    t2: "probably have.",
    list: [
      { q: "Do you work with businesses that have never run ads?", a: "Yes. We start by measuring which service and which ad bring in clients, and we grow from what works." },
      { q: "How much do I need to spend on ads?", a: "It depends on your service, your city and how many clients you want each month. On our first conversation we give you a concrete number for your case." },
      { q: "How soon will I see results?", a: "Campaigns go live within the first 2 weeks, and first results are measured within the first 30 days." },
      { q: "Is the ad account in my name?", a: "Yes, always. The account, the ads and the data are yours. If you ever stop working with us, everything stays with you." },
      { q: "Do you work in English and Spanish?", a: "Yes. We work with businesses in the United States and Latin America, in both languages." },
    ],
  },
  cta: {
    label: "Free audit",
    t1: "Fill your calendar with",
    t2: "clients from your area.",
    sub: "Message us on WhatsApp. We'll look at your business and your ads, and tell you exactly what we'd do. No pressure.",
    button: "Message us on WhatsApp",
    note: "For service businesses in the United States and Latin America.",
  },
  footer: "© 2026 Astra Agency. All rights reserved.",
  langSwitch: "ES",
};

export const dictionaries: Record<Locale, Dict> = { es, en };
