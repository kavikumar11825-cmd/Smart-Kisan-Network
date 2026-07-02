import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Award } from "lucide-react";
import { testimonialsData } from "../data";
import { TranslationContent } from "../types";

interface TestimonialsProps {
  t: TranslationContent;
  lang: "en" | "hi";
}

export default function Testimonials({ t, lang }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prevIdx) => (prevIdx === 0 ? testimonialsData.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setActiveIndex((prevIdx) => (prevIdx === testimonialsData.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Decorative gradient patches */}
      <div className="absolute top-1/4 right-0 -z-10 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 -z-10 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="rounded-full bg-emerald-100 px-3.5 py-1 font-mono text-[11px] font-bold tracking-wider text-emerald-800 uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {t.testimonialTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            {t.testimonialSubtitle}
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-600 via-white to-amber-500" />
        </div>

        {/* Testimonials Slider/Card */}
        <div className="mt-16 relative" id="testimonial-slider">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-b from-white to-slate-50/50 p-8 shadow-xl shadow-slate-100 sm:p-12">
            
            {/* Top saffron accent tag */}
            <div className="absolute top-0 right-12 rounded-b-xl bg-amber-500 px-4 py-1 text-[10px] font-bold text-white uppercase tracking-wider flex items-center space-x-1.5 shadow-xs">
              <Award className="h-3 w-3" />
              <span>Verified Grower Partner</span>
            </div>

            {/* Left giant quote icon */}
            <div className="absolute left-6 top-6 opacity-[0.06] text-emerald-950">
              <Quote className="h-36 w-36 stroke-[1.5]" />
            </div>

            <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
              
              {/* Farmer Image & Margin Tag (4 columns) */}
              <div className="flex flex-col items-center md:col-span-4" id="testimonial-profile">
                <div className="relative">
                  <img
                    src={current.image}
                    alt={current.name[lang]}
                    referrerPolicy="no-referrer"
                    className="h-32 w-32 rounded-full border-4 border-emerald-100 object-cover shadow-md"
                  />
                  {/* Saffron increase badge */}
                  <div className="absolute -bottom-2 -right-2 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 px-3 py-1 text-xs font-extrabold text-white shadow-md shadow-emerald-600/20">
                    {current.increase} Income
                  </div>
                </div>

                <h4 className="mt-5 font-display text-base font-bold text-slate-900 text-center">
                  {current.name[lang]}
                </h4>
                <p className="font-mono text-xs font-semibold text-emerald-700 text-center uppercase tracking-wider mt-0.5">
                  {current.role[lang]}
                </p>
                <p className="text-[11px] text-slate-400 text-center font-medium">
                  {current.location[lang]}
                </p>
              </div>

              {/* Farmer Narrative Quotation (8 columns) */}
              <div className="flex flex-col justify-center md:col-span-8" id="testimonial-quote">
                <MessageSquare className="h-6 w-6 text-emerald-600 mb-4 stroke-[2.5]" />
                <p className="font-sans text-base md:text-lg italic leading-relaxed text-slate-700">
                  "{current.text[lang]}"
                </p>

                {/* Micro indicators */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex space-x-1.5">
                    {testimonialsData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          activeIndex === idx ? "w-6 bg-emerald-600" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                        }`}
                        title={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex space-x-2">
                    <button
                      onClick={prev}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors shadow-2xs"
                      title="Previous"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={next}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors shadow-2xs"
                      title="Next"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
