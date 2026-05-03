"use client";

import React from "react";
import { FileText, Scale, Gavel, AlertTriangle } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20 px-container-padding">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block bg-slate-900 text-white px-4 py-1 border-2 border-slate-900 font-inter font-black uppercase text-[10px] tracking-widest mb-6 shadow-brutalist">
          Updated: May 3, 2026
        </div>
        <h1 className="font-inter font-black text-6xl text-slate-900 mb-8 uppercase tracking-tighter italic">Terms of Service</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="border-4 border-slate-900 p-6 shadow-brutalist bg-slate-50">
            <Scale className="text-slate-900 mb-4" size={24} />
            <h2 className="font-inter font-black text-sm uppercase mb-2">Legal Use</h2>
            <p className="text-[10px] font-work-sans text-slate-600 leading-relaxed uppercase font-bold">
              Users must utilize the data for informational purposes only. Misrepresentation of results is prohibited.
            </p>
          </div>
          <div className="border-4 border-slate-900 p-6 shadow-brutalist bg-slate-50">
            <Gavel className="text-slate-900 mb-4" size={24} />
            <h2 className="font-inter font-black text-sm uppercase mb-2">Liability</h2>
            <p className="text-[10px] font-work-sans text-slate-600 leading-relaxed uppercase font-bold">
              VoteFlow is an independent tracker. Official results are exclusively certified by the Election Commission.
            </p>
          </div>
          <div className="border-4 border-slate-900 p-6 shadow-brutalist bg-google-yellow/10">
            <AlertTriangle className="text-google-yellow mb-4" size={24} />
            <h2 className="font-inter font-black text-sm uppercase mb-2">Modifications</h2>
            <p className="text-[10px] font-work-sans text-slate-600 leading-relaxed uppercase font-bold">
              We reserve the right to modify these terms as the 2026 electoral landscape evolves.
            </p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none font-work-sans text-slate-800 space-y-8">
          <section>
            <h3 className="font-inter font-black uppercase text-2xl border-b-4 border-slate-100 pb-2 mb-4">1. Data Accuracy</h3>
            <p className="uppercase font-bold text-sm tracking-tight">While we strive for 100% accuracy via the Federation Data Grid and Gemini AI analysis, VoteFlow is not liable for technical lag in the live feed. Always cross-reference with official bulletins.</p>
          </section>
          
          <section>
            <h3 className="font-inter font-black uppercase text-2xl border-b-4 border-slate-100 pb-2 mb-4">2. Intellectual Property</h3>
            <p className="uppercase font-bold text-sm tracking-tight">The "VoteFlow" brand, Neo-Brutalist design system, and custom AI reasoning algorithms are proprietary technology. Commercial use without authorization is restricted.</p>
          </section>

          <section>
            <h3 className="font-inter font-black uppercase text-2xl border-b-4 border-slate-100 pb-2 mb-4">3. Prohibited Conduct</h3>
            <p className="uppercase font-bold text-sm tracking-tight">Attempting to scrape the AI API, bypass rate limits, or inject malicious payloads into the civic chat assistant will result in immediate IP restriction and legal referral.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
