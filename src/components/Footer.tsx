import { Landmark, Mail, Phone, MapPin, ExternalLink, ShieldAlert } from "lucide-react";
import { TranslationContent } from "../types";

interface FooterProps {
  t: TranslationContent;
}

export default function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer id="app-footer" className="relative border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Three colored flags indicator representing Indian Agriculture roots */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="h-full w-1/3 bg-orange-500" />
        <div className="h-full w-1/3 bg-white" />
        <div className="h-full w-1/3 bg-emerald-600" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8" id="footer-top-grid">
          
          {/* Logo & Slogan Column (4 columns) */}
          <div className="flex flex-col space-y-5 lg:col-span-4" id="footer-about-col">
            <div className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-xs">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C12 22 20 18 20 12V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" className="stroke-amber-500" />
                  <path d="M12 2v20" className="stroke-emerald-600" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold text-white">
                Smart Kisan <span className="text-amber-500">Network</span>
              </span>
            </div>

            <p className="font-sans text-xs leading-relaxed text-slate-400 max-w-sm">
              "{t.heroSubtitle}"
            </p>

            <div className="flex items-start space-x-2 rounded-lg bg-slate-900 border border-slate-800 p-3.5" id="founder-signature">
              <ShieldAlert className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-500">Founders & Leadership</span>
                <span className="font-display text-xs font-bold text-white block">Ravi Kumar (Founder & CEO)</span>
                <span className="font-display text-xs font-semibold text-slate-300 block">Abhilesh Kumar (Co-Founder & COO)</span>
              </div>
            </div>
          </div>

          {/* Quick links columns (4 columns total) */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4" id="footer-links-col">
            <div className="space-y-4">
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                Agritech Platform
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button onClick={() => handleLinkClick("about")} className="hover:text-emerald-400 transition-colors">
                    {t.navAbout}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("problems")} className="hover:text-emerald-400 transition-colors">
                    {t.navProblems}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("solutions")} className="hover:text-emerald-400 transition-colors">
                    {t.navSolutions}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("how-it-works")} className="hover:text-emerald-400 transition-colors">
                    {t.navHowItWorks}
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                Invest & Partner
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button onClick={() => handleLinkClick("business-model")} className="hover:text-emerald-400 transition-colors">
                    {t.navBusinessModel}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("future")} className="hover:text-emerald-400 transition-colors">
                    {t.navFuture}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("registration")} className="hover:text-emerald-400 transition-colors">
                    {t.formFarmerHeader}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("registration")} className="hover:text-emerald-400 transition-colors">
                    {t.formInvestorHeader}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details Column (4 columns) */}
          <div className="space-y-4 lg:col-span-4" id="footer-contact-col">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              {t.contactTitle}
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="mt-0.5 h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <div>
                  <span className="block font-bold text-slate-300">{t.contactLocationLabel}</span>
                  <span className="text-[11px] leading-relaxed text-slate-400">
                    Hinduni, Alampur, Gonpura, Phulwari Sharif, Patna, Bihar, 801505
                  </span>
                </div>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <div>
                  <span className="block font-bold text-slate-300">{t.contactEmailLabel}</span>
                  <span className="font-mono text-[11px] hover:text-white transition-colors">
                    kavikumar11825@gmail.com
                  </span>
                </div>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <div>
                  <span className="block font-bold text-slate-300">{t.contactPhoneLabel}</span>
                  <span className="font-mono text-[11px] hover:text-white transition-colors">
                    +91 62030 23603 (Helpline)
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Bottom line */}
        <div className="mt-16 border-t border-slate-900 pt-8 text-center text-xs text-slate-500" id="footer-bottom-row">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>
              &copy; {currentYear} Smart Kisan Network Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-4 text-[11px]">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-300">Terms of Use</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-300 flex items-center space-x-0.5">
                <span>Bihar Govt Agritech Program</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
