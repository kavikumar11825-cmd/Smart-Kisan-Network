import { Truck, Scale, Snowflake, ShoppingBag, DollarSign } from "lucide-react";
import { TranslationContent } from "../types";

interface HowItWorksProps {
  t: TranslationContent;
}

export default function HowItWorks({ t }: HowItWorksProps) {
  const steps = [
    {
      id: 1,
      title: t.step1Title,
      desc: t.step1Desc,
      icon: <Truck className="h-6 w-6" />,
      color: "from-emerald-500 to-emerald-600",
      bgLight: "bg-emerald-50 text-emerald-700"
    },
    {
      id: 2,
      title: t.step2Title,
      desc: t.step2Desc,
      icon: <Scale className="h-6 w-6" />,
      color: "from-amber-500 to-amber-600",
      bgLight: "bg-amber-50 text-amber-700"
    },
    {
      id: 3,
      title: t.step3Title,
      desc: t.step3Desc,
      icon: <Snowflake className="h-6 w-6" />,
      color: "from-sky-500 to-sky-600",
      bgLight: "bg-sky-50 text-sky-700"
    },
    {
      id: 4,
      title: t.step4Title,
      desc: t.step4Desc,
      icon: <ShoppingBag className="h-6 w-6" />,
      color: "from-indigo-500 to-indigo-600",
      bgLight: "bg-indigo-50 text-indigo-700"
    },
    {
      id: 5,
      title: t.step5Title,
      desc: t.step5Desc,
      icon: <DollarSign className="h-6 w-6" />,
      color: "from-green-500 to-green-600",
      bgLight: "bg-green-50 text-green-700"
    }
  ];

  return (
    <section id="how-it-works" className="relative bg-white py-20 sm:py-28 overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-100/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="rounded-full bg-emerald-100 px-3.5 py-1 font-mono text-[11px] font-bold tracking-wider text-emerald-800 uppercase">
            Operational Blueprint
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {t.howItWorksTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            {t.howItWorksSubtitle}
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-600 via-white to-amber-500" />
        </div>

        {/* Timeline Container */}
        <div className="relative mt-20" id="timeline-container">
          {/* Centered vertical line on desktop, left vertical line on mobile */}
          <div className="absolute top-0 bottom-0 left-4 w-1 bg-slate-100 sm:left-1/2 sm:-ml-0.5" id="timeline-connector-line" />

          <div className="space-y-12 sm:space-y-16" id="timeline-steps">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col sm:flex-row ${isEven ? "sm:flex-row-reverse" : ""}`}
                  id={`timeline-step-${step.id}`}
                >
                  {/* Icon/Circle Indicator on the line */}
                  <div className="absolute left-4 -ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md border-2 border-emerald-500 z-10 sm:left-1/2 sm:-ml-4.5">
                    <span className="font-mono text-xs font-bold text-emerald-700">{step.id}</span>
                  </div>

                  {/* Empty space for staggering on desktop */}
                  <div className="hidden w-1/2 sm:block" />

                  {/* Step Card Content */}
                  <div className="w-full pl-12 sm:w-1/2 sm:pl-0 sm:px-8">
                    <div className="group relative rounded-3xl border border-slate-200/60 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-slate-100">
                      {/* Step Badge & Icon */}
                      <div className="flex items-center justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${step.bgLight} shadow-2xs`}>
                          {step.icon}
                        </div>
                        <span className={`rounded-full bg-gradient-to-r ${step.color} px-3 py-0.5 font-mono text-[10px] font-bold text-white uppercase tracking-wider`}>
                          Step 0{step.id}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-lg font-bold text-slate-900 group-hover:text-emerald-950">
                        {step.title}
                      </h3>
                      
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {step.desc}
                      </p>

                      {/* Visual accent block */}
                      <div className="absolute top-0 bottom-0 left-0 w-1.5 rounded-l-3xl bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
