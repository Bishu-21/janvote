"use client";

import React from "react";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20 px-container-padding">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block bg-slate-900 text-white px-4 py-1 border-2 border-slate-900 font-inter font-black uppercase text-[10px] tracking-widest mb-6 shadow-brutalist">
          Effective: May 3, 2026
        </div>
        <h1 className="font-inter font-black text-6xl text-slate-900 mb-8 uppercase tracking-tighter italic">Privacy Policy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="border-4 border-slate-900 p-6 shadow-brutalist bg-primary-fixed">
            <Shield className="text-primary mb-4" size={32} />
            <h2 className="font-inter font-black text-xl uppercase mb-2">Data Sovereignty</h2>
            <p className="text-sm font-work-sans text-slate-700 leading-relaxed uppercase font-bold">
              VoteFlow does not store personal voter IDs or biometric data. All session data is ephemeral and cleared upon exit.
            </p>
          </div>
          <div className="border-4 border-slate-900 p-6 shadow-brutalist bg-slate-50">
            <Lock className="text-slate-900 mb-4" size={32} />
            <h2 className="font-inter font-black text-xl uppercase mb-2">Encryption Standards</h2>
            <p className="text-sm font-work-sans text-slate-700 leading-relaxed uppercase font-bold">
              End-to-end encryption is applied to all requests reaching the Federation Data Grid via Gemini AI.
            </p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none font-work-sans text-slate-800 space-y-6">
          <section>
            <h3 className="font-inter font-black uppercase text-2xl border-b-4 border-slate-100 pb-2 mb-4">1. Information Collection</h3>
            <p className="uppercase font-bold text-sm tracking-tight">We collect minimal diagnostic information to ensure the stability of the live counting feed. This includes anonymous telemetry and regional metadata.</p>
          </section>
          
          <section>
            <h3 className="font-inter font-black uppercase text-2xl border-b-4 border-slate-100 pb-2 mb-4">2. Use of Google Services</h3>
            <p className="uppercase font-bold text-sm tracking-tight">This platform utilizes Google Gemini for election analysis and Google Analytics for traffic optimization. No PII (Personally Identifiable Information) is shared with these services.</p>
          </section>

          <section>
            <h3 className="font-inter font-black uppercase text-2xl border-b-4 border-slate-100 pb-2 mb-4">3. Your Rights</h3>
            <p className="uppercase font-bold text-sm tracking-tight">Under the Federation Digital Act 2024, users have the right to opt-out of all non-essential telemetry tracking via the browser settings.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
