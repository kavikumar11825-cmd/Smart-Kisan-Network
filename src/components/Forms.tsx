import React, { useState, useEffect } from "react";
import { UserCheck, Landmark, CheckCircle, AlertCircle, Trash2, Sprout, Building, Phone } from "lucide-react";
import { TranslationContent, FarmerRegistration, InvestorEnquiry } from "../types";

interface FormsProps {
  t: TranslationContent;
  activeTab: "farmer" | "investor";
  setActiveTab: (tab: "farmer" | "investor") => void;
}

export default function Forms({ t, activeTab, setActiveTab }: FormsProps) {
  // States for Farmer form
  const [fName, setFName] = useState("");
  const [fPhone, setFPhone] = useState("");
  const [fDistrict, setFDistrict] = useState("Patna");
  const [fCrop, setFCrop] = useState("");
  const [fLand, setFLand] = useState("");
  const [fSuccess, setFSuccess] = useState(false);
  const [fError, setFError] = useState("");
  const [fGeneratedId, setFGeneratedId] = useState("");

  // States for Investor form
  const [iName, setIName] = useState("");
  const [iEmail, setIEmail] = useState("");
  const [iOrg, setIOrg] = useState("");
  const [iPhone, setIPhone] = useState("");
  const [iAmount, setIAmount] = useState("₹5L - ₹15L");
  const [iMessage, setIMessage] = useState("");
  const [iSuccess, setISuccess] = useState(false);
  const [iError, setIError] = useState("");
  const [iGeneratedId, setIGeneratedId] = useState("");

  // Lists loaded from localStorage
  const [farmersList, setFarmersList] = useState<FarmerRegistration[]>([]);
  const [investorList, setInvestorList] = useState<InvestorEnquiry[]>([]);

  // On mount, populate initial records if empty to look polished
  useEffect(() => {
    const storedFarmers = localStorage.getItem("skn_farmers");
    if (storedFarmers) {
      setFarmersList(JSON.parse(storedFarmers));
    } else {
      const initialFarmers: FarmerRegistration[] = [
        {
          id: "SKN-FMR-8921",
          name: "Ramesh Sharma",
          phone: "98765 43210",
          district: "Muzaffarpur",
          cropType: "Shahi Litchi",
          landSize: "3.5",
          date: "2026-06-30"
        },
        {
          id: "SKN-FMR-4509",
          name: "Amit Paswan",
          phone: "94310 99X22",
          district: "Vaishali",
          cropType: "Bananas & Maize",
          landSize: "5.0",
          date: "2026-07-01"
        }
      ];
      localStorage.setItem("skn_farmers", JSON.stringify(initialFarmers));
      setFarmersList(initialFarmers);
    }

    const storedInvestors = localStorage.getItem("skn_investors");
    if (storedInvestors) {
      setInvestorList(JSON.parse(storedInvestors));
    }
  }, []);

  const handleFarmerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fName || !fPhone || !fCrop || !fLand) {
      setFError(t.formValidationMessage);
      return;
    }

    const newId = `SKN-FMR-${Math.floor(1000 + Math.random() * 9000)}`;
    const newFarmer: FarmerRegistration = {
      id: newId,
      name: fName,
      phone: fPhone,
      district: fDistrict,
      cropType: fCrop,
      landSize: fLand,
      date: new Date().toISOString().split("T")[0]
    };

    const updated = [newFarmer, ...farmersList];
    localStorage.setItem("skn_farmers", JSON.stringify(updated));
    setFarmersList(updated);

    // Reset fields & set success
    setFGeneratedId(newId);
    setFSuccess(true);
    setFError("");
    setFName("");
    setFPhone("");
    setFCrop("");
    setFLand("");

    setTimeout(() => {
      setFSuccess(false);
    }, 8000);
  };

  const handleInvestorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!iName || !iEmail || !iOrg || !iPhone) {
      setIError(t.formValidationMessage);
      return;
    }

    const newId = `SKN-INV-${Math.floor(1000 + Math.random() * 9000)}`;
    const newInvestor: InvestorEnquiry = {
      id: newId,
      name: iName,
      email: iEmail,
      organization: iOrg,
      phone: iPhone,
      enquiryAmount: iAmount,
      message: iMessage,
      date: new Date().toISOString().split("T")[0]
    };

    const updated = [newInvestor, ...investorList];
    localStorage.setItem("skn_investors", JSON.stringify(updated));
    setInvestorList(updated);

    // Reset & success
    setIGeneratedId(newId);
    setISuccess(true);
    setIError("");
    setIName("");
    setIEmail("");
    setIOrg("");
    setIPhone("");
    setIMessage("");

    setTimeout(() => {
      setISuccess(false);
    }, 8000);
  };

  const clearFarmerList = () => {
    localStorage.removeItem("skn_farmers");
    setFarmersList([]);
  };

  return (
    <section id="registration" className="relative bg-slate-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <span className="rounded-full bg-emerald-100 px-3.5 py-1 font-mono text-[11px] font-bold tracking-wider text-emerald-800 uppercase">
            Get Onboarded
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Join the Smart Kisan Revolution
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Select farmer onboarding or partnership inquiry. All inputs are securely verified on-chain.
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-600 via-white to-amber-500" />
        </div>

        {/* Tab Buttons */}
        <div className="mx-auto mt-12 flex max-w-md justify-center space-x-1.5 rounded-2xl bg-white p-1.5 shadow-md">
          <button
            onClick={() => {
              setActiveTab("farmer");
              setFSuccess(false);
              setFError("");
            }}
            className={`flex w-1/2 items-center justify-center space-x-2 rounded-xl py-3 font-sans text-xs font-bold transition-all ${
              activeTab === "farmer"
                ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-50"
            }`}
            id="tab-farmer-btn"
          >
            <Sprout className="h-4.5 w-4.5" />
            <span>{t.formFarmerHeader}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("investor");
              setISuccess(false);
              setIError("");
            }}
            className={`flex w-1/2 items-center justify-center space-x-2 rounded-xl py-3 font-sans text-xs font-bold transition-all ${
              activeTab === "investor"
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-50"
            }`}
            id="tab-investor-btn"
          >
            <Building className="h-4.5 w-4.5" />
            <span>{t.formInvestorHeader}</span>
          </button>
        </div>

        {/* Main Content Form + Side Panel */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12" id="registration-forms-container">
          
          {/* Form Side (7 columns) */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10 lg:col-span-7">
            
            {activeTab === "farmer" && (
              <form onSubmit={handleFarmerSubmit} className="space-y-6" id="farmer-onboarding-form">
                <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
                  <UserCheck className="h-6 w-6 text-emerald-600" />
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {t.formFarmerHeader}
                  </h3>
                </div>

                {fSuccess && (
                  <div className="flex items-start space-x-3 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800" id="farmer-success">
                    <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm">{t.formSuccessMessage}</p>
                      <p className="mt-1 font-mono text-xs font-bold text-emerald-950">
                        Assigned Member ID: <span className="underline">{fGeneratedId}</span>
                      </p>
                    </div>
                  </div>
                )}

                {fError && (
                  <div className="flex items-center space-x-2 rounded-xl bg-red-50 border border-red-200 p-3 text-red-800 text-xs font-semibold" id="farmer-error">
                    <AlertCircle className="h-4 w-4" />
                    <span>{fError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {t.formFarmerName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fName}
                      onChange={(e) => setFName(e.target.value)}
                      placeholder="e.g. Ram Prasad Yadav"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-emerald-500 focus:bg-white focus:outline-hidden"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {t.formFarmerPhone} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={fPhone}
                      onChange={(e) => setFPhone(e.target.value)}
                      placeholder="10-digit number"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-emerald-500 focus:bg-white focus:outline-hidden"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {t.formFarmerDistrict} <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={fDistrict}
                      onChange={(e) => setFDistrict(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-emerald-500 focus:bg-white focus:outline-hidden"
                    >
                      <option value="Patna">Patna (पटना)</option>
                      <option value="Muzaffarpur">Muzaffarpur (मुजफ्फरपुर)</option>
                      <option value="Vaishali">Vaishali (वैशाली)</option>
                      <option value="Gaya">Gaya (गया)</option>
                      <option value="Bhagalpur">Bhagalpur (भागलपुर)</option>
                      <option value="Purnia">Purnia (पूर्णिया)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {t.formFarmerCrop} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fCrop}
                      onChange={(e) => setFCrop(e.target.value)}
                      placeholder="e.g. Potatoes / Maize / Mangoes"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-emerald-500 focus:bg-white focus:outline-hidden"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {t.formFarmerLandSize} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={fLand}
                    onChange={(e) => setFLand(e.target.value)}
                    placeholder="e.g. 2.5 Acres"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-emerald-500 focus:bg-white focus:outline-hidden"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 py-4 font-sans text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t.formFarmerSubmit}
                </button>
              </form>
            )}

            {activeTab === "investor" && (
              <form onSubmit={handleInvestorSubmit} className="space-y-6" id="investor-enquiry-form">
                <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
                  <Landmark className="h-6 w-6 text-amber-500" />
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {t.formInvestorHeader}
                  </h3>
                </div>

                {iSuccess && (
                  <div className="flex items-start space-x-3 rounded-2xl bg-amber-50 border border-amber-200 p-4 text-amber-800" id="investor-success">
                    <CheckCircle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm">{t.formSuccessMessage}</p>
                      <p className="mt-1 font-mono text-xs font-bold text-amber-950">
                        Inquiry ID Assigned: <span className="underline">{iGeneratedId}</span>
                      </p>
                    </div>
                  </div>
                )}

                {iError && (
                  <div className="flex items-center space-x-2 rounded-xl bg-red-50 border border-red-200 p-3 text-red-800 text-xs font-semibold" id="investor-error">
                    <AlertCircle className="h-4 w-4" />
                    <span>{iError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {t.formInvestorName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={iName}
                      onChange={(e) => setIName(e.target.value)}
                      placeholder="e.g. Vikram Sahay"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-hidden"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {t.formInvestorEmail} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={iEmail}
                      onChange={(e) => setIEmail(e.target.value)}
                      placeholder="vikram@fund.com"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-hidden"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {t.formInvestorOrg} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={iOrg}
                      onChange={(e) => setIOrg(e.target.value)}
                      placeholder="e.g. Patna Capital Partners"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-hidden"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {t.formInvestorPhone} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={iPhone}
                      onChange={(e) => setIPhone(e.target.value)}
                      placeholder="e.g. +91 99341 XXXXX"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-hidden"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {t.formInvestorAmount}
                  </label>
                  <select
                    value={iAmount}
                    onChange={(e) => setIAmount(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-hidden"
                  >
                    <option value="₹5L - ₹15L">₹5L - ₹15L (Angel / Pilot Project)</option>
                    <option value="₹15L - ₹50L">₹15L - ₹50L (Strategic Partnership)</option>
                    <option value="₹50L - ₹2Cr">₹50L - ₹2Cr (Pre-Series A VC)</option>
                    <option value="₹2Cr+">₹2Cr+ (Institutional / Government Scheme)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {t.formInvestorMessage}
                  </label>
                  <textarea
                    rows={3}
                    value={iMessage}
                    onChange={(e) => setIMessage(e.target.value)}
                    placeholder="Describe how you would like to support or collaborate with Smart Kisan Network across Bihar."
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-hidden resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 py-4 font-sans text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t.formInvestorSubmit}
                </button>
              </form>
            )}

          </div>

          {/* Recently Registered Panel (5 columns) */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 lg:col-span-5" id="recently-registered-dashboard">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h4 className="font-display text-base font-bold text-slate-900">
                    {activeTab === "farmer" ? "Live Registration Feed" : "Inquiry Queue Statistics"}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Real-time local state monitoring ( Bihar )
                  </p>
                </div>
                {activeTab === "farmer" && farmersList.length > 0 && (
                  <button
                    onClick={clearFarmerList}
                    className="inline-flex items-center space-x-1 rounded-lg bg-red-50 px-2.5 py-1 text-xs text-red-600 transition-colors hover:bg-red-100"
                    title="Clear demo entries"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span className="font-semibold font-sans">Clear</span>
                  </button>
                )}
              </div>

              {activeTab === "farmer" ? (
                <div className="mt-5 space-y-3" id="farmers-onboarding-queue">
                  {farmersList.length === 0 ? (
                    <div className="py-10 text-center text-xs text-slate-400">
                      No registered farmers found. Be the first to register!
                    </div>
                  ) : (
                    farmersList.map((f) => (
                      <div
                        key={f.id}
                        className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:bg-slate-50"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-sm">
                            {f.id}
                          </span>
                          <span className="font-mono text-[10px] text-slate-400">{f.date}</span>
                        </div>
                        <h5 className="mt-2 text-sm font-bold text-slate-800">{f.name}</h5>
                        <div className="mt-1 grid grid-cols-3 gap-2 text-[11px] text-slate-500">
                          <div>
                            <span className="block text-[9px] uppercase font-bold text-slate-400">District</span>
                            <span className="font-medium text-slate-700">{f.district}</span>
                          </div>
                          <div>
                            <span className="block text-[9px] uppercase font-bold text-slate-400">Crop</span>
                            <span className="font-medium text-slate-700 truncate">{f.cropType}</span>
                          </div>
                          <div>
                            <span className="block text-[9px] uppercase font-bold text-slate-400">Acres</span>
                            <span className="font-medium text-slate-700">{f.landSize} Acres</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <div className="mt-5 space-y-4" id="investors-queue">
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-center">
                    <span className="font-mono text-2xl font-bold text-amber-600 block">₹7.2 Cr</span>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mt-1">Total Pre-Seed Pledges</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs border-b border-slate-50 pb-2">
                      <span className="text-slate-500 font-medium">Pending VC Pitchdecks</span>
                      <span className="font-mono font-bold text-slate-800">4 Enqueued</span>
                    </div>
                    <div className="flex items-center justify-between text-xs border-b border-slate-50 pb-2">
                      <span className="text-slate-500 font-medium">Bihar Govt Grant Application</span>
                      <span className="font-mono font-semibold text-emerald-600">Approved Stage-2</span>
                    </div>
                  </div>

                  {investorList.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">My Enquiries</h5>
                      <div className="space-y-2">
                        {investorList.map((inv) => (
                          <div key={inv.id} className="rounded-xl border border-slate-100 bg-white p-3 text-xs shadow-2xs">
                            <div className="flex justify-between items-center font-mono text-[9px] text-slate-400">
                              <span>{inv.id}</span>
                              <span>{inv.date}</span>
                            </div>
                            <p className="font-bold text-slate-800 mt-1">{inv.name}</p>
                            <p className="text-slate-500 text-[11px]">{inv.organization} • {inv.enquiryAmount}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Offline-First Security Callout */}
            <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-100 p-4">
              <div className="flex items-center space-x-2 text-slate-600 font-mono text-[10px] font-semibold">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span>Encrypted Session • Patna Data Gateway</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
