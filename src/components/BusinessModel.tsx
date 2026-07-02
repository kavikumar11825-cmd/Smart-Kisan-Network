import { DollarSign, Percent, Truck, UserCheck, ShieldCheck, HelpCircle, Star, Milestone, Sprout, Network, Zap } from "lucide-react";
import { TranslationContent } from "../types";

interface BusinessModelProps {
  t: TranslationContent;
}

export default function BusinessModel({ t }: BusinessModelProps) {
  // Streams array
  const revenueStreams = [
    {
      id: 1,
      title: t.revenueStream1Title,
      desc: t.revenueStream1Desc,
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      rate: "₹0.80 / crate / day"
    },
    {
      id: 2,
      title: t.revenueStream2Title,
      desc: t.revenueStream2Desc,
      icon: <Percent className="h-5 w-5 text-emerald-600" />,
      rate: "3% - 5% per trade"
    },
    {
      id: 3,
      title: t.revenueStream3Title,
      desc: t.revenueStream3Desc,
      icon: <Truck className="h-5 w-5 text-emerald-600" />,
      rate: "Buyer funded routes"
    },
    {
      id: 4,
      title: t.revenueStream4Title,
      desc: t.revenueStream4Desc,
      icon: <UserCheck className="h-5 w-5 text-emerald-600" />,
      rate: "₹499 / year subscription"
    },
    {
      id: 5,
      title: t.revenueStream5Title,
      desc: t.revenueStream5Desc,
      icon: <Sprout className="h-5 w-5 text-emerald-600" />,
      rate: "Direct delivery sales"
    }
  ];

  const futureTargets = [
    {
      id: 1,
      title: t.futureTarget1Title,
      desc: t.futureTarget1Desc,
      icon: <Network className="h-6 w-6 text-emerald-600" />,
      progress: "30% Realized"
    },
    {
      id: 2,
      title: t.futureTarget2Title,
      desc: t.futureTarget2Desc,
      icon: <Zap className="h-6 w-6 text-amber-600" />,
      progress: "In Progress"
    },
    {
      id: 3,
      title: t.futureTarget3Title,
      desc: t.futureTarget3Desc,
      icon: <Sprout className="h-6 w-6 text-emerald-600" />,
      progress: "Pilot Testing"
    },
    {
      id: 4,
      title: t.futureTarget4Title,
      desc: t.futureTarget4Desc,
      icon: <Milestone className="h-6 w-6 text-amber-600" />,
      progress: "Ongoing"
    }
  ];

  return (
    <div className="relative">
      {/* Business Model Section */}
      <section id="business-model" className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center">
            <span className="rounded-full bg-emerald-100 px-3.5 py-1 font-mono text-[11px] font-bold tracking-wider text-emerald-800 uppercase">
              Financial Viability
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t.businessModelTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              {t.businessModelSubtitle}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5" id="business-grid">
            {revenueStreams.map((stream) => (
              <div
                key={stream.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-linear-to-b from-white to-slate-50/50 p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg"
                id={`revenue-card-${stream.id}`}
              >
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-200">
                    {stream.icon}
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold text-slate-900 group-hover:text-emerald-950">
                    {stream.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {stream.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold text-emerald-700 bg-emerald-50/70 px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                    {stream.rate}
                  </span>
                  <DollarSign className="h-3.5 w-3.5 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="future" className="relative bg-slate-950 py-20 sm:py-28 text-white overflow-hidden">
        {/* Starry field backgrounds & glowing nodes */}
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center">
            <span className="rounded-full bg-slate-800 border border-slate-700 px-3.5 py-1 font-mono text-[11px] font-bold tracking-wider text-amber-400 uppercase">
              Horizon Roadmap
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t.futureTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400">
              {t.futureSubtitle}
            </p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 via-white to-amber-500" />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" id="future-grid">
            {futureTargets.map((target) => (
              <div
                key={target.id}
                className="group relative rounded-3xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-xs transition-all duration-300 hover:border-emerald-500 hover:bg-slate-900/70"
                id={`future-card-${target.id}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/80 text-white border border-slate-700 group-hover:border-emerald-500 transition-all">
                  {target.icon}
                </div>

                <h3 className="mt-5 font-display text-base font-bold text-white group-hover:text-amber-400">
                  {target.title}
                </h3>
                
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {target.desc}
                </p>

                {/* Progress pill tag */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-800/80 pt-4">
                  <span className="font-mono text-[10px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 rounded-sm">
                    {target.progress}
                  </span>
                  <div className="flex space-x-0.5 text-amber-500">
                    <Star className="h-3 w-3 fill-amber-500" />
                    <Star className="h-3 w-3 fill-amber-500" />
                    <Star className="h-3 w-3 fill-amber-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Saffron expansion statistics ribbon */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 p-6 shadow-xl sm:p-10" id="future-cta-ribbon">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="text-center sm:text-left">
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  Ready to support rural technology transformation?
                </h3>
                <p className="mt-1 text-sm text-amber-50">
                  Join our pre-Series A investment round or establish a public partnership.
                </p>
              </div>
              <a
                href="#registration"
                className="rounded-xl bg-white px-6 py-3 font-sans text-xs font-extrabold text-amber-900 shadow-md transition-all hover:bg-slate-100 hover:scale-105"
              >
                Inquire For Partnership
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
