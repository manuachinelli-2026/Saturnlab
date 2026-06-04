/* Saturno Web Studio — components */

/* ---- Saturn planet mark (inline SVG, nav) ---- */
function SaturnMark({ size = 38 }) {
  const h = Math.round(size * 0.82);
  return (
    <svg width={size} height={h} viewBox="0 0 56 46" fill="none" aria-hidden="true">
      <ellipse cx="28" cy="27" rx="26" ry="9" stroke="#3da847" strokeWidth="4.5" />
      <circle cx="28" cy="21" r="15" fill="#6EE87A" />
      <path d="M3 31 Q28 45 53 31" fill="none" stroke="#6EE87A" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

/* ---- Hero planet icon (app-icon style, used in hero) ---- */
function HeroPlanet() {
  return (
    <svg
      className="hero-planet"
      width="160" height="160"
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
    >
      {/* Dark rounded square background */}
      <rect width="160" height="160" rx="36" fill="#1b1b26"/>
      {/* Ring — back half */}
      <ellipse cx="80" cy="90" rx="52" ry="17" stroke="#3da847" strokeWidth="8" />
      {/* Planet body */}
      <circle cx="80" cy="74" r="34" fill="#6EE87A" />
      {/* Ring — front arc */}
      <path d="M29 97 Q80 116 131 97" fill="none" stroke="#6EE87A" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}

/* ---- Nav ---- */
function Nav({ onServices, onContact }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top">
          <SaturnMark size={34} />
          <div className="brand-text">
            <span className="brand-name">Saturno</span>
            <span className="brand-sub">Web Studio</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#servicios" onClick={e => { e.preventDefault(); onServices(); }}>Agentes IA</a>
          <a href="#contacto"  onClick={e => { e.preventDefault(); onContact();  }}>Contacto</a>
        </nav>

        <div className="nav-right">
          <a
            className="btn btn--green"
            href="https://wa.me/34610564163?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20vuestros%20agentes%20IA"
            target="_blank" rel="noopener noreferrer"
          >
            Hablar con nosotros
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---- Hero ---- */
function Hero({ onServices }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-icon-wrap">
          <HeroPlanet />
        </div>
        <span className="eyebrow">Saturno Web Studio · España</span>
        <h1>Tu negocio en<br /><em>piloto automático</em></h1>
        <p className="hero-lead">
          Contrata agentes de IA que trabajan en tu WhatsApp las 24 horas.
          Gestionan citas, llenan tu agenda y cuidan tu reputación. Sin nóminas ni horarios.
        </p>
        <div className="hero-actions">
          <button className="btn btn--green btn--lg" onClick={onServices}>
            Conoce a tu equipo
          </button>
          <a
            className="btn btn--outline btn--lg"
            href="https://wa.me/34610564163"
            target="_blank" rel="noopener noreferrer"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---- Elton — solo full-width card ---- */
const ELTON = {
  photo: "https://randomuser.me/api/portraits/men/10.jpg",
  name: "Elton",
  role: "Creador de Páginas Web",
  tagline: "Tu web lista en menos de 24 horas.",
  desc: "Elton habla contigo por WhatsApp, te hace las preguntas clave y construye tu página web desde cero. Sin reuniones, sin formularios largos, sin esperas. En menos de un día tienes una web profesional, limpia y lista para publicar con tu dominio.",
  features: [
    "Chat directo para entender tu negocio",
    "Diseño personalizado a tu imagen",
    "Entrega garantizada en menos de 24 horas",
    "Lista para publicar con tu dominio",
  ],
  price: "Desde 75 €",
  priceNote: "pago único",
};

function EltonCard() {
  const waMsg = encodeURIComponent("Hola 👋 me interesa que Elton me haga mi página web. ¿Cómo funciona?");
  return (
    <div className="service-card service-card--solo service-card--featured">
      <div className="solo-left">
        <div className="solo-avatar">
          <img src={ELTON.photo} alt={ELTON.name} />
        </div>
        <div>
          <div className="solo-badge">Agente IA</div>
          <div className="solo-name">{ELTON.name}</div>
          <div className="solo-role">{ELTON.role}</div>
        </div>
        <div className="solo-price-block">
          <div className="solo-price">{ELTON.price}</div>
          <div className="solo-price-note">{ELTON.priceNote}</div>
        </div>
        <a
          className="btn btn--green"
          href={`https://wa.me/34610564163?text=${waMsg}`}
          target="_blank" rel="noopener noreferrer"
          style={{ width: "100%", justifyContent: "center" }}
        >
          Hablar con Elton
        </a>
      </div>
      <div className="solo-right">
        <div className="solo-tagline">"{ELTON.tagline}"</div>
        <div className="solo-desc">{ELTON.desc}</div>
        <ul className="solo-features">
          {ELTON.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      </div>
    </div>
  );
}

/* ---- AI Agents ---- */
const AGENTS = [
  {
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Paco",
    role: "Gestor de Citas",
    tagline: "Nunca más una cita sin confirmar.",
    desc: "Paco atiende los mensajes de tus clientes, consulta tu agenda en tiempo real y reserva el primer hueco disponible sin que tengas que intervenir. Antes de cada cita envía un recordatorio automático para que nadie falte.",
    features: [
      "Responde y reserva citas en segundos",
      "Consulta tu disponibilidad en tiempo real",
      "Recordatorios automáticos antes de cada cita",
      "Gestiona cambios y cancelaciones sin ti",
    ],
    price: "95 €",
    priceNote: "al mes",
    featured: false,
  },
  {
    photo: "https://randomuser.me/api/portraits/men/57.jpg",
    name: "Mateo",
    role: "Especialista en Ocupación",
    tagline: "Tu agenda siempre llena.",
    desc: "Mateo detecta los huecos libres antes de que se pierdan. Localiza clientes anteriores que llevan tiempo sin venir y los contacta con el mensaje justo en el momento oportuno, convirtiendo tiempo muerto en ingresos.",
    features: [
      "Detecta huecos libres automáticamente",
      "Reactiva clientes que no han vuelto",
      "Envía promociones personalizadas por WhatsApp",
      "Aumenta tu facturación sin esfuerzo extra",
    ],
    price: "79 €",
    priceNote: "al mes",
    featured: true,
  },
  {
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Lucciano",
    role: "Especialista en Reputación",
    tagline: "Tu reputación online en piloto automático.",
    desc: "Lucciano cuida la relación con tus clientes después de cada visita. Les pregunta por su experiencia, recoge el feedback y los guía a dejar una reseña en Google, construyendo tu reputación mientras tú trabajas.",
    features: [
      "Seguimiento automático tras cada cita",
      "Solicita reseñas en Google de forma natural",
      "Gestiona el feedback de cada cliente",
      "Mejora tu puntuación online mes a mes",
    ],
    price: "69 €",
    priceNote: "al mes",
    featured: false,
  },
];

function AgentCard({ a }) {
  const waMsg = encodeURIComponent(`Hola 👋 me interesa contratar a ${a.name} (${a.role}). ¿Me podéis dar más información?`);
  return (
    <div className={`service-card${a.featured ? " service-card--featured" : ""}`}>
      <div className="card-header">
        <div className="card-avatar">
          <img src={a.photo} alt={a.name} className="card-avatar-img" />
        </div>
        <div className="card-agent-info">
          <div className="card-badge">Agente IA</div>
          <div className="card-name">{a.name}</div>
          <div className="card-role">{a.role}</div>
        </div>
      </div>
      <div className="card-desc" style={{ fontStyle: "italic", color: "var(--text-1)", marginBottom: 10, fontSize: 13.5 }}>
        "{a.tagline}"
      </div>
      <div className="card-desc">{a.desc}</div>
      <ul className="card-features">
        {a.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <div className="card-footer">
        <div className="card-price">
          <span className="card-price-amount">{a.price}</span>
          <span className="card-price-note">{a.priceNote}</span>
        </div>
        <a
          className="btn btn--green"
          href={`https://wa.me/34610564163?text=${waMsg}`}
          target="_blank" rel="noopener noreferrer"
        >
          Contratar a {a.name}
        </a>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-label">Tu equipo de IA</div>
        <h2 className="section-title">Agentes IA. Trabajando por ti.</h2>
        <p className="section-sub">
          Como tener empleados especializados conectados a tu WhatsApp,
          disponibles 24 horas. Sin nóminas, sin bajas, sin días libres.
        </p>
        <div className="services-grid">
          <EltonCard />
          {AGENTS.map((a, i) => <AgentCard key={i} a={a} />)}
        </div>
      </div>
    </section>
  );
}

/* ---- CTA / Contact band ---- */
function CTABand() {
  return (
    <section className="section" id="contacto" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta-band">
          <div className="section-label" style={{ marginBottom: 18 }}>¿Incorporamos a tu equipo?</div>
          <h2>Tu primer agente, en 48 horas.</h2>
          <p>
            Cuéntanos qué necesita tu negocio y lo tenemos funcionando
            en menos de dos días. Sin permanencia, sin tecnicismos.
          </p>
          <div className="cta-actions">
            <a
              className="btn btn--green btn--lg"
              href="https://wa.me/34610564163?text=Hola%2C%20me%20gustar%C3%ADa%20incorporar%20un%20agente%20IA%20a%20mi%20negocio"
              target="_blank" rel="noopener noreferrer"
            >
              Empezar por WhatsApp
            </a>
            <a className="btn btn--outline btn--lg" href="mailto:hola@saturno.es">
              Enviar un email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Footer ---- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <SaturnMark size={26} />
            <span className="footer-copy">
              © 2025 Saturno Web Studio · España
            </span>
          </div>
          <div className="footer-links">
            <a href="#servicios">Agentes IA</a>
            <a href="mailto:hola@saturno.es">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---- Floating WhatsApp button ---- */
function FloatingWhatsApp() {
  const msg = encodeURIComponent("Hola 👋 me gustaría saber más sobre vuestros agentes IA");
  return (
    <a
      className="wa-float"
      href={`https://wa.me/34610564163?text=${msg}`}
      target="_blank" rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

/* ---- How it works ---- */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Hablamos por WhatsApp", desc: "Cuéntanos cómo funciona tu negocio. En una sola conversación entendemos todo lo que tu agente necesita saber." },
    { n: "02", title: "Configuramos tu agente", desc: "En menos de 48 horas preparamos y probamos a tu agente con toda la información de tu negocio. Sin que hagas nada." },
    { n: "03", title: "Tu agente empieza a trabajar", desc: "Desde el primer día atiende, reserva y fideliza clientes mientras tú te dedicas a lo que realmente importa." },
  ];
  return (
    <section className="section" style={{ background: 'var(--bg-canvas, #0f0f16)' }}>
      <div className="container">
        <div className="section-label">Cómo funciona</div>
        <h2 className="section-title">Listo en 48 horas.</h2>
        <p className="section-sub">Sin reuniones, sin contratos, sin complicaciones. Solo tres pasos.</p>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Benefit visuals ---- */
function VisualChat() {
  return (
    <div className="mockup-card">
      <div className="mockup-topbar">
        <div className="mockup-avatar">🤖</div>
        <div className="mockup-topbar-info">
          <div className="mockup-topbar-name">Agente Paco</div>
          <div className="mockup-topbar-status">● En línea</div>
        </div>
        <div className="mockup-topbar-time">03:24 AM</div>
      </div>
      <div className="mockup-chat">
        <div className="chat-in">¿Tenéis algún hueco mañana a las 10?</div>
        <div className="chat-out">¡Claro! Te he reservado mañana a las 10:00h 🗓️ Te mando confirmación ahora.</div>
        <div className="chat-in">Perfecto, muchas gracias 🙌</div>
        <div className="chat-note">Respuesta automática · 4 segundos</div>
      </div>
    </div>
  );
}

function VisualCalendar() {
  const slots = [
    { time: "09:00", name: "María G.", filled: true },
    { time: "10:00", name: "Carlos R.", filled: true },
    { time: "11:00", name: "Disponible", filled: false },
    { time: "12:00", name: "Ana M.", filled: true },
    { time: "16:00", name: "Disponible", filled: false },
    { time: "17:00", name: "Jorge S.", filled: true },
  ];
  return (
    <div className="mockup-card">
      <div className="cal-header">
        <span>Tu agenda — hoy</span>
        <small>Mateo actuando →</small>
      </div>
      <div className="cal-slots">
        {slots.map((s, i) => (
          <div key={i} className={`cal-slot cal-slot--${s.filled ? 'filled' : 'empty'}`}>
            <span className="cal-slot-time">{s.time}</span>
            <span className="cal-slot-name">{s.name}</span>
            {!s.filled && <span className="cal-slot-tag">Contactando...</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualStars() {
  return (
    <div className="mockup-card">
      <div className="stars-card">
        <div className="stars-header">
          <div className="stars-logo">G</div>
          <div>
            <div className="stars-name">Tu negocio en Google</div>
            <div className="stars-row">
              {[1,2,3,4,5].map(i => <span key={i} className="star-fill">★</span>)}
            </div>
            <div className="stars-count">4.8 · 127 reseñas</div>
          </div>
        </div>
        <div className="stars-bars">
          {[[5,'88%'],[4,'8%'],[3,'3%'],[2,'1%'],[1,'0%']].map(([n, w]) => (
            <div key={n} className="stars-bar-row">
              <span className="stars-bar-label">{n}</span>
              <div className="stars-bar-track"><div className="stars-bar-fill" style={{ width: w }}></div></div>
              <span style={{ fontSize: 11, color: 'var(--text-3)', width: 28 }}>{w}</span>
            </div>
          ))}
        </div>
        <div className="stars-trend">
          <span>↑ +40 reseñas este mes</span>
          <span style={{ color: 'var(--text-3)' }}>· Gestionado por Lucciano</span>
        </div>
      </div>
    </div>
  );
}

/* ---- Benefit sections ---- */
function BenefitSections({ onServices }) {
  return (
    <React.Fragment>
      <section className="benefit-section">
        <div className="container benefit-grid">
          <div className="benefit-text">
            <span className="eyebrow">Disponibilidad</span>
            <h2>Atiende a tus clientes a cualquier hora</h2>
            <p>Mientras tú cierras, tu agente sigue trabajando. Responde preguntas, reserva citas y gestiona conversaciones a las 3 de la mañana si hace falta. Sin horas extra, sin quejas, sin perder un solo cliente.</p>
            <button className="btn btn--green" onClick={onServices}>Ver agentes IA</button>
          </div>
          <div className="benefit-visual"><VisualChat /></div>
        </div>
      </section>

      <section className="benefit-section benefit-section--alt">
        <div className="container benefit-grid benefit-grid--reverse">
          <div className="benefit-text">
            <span className="eyebrow">Ocupación</span>
            <h2>Tu agenda siempre llena, sin esfuerzo</h2>
            <p>Mateo detecta los huecos antes de que se pierdan y contacta a clientes que llevan tiempo sin venir. Tu facturación sube sin que tengas que hacer absolutamente nada.</p>
            <button className="btn btn--green" onClick={onServices}>Conocer a Mateo</button>
          </div>
          <div className="benefit-visual"><VisualCalendar /></div>
        </div>
      </section>

      <section className="benefit-section">
        <div className="container benefit-grid">
          <div className="benefit-text">
            <span className="eyebrow">Reputación</span>
            <h2>Tu nota en Google, subiendo sola</h2>
            <p>Lucciano contacta a cada cliente después de su visita, recoge su opinión y los guía a dejar una reseña. Más reseñas positivas, más visibilidad, más clientes nuevos. Solo.</p>
            <button className="btn btn--green" onClick={onServices}>Conocer a Lucciano</button>
          </div>
          <div className="benefit-visual"><VisualStars /></div>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ---- Why us ---- */
function WhyUs() {
  const pillars = [
    { icon: "user-check", title: "Hablan como personas", desc: "Tus agentes no suenan a bot. Se comunican con el tono de tu negocio, con empatía, contexto y naturalidad." },
    { icon: "shield-check", title: "Sin inventarse nada", desc: "Solo responden con la información que tú les has dado. Sin alucinaciones, sin errores, sin sorpresas desagradables." },
    { icon: "bell", title: "Saben cuándo llamarte", desc: "Si hay una pregunta que no pueden resolver solos, te avisan a ti para que tomes el control de la conversación." },
  ];
  return (
    <section className="why-band">
      <div className="container">
        <div className="section-label">Por qué Saturno</div>
        <h2 className="section-title">IA que funciona de verdad.</h2>
        <div className="why-grid">
          {pillars.map((p, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon"><i data-lucide={p.icon}></i></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Testimonials ---- */
function Testimonials() {
  const items = [
    {
      stars: 5,
      quote: "Llevábamos meses con huecos sin cubrir. Desde que activamos a Paco, la agenda siempre está llena y los no-shows han bajado un 80%. Ha sido el mejor dinero que hemos invertido.",
      name: "Dra. Carmen Rivas",
      biz: "Clínica Dental · Barcelona",
      tag: "Agente Paco",
    },
    {
      stars: 5,
      quote: "Le expliqué todo a Elton por WhatsApp y en menos de 20 horas tenía mi web publicada con mi dominio. Ni me lo creía. El proceso fue facilísimo.",
      name: "Roberto M.",
      biz: "Peluquería · Madrid",
      tag: "Agente Elton",
    },
    {
      stars: 5,
      quote: "En el primer mes pasamos de 4.1 a 4.7 estrellas en Google. Lucciano consiguió 40 reseñas nuevas sin que yo hiciera absolutamente nada.",
      name: "Ana Pérez",
      biz: "Centro de Estética · Valencia",
      tag: "Agente Lucciano",
    },
  ];
  return (
    <section className="section" style={{ background: 'var(--bg-canvas, #0f0f16)' }}>
      <div className="container">
        <div className="section-label">Lo que dicen</div>
        <h2 className="section-title">Resultados reales.</h2>
        <p className="section-sub" style={{ marginBottom: 40 }}>Negocios como el tuyo que ya trabajan con sus agentes IA.</p>
        <div className="testimonials-grid">
          {items.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-stars">{'★'.repeat(t.stars)}</div>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <span className="testi-tag">{t.tag}</span>
                <span className="testi-name">{t.name}</span>
                <span className="testi-biz">{t.biz}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- FAQ ---- */
function FAQ() {
  const [open, setOpen] = React.useState(null);
  const items = [
    {
      q: "¿Cómo aprenden los agentes sobre mi negocio?",
      a: "Tú nos facilitas la información: servicios, precios, horarios, preguntas frecuentes y todo lo que tu agente necesite saber. Nosotros lo configuramos y lo probamos antes de activarlo. Sin complicaciones por tu parte.",
    },
    {
      q: "¿Cuánto tiempo tarda en estar listo?",
      a: "En menos de 48 horas. Una vez que tenemos la información de tu negocio, configuramos al agente, lo probamos a fondo y lo activamos. El mismo día que se activa ya está atendiendo a tus clientes.",
    },
    {
      q: "¿Qué pasa si un cliente hace una pregunta que el agente no sabe responder?",
      a: "El agente nunca se inventa respuestas. Si recibe una pregunta que no está dentro de su conocimiento, te avisa directamente para que puedas tomar el control de esa conversación.",
    },
    {
      q: "¿Necesito instalar alguna aplicación?",
      a: "No. Todo funciona a través de WhatsApp, la app que ya tienes en el móvil. Sin nuevas apps, sin formaciones, sin cambiar la forma en que ya trabajas.",
    },
    {
      q: "¿Puedo cancelar en cualquier momento?",
      a: "Sí. Nuestros servicios mensuales no tienen permanencia mínima. Si en algún momento quieres pausar o cancelar, solo tienes que avisarnos con un mensaje.",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Preguntas frecuentes.</h2>
        <p className="section-sub" style={{ marginBottom: 40 }}>Todo lo que necesitas saber antes de empezar.</p>
        <div className="faq-list">
          {items.map((item, i) => (
            <div className="faq-item" key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {item.q}
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="faq-a">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  SaturnMark, HeroPlanet,
  Nav, Hero, HowItWorks, Services, AgentCard, EltonCard,
  BenefitSections, WhyUs, Testimonials, FAQ,
  CTABand, Footer, FloatingWhatsApp,
});
