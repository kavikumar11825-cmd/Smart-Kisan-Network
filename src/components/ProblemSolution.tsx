import { AlertTriangle, TrendingDown, Store, ThermometerSnowflake, UserCheck, Share2, MessageSquareCode, IndianRupee, Layers } from "lucide-react";
import { TranslationContent } from "../types";

interface ProblemSolutionProps {
  t: TranslationContent;
}

export default function ProblemSolution({ t }: ProblemSolutionProps) {
  // Array of problems
  const problems = [
    {
      id: 1,
      title: t.problem1Title,
      desc: t.problem1Desc,
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
      badge: "30% - 40% Waste"
    },
    {
      id: 2,
      title: t.problem2Title,
      desc: t.problem2Desc,
      icon: <ThermometerSnowflake className="h-5 w-5 text-red-500" />,
      badge: "No Storage"
    },
    {
      id: 3,
      title: t.problem3Title,
      desc: t.problem3Desc,
      icon: <TrendingDown className="h-5 w-5 text-red-500" />,
      badge: "Up to 60% Margin Loss"
    },
    {
      id: 4,
      title: t.problem4Title,
      desc: t.problem4Desc,
      icon: <Layers className="h-5 w-5 text-red-500" />,
      badge: "Isolated Smallholders"
    }
  ];

  // Array of solutions
  const solutions = [
    {
      id: 1,
      title: t.solution1Title,
      desc: t.solution1Desc,
      icon: <Store className="h-5 w-5 text-emerald-600" />,
      badge: "Hyper-Local Drop"
    },
    {
      id: 2,
      title: t.solution2Title,
      desc: t.solution2Desc,
      icon: <ThermometerSnowflake className="h-5 w-5 text-emerald-600 animate-pulse" />,
      badge: "Solar Powered"
    },
    {
      id: 3,
      title: t.solution3Title,
      desc: t.solution3Desc,
      icon: <UserCheck className="h-5 w-5 text-emerald-600" />,
      badge: "100% Verified"
    },
    {
      id: 4,
      title: t.solution4Title,
      desc: t.solution4Desc,
      icon: <Share2 className="h-5 w-5 text-emerald-600" />,
      badge: "B2B Bulk buyers"
    },
    {
      id: 5,
      title: t.solution5Title,
      desc: t.solution5Desc,
      icon: <MessageSquareCode className="h-5 w-5 text-emerald-600" />,
      badge: "SMS alerts"
    },
    {
      id: 6,
      title: t.solution6Title,
      desc: t.solution6Desc,
      icon: <IndianRupee className="h-5 w-5 text-emerald-600" />,
      badge: "24-Hr bank credit"
    }
  ];

  return (
    <div className="relative">
      {/* 1. Problem Section (Subtle Warm/Reddish Backdrop) */}
      <section id="problems" className="relative bg-linear-to-b from-slate-50 to-red-50/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="rounded-full bg-red-100 px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-red-700 uppercase">
              The Status Quo Challenge
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              {t.problemTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              {t.problemSubtitle}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" id="problems-grid">
            {problems.map((prob) => (
              <div
                key={prob.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-red-100/50 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-red-200 hover:shadow-md"
                id={`problem-card-${prob.id}`}
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500 group-hover:bg-red-100 transition-colors">
                    {prob.icon}
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900 group-hover:text-red-950">
                    {prob.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {prob.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-red-600 uppercase tracking-wide">
                    {prob.badge}
                  </span>
                  <span className="text-[10px] text-red-400 font-bold font-mono">0{prob.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Transition Wave */}
      <div className="h-8 bg-gradient-to-b from-red-50/20 to-emerald-50/25" />

      {/* 2. Solution Section (Premium Clean Green/Off-White Backdrop) */}
      <section id="solutions" className="relative bg-linear-to-b from-emerald-50/25 via-slate-50 to-white py-20 sm:py-24">
        {/* Dynamic Background Circles */}
        <div className="absolute top-10 left-10 -z-10 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 -z-10 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="rounded-full bg-emerald-100 px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-emerald-800 uppercase">
              The Intelligent Way Forward
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t.solutionTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              {t.solutionSubtitle}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" id="solutions-grid">
            {solutions.map((sol) => (
              <div
                key={sol.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-950/5"
                id={`solution-card-${sol.id}`}
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-200">
                    {sol.icon}
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900 group-hover:text-emerald-950">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {sol.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-wide">
                    {sol.badge}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold font-mono">SOLUTION 0{sol.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
