import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProblemSolution from "./components/ProblemSolution";
import HowItWorks from "./components/HowItWorks";
import BiharMap from "./components/BiharMap";
import BusinessModel from "./components/BusinessModel";
import Forms from "./components/Forms";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { translations } from "./translations";

export default function App() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [activeFormTab, setActiveFormTab] = useState<"farmer" | "investor">("farmer");

  const t = translations[lang];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleJoinFarmer = () => {
    setActiveFormTab("farmer");
    // Small timeout ensures the tab updates before scrolling starts
    setTimeout(() => {
      scrollToSection("registration");
    }, 50);
  };

  const handlePartnerWithUs = () => {
    setActiveFormTab("investor");
    setTimeout(() => {
      scrollToSection("registration");
    }, 50);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-500 selection:text-white" id="app-root-container">
      {/* Dynamic Header */}
      <Navbar t={t} lang={lang} setLang={setLang} />

      {/* Main Sections */}
      <main id="app-main-content">
        {/* 1. Hero */}
        <Hero
          t={t}
          onJoinFarmerClick={handleJoinFarmer}
          onPartnerClick={handlePartnerWithUs}
        />

        {/* 2. About Us */}
        <About t={t} />

        {/* 3 & 4. Problem & Solution Section */}
        <ProblemSolution t={t} />

        {/* 5. How It Works */}
        <HowItWorks t={t} />

        {/* Dynamic Reach/Expansion Interactive map */}
        <BiharMap t={t} lang={lang} />

        {/* 6 & 7. Business Model and Future Vision */}
        <BusinessModel t={t} />

        {/* Testimonials */}
        <Testimonials t={t} lang={lang} />

        {/* Onboarding and Enquiry Forms */}
        <Forms
          t={t}
          activeTab={activeFormTab}
          setActiveTab={setActiveFormTab}
        />
      </main>

      {/* 8. Contact & Footer */}
      <Footer t={t} />
    </div>
  );
}

