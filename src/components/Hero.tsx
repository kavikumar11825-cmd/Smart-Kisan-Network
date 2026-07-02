import { Sprout, ShieldCheck, ArrowRight, TrendingUp, Cpu, Landmark } from "lucide-react";
import { TranslationContent } from "../types";

interface HeroProps {
  t: TranslationContent;
  onJoinFarmerClick: () => void;
  onPartnerClick: () => void;
}

export default function Hero({ t, onJoinFarmerClick, onPartnerClick }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-radial from-emerald-50/70 via-slate-50 to-white pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
      {/* Dynamic Background Grid and Circular Accents */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#05966905_1px,transparent_1px),linear-gradient(to_bottom,#05966905_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 right-0 -z-10 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="absolute bottom-1/4 left-10 -z-10 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8" id="hero-grid">
          {/* Text content (7 columns on desktop) */}
          <div className="flex flex-col text-left lg:col-span-7" id="hero-content">
            {/* Saffron accent badge */}
            <div className="inline-flex max-w-fit items-center space-x-1.5 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-amber-800 shadow-2xs hover:bg-amber-100/50 transition-colors" id="hero-badge">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                Bihar's Leading Agritech Movement
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.1]!" id="hero-headline">
              {t.heroTitle.split(" ").map((word, i) => {
                const isHighlight = ["Technology", "Supply", "Chains", "तकनीक", "स्मार्ट", "सप्लाई", "चेन"].some(term => word.includes(term));
                return (
                  <span key={i} className={isHighlight ? "bg-gradient-to-r from-emerald-600 via-green-600 to-amber-500 bg-clip-text text-transparent" : ""}>
                    {word}{" "}
                  </span>
                );
              })}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg lg:text-base xl:text-lg" id="hero-subheading">
              {t.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" id="hero-actions">
              <button
                onClick={onJoinFarmerClick}
                className="group flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3.5 font-sans text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:translate-y-[-2px] hover:shadow-xl hover:shadow-emerald-600/30 active:translate-y-[0px]"
                id="hero-join-btn"
              >
                <span>{t.heroCTAJoinFarmer}</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onPartnerClick}
                className="flex items-center justify-center space-x-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-sans text-sm font-bold text-slate-800 shadow-sm transition-all hover:border-emerald-500 hover:bg-emerald-50/20 hover:text-emerald-900 hover:translate-y-[-2px] active:translate-y-[0px]"
                id="hero-partner-btn"
              >
                <Landmark className="h-4.5 w-4.5 text-emerald-600" />
                <span>{t.heroCTAPartner}</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-slate-100 pt-8" id="hero-quick-trust">
              <div className="flex items-start space-x-2">
                <div className="mt-1 rounded-lg bg-emerald-50 p-1 text-emerald-600">
                  <Sprout className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-display text-xs font-bold text-slate-800">100% Direct</span>
                  <span className="text-[11px] text-slate-500">No Middlemen</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="mt-1 rounded-lg bg-amber-50 p-1 text-amber-600">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-display text-xs font-bold text-slate-800">Cold Chain</span>
                  <span className="text-[11px] text-slate-500">Anti-Spoilage</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="mt-1 rounded-lg bg-emerald-50 p-1 text-emerald-600">
                  <Cpu className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-display text-xs font-bold text-slate-800">Digitized</span>
                  <span className="text-[11px] text-slate-500">Weight & Pay</span>
                </div>
              </div>
            </div>
          </div>

          {/* Graphical Representation (5 columns on desktop) */}
          <div className="relative flex items-center justify-center lg:col-span-5" id="hero-graphics">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow-2xl shadow-emerald-900/5">
              {/* Top header decoration matching Indian Flag Colors */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-white to-emerald-600" />

              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-700 uppercase">
                  Live Network Feed
                </span>
              </div>

              {/* Graphical Network Animation / Flow Diagram */}
              <div className="relative rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <div className="absolute top-2 right-2 flex items-center space-x-1 rounded-md bg-white px-1.5 py-0.5 shadow-2xs">
                  <TrendingUp className="h-3 w-3 text-emerald-600" />
                  <span className="font-mono text-[9px] font-bold text-emerald-700">+18% Profit</span>
                </div>

                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Operations Schema</span>
                
                {/* Farmer to Cold Storage Schematic */}
                <div className="mt-6 flex flex-col space-y-4">
                  {/* Node 1: Village Center */}
                  <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow-xs border-l-4 border-emerald-500">
                    <div className="flex items-center space-x-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">Village Collection Center</h4>
                        <p className="text-[10px] text-emerald-600 font-medium">Hyper-local drops & instant weight</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-700">STEP 01</span>
                  </div>

                  {/* Flow Arrow with dotted line */}
                  <div className="flex justify-center -my-2 py-1">
                    <div className="h-6 w-0.5 border-r-2 border-dotted border-emerald-300 animate-pulse" />
                  </div>

                  {/* Node 2: Cold Storage */}
                  <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow-xs border-l-4 border-sky-500">
                    <div className="flex items-center space-x-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                        <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l4 4m-4-4L8 7m4 11l-4-4m4 4l4-4" />
                          <circle cx="12" cy="12" r="1" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">Block Cold Storage</h4>
                        <p className="text-[10px] text-sky-600 font-medium">Solar cooled, preserving quality</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-sky-700">STEP 02</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-2 py-1">
                    <div className="h-6 w-0.5 border-r-2 border-dotted border-emerald-300" />
                  </div>

                  {/* Node 3: Direct Buyers */}
                  <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow-xs border-l-4 border-amber-500">
                    <div className="flex items-center space-x-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                        <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">National Retail / Mandis</h4>
                        <p className="text-[10px] text-amber-600 font-medium">Direct market bidding & transparency</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-amber-700">STEP 03</span>
                  </div>
                </div>
              </div>

              {/* Mini Interactive Statistics Drawer */}
              <div className="mt-5 space-y-3.5 border-t border-slate-100 pt-5">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Logistics Route Efficiency</span>
                  <span className="font-mono font-bold text-slate-800">96.8% Up</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full w-[96.8%] rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Bihar Storage Node Count:</span>
                  <span className="rounded-sm bg-amber-50 px-1.5 py-0.5 font-mono font-bold text-amber-800">3 Active blocks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Big Startup Core Metrics Row */}
        <div className="mt-16 sm:mt-24 rounded-3xl border border-emerald-100/60 bg-gradient-to-br from-white to-emerald-50/20 p-8 shadow-xl shadow-emerald-800/5 sm:p-12" id="hero-metrics-section">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-6 lg:gap-12" id="hero-metrics-grid">
            <div className="flex flex-col items-center" id="stat-farmers">
              <span className="font-display text-4xl font-extrabold text-emerald-950 sm:text-5xl">
                4,500+
              </span>
              <span className="mt-2 text-sm font-semibold tracking-wide text-emerald-800 uppercase">
                {t.activeFarmers}
              </span>
              <span className="mt-1 text-xs text-slate-500">Patna, Muzaffarpur, & Vaishali districts</span>
            </div>
            
            <div className="relative flex flex-col items-center" id="stat-capacity">
              {/* Separator lines for desktop */}
              <div className="absolute inset-y-2 left-0 hidden w-px bg-emerald-100 sm:block" />
              <div className="absolute inset-y-2 right-0 hidden w-px bg-emerald-100 sm:block" />
              
              <span className="font-display text-4xl font-extrabold text-slate-900 sm:text-5xl">
                6,700+
              </span>
              <span className="mt-2 text-sm font-semibold tracking-wide text-amber-600 uppercase">
                {t.coldStorageCapacity}
              </span>
              <span className="mt-1 text-xs text-slate-500">Expanding with solar-backed grids</span>
            </div>

            <div className="flex flex-col items-center" id="stat-villages">
              <span className="font-display text-4xl font-extrabold text-emerald-950 sm:text-5xl">
                120+
              </span>
              <span className="mt-2 text-sm font-semibold tracking-wide text-emerald-800 uppercase">
                {t.villagesConnected}
              </span>
              <span className="mt-1 text-xs text-slate-500">Empowering grassroot agrarian hubs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
