"use client";

import React from "react";
import Link from "next/link";
import { Search, Bell, Vote, Award } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b-4 border-slate-900 bg-white/80 backdrop-blur-md flex justify-between items-center px-6 py-4 shadow-brutalist">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 border-2 border-slate-900 text-white shadow-brutalist group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all">
            <Vote size={24} />
          </div>
          <span className="text-2xl font-black text-slate-900 italic font-inter tracking-tighter">
            VoteFlow
          </span>
        </Link>
        <div className="hidden lg:flex gap-8 font-inter font-black uppercase tracking-widest text-[10px]">
          <Link href="#timeline" className="text-primary flex items-center gap-2 group">
            <Award size={14} className="animate-pulse" />
            Live Results
          </Link>
          <Link href="#booth" className="text-slate-900 hover:text-primary transition-colors">
            Results Tracker
          </Link>
          <Link href="#journey" className="text-slate-900 hover:text-primary transition-colors">
            Civic Guide
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex flex-1 max-w-lg mx-12">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 border-4 border-slate-900 shadow-brutalist outline-none transition-all font-inter font-bold text-xs uppercase tracking-widest bg-slate-50 focus:bg-white"
            placeholder="Search 2026 Results, Candidates..."
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          aria-label="View Notifications"
          className="p-3 text-slate-900 border-4 border-slate-900 shadow-brutalist bg-white hover:bg-slate-50 relative group"
        >
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-3 h-3 bg-google-red border-2 border-slate-900 translate-x-1 -translate-y-1" />
        </button>
        <div className="w-12 h-12 border-4 border-slate-900 shadow-brutalist overflow-hidden cursor-pointer hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
          <img
            src="https://i.pravatar.cc/100?u=current_user"
            alt="Profile"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};
