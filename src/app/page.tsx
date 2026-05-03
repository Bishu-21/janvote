import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VoterJourney } from "@/components/VoterJourney";
import { Timeline } from "@/components/Timeline";
import { BoothFinder } from "@/components/BoothFinder";
import { AIChat } from "@/components/AIChat";
import { ShieldCheck, Database, Globe, Heart, Vote, Share2, Languages } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Social Proof / Stats Section */}
      <section className="w-full px-6 py-12 border-y-2 border-slate-900 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Registered Voters", value: "1.02B+" },
            { label: "Polling Stations", value: "1.15M+" },
            { label: "Official Forms", value: "12" },
            { label: "Active Provinces", value: "36" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-inter font-black text-primary mb-1 tracking-tighter italic">{stat.value}</p>
              <p className="text-[10px] font-inter font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <VoterJourney />
      
      {/* Security & Trust Section (Bento Style) */}
      <section className="w-full px-6 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary text-white p-12 border-4 border-slate-900 shadow-brutalist-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-inter font-black text-5xl mb-6 leading-tight">Built on Trust. <br />Secured for Democracy.</h2>
                <p className="text-lg text-white/80 font-work-sans mb-10 leading-relaxed max-w-lg">
                  VoteFlow is designed with strict adherence to the Election Commission of India (ECI) guidelines. We do not store personal voter data on our servers.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-google-green p-2 rounded-lg border-2 border-slate-900 shadow-brutalist shadow-black">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-sm">No Data Stored</h3>
                      <p className="text-[10px] text-white/60 uppercase font-bold tracking-wider mt-1">Sessions are ephemeral</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-google-yellow p-2 rounded-lg border-2 border-slate-900 shadow-brutalist shadow-black text-slate-900">
                      <Database size={24} />
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-sm">Official Sources</h3>
                      <p className="text-[10px] text-white/60 uppercase font-bold tracking-wider mt-1">voters.eci.gov.in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl hover:-translate-y-1 transition-transform">
                  <Globe className="text-white mb-4" size={32} />
                  <h3 className="font-inter font-black text-xl mb-2">Multi-lingual</h3>
                  <p className="text-xs text-white/60 font-work-sans">Support for 12+ Indian languages including Hindi & Bengali.</p>
                </div>
                <div className="p-8 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl mt-12 hover:-translate-y-1 transition-transform">
                  <Heart className="text-google-red mb-4" size={32} />
                  <h3 className="font-inter font-black text-xl mb-2">Accessibility</h3>
                  <p className="text-xs text-white/60 font-work-sans">Voice navigation and high-contrast modes for all users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Timeline />
      <BoothFinder />
      
      {/* Footer */}
      <footer className="w-full py-12 px-8 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center border-t-4 border-slate-800">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            <Vote size={24} className="text-primary" />
            <span className="text-2xl font-black italic">VoteFlow</span>
          </div>
          <p className="font-inter text-xs text-slate-400 uppercase tracking-widest">© 2026 VoteFlow. Digital-First Government.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex gap-6 font-inter font-bold text-[10px] uppercase tracking-widest text-slate-300">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
          <div className="flex gap-4">
            <button aria-label="Share Results Dashboard" className="p-2 border-2 border-slate-700 rounded-lg hover:border-primary hover:text-primary transition-all">
              <Share2 size={18} />
            </button>
            <button aria-label="Change Language" className="p-2 border-2 border-slate-700 rounded-lg hover:border-primary hover:text-primary transition-all">
              <Languages size={18} />
            </button>
          </div>
        </div>
      </footer>

      <AIChat />
    </main>
  );
}
