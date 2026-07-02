import { useState } from "react";
import { Menu, X, Globe, PhoneCall } from "lucide-react";
import { TranslationContent } from "../types";

interface NavbarProps {
  t: TranslationContent;
  lang: "en" | "hi";
  setLang: (lang: "en" | "hi") => void;
}

export default function Navbar({ t, lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === "en" ? "hi" : "en");
  };

  const navItems = [
    { label: t.navHome, id: "home" },
    { label: t.navAbout, id: "about" },
    { label: t.navProblems, id: "problems" },
    { label: t.navSolutions, id: "solutions" },
    { label: t.navHowItWorks, id: "how-it-works" },
    { label: t.navBusinessModel, id: "business-model" },
    { label: t.navFuture, id: "future" },
    { label: t.navContact, id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
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

  return (
    <header id="app-navbar" className="sticky top-0 z-50 w-full border-b border-emerald-100/50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo and Brand */}
        <div className="flex cursor-pointer items-center space-x-2" onClick={() => scrollToSection("home")} id="nav-logo-container">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 via-green-500 to-amber-500 p-0.5 shadow-md shadow-emerald-600/10" id="nav-logo-badge">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white">
              {/* Custom SVG logo with Indian flag inspired colors */}
              <svg className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22C12 22 20 18 20 12V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" className="stroke-amber-500" />
                <path d="M12 2v20" className="stroke-emerald-600" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-emerald-950 sm:text-xl">
              Smart Kisan <span className="text-amber-600 font-semibold">Network</span>
            </span>
            <span className="hidden font-mono text-[9px] font-medium tracking-widest text-emerald-700 uppercase xs:inline-block">
              Bihar Agritech Initiative
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" id="nav-desktop-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="rounded-lg px-3 py-2 font-sans text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-800"
              id={`nav-link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons & Language Switch */}
        <div className="hidden sm:flex items-center space-x-3" id="nav-desktop-actions">
          {/* Contact Hotline Indicator */}
          <div className="hidden xl:flex items-center space-x-2 rounded-full border border-emerald-100 bg-emerald-50/50 px-3.5 py-1.5 text-emerald-800 transition-all hover:bg-emerald-50">
            <PhoneCall className="h-4 w-4 stroke-[2.5]" />
            <span className="font-mono text-xs font-bold">+91 62030 23603</span>
          </div>

          <button
            onClick={toggleLang}
            className="flex items-center space-x-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 font-sans text-xs font-semibold text-slate-700 shadow-xs transition-all hover:border-emerald-500 hover:bg-emerald-50/20"
            id="nav-lang-btn-desktop"
          >
            <Globe className="h-4 w-4 text-emerald-600 animate-spin-slow" />
            <span>{t.langSwitch}</span>
          </button>

          <button
            onClick={() => scrollToSection("registration")}
            className="rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-4 py-2 font-sans text-xs font-bold text-white shadow-md shadow-emerald-600/10 transition-all hover:translate-y-[-1px] hover:shadow-lg hover:shadow-emerald-600/20 active:translate-y-[1px]"
            id="nav-register-btn-desktop"
          >
            {t.heroCTAJoinFarmer}
          </button>
        </div>

        {/* Mobile menu and Language switch for small screens */}
        <div className="flex items-center space-x-2 lg:hidden" id="nav-mobile-actions">
          <button
            onClick={toggleLang}
            className="flex items-center space-x-1 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 font-sans text-xs font-bold text-slate-700 shadow-xs transition-all hover:bg-slate-50"
            id="nav-lang-btn-mobile"
          >
            <Globe className="h-3.5 w-3.5 text-emerald-600" />
            <span>{t.langSwitch}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 focus:outline-hidden"
            aria-label="Toggle menu"
            id="nav-mobile-menu-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pt-2 pb-4 shadow-xl lg:hidden animate-fade-in" id="nav-mobile-panel">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full rounded-lg px-3 py-2.5 text-left font-sans text-base font-medium text-slate-800 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
                id={`nav-link-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-col space-y-3 px-3">
            <div className="flex items-center space-x-2 text-emerald-800 font-mono text-sm font-semibold">
              <PhoneCall className="h-4 w-4" />
              <span>+91 62030 23603 (Bihar Helpline)</span>
            </div>
            <button
              onClick={() => scrollToSection("registration")}
              className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 py-3 text-center font-sans text-sm font-bold text-white shadow-md shadow-emerald-600/15"
              id="nav-register-btn-mobile"
            >
              {t.heroCTAJoinFarmer}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
