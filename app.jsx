/* Saturno Web Studio — app */

function App() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 66, behavior: "smooth" });
  };

  return (
    <React.Fragment>
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
      <FAQ />
      <Blog />
      <CTABand />
      <Footer />
      <FloatingWhatsApp />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
