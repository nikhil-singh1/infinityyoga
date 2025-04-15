import React, { useEffect, useState }from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Classes from "./components/Classes";
import Teachers from "./components/Teachers";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Preloader from "./components/loading";
import Testimonials from "./components/Testimonials";
import Sessions from "./components/Sessions";
import YogaBenefits from "./components/YogaBenefits";
import Services from "./components/Services";
import HeroWithForm from "./components/form";
import PricingSection from "./components/prices";
import FloatingContactIcons from "./components/FloatingContactIcons";
import YogaHero from "./components/yogahero";
import Packages from "./components/packages";



const App = () => {
  const businessPhoneNumber = "+919310284204";

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const preloaderShown = sessionStorage.getItem("preloaderShown");

    if (!preloaderShown) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("preloaderShown", "true");
      }, 4400);
    }
  }, []);

  if (loading) {
    return <Preloader />; // Show Preloader only on first visit
  }
  return (
    <>
      <Navbar />
      <div className="relative pb-40"> {/* Add padding to push Services down */}
  <HeroWithForm />
</div>
      {/* <Hero /> */}
      <Services />
      <Packages />
      {/* <Sessions /> */}
      <About />
      <YogaBenefits />
      {/* <Classes /> */}
      {/* <Teachers /> */}
      {/* <PricingSection /> */}
      <Testimonials />
      <FloatingContactIcons phoneNumber={businessPhoneNumber} />
      <YogaHero />
      <Footer />
    </>
  );
};

export default App;
