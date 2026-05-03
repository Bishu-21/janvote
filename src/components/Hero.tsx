"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, BarChart3, Globe, ShieldCheck, Verified } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-stack-lg z-10 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border-2 border-slate-900 bg-slate-900 text-white font-inter font-black uppercase text-[10px] tracking-widest animate-pulse">
            <Verified size={14} className="text-google-green" />
            Live Results: May 3, 2026
          </div>
          <h1 className="font-inter font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-slate-900 max-w-xl tracking-tighter uppercase italic">
            The Choice is <br />
            <span className="text-primary">Declared.</span>
          </h1>
          <p className="font-work-sans text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed uppercase font-bold tracking-tight">
            The <span className="text-slate-900">2026 Assembly Elections</span> are a defining moment for the Federation. This platform provides <span className="text-slate-900">real-time counting updates</span>, <span className="text-slate-900">verified regional trends</span>, and <span className="text-slate-900">voter assistance</span> across all 36 provinces. 
          </p>
          <div className="bg-slate-50 border-2 border-slate-900 p-4 shadow-brutalist text-[10px] font-bold uppercase tracking-tight max-w-lg">
            <p className="mb-2 text-slate-400">Key Election Facts (May 3, 2026):</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><span className="text-slate-500">Status:</span> <span className="text-slate-900 italic">Counting Phase (95% complete)</span></li>
              <li><span className="text-slate-500">Primary Provinces:</span> <span className="text-slate-900 italic">North, South, East, West</span></li>
              <li><span className="text-slate-500">Major Contenders:</span> <span className="text-slate-900 italic">Apple Party, Orange Party</span></li>
            </ul>
          </div>
          <div className="pt-stack-md flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              aria-label="View Live Seat Share Breakdown"
              className="group px-10 py-5 bg-slate-900 text-white border-4 border-slate-900 shadow-brutalist hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutalist-lg active:translate-x-[0px] active:translate-y-[0px] active:shadow-none transition-all flex items-center justify-center gap-3 font-inter font-black uppercase text-sm tracking-widest"
            >
              Live Seat Share
              <BarChart3 size={20} className="group-hover:rotate-12 transition-transform" />
            </button>
            <button 
              aria-label="View Full Election Analysis"
              className="px-10 py-5 bg-white text-slate-900 border-4 border-slate-900 shadow-brutalist hover:bg-slate-50 transition-all font-inter font-black uppercase text-sm tracking-widest"
            >
              Full Analysis
            </button>
          </div>
          <div className="flex items-center gap-6 pt-stack-lg border-t-2 border-slate-100 w-full lg:w-auto justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/100?u=voter${i}`} 
                    alt={`Voter ${i}`} 
                    width={40} 
                    height={40}
                  />
                </div>
              ))}
            </div>
            <p className="text-[10px] font-inter font-black text-slate-600 uppercase tracking-widest">
              1.02B+ Voters Represented
            </p>
          </div>
        </motion.div>

        {/* Right Content: Live Data Cards */}
        <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center">
          {/* Card 1: Live Seat Share */}
          <motion.div
            initial={{ opacity: 0, rotate: 5, x: 50 }}
            animate={{ opacity: 1, rotate: -2, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute top-[5%] lg:top-[10%] right-0 lg:right-0 w-72 md:w-80 p-8 bg-white border-4 border-slate-900 shadow-brutalist z-30"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-primary text-white border-2 border-slate-900 shadow-brutalist">
                <BarChart3 size={24} />
              </div>
              <span className="px-3 py-1 bg-google-red text-white font-black text-[10px] uppercase tracking-tighter shadow-brutalist border-2 border-slate-900">Live 85% Counted</span>
            </div>
            <h3 className="font-inter font-black text-2xl text-slate-900 mb-4 uppercase italic">North Province</h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span>Apple Party</span>
                  <span>152 / 294</span>
                </div>
                <div className="w-full h-3 bg-slate-100 border-2 border-slate-900">
                  <div className="h-full bg-google-green" style={{ width: '51.7%' }}></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span>Orange Alliance</span>
                  <span>128 / 294</span>
                </div>
                <div className="w-full h-3 bg-slate-100 border-2 border-slate-900">
                  <div className="h-full bg-google-yellow" style={{ width: '43.5%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Global Impact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute left-0 bottom-[15%] lg:bottom-[20%] w-64 md:w-72 p-6 bg-slate-900 text-white border-4 border-slate-900 shadow-brutalist z-20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white text-slate-900 border-2 border-slate-900 shadow-brutalist">
                <Globe size={16} />
              </div>
              <h4 className="font-inter font-black text-lg uppercase italic">Global Eye</h4>
            </div>
            <p className="text-[10px] font-work-sans text-white font-bold leading-relaxed uppercase tracking-tight">
              "The Federation's outcome is being watched by 42+ nations. High confidence in North Province results."
            </p>
            <div className="mt-4 pt-4 border-t-2 border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-google-green animate-pulse"></span>
              <span className="text-[8px] font-black uppercase tracking-widest text-white/70">Verified by JanVote AI</span>
            </div>
          </motion.div>

          {/* Card 3: Digital Pass */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-[5%] right-[5%] w-60 p-6 bg-google-blue text-white border-4 border-slate-900 shadow-brutalist-lg z-10 hidden sm:block"
          >
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck size={24} />
              <h4 className="font-inter font-black text-lg uppercase italic">Digital Pass</h4>
            </div>
            <p className="text-[10px] font-work-sans opacity-80 leading-relaxed uppercase font-bold tracking-widest">
              Your secure voter identity is ready for download.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
