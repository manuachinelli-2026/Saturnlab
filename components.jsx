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

/* ---- AI Agents ---- */
const AGENTS = [
  {
    initial: "P",
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
    initial: "M",
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
    initial: "L",
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
          <span className="card-avatar-initial">{a.initial}</span>
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
        <h2 className="section-title">Tres agentes. Trabajando por ti.</h2>
        <p className="section-sub">
          Como tener tres empleados especializados conectados a tu WhatsApp,
          disponibles 24 horas. Sin nóminas, sin bajas, sin días libres.
        </p>
        <div className="services-grid">
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

Object.assign(window, {
  SaturnMark, Nav, Hero, Services, AgentCard, CTABand, Footer, FloatingWhatsApp,
});
