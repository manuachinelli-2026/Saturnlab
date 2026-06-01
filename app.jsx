/* Saturnlab — website app */

const COURSES = [
  {
    id: 1, type: "inicial", tag: "Desde cero", variant: 1,
    eyebrow: "Sin experiencia previa · nivel inicial",
    title: "AI desde cero: herramientas, prompts y automatización",
    desc: "La IA ya está cambiando cómo trabaja todo el mundo. Este curso te pone al día de una vez. No necesitás saber programar ni tener experiencia técnica.",
    logros: [
      "Entendé qué es la IA y elegí el modelo correcto para cada tarea",
      "Escribí prompts que funcionan de verdad, no por suerte",
      "Usá ChatGPT, Claude, Perplexity y otras herramientas con criterio",
      "Automatizá con Zapier o Make sin tocar código",
    ],
    meta: "20 clases · 6 módulos · acceso de por vida",
    price: "Próximamente",
    rate: "Nivel inicial",
  },
  {
    id: 2, type: "claude", tag: "Claude", variant: 4,
    eyebrow: "Claude · de usuario a experto",
    title: "Trabajá con Claude: de usuario a experto",
    desc: "La mayoría usa Claude para hacer preguntas. Este curso te enseña a usarlo para trabajar: presentaciones, emails, automatizaciones, herramientas propias y tareas que antes te robaban horas.",
    logros: [
      "Creá documentos, reportes y presentaciones profesionales con Claude",
      "Organizá tu día y manejá tu email con Claude Cowork",
      "Automatizá tu trabajo repetitivo desde el navegador con la extensión Chrome",
      "Construí herramientas propias con Claude Code y MCPs",
    ],
    meta: "17 clases · 5 módulos · acceso de por vida",
    price: "Próximamente",
    rate: "Nivel intermedio",
  },
  {
    id: 3, type: "claude", tag: "Claude Code", variant: 0,
    eyebrow: "Claude Code · sin programar",
    title: "Crea páginas web profesionales: Claude Code para no programadores",
    desc: "Tenés una idea. Le falta una página web. Claude Code la construye. Vos la ponés online. De cero a un sitio real, con tu marca, tu dominio y SSL activo. Sin saber programar.",
    logros: [
      "Configurá Claude Code desde la terminal aunque nunca la hayas usado",
      "Diseñá tu identidad visual en Claude y convertila en código",
      "Publicá tu sitio en Vercel con deploy automático desde GitHub",
      "Conectá tu dominio con DNS y SSL configurados",
    ],
    meta: "14 clases · 6 módulos · sitio real online",
    price: "Próximamente",
    rate: "Nivel inicial",
  },
  {
    id: 4, type: "n8n", tag: "N8N", variant: 3,
    eyebrow: "N8N · AI Agents · automatización",
    title: "Automatizá con N8N: AI Agents desde cero",
    desc: "Tus procesos trabajando solos, con inteligencia artificial adentro. N8N te permite automatizar cualquier flujo de trabajo conectando apps, agentes de IA y lógica propia, sin escribir código.",
    logros: [
      "Conectá las plataformas que ya usás a N8N",
      "Creá AI Agents que toman decisiones dentro de tus flujos",
      "Usá Claude para generar flujos en JSON y avanzar el doble de rápido",
      "Programá tareas y dejá que corran solas",
    ],
    meta: "9 clases · 4 módulos · flujos reales",
    price: "Próximamente",
    rate: "Nivel intermedio",
  },
];

function App() {
  const [dark, setDark] = React.useState(false);
  const [filter, setFilter] = React.useState("todos");
  const [active, setActive] = React.useState(null);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", dark);
    document.documentElement.classList.toggle("light-mode", !dark);
  }, [dark]);

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <Nav dark={dark} onToggleDark={() => setDark(d => !d)} onStart={() => scrollTo("catalogo")} />
      <Hero onStart={() => scrollTo("catalogo")} onCatalog={() => scrollTo("catalogo")} />
      <FormatStrip />
      <Catalog courses={COURSES} filter={filter} setFilter={setFilter} onOpen={setActive} />
      <Audience />
      <QuoteBand />
      <CTABand />
      <Footer />
      <EnrollModal course={active} onClose={() => setActive(null)} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
