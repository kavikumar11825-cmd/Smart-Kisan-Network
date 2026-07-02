import { useState } from "react";
import { MapPin, Info, ArrowRight, Signal, Milestone, Layers } from "lucide-react";
import { districtsData, DistrictInfo } from "../data";
import { TranslationContent } from "../types";

interface BiharMapProps {
  t: TranslationContent;
  lang: "en" | "hi";
}

export default function BiharMap({ t, lang }: BiharMapProps) {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictInfo>(districtsData[0]);

  return (
    <section id="bihar-map" className="relative bg-slate-50 py-20 sm:py-28 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="rounded-full bg-amber-100 px-3.5 py-1 font-mono text-[11px] font-bold tracking-wider text-amber-800 uppercase">
            Interactive Network
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t.mapTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            {t.mapSubtitle}
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-600 via-white to-amber-500" />
        </div>

        {/* Map and Details Grid */}
        <div className="mt-16 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12" id="map-dashboard-grid">
          
          {/* SVG Map Container (7 columns) */}
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100 lg:col-span-7" id="map-canvas-container">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                Geographic Hubs (Bihar, India)
              </span>
              <div className="flex items-center space-x-3 text-xs">
                <span className="flex items-center space-x-1.5 font-semibold text-emerald-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span>{t.mapStatusActive}</span>
                </span>
                <span className="flex items-center space-x-1.5 font-semibold text-amber-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <span>{t.mapStatusPlanned}</span>
                </span>
              </div>
            </div>

            {/* Stylized Bihar Outline SVG */}
            <div className="relative flex aspect-16/10 w-full items-center justify-center rounded-2xl bg-linear-to-br from-emerald-50/20 via-white to-slate-50 border border-slate-100 p-2 sm:p-6" id="bihar-svg-box">
              
              {/* Abstract Bihar boundary drawing inside SVG */}
              <svg viewBox="0 0 500 300" className="h-full w-full opacity-90" id="bihar-svg">
                {/* Simulated geographic background map contours of Bihar state */}
                <path
                  d="M 50 120 C 70 80, 110 50, 180 60 C 230 45, 310 30, 420 50 C 450 70, 470 120, 460 160 C 440 185, 410 190, 390 220 C 370 230, 340 210, 300 240 C 260 250, 220 220, 190 230 C 150 240, 100 220, 80 190 C 70 180, 50 170, 40 150 C 30 140, 40 130, 50 120 Z"
                  fill="#f0fdf4"
                  stroke="#a7f3d0"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  id="bihar-boundary"
                />

                {/* Grid lines */}
                <path d="M 0 150 L 500 150" stroke="#f1f5f9" strokeWidth="1" />
                <path d="M 250 0 L 250 300" stroke="#f1f5f9" strokeWidth="1" />

                {/* Flow Lines showing routing from village center network to Patna HQ */}
                {districtsData.map((d) => {
                  if (d.id !== "patna") {
                    const patna = districtsData.find(dis => dis.id === "patna")!;
                    const x1 = (d.x / 100) * 500;
                    const y1 = (d.y / 100) * 300;
                    const x2 = (patna.x / 100) * 500;
                    const y2 = (patna.y / 100) * 300;
                    return (
                      <line
                        key={`line-${d.id}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={d.status === "active" ? "#10b981" : "#cbd5e1"}
                        strokeWidth="1.5"
                        strokeDasharray={d.status === "active" ? "1 4" : "4 4"}
                        className={d.status === "active" ? "animate-pulse" : ""}
                        opacity="0.6"
                      />
                    );
                  }
                  return null;
                })}

                {/* Clickable pins */}
                {districtsData.map((dist) => {
                  const px = (dist.x / 100) * 500;
                  const py = (dist.y / 100) * 300;
                  const isActive = dist.status === "active";
                  const isSelected = selectedDistrict.id === dist.id;

                  return (
                    <g
                      key={dist.id}
                      transform={`translate(${px}, ${py})`}
                      className="cursor-pointer group"
                      onClick={() => setSelectedDistrict(dist)}
                    >
                      {/* Interactive click/hover ripple rings */}
                      <circle
                        r={isSelected ? "18" : "12"}
                        className={`transition-all duration-300 ${
                          isSelected
                            ? isActive
                              ? "fill-emerald-500/20 stroke-emerald-500/40 animate-ping"
                              : "fill-amber-500/20 stroke-amber-500/40 animate-ping"
                            : isActive
                              ? "fill-emerald-500/0 stroke-emerald-500/0 group-hover:fill-emerald-500/10 group-hover:stroke-emerald-500/20"
                              : "fill-amber-500/0 stroke-amber-500/0 group-hover:fill-amber-500/10 group-hover:stroke-amber-500/20"
                        }`}
                        strokeWidth="1"
                      />

                      {/* Small point core */}
                      <circle
                        r={isSelected ? "7" : "5"}
                        className={`transition-all duration-200 ${
                          isActive
                            ? "fill-emerald-600 stroke-white"
                            : "fill-amber-500 stroke-white"
                        }`}
                        strokeWidth="1.5"
                      />

                      {/* Text label underneath/above node */}
                      <text
                        y={py > 150 ? "-12" : "18"}
                        textAnchor="middle"
                        className={`font-sans text-[9px] font-bold tracking-tight select-none pointer-events-none transition-all ${
                          isSelected
                            ? "fill-slate-900 scale-105"
                            : "fill-slate-500 group-hover:fill-slate-800"
                        }`}
                      >
                        {lang === "en"
                          ? dist.id.charAt(0).toUpperCase() + dist.id.slice(1)
                          : t[dist.nameKey as keyof TranslationContent]?.toString().split(" ")[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Instructions Prompt */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center space-x-2 rounded-xl bg-slate-900/90 p-2.5 text-[11px] text-white backdrop-blur-xs sm:left-4 sm:right-auto sm:max-w-xs">
                <Info className="h-4 w-4 text-amber-400 shrink-0" />
                <span>{t.mapSelectDistrict}</span>
              </div>
            </div>
          </div>

          {/* District Metrics Panel (5 columns) */}
          <div className="flex flex-col justify-between rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-900/5 lg:col-span-5" id="map-metrics-dashboard">
            <div>
              {/* Dynamic Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {t[selectedDistrict.nameKey as keyof TranslationContent]?.toString()}
                  </h3>
                  <span className={`mt-1.5 inline-flex items-center space-x-1 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${
                    selectedDistrict.status === "active"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-amber-50 text-amber-800 border border-amber-200"
                  }`}>
                    {selectedDistrict.status === "active" ? t.mapStatusActive : t.mapStatusPlanned}
                  </span>
                </div>
                
                {/* Active telemetry signal */}
                {selectedDistrict.status === "active" ? (
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Signal className="h-5 w-5 animate-pulse" />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                    <Milestone className="h-5 w-5" />
                  </div>
                )}
              </div>

              {/* Localized bio/summary */}
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <p className="text-xs leading-relaxed text-slate-600">
                  {lang === "en" ? selectedDistrict.descriptionEn : selectedDistrict.descriptionHi}
                </p>
              </div>

              {/* Real-time local metrics stack */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-2xs">
                  <span className="text-xs font-semibold text-slate-500">
                    {t.mapHubsCount}
                  </span>
                  <span className="font-mono text-sm font-bold text-slate-800">
                    {selectedDistrict.status === "active" ? `${selectedDistrict.centers} Hubs` : "Planned TBD"}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-2xs">
                  <span className="text-xs font-semibold text-slate-500">
                    {t.mapStorageCount}
                  </span>
                  <span className="font-mono text-sm font-bold text-slate-800">
                    {selectedDistrict.coldStorageCapacity}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-2xs">
                  <span className="text-xs font-semibold text-slate-500">
                    {t.activeFarmers}
                  </span>
                  <span className="font-mono text-sm font-bold text-slate-800">
                    {selectedDistrict.status === "active" ? `${selectedDistrict.farmers}+ Farmers` : "Upcoming Onboarding"}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Call-To-Action inside dashboard */}
            <div className="mt-8 border-t border-slate-100 pt-5">
              <a
                href="#registration"
                className="group flex items-center justify-between rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-800"
              >
                <span>Request details on {lang === "en" ? selectedDistrict.id.toUpperCase() : t[selectedDistrict.nameKey as keyof TranslationContent]?.toString().split(" ")[0]}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
