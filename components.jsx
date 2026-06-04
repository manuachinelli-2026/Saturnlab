/* Miro AI — components */

/* ---- Logo mark ---- */
function MiroMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Red main circle */}
      <circle cx="13" cy="20" r="11" fill="#E8312A"/>
      {/* Black star */}
      <path d="M22 5 L23.4 10.2 L28.6 9.2 L25.2 13.2 L27.6 18 L22.6 16 L20.2 21 L19.2 15.8 L14 17 L17.4 13 L14.6 8.4 L19.8 9.8 Z" fill="#1A1A1A"/>
      {/* Yellow dot */}
      <circle cx="27.5" cy="5.5" r="4" fill="#F5C800"/>
    </svg>
  );
}

/* ---- Miró background decorations ---- */
function MiroDecor() {
  return (
    <div className="miro-decor" aria-hidden="true">
      {/* Red blob */}
      <svg className="md-1" width="64" height="54" viewBox="0 0 64 54">
        <ellipse cx="32" cy="27" rx="30" ry="24" fill="#E8312A" transform="rotate(-15 32 27)"/>
      </svg>
      {/* Yellow star */}
      <svg className="md-2" width="48" height="48" viewBox="0 0 48 48">
        <polygon points="24,2 28,18 44,18 31,27 35,44 24,35 13,44 17,27 4,18 20,18" fill="#F5C800"/>
      </svg>
      {/* Blue circle */}
      <svg className="md-3" width="36" height="36" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="16" fill="#0057B7"/>
      </svg>
      {/* Black dot */}
      <svg className="md-4" width="22" height="22" viewBox="0 0 22 22">
        <circle cx="11" cy="11" r="10" fill="#1A1A1A"/>
      </svg>
    </div>
  );
}

/* ---- Miró painting (hero visual) ---- */
function MiroPainting() {
  return (
    <div className="miro-painting-wrap">
      <svg className="miro-painting" viewBox="0 0 440 350" xmlns="http://www.w3.org/2000/svg">
        <rect width="440" height="350" fill="#FFFBF2"/>
        {/* Red organic blob */}
        <path d="M60 175 Q75 70 145 90 Q210 110 195 180 Q178 248 112 262 Q40 278 60 175Z" fill="#E8312A"/>
        {/* Blue shape */}
        <path d="M230 75 L340 210 L195 215Z" fill="#0057B7"/>
        {/* Yellow big circle */}
        <circle cx="348" cy="88" r="52" fill="#F5C800"/>
        {/* Black connecting lines */}
        <line x1="145" y1="90"  x2="296" y2="75"  stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="348" y1="140" x2="340" y2="210" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M112 262 Q220 308 340 262" fill="none" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round"/>
        {/* Abstract eye (Miró signature) */}
        <ellipse cx="118" cy="155" rx="24" ry="14" fill="none" stroke="#1A1A1A" strokeWidth="3"/>
        <circle cx="118" cy="155" r="7" fill="#1A1A1A"/>
        {/* Black dots / stars */}
        <circle cx="62"  cy="68"  r="9"  fill="#1A1A1A"/>
        <circle cx="390" cy="220" r="11" fill="#E8312A"/>
        <circle cx="258" cy="38"  r="7"  fill="#1A1A1A"/>
        <circle cx="54"  cy="300" r="5"  fill="#0057B7"/>
        {/* Small yellow dot */}
        <circle cx="404" cy="290" r="16" fill="#F5C800"/>
        {/* Wavy black line */}
        <path d="M32 295 Q90 272 148 295 Q206 318 264 295" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round"/>
        {/* Red small circle accent */}
        <circle cx="390" cy="40" r="10" fill="#E8312A"/>
      </svg>
    </div>
  );
}

/* ---- Nav ---- */
function Nav({ onServices, onContact }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top">
          <MiroMark size={30} />
          <span className="brand-name">Miro <span>AI</span></span>
        </a>
        <nav className="nav-links">
          <a href="#servicios" onClick={e => { e.preventDefault(); onServices(); }}>Agentes IA</a>
          <a href="#contacto"  onClick={e => { e.preventDefault(); onContact();  }}>Contacto</a>
        </nav>
        <div className="nav-right">
          <a
            className="btn btn--black"
            href="https://wa.me/34610564163?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20los%20agentes%20IA%20de%20Miro"
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
      <MiroDecor />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Miro AI · España</span>
            <h1>Tu negocio en<br /><em>piloto automático</em></h1>
            <p className="hero-lead">
              Contrata agentes de IA que trabajan en tu WhatsApp las 24 horas.
              Gestionan citas, llenan tu agenda y cuidan tu reputación.
              Sin nóminas ni horarios.
            </p>
            <div className="hero-actions">
              <button className="btn btn--black btn--lg" onClick={onServices}>
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
          <MiroPainting />
        </div>
      </div>
    </section>
  );
}

/* ---- AI Agents ---- */
const AGENTS = [
  {
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Paco",
    role: "Gestor de Citas",
    tagline: "Nunca más una cita sin confirmar.",
    desc: "Paco atiende los mensajes de tus clientes, consulta tu agenda en tiempo real y reserva el primer hueco disponible sin que tengas que intervenir. Antes de cada cita envía un recordatorio automático.",
    features: [
      "Responde y reserva citas en segundos",
      "Consulta tu disponibilidad en tiempo real",
      "Recordatorios automáticos antes de cada cita",
      "Gestiona cambios y cancelaciones sin ti",
    ],
    price: "95 €",
    priceNote: "al mes",
    color: "#E8312A",
    featured: false,
  },
  {
    photo: "https://randomuser.me/api/portraits/men/57.jpg",
    name: "Mateo",
    role: "Especialista en Ocupación",
    tagline: "Tu agenda siempre llena.",
    desc: "Mateo detecta los huecos libres antes de que se pierdan. Localiza clientes anteriores que llevan tiempo sin venir y los contacta en el momento oportuno, convirtiendo tiempo muerto en ingresos.",
    features: [
      "Detecta huecos libres automáticamente",
      "Reactiva clientes que no han vuelto",
      "Envía promociones personalizadas por WhatsApp",
      "Aumenta tu facturación sin esfuerzo extra",
    ],
    price: "79 €",
    priceNote: "al mes",
    color: "#0057B7",
    featured: true,
  },
  {
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Lucciano",
    role: "Especialista en Reputación",
    tagline: "Tu reputación online en piloto automático.",
    desc: "Lucciano cuida la relación con tus clientes después de cada visita. Les pregunta por su experiencia, recoge el feedback y los guía a dejar una reseña en Google.",
    features: [
      "Seguimiento automático tras cada cita",
      "Solicita reseñas en Google de forma natural",
      "Gestiona el feedback de cada cliente",
      "Mejora tu puntuación online mes a mes",
    ],
    price: "69 €",
    priceNote: "al mes",
    color: "#c49a00",
    featured: false,
  },
];

function AgentCard({ a }) {
  const waMsg = encodeURIComponent(`Hola 👋 me interesa contratar a ${a.name} (${a.role}). ¿Me podéis dar más información?`);
  return (
    <div
      className={`service-card${a.featured ? " service-card--featured" : ""}`}
      style={{ "--agent-color": a.color }}
    >
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
      <div className="card-tagline">"{a.tagline}"</div>
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
          className="btn btn--black"
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
    <section className="section section--alt" id="servicios">
      <div className="container">
        <div className="section-label">Tu equipo de IA</div>
        <h2 className="section-title">Agentes IA. Trabajando por ti.</h2>
        <p className="section-sub">
          Como tener empleados especializados conectados a tu WhatsApp,
          disponibles 24 horas. Sin nóminas, sin bajas, sin días libres.
        </p>
        <div className="services-grid">
          {AGENTS.map((a, i) => <AgentCard key={i} a={a} />)}
        </div>
      </div>
    </section>
  );
}

/* ---- CTA band ---- */
function CTABand() {
  return (
    <section className="section" id="contacto" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta-band">
          <div className="section-label">¿Incorporamos a tu equipo?</div>
          <h2>Tu primer agente, en 48 horas.</h2>
          <p>
            Cuéntanos qué necesita tu negocio y lo tenemos funcionando
            en menos de dos días. Sin permanencia, sin tecnicismos.
          </p>
          <div className="cta-actions">
            <a
              className="btn btn--red btn--lg"
              href="https://wa.me/34610564163?text=Hola%2C%20me%20gustar%C3%ADa%20incorporar%20un%20agente%20IA%20a%20mi%20negocio"
              target="_blank" rel="noopener noreferrer"
            >
              Empezar por WhatsApp
            </a>
            <a
              className="btn btn--outline btn--lg"
              style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}
              href="mailto:hola@miroai.es"
            >
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
            <MiroMark size={24} />
            <span className="footer-copy">© 2025 Miro AI · España</span>
          </div>
          <div className="footer-links">
            <a href="#servicios">Agentes IA</a>
            <a href="mailto:hola@miroai.es">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---- Floating WhatsApp ---- */
function FloatingWhatsApp() {
  const msg = encodeURIComponent("Hola 👋 me gustaría saber más sobre los agentes IA de Miro");
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
  MiroMark, MiroDecor, MiroPainting,
  Nav, Hero, Services, AgentCard, CTABand, Footer, FloatingWhatsApp,
});
