/* Saturno Web Studio — components */

/* ---- Saturn planet mark (inline SVG) ---- */
function SaturnMark({ size = 38 }) {
  const h = Math.round(size * 0.82);
  return (
    <svg width={size} height={h} viewBox="0 0 56 46" fill="none" aria-hidden="true">
      {/* Ring — back half (behind planet body) */}
      <ellipse cx="28" cy="27" rx="26" ry="9" stroke="#3da847" strokeWidth="4.5" />
      {/* Planet body (covers back of ring) */}
      <circle cx="28" cy="21" r="15" fill="#6EE87A" />
      {/* Ring — front arc (lower, in front of planet) */}
      <path d="M3 31 Q28 45 53 31" fill="none" stroke="#6EE87A" strokeWidth="5" strokeLinecap="round" />
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
          <a href="#servicios" onClick={e => { e.preventDefault(); onServices(); }}>Servicios</a>
          <a href="#contacto"  onClick={e => { e.preventDefault(); onContact();  }}>Contacto</a>
        </nav>

        <div className="nav-right">
          {/* ⚠ Reemplaza el número de WhatsApp antes de publicar */}
          <a
            className="btn btn--green"
            href="https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios"
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
        <span className="eyebrow">Saturno Web Studio · España</span>
        <h1>Tu negocio en<br /><em>piloto automático</em></h1>
        <p className="hero-lead">
          Diseño web profesional, asistentes de IA para WhatsApp y gestión
          de citas automática. Todo lo que necesitas para crecer, sin complicaciones.
        </p>
        <div className="hero-actions">
          <button className="btn btn--green btn--lg" onClick={onServices}>
            Ver servicios
          </button>
          {/* ⚠ Reemplaza el número de WhatsApp antes de publicar */}
          <a
            className="btn btn--outline btn--lg"
            href="https://wa.me/34600000000"
            target="_blank" rel="noopener noreferrer"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---- Service cards ---- */
const SERVICES = [
  {
    icon: "monitor",
    badge: "pago único",
    title: "Diseño de Página Web",
    desc: "Tu presencia online lista en pocos días. Diseño personalizado, adaptado a móvil y preparado para posicionarse en Google desde el primer día.",
    features: [
      "Diseño a medida para tu negocio",
      "100% adaptada a móvil y tablet",
      "SEO básico incluido",
      "Formulario de contacto integrado",
    ],
    price: "59 €",
    priceNote: "pago único",
    cta: "Quiero mi web",
    featured: false,
  },
  {
    icon: "zap",
    badge: "mensual",
    title: "AI Agent para WhatsApp",
    desc: "Un asistente de inteligencia artificial que atiende a tus clientes por WhatsApp las 24 horas del día, todos los días, sin que tengas que hacer nada.",
    features: [
      "Disponible 24 horas, 7 días a la semana",
      "Respuestas personalizadas a tu negocio",
      "Cualifica leads automáticamente",
      "Configuración y soporte incluidos",
    ],
    price: "50 €",
    priceNote: "al mes",
    cta: "Quiero el AI Agent",
    featured: true,
  },
  {
    icon: "calendar",
    badge: "mensual",
    title: "Gestión de Turnos por WhatsApp",
    desc: "Tus clientes reservan, modifican y cancelan citas directamente desde WhatsApp. El sistema confirma y envía recordatorios de forma automática.",
    features: [
      "Reservas automáticas las 24 horas",
      "Recordatorios automáticos por WhatsApp",
      "Sincronización con tu calendario",
      "Panel de gestión incluido",
    ],
    price: "95 €",
    priceNote: "al mes",
    cta: "Gestionar mis citas",
    featured: false,
  },
];

function ServiceCard({ s }) {
  const waMsg = encodeURIComponent(`Hola, me interesa el servicio "${s.title}". ¿Me podéis dar más información?`);
  return (
    <div className={`service-card${s.featured ? " service-card--featured" : ""}`}>
      <div className="card-icon">
        <i data-lucide={s.icon}></i>
      </div>
      <div className="card-badge">{s.badge}</div>
      <div className="card-title">{s.title}</div>
      <div className="card-desc">{s.desc}</div>
      <ul className="card-features">
        {s.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <div className="card-footer">
        <div className="card-price">
          <span className="card-price-amount">{s.price}</span>
          <span className="card-price-note">{s.priceNote}</span>
        </div>
        {/* ⚠ Reemplaza el número de WhatsApp antes de publicar */}
        <a
          className="btn btn--green"
          href={`https://wa.me/34600000000?text=${waMsg}`}
          target="_blank" rel="noopener noreferrer"
        >
          {s.cta}
        </a>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-label">Servicios</div>
        <h2 className="section-title">Todo lo que tu negocio necesita</h2>
        <p className="section-sub">
          Tres servicios diseñados para que trabajes menos, atiendas mejor y crezcas más.
        </p>
        <div className="services-grid">
          {SERVICES.map((s, i) => <ServiceCard key={i} s={s} />)}
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
          <div className="section-label" style={{ marginBottom: 18 }}>¿Hablamos?</div>
          <h2>¿Listo para dar el salto?</h2>
          <p>
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas.
            Sin compromisos, sin tecnicismos.
          </p>
          <div className="cta-actions">
            {/* ⚠ Reemplaza el número de WhatsApp antes de publicar */}
            <a
              className="btn btn--green btn--lg"
              href="https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios"
              target="_blank" rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
            {/* ⚠ Reemplaza el email antes de publicar */}
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
            <a href="#servicios">Servicios</a>
            {/* ⚠ Reemplaza el email antes de publicar */}
            <a href="mailto:hola@saturno.es">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  SaturnMark, Nav, Hero, Services, ServiceCard, CTABand, Footer,
});
