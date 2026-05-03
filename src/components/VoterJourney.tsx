"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Map, UserCheck, ShieldCheck, MapPin, Landmark, Trees, Building2, Bot, MessageSquare, ExternalLink, Mail, Phone } from "lucide-react";

const states = [
  { name: "North Province", icon: Trees, active: true },
  { name: "South Province", icon: Landmark, active: true },
  { name: "East Province", icon: Trees, active: true },
  { name: "West Province", icon: Building2, active: true },
];

export const VoterJourney = () => {
  const [selectedState, setSelectedState] = useState("North Province");

  return (
    <section id="journey" className="w-full px-container-padding py-section-gap bg-white border-y-4 border-slate-900">
      <div className="max-w-5xl mx-auto mb-stack-lg">
        <div className="inline-block bg-slate-900 text-white px-4 py-1 border-2 border-slate-900 font-inter font-black uppercase text-[10px] tracking-widest mb-4 shadow-brutalist">
          <span className="text-google-green">●</span> Post-Election Guide 2026
        </div>
        <h2 className="font-inter font-black text-5xl text-slate-900 mb-2 uppercase tracking-tighter italic">Your Civic Journey</h2>
        <p className="font-work-sans text-lg text-slate-600 max-w-2xl leading-relaxed">
          The 2026 Assembly Elections have concluded. Now, understand your representation and stay engaged with your elected officials.
        </p>
      </div>

      {/* Journey Steps Bento Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Result & Representation */}
        <div className="md:col-span-8 space-y-8">
          <section className="bg-white border-4 border-slate-900 p-8 shadow-brutalist">
            <div className="flex items-center gap-3 mb-6">
              <Map className="text-primary" size={32} />
              <h2 className="font-inter font-black text-2xl text-slate-900 uppercase">1. View State Result</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {states.map((state) => (
                <button
                  key={state.name}
                  onClick={() => setSelectedState(state.name)}
                  className={`group flex flex-col items-center p-4 border-4 transition-all ${
                    selectedState === state.name
                      ? "border-primary bg-primary-fixed text-primary shadow-brutalist"
                      : "border-slate-900 bg-white hover:bg-slate-50"
                  }`}
                >
                  <state.icon className={`mb-2 ${selectedState === state.name ? "text-primary" : "text-slate-700"}`} size={32} />
                  <span className="font-inter font-black uppercase tracking-tighter text-[10px] text-center">{state.name}</span>
                </button>
              ))}
            </div>
            
            <div className="p-6 bg-slate-900 text-white border-4 border-slate-900 shadow-brutalist">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-inter font-black text-xl uppercase italic">{selectedState} Overview</h3>
                <span className="bg-google-green text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest border-2 border-white shadow-brutalist shadow-white">100% Declared</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-google-green">215</div>
                  <div className="text-[8px] uppercase font-black opacity-60">Seats Won</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-google-yellow">75</div>
                  <div className="text-[8px] uppercase font-black opacity-60">Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-google-blue">82.4%</div>
                  <div className="text-[8px] uppercase font-black opacity-60">Voter Turnout</div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white border-4 border-slate-900 p-8 shadow-brutalist">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="text-google-blue" size={32} />
              <h2 className="font-inter font-black text-2xl text-slate-900 uppercase">2. Identify Your Rep</h2>
            </div>
            <div className="space-y-6">
              <div className="border-4 border-slate-900 p-6 flex flex-col md:flex-row items-center gap-6 group hover:bg-primary-fixed transition-colors">
                <div className="w-24 h-24 bg-slate-200 border-4 border-slate-900 shadow-brutalist overflow-hidden grayscale group-hover:grayscale-0 transition-all flex-shrink-0">
                  <img src="https://i.pravatar.cc/200?u=rep1" alt="Representative" width={96} height={96} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="bg-slate-900 text-white inline-block px-3 py-1 text-[8px] font-black uppercase tracking-widest mb-2">Winner: Constituency #42</div>
                  <h3 className="font-inter font-black text-2xl text-slate-900 uppercase italic">Dr. Aria Thorne</h3>
                  <p className="text-xs font-work-sans text-slate-600 font-bold uppercase">Party: Apple Party</p>
                </div>
                <div className="flex gap-2">
                  <button aria-label="Email Representative" className="p-3 bg-white border-2 border-slate-900 shadow-brutalist hover:bg-slate-100"><Mail size={20} /></button>
                  <button aria-label="Call Representative Office" className="p-3 bg-white border-2 border-slate-900 shadow-brutalist hover:bg-slate-100"><Phone size={20} /></button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-4 border-slate-900 p-6 bg-slate-50 shadow-brutalist">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="text-primary" size={20} />
                    <h4 className="font-inter font-black text-sm uppercase">Ask Your Rep</h4>
                  </div>
                  <p className="text-[10px] font-work-sans text-slate-600 font-bold uppercase tracking-tight">Direct line to your constituency office for developmental issues.</p>
                </div>
                <div className="border-4 border-slate-900 p-6 bg-slate-50 shadow-brutalist">
                  <div className="flex items-center gap-2 mb-3">
                    <ExternalLink className="text-google-blue" size={20} />
                    <h4 className="font-inter font-black text-sm uppercase">View Affidavit</h4>
                  </div>
                  <p className="text-[10px] font-work-sans text-slate-600 font-bold uppercase tracking-tight">Public record of criminal, financial, and educational background.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Help & Engagement */}
        <div className="md:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="border-4 border-slate-900 bg-white p-8 shadow-brutalist">
              <h3 className="font-inter font-black text-slate-900 mb-6 border-b-4 border-slate-100 pb-4 uppercase italic">Civic Score</h3>
              <div className="flex items-center justify-center mb-8 relative">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
                  <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-primary" strokeDasharray="351.858" strokeDashoffset="87.96" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-slate-900">75%</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="text-google-green" size={18} strokeWidth={4} />
                  <span className="text-xs font-inter font-black uppercase tracking-tight">Voted in 2026</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-google-green" size={18} strokeWidth={4} />
                  <span className="text-xs font-inter font-black uppercase tracking-tight">Verified Representative</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-slate-900" />
                  <span className="text-xs font-inter font-black uppercase tracking-tight text-slate-600">Contacted Office</span>
                </li>
              </ul>
              <button 
                aria-label="Download Full 2026 Result Summary PDF"
                className="w-full py-4 bg-slate-900 text-white font-inter font-black uppercase text-xs tracking-widest border-4 border-slate-900 shadow-brutalist hover:bg-slate-800 transition-all mb-4"
              >
                Download Result Summary
              </button>
            </div>

            <div className="border-4 border-slate-900 bg-slate-900 text-white p-8 shadow-brutalist relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="text-primary" size={32} />
                  <h3 className="font-inter font-black uppercase">JanVote AI Insights</h3>
                </div>
                <p className="text-xs font-work-sans text-white/90 mb-6 font-bold uppercase tracking-tight italic leading-relaxed">
                  "Counting is almost done in {selectedState}. The leading party has a clear mandate in 215 seats. This is a 12% shift from 2021."
                </p>
                <button className="text-primary font-inter font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-all">
                  Ask Detailed Analysis
                  <ChevronRight size={14} strokeWidth={4} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
