import { Target, Eye, Users, ShieldAlert } from "lucide-react";
import { TranslationContent } from "../types";

interface AboutProps {
  t: TranslationContent;
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="relative bg-white py-20 sm:py-28">
      {/* Decorative floral elements reminiscent of agrarian roots */}
      <div className="absolute top-0 left-0 h-40 w-40 bg-gradient-to-br from-emerald-500/5 to-transparent blur-2xl" />
      <div className="absolute bottom-0 right-0 h-40 w-40 bg-gradient-to-tl from-amber-500/5 to-transparent blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-mono text-xs font-bold tracking-widest text-emerald-700 uppercase">
            {t.aboutTitle}
          </h2>
          <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t.aboutSubtitle}
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-600 via-white to-amber-500" />
        </div>

        {/* Founder Story Layout */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center" id="about-grid">
          {/* Founder Profile Card (5 columns) */}
          <div className="lg:col-span-5" id="about-founder-card-container">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100 transition-all hover:shadow-2xl">
              
              {/* Grid of Founders */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 mb-6">
                {/* Ravi Kumar */}
                <div className="relative h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 to-amber-50">
                  <div className="absolute inset-0 flex items-center justify-center p-4 text-emerald-800">
                    <svg className="h-full w-full opacity-85 text-emerald-800" viewBox="0 0 200 200" fill="currentColor">
                      <path d="M10,180 Q50,140 90,160 T190,140 L190,190 L10,190 Z" fill="#d1fae5" />
                      <path d="M40,180 Q80,150 120,170 T200,150 L200,190 L40,190 Z" fill="#10b981" opacity="0.15" />
                      <circle cx="150" cy="60" r="25" fill="#f59e0b" opacity="0.3" />
                      <circle cx="100" cy="80" r="30" fill="#047857" />
                      <path d="M50,170 Q100,120 150,170 Z" fill="#065f46" />
                      <rect x="85" y="75" width="30" height="8" rx="2" fill="#fff" opacity="0.7" />
                    </svg>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 backdrop-blur-xs p-3 shadow-sm">
                    <h3 className="font-display text-sm font-bold text-slate-800">Ravi Kumar</h3>
                    <p className="font-mono text-[9px] font-semibold text-emerald-700 uppercase">Founder & CEO, Patna</p>
                  </div>
                </div>

                {/* Abhilesh Kumar */}
                <div className="relative h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 to-emerald-50">
                  <div className="absolute inset-0 flex items-center justify-center p-4 text-amber-800">
                    <svg className="h-full w-full opacity-85 text-amber-800" viewBox="0 0 200 200" fill="currentColor">
                      <path d="M10,180 Q50,140 90,160 T190,140 L190,190 L10,190 Z" fill="#fef3c7" />
                      <path d="M40,180 Q80,150 120,170 T200,150 L200,190 L40,190 Z" fill="#d97706" opacity="0.15" />
                      <circle cx="50" cy="60" r="25" fill="#10b981" opacity="0.3" />
                      <circle cx="100" cy="80" r="30" fill="#b45309" />
                      <path d="M50,170 Q100,120 150,170 Z" fill="#78350f" />
                      <circle cx="100" cy="75" r="5" fill="#fff" opacity="0.5" />
                    </svg>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 backdrop-blur-xs p-3 shadow-sm">
                    <h3 className="font-display text-sm font-bold text-slate-800">Abhilesh Kumar</h3>
                    <p className="font-mono text-[9px] font-semibold text-amber-700 uppercase">Co-Founder & COO, Patna</p>
                  </div>
                </div>
              </div>

              {/* Bio Highlights */}
              <div className="mt-6 space-y-4 border-t border-slate-100 pt-6">
                <h4 className="font-display font-bold text-slate-900">{t.aboutFounderTitle}</h4>
                <div className="flex items-center space-x-3 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
                  <Users className="h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Graduated in technology and logistics with 10+ years rural supply chain experience.</span>
                </div>
                <div className="flex items-center space-x-3 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
                  <ShieldAlert className="h-5 w-5 shrink-0 text-amber-600" />
                  <span>On a single-minded mission to rescue Bihar's hard-working growers from post-harvest debt.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Content (7 columns) */}
          <div className="flex flex-col space-y-6 lg:col-span-7" id="about-narrative-container">
            <p className="text-base leading-relaxed text-slate-700 md:text-lg" id="about-story-p1">
              {t.aboutStoryPara1}
            </p>
            <p className="text-base leading-relaxed text-slate-600" id="about-story-p2">
              {t.aboutStoryPara2}
            </p>
            <p className="text-base leading-relaxed text-slate-600" id="about-story-p3">
              {t.aboutStoryPara3}
            </p>

            {/* Mission & Vision Cards side-by-side */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2" id="about-cards-row">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/20 p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/10">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-emerald-950">
                  {t.aboutMissionTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t.aboutMissionText}
                </p>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50/10 p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md shadow-amber-500/10">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                  {t.aboutVisionTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t.aboutVisionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
