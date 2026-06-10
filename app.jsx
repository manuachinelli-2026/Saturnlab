/* Saturno Web Studio — app */

function App() {
  const [currency, setCurrency] = React.useState({ code: 'EUR', rates: {} });

  React.useEffect(() => {
    Promise.all([
      fetch('https://ipinfo.io/json').then(r => r.json()),
      fetch('https://api.frankfurter.app/latest?from=EUR&to=USD,ARS').then(r => r.json()),
    ]).then(([geo, ratesData]) => {
      const code = geo.country === 'AR' ? 'ARS'
                 : geo.country === 'ES' ? 'EUR'
                 : 'USD';
      setCurrency({ code, rates: ratesData.rates || {} });
    }).catch(() => {/* mantener EUR por defecto si falla */});
  }, []);

  function formatPrice(eurAmount) {
    if (currency.code === 'EUR') return `${eurAmount} €`;
    if (currency.code === 'USD') return `USD ${Math.round(eurAmount * (currency.rates.USD || 1))}`;
    const rounded = Math.round(eurAmount * (currency.rates.ARS || 1) / 100) * 100;
    return `$ ${rounded.toLocaleString('es-AR')}`;
  }

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 66, behavior: "smooth" });
  };

  return (
    <CurrencyContext.Provider value={{ formatPrice }}>
      <Nav
        onServices={() => scrollTo("servicios")}
        onBlog={()    => scrollTo("blog")}
        onContact={()  => scrollTo("contacto")}
      />
      <Hero onServices={() => scrollTo("servicios")} />
      <HowItWorks />
      <Services />
      <BenefitSections onServices={() => scrollTo("servicios")} />
      <WhyUs />
      <Testimonials />
      <Clients />
      <FAQ />
      <Blog />
      <CTABand />
      <Footer />
      <FloatingWhatsApp />
    </CurrencyContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
