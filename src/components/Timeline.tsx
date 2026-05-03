"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Megaphone, Vote, Award, CheckCircle, Calendar, ArrowRight, Verified, Info, Bot, MapPin } from "lucide-react";

export const Timeline = () => {
  return (
    <section id="timeline" className="md:ml-64 pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Header */}
      <header className="mb-16">
        <span className="inline-block bg-primary-container text-white px-4 py-1 rounded-full border-2 border-slate-900 font-inter font-bold text-xs mb-4 shadow-brutalist">
          2026 ASSEMBLY ELECTIONS
        </span>
        <h1 className="font-inter font-black text-6xl text-on-surface mb-6 leading-tight">
          The Road to <span className="text-primary italic">Democracy</span>
        </h1>
        <p className="font-work-sans text-lg max-w-2xl text-on-surface-variant">
          Your guide through the critical milestones of the upcoming election cycle. Stay informed, get registered, and make your voice heard at the ballot box.
        </p>
      </header>

      {/* Timeline Section */}
      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-900 -translate-x-1/2 z-0 opacity-20 md:opacity-100"></div>

        {/* Phase 1: Registration */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:text-right md:pr-16 order-2 md:order-1"
          >
            <div className="bg-white border-2 border-slate-900 p-8 shadow-brutalist hover:-translate-y-1 transition-transform">
              <div className="flex md:justify-end mb-4">
                <span className="bg-secondary-container text-secondary border-2 border-secondary px-4 py-1 rounded-full text-xs font-bold">
                  COMPLETED
                </span>
              </div>
              <h3 className="font-inter font-black text-2xl mb-4">Registration</h3>
              <p className="font-work-sans text-on-surface-variant text-sm">
                Ensure your name is on the electoral roll. Update your address and verify your eligibility to vote in your specific constituency via National Voter's Service Portal (NVSP).
              </p>
              <div className="mt-6 flex md:justify-end gap-3">
                <div className="flex items-center gap-1 text-secondary font-bold text-sm">
                  <CheckCircle size={16} />
                  Verified
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-start md:justify-center order-1 md:order-2">
            <div className="w-16 h-16 rounded-full bg-secondary border-4 border-slate-900 z-20 flex items-center justify-center text-white shadow-brutalist">
              <UserPlus size={24} />
            </div>
          </div>
        </div>

        {/* Phase 2: Campaigning (CURRENT) */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 items-center">
          <div className="flex justify-start md:justify-center order-1">
            <div className="w-16 h-16 rounded-full bg-google-yellow border-4 border-slate-900 z-20 flex items-center justify-center text-slate-900 shadow-brutalist ring-4 ring-google-yellow/30 animate-pulse">
              <Megaphone size={24} />
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:pl-16 order-2"
          >
            <div className="bg-white border-4 border-google-yellow p-8 shadow-brutalist-yellow hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-google-yellow text-slate-900 px-6 py-1 font-inter font-bold uppercase tracking-widest text-[10px] transform translate-x-8 translate-y-4 rotate-45 border-b-2 border-slate-900">
                LIVE
              </div>
              <div className="flex mb-4">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant border-2 border-google-yellow px-4 py-1 rounded-full text-xs font-bold">
                  CURRENT PHASE
                </span>
              </div>
              <h3 className="font-inter font-black text-2xl mb-4">Campaigning</h3>
              <p className="font-work-sans text-on-surface-variant text-sm">
                Candidates present their manifestos. Watch debates, check criminal affidavits, and analyze policy proposals using JanVote AI's comparative analysis tools.
              </p>
              <button className="mt-6 brutalist-btn bg-primary text-white px-6 py-3 text-xs font-bold uppercase">
                View Manifestos
              </button>
            </div>
          </motion.div>
        </div>

        {/* Phase 3: Voting */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 items-center opacity-70">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:text-right md:pr-16 order-2 md:order-1"
          >
            <div className="bg-white border-2 border-slate-900 p-8 shadow-brutalist grayscale-[0.5]">
              <div className="flex md:justify-end mb-4">
                <span className="bg-slate-100 text-slate-500 border-2 border-slate-200 px-4 py-1 rounded-full text-xs font-bold">
                  UPCOMING
                </span>
              </div>
              <h3 className="font-inter font-black text-2xl mb-4">Polling Day</h3>
              <p className="font-work-sans text-on-surface-variant text-sm">
                April 2026. Multi-phase voting across North Province, South Province, and others has concluded with record-breaking turnouts.
              </p>
              <div className="mt-6 flex md:justify-end">
                <div className="text-secondary font-bold flex items-center gap-2 text-sm">
                  <CheckCircle size={16} />
                  Voting Concluded
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-start md:justify-center order-1 md:order-2">
            <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-900 z-20 flex items-center justify-center text-slate-900 shadow-brutalist">
              <Vote size={24} />
            </div>
          </div>
        </div>

        {/* Phase 4: Results (LIVE) */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-0 items-center">
          <div className="flex justify-start md:justify-center order-1">
            <div className="w-16 h-16 rounded-full bg-google-green border-4 border-slate-900 z-20 flex items-center justify-center text-white shadow-brutalist ring-4 ring-google-green/30 animate-pulse">
              <Award size={24} />
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:pl-16 order-2"
          >
            <div className="bg-white border-4 border-google-green p-8 shadow-brutalist-green hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-google-green text-white px-6 py-1 font-inter font-bold uppercase tracking-widest text-[10px] transform translate-x-8 translate-y-4 rotate-45 border-b-2 border-slate-900">
                LIVE
              </div>
              <div className="flex mb-4">
                <span className="bg-secondary-container text-secondary border-2 border-secondary px-4 py-1 rounded-full text-xs font-bold">
                  RESULTS DAY (MAY 3, 2026)
                </span>
              </div>
              <h3 className="font-inter font-black text-2xl mb-4">Counting & Results</h3>
              <p className="font-work-sans text-on-surface-variant text-sm">
                Official counting is underway. Stay tuned for real-time updates on constituency winners and government formation across the 5 electing provinces.
              </p>
              <button className="mt-6 brutalist-btn bg-secondary text-white px-6 py-3 text-xs font-bold uppercase">
                View Live Results
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Card (Bento Grid Style) */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-primary text-white p-10 border-4 border-slate-900 shadow-brutalist-xl relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="font-inter font-black text-4xl mb-4">The Verdict is Here.</h2>
            <p className="font-work-sans text-lg mb-8 opacity-90 max-w-lg">
              Detailed constituency-wise analysis for the 2026 Assembly Elections is now available. Check how your region voted.
            </p>
            <button className="bg-white text-primary px-8 py-4 border-2 border-slate-900 font-inter font-bold uppercase shadow-brutalist hover:-translate-y-1 transition-all active:translate-y-[2px]">
              See Full Analysis
            </button>
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <Award size={300} />
          </div>
        </div>
        <div className="bg-secondary-container p-8 border-4 border-slate-900 shadow-brutalist-xl flex flex-col justify-between">
          <div>
            <Verified className="text-secondary mb-4" size={48} />
            <h3 className="font-inter font-black text-2xl mb-2 text-on-secondary-container">Stay Verified</h3>
            <p className="font-work-sans text-sm text-on-secondary-container/80">
              Check your status regularly on the ECI portal to ensure no last-minute changes to your eligibility.
            </p>
          </div>
          <a href="#" className="mt-8 font-inter font-bold uppercase text-secondary flex items-center gap-2 group">
            Check Status 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </section>
  );
};
