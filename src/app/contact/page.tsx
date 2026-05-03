"use client";

import React from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20 px-container-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <div className="inline-block bg-slate-900 text-white px-4 py-1 border-2 border-slate-900 font-inter font-black uppercase text-[10px] tracking-widest mb-6 shadow-brutalist">
              24/7 Election Support
            </div>
            <h1 className="font-inter font-black text-6xl text-slate-900 mb-8 uppercase tracking-tighter italic leading-[0.9]">Get in <br /><span className="text-primary">Touch.</span></h1>
            <p className="font-work-sans text-xl text-slate-600 mb-12 uppercase font-bold tracking-tight leading-relaxed max-w-md">
              Need assistance with booth finding or reporting a result discrepancy? Our civic team is ready to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-primary-fixed p-4 border-4 border-slate-900 shadow-brutalist">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-inter font-black uppercase text-sm">Email Us</h3>
                  <p className="text-slate-600 font-work-sans font-bold uppercase text-[10px]">support@voteflow.gov</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-slate-50 p-4 border-4 border-slate-900 shadow-brutalist">
                  <Phone className="text-slate-900" size={24} />
                </div>
                <div>
                  <h3 className="font-inter font-black uppercase text-sm">Call Center</h3>
                  <p className="text-slate-600 font-work-sans font-bold uppercase text-[10px]">+1 (2026) VOTE-HELP</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-slate-50 p-4 border-4 border-slate-900 shadow-brutalist">
                  <MapPin className="text-slate-900" size={24} />
                </div>
                <div>
                  <h3 className="font-inter font-black uppercase text-sm">Headquarters</h3>
                  <p className="text-slate-600 font-work-sans font-bold uppercase text-[10px]">100 Democracy Plaza, Capital City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border-4 border-slate-900 p-10 shadow-brutalist-xl">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-primary" size={24} />
              <h2 className="font-inter font-black uppercase text-2xl italic">Send a Message</h2>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                <input type="text" className="w-full p-4 border-4 border-slate-900 font-work-sans font-bold uppercase text-xs focus:shadow-brutalist outline-none transition-all" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                <input type="email" className="w-full p-4 border-4 border-slate-900 font-work-sans font-bold uppercase text-xs focus:shadow-brutalist outline-none transition-all" placeholder="name@domain.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Subject</label>
                <select className="w-full p-4 border-4 border-slate-900 font-work-sans font-bold uppercase text-xs focus:shadow-brutalist outline-none transition-all bg-white">
                  <option>Result Inquiry</option>
                  <option>Booth Location Issue</option>
                  <option>Technical Problem</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                <textarea rows={4} className="w-full p-4 border-4 border-slate-900 font-work-sans font-bold uppercase text-xs focus:shadow-brutalist outline-none transition-all" placeholder="Describe your inquiry..."></textarea>
              </div>
              <button className="w-full py-5 bg-slate-900 text-white font-inter font-black uppercase text-sm tracking-widest border-4 border-slate-900 shadow-brutalist hover:bg-slate-800 transition-all flex items-center justify-center gap-3">
                Dispatch Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
