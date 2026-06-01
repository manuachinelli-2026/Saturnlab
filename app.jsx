/* Saturnlab — website app */

const COURSES = [
  {
    id: 1, type: "grabado", tag: "Grabado", variant: 0,
    eyebrow: "Sin código · práctico",
    title: "Crea tu primera página web con AI",
    meta: "Para freelancers y emprendedores · acceso de por vida",
    price: "Próximamente",
    rate: "Web · Digital"
  },
  {
    id: 2, type: "grabado", tag: "Grabado", variant: 3,
    eyebrow: "Productividad · flujos automáticos",
    title: "Automatiza tus procesos con AI",
    meta: "Para cualquier rol · ganá horas por semana",
    price: "Próximamente",
    rate: "Flujos · Herramientas"
  },
  {
    id: 3, type: "grabado", tag: "Programa", variant: 1,
    eyebrow: "Emprendimiento · validación",
    title: "De idea a producto: hacé tu primer MVP",
    meta: "Sin equipo técnico · AI como copiloto",
    price: "Próximamente",
    rate: "MVP · Producto"
  },
  {
    id: 4, type: "grabado", tag: "Grabado", variant: 4,
    eyebrow: "Claude · cualquier industria",
    title: "Aplicá Claude en tu trabajo y sé un héroe",
    meta: "Para cualquier rol · cualquier industria",
    price: "Próximamente",
    rate: "Claude · Trabajo"
  },
  {
    id: 5, type: "empresa", tag: "Enterprise", variant: 2,
    eyebrow: "Enterprise · a medida",
    title: "AI para tu empresa: de la estrategia a la ejecución",
    meta: "Diagnóstico · formación · automatizaciones · acompañamiento",
    price: "Cotizar",
    rate: "Equipos"
  },
  {
    id: 6, type: "webinar", tag: "Webinar en vivo", variant: 1,
    eyebrow: "Gratis · entrada al ecosistema",
    title: "Próximo webinar gratuito",
    meta: "Fechas por confirmar · 60–90 min · con preguntas en vivo",
    price: "Gratis",
    rate: "En vivo"
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
      <Hero onStart={() => scrollTo("formatos")} onCatalog={() => scrollTo("catalogo")} />
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
