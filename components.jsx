/* Saturnlab — website components */

const { useState, useEffect, useRef } = React;

function Icon({ name, style }) {
  return <i data-lucide={name} style={style}></i>;
}

function Mark({ size = 36 }) {
  return <img src="./assets/logo-mark.svg" width={size} height={size} alt="Saturnlab" />;
}
function Wordmark({ size = 23 }) {
  return (
    <span className="word" style={{ fontSize: size }}>
      Saturn<span className="lab">lab</span>
    </span>
  );
}

/* ---- Bauhaus geometric thumbnail (signature) ---- */
function BauhausThumb({ variant = 0 }) {
  const v = ((variant % 5) + 5) % 5;
  const sets = [
    // 0 — cobalt field
    { bg: "#1E33D6", shapes: (
      <>
        <circle cx="248" cy="44" r="48" fill="#F2B53B" />
        <path d="M30 158 A62 62 0 0 1 154 158 Z" fill="#D26B4E" />
        <rect x="150" y="116" width="150" height="10" fill="#F6F1E7" />
      </>) },
    // 1 — deep navy field
    { bg: "#141C5C", shapes: (
      <>
        <circle cx="74" cy="78" r="46" fill="#1E33D6" />
        <path d="M206 26 L268 26 L237 92 Z" fill="#CF4327" />
        <circle cx="262" cy="124" r="22" fill="#F2B53B" />
      </>) },
    // 2 — clay field
    { bg: "#D26B4E", shapes: (
      <>
        <circle cx="80" cy="60" r="44" fill="#141C5C" />
        <path d="M180 110 A56 56 0 0 1 292 110" fill="none" stroke="#F2B53B" strokeWidth="16" />
        <rect x="0" y="146" width="320" height="12" fill="#1E1A14" />
      </>) },
    // 3 — ink field
    { bg: "#1E1A14", shapes: (
      <>
        <circle cx="92" cy="80" r="50" fill="#1E33D6" />
        <path d="M214 0 A60 60 0 0 1 274 60 L214 60 Z" fill="#F2B53B" />
        <circle cx="262" cy="120" r="26" fill="none" stroke="#D26B4E" strokeWidth="11" />
      </>) },
    // 4 — sun field
    { bg: "#F2B53B", shapes: (
      <>
        <circle cx="244" cy="92" r="50" fill="#1E33D6" />
        <path d="M40 24 L86 116 L-6 116 Z" fill="#CF4327" />
        <rect x="120" y="40" width="64" height="64" fill="#1E1A14" />
      </>) },
  ];
  const s = sets[v];
  return (
    <svg viewBox="0 0 320 158" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"
         style={{ display: "block", background: s.bg }}>
      {s.shapes}
    </svg>
  );
}

/* ---- Navigation ---- */
function Nav({ dark, onToggleDark, onStart }) {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <Mark size={34} />
          <Wordmark />
        </a>
        <nav className="nav-links">
          <a href="#catalogo">Cursos</a>
          <a href="#formatos">Formatos</a>
          <a href="#empresas">Empresas</a>
          <a href="#recursos">Contacto</a>
        </nav>
        <div className="nav-right">
          <button className="icon-btn" onClick={onToggleDark} aria-label="Tema">
            <Icon name={dark ? "sun" : "moon"} />
          </button>
          <button className="btn btn--primary" onClick={onStart}>Ver cursos</button>
        </div>
      </div>
    </header>
  );
}

/* ---- Hero ---- */
function Hero({ onStart, onCatalog }) {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Plataforma de formación en AI · ES / LATAM</span>
          <h1>Aprendé AI.<br />Aplicala hoy.</h1>
          <p className="lead">Cambiá cómo trabajás. Webinars, cursos grabados y en vivo
            para profesionales y empresas de habla hispana.</p>
          <div className="hero-actions">
            <button className="btn btn--primary btn--lg" onClick={onCatalog}>Ver cursos</button>
            <button className="btn btn--outline btn--lg" onClick={onStart}>
              <Icon name="play" /> Próximo webinar
            </button>
          </div>
          <div className="stat-row">
            <div className="stat"><div className="n">4</div><div className="l">Cursos</div></div>
            <div className="stat"><div className="n">3</div><div className="l">Formatos</div></div>
            <div className="stat"><div className="n">∞</div><div className="l">Acceso</div></div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 480 480" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
            <rect width="480" height="480" fill="#141C5C" />
            <circle cx="172" cy="210" r="118" fill="#1E33D6" />
            <ellipse cx="172" cy="210" rx="200" ry="58" fill="none" stroke="#D26B4E" strokeWidth="16" transform="rotate(-24 172 210)" />
            <circle cx="388" cy="96" r="46" fill="#F2B53B" />
            <path d="M300 470 L360 360 L420 470 Z" fill="#CF4327" />
            <rect x="40" y="440" width="200" height="12" fill="#F6F1E7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ---- Format strip ---- */
const FORMATS = [
  { icon: "radio", t: "Webinars en vivo", d: "Gratuitos o de pago. La puerta de entrada al ecosistema: aprendés, preguntás y te conectás." },
  { icon: "play-circle", t: "Cursos grabados", d: "Acceso inmediato, a tu ritmo. El contenido es tuyo para siempre." },
  { icon: "users", t: "Cursos con cohortes", d: "Fechas programadas, comunidad activa y feedback directo. Llegás más lejos acompañado." },
];
function FormatStrip() {
  return (
    <section className="sec wrap" id="formatos">
      <div className="sec-head">
        <span className="eyebrow">Cómo aprendés</span>
        <h2>Tres formas de avanzar</h2>
        <p>Elegí el formato que más se adapte a tu ritmo y objetivos. Todos los caminos llevan a resultados reales.</p>
      </div>
      <div className="formats">
        {FORMATS.map((f, i) => (
          <div className="format-card" key={i}>
            <div className="ico"><Icon name={f.icon} /></div>
            <h3>{f.t}</h3>
            <p>{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---- Course card ---- */
function CourseCard({ course, onOpen }) {
  return (
    <div className="course-card" onClick={() => onOpen(course)}>
      <div className="cc-thumb">
        <span className="tag">{course.tag}</span>
        <BauhausThumb variant={course.variant} />
      </div>
      <div className="cc-body">
        <span className="cc-eyebrow">{course.eyebrow}</span>
        <h3 className="cc-title">{course.title}</h3>
        <span className="cc-meta">{course.meta}</span>
        <div className="cc-foot">
          <span className="cc-price">{course.price}</span>
          <span className="cc-rate">{course.rate}</span>
        </div>
      </div>
    </div>
  );
}

/* ---- Catalog ---- */
const FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "grabado", label: "Grabados" },
  { id: "webinar", label: "Webinars" },
  { id: "empresa", label: "Empresas" },
];
function Catalog({ courses, filter, setFilter, onOpen }) {
  const list = filter === "todos" ? courses : courses.filter(c => c.type === filter);
  return (
    <section className="sec sec--band" id="catalogo">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Catálogo</span>
          <h2>Elegí por dónde empezar</h2>
          <p>Cada curso está diseñado para que apliques lo que aprendés de inmediato.</p>
        </div>
        <div className="filters">
          {FILTERS.map(f => (
            <button key={f.id} className={"filter" + (filter === f.id ? " active" : "")}
                    onClick={() => setFilter(f.id)}>{f.label}</button>
          ))}
        </div>
        <div className="grid">
          {list.map(c => <CourseCard key={c.id} course={c} onOpen={onOpen} />)}
        </div>
      </div>
    </section>
  );
}

/* ---- Audience ---- */
function Audience() {
  return (
    <section className="sec wrap" id="para-quien">
      <div className="sec-head">
        <span className="eyebrow">Para quién es</span>
        <h2>Sirve sin importar dónde arrancás</h2>
      </div>
      <div className="aud-grid">
        <div className="aud-col c1">
          <h3>Empresas</h3>
          <p>Llevá AI a los procesos de tu equipo y dejá resultados corriendo.</p>
          <ul>
            <li><Icon name="check" /> Diagnóstico personalizado</li>
            <li><Icon name="check" /> Formación a medida</li>
            <li><Icon name="check" /> Automatizaciones + acompañamiento</li>
          </ul>
        </div>
        <div className="aud-col c2">
          <h3>Freelancers</h3>
          <p>Sumá AI a tu oferta, trabajá menos horas y entregá mejor.</p>
          <ul>
            <li><Icon name="check" /> Automatizá tareas repetitivas</li>
            <li><Icon name="check" /> Creá tu sitio web solo</li>
            <li><Icon name="check" /> Lanzá tu primer MVP</li>
          </ul>
        </div>
        <div className="aud-col c3">
          <h3>Profesionales</h3>
          <p>Usá AI en tu trabajo diario y destacate en cualquier industria.</p>
          <ul>
            <li><Icon name="check" /> Aplicá Claude en tu rol</li>
            <li><Icon name="check" /> Desde nivel inicial</li>
            <li><Icon name="check" /> Acceso de por vida</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---- Quote band ---- */
function QuoteBand() {
  return (
    <section className="quote-band">
      <div className="wrap quote-inner">
        <Mark size={92} />
        <div>
          <div className="q">"Pasamos de mirar la IA de afuera a usarla todos los días.
            El equipo entero cambió la forma de trabajar."</div>
          <div className="who">Dirección de Operaciones · empresa de 80 personas</div>
        </div>
      </div>
    </section>
  );
}

/* ---- CTA band ---- */
function CTABand() {
  const [v, setV] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="cta-band wrap" id="recursos">
      <div className="cta-card">
        <div>
          <h2>Sumate a Saturnlab</h2>
          <p>Dejanos tu email y te avisamos del próximo webinar gratuito y los cursos que se vienen.</p>
        </div>
        <div>
          {sent ? (
            <div className="btn btn--clay btn--lg" style={{ cursor: "default" }}>
              <Icon name="check" /> ¡Listo, revisá tu inbox!
            </div>
          ) : (
            <form className="email-row" onSubmit={e => { e.preventDefault(); if (v) setSent(true); }}>
              <input className="email-input" type="email" placeholder="tu@empresa.com"
                     value={v} onChange={e => setV(e.target.value)} />
              <button className="btn btn--primary btn--lg" type="submit">Quiero entrar</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---- Footer ---- */
function Footer() {
  return (
    <footer className="foot" id="empresas">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="brand" href="#top" style={{ marginBottom: 14, display: "inline-flex" }}>
              <Mark size={30} /><Wordmark size={20} />
            </a>
            <p style={{ color: "var(--fg-2)", fontSize: 14.5, lineHeight: 1.55, maxWidth: 280, marginTop: 14 }}>
              Aprende AI. Aplicala hoy. Cambiá cómo trabajás.<br />
              Para profesionales y empresas de habla hispana.
            </p>
          </div>
          <div><h4>Aprender</h4><ul>
            <li><a href="#catalogo">Cursos grabados</a></li>
            <li><a href="#formatos">Webinars en vivo</a></li>
            <li><a href="#formatos">Cohortes</a></li>
          </ul></div>
          <div><h4>Empresas</h4><ul>
            <li><a href="#catalogo">AI para tu equipo</a></li>
            <li><a href="#catalogo">Implementaciones</a></li>
            <li><a href="mailto:hola@saturnlab.ai">Cotizar</a></li>
          </ul></div>
          <div><h4>Saturnlab</h4><ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="mailto:hola@saturnlab.ai">Contacto</a></li>
            <li><a href="#">saturnlab.ai</a></li>
          </ul></div>
        </div>
        <div className="foot-bottom">
          <span>© 2025 Saturnlab</span>
          <span>Hecho para aprender de verdad.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---- Enroll modal ---- */
function EnrollModal({ course, onClose }) {
  if (!course) return null;
  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-thumb">
          <button className="modal-close" onClick={onClose} aria-label="Cerrar"><Icon name="x" /></button>
          <BauhausThumb variant={course.variant} />
        </div>
        <div className="modal-body">
          <span className="cc-eyebrow">{course.eyebrow}</span>
          <h3>{course.title}</h3>
          <div className="mrow"><span>{course.meta}</span><span className="cc-rate">{course.rate}</span></div>
          <div className="mrow" style={{ borderTop: "1px solid var(--divider)", paddingTop: 14 }}>
            <span className="cc-price" style={{ fontSize: 26 }}>{course.price}</span>
            <button className="btn btn--primary btn--lg">Anotarme</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  Icon, Mark, Wordmark, BauhausThumb,
  Nav, Hero, FormatStrip, CourseCard, Catalog,
  Audience, QuoteBand, CTABand, Footer, EnrollModal,
});
