"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, Navigation, Info, Users, Clock, ArrowRight, Calendar, Bot, BarChart2, CheckCircle2, Award, Globe } from "lucide-react";

export const BoothFinder = () => {
  return (
    <section id="booth" className="py-section-gap px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Real-time Results Tracker */}
          <div className="md:col-span-2 bg-white border-4 border-slate-900 shadow-brutalist rounded-none overflow-hidden flex flex-col lg:flex-row">
            <div className="flex-1 p-8 border-b-4 lg:border-b-0 lg:border-r-4 border-slate-900">
              <div className="flex items-center gap-3 mb-4">
                <BarChart2 className="text-primary" size={28} />
                <h2 className="font-inter font-black text-3xl uppercase tracking-tighter">Results Tracker</h2>
              </div>
              <p className="font-work-sans text-slate-600 mb-8 text-sm uppercase font-bold tracking-tight">
                Live provincial counting status. Integrated with Google Maps for spatial trend visualization.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select 
                    aria-label="Select Province"
                    className="px-4 py-3 border-2 border-slate-900 font-inter font-bold text-xs uppercase tracking-widest bg-slate-50"
                  >
                    <option>North Province</option>
                    <option>South Province</option>
                    <option>East Province</option>
                    <option>West Province</option>
                  </select>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border-2 border-slate-900 font-inter font-bold text-xs uppercase tracking-widest outline-none"
                      placeholder="Search Constituency"
                    />
                  </div>
                </div>
                <button className="w-full py-4 bg-slate-900 text-white border-2 border-slate-900 font-inter font-black uppercase text-xs tracking-widest hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                  <MapPin size={16} />
                  Find Nearest Center
                </button>
              </div>

              {/* Status Banner */}
              <div className="mt-8 p-4 bg-slate-900 text-white border-2 border-slate-900 flex items-center gap-4 shadow-brutalist">
                <div className="bg-google-green p-2 text-white border-2 border-white">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h3 className="font-inter font-black text-xs uppercase tracking-tight">Counting Status: Final Phase</h3>
                  <p className="text-[10px] text-white/70 uppercase font-bold">Updated: May 3, 2026 • 20:55 IST</p>
                </div>
              </div>
            </div>

            {/* Live Heatmap Preview (Google Maps Mock) */}
            <div className="hidden lg:block w-80 bg-slate-200 relative min-h-[300px]">
              <div className="absolute inset-0 bg-[#e5e3df] overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ 
                  backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }}></div>
              </div>
              
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-8 h-8 bg-google-red rounded-full border-2 border-white shadow-lg flex items-center justify-center animate-bounce">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="w-4 h-1 bg-black/20 rounded-full blur-sm mt-1"></div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white p-3 border-2 border-slate-900 shadow-brutalist flex items-center justify-between">
                  <div>
                    <p className="text-[8px] font-black uppercase text-slate-600">Google Maps View</p>
                    <p className="text-[10px] font-black uppercase text-slate-900 italic">North Central Hills</p>
                  </div>
                  <Navigation size={14} className="text-google-blue" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats: Winning Threshold */}
          <div className="bg-white p-8 border-4 border-slate-900 shadow-brutalist rounded-none flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award size={32} className="text-google-yellow" />
                <h2 className="font-inter font-black text-2xl uppercase tracking-tighter">Winning Trend</h2>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-black uppercase">
                    <span>Threshold</span>
                    <span>148 Seats</span>
                  </div>
                  <div className="w-full h-4 bg-slate-100 border-2 border-slate-900 relative">
                    <div className="absolute left-[50.3%] top-0 bottom-0 w-1 bg-google-red z-10" />
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "52%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-google-green" 
                    />
                  </div>
                </div>
                <div className="p-6 bg-slate-900 text-white border-2 border-slate-900 shadow-brutalist">
                  <div className="text-5xl font-black mb-1 tracking-tighter italic">152</div>
                  <p className="text-[10px] font-inter font-black text-google-green uppercase tracking-widest">Seats Leading/Won</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase tracking-widest">
              <Clock size={14} />
              Live Feed Active
            </div>
          </div>

          {/* Result Highlights */}
          <div className="md:col-span-1 bg-slate-900 p-8 border-4 border-slate-900 shadow-brutalist rounded-none text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe size={24} className="text-primary" />
                <h2 className="font-inter font-black text-2xl uppercase tracking-tighter">Live Bulletins</h2>
              </div>
              <div className="space-y-4">
                {[
                  "Apple Party crossing 150 mark in North",
                  "Mango Front leading in South coastal belt",
                  "East Province: Record 82% turnout counted",
                  "Independent leads in Silver Hills seat"
                ].map((news, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="text-primary font-black text-lg">0{i+1}</div>
                    <div className="pt-1">
                      <h4 className="font-inter font-bold text-xs group-hover:text-primary transition-colors leading-tight uppercase">{news}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-8 font-inter font-black text-[10px] text-primary flex items-center gap-2 uppercase tracking-widest hover:translate-x-1 transition-transform">
              Full Scorecard <ArrowRight size={14} />
            </button>
          </div>

          {/* AI Analysis Bento Item */}
          <div className="md:col-span-1 lg:col-span-2 bg-primary p-8 border-4 border-slate-900 shadow-brutalist rounded-none text-white relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <Bot className="mb-4" size={40} />
                <h3 className="font-inter font-black text-3xl mb-2 uppercase tracking-tighter italic">JanVote AI Analyst</h3>
                <p className="font-work-sans opacity-90 mb-6 max-w-lg text-sm uppercase font-bold tracking-tight">
                  Real-time analysis powered by Google Gemini. Ask about margins, swing trends, or specific provincial outcomes.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Who leads Silver Hills?", "Winning margin in East City?", "Swing provinces trend"].map((q) => (
                  <button key={q} className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-none border-2 border-white/20 text-[10px] font-black uppercase tracking-tighter transition-all">
                    "{q}"
                  </button>
                ))}
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Bot size={200} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
