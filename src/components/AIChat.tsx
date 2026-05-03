"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mic, Bot, BarChart3, AlertCircle, Loader2 } from "lucide-react";

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { 
      role: "assistant", 
      content: "Election Results Live: May 3, 2026. I am the JanVote AI Analyst, powered by Google Gemini. I can analyze lead margins, constituency winners, or explain the government formation process. What would you like to know?" 
    }
  ]);
  
  const [isSpeaking, setIsSpeaking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const speak = (text: string) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new window.SpeechSynthesisUtterance(text);
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return;
    
    const userMsg = { role: "user" as const, content: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const { GoogleGenerativeAI } = await import("@google/generative-ai");
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("Gemini API Key is missing. Please configure it in .env.local");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-3.1-flash-lite-preview",
        systemInstruction: "You are the JanVote AI Analyst for the 2026 Federation Assembly Elections. The date is May 3, 2026. The results are being announced. The major provinces are North, South, East, and West. The major parties are Apple Party and Orange Party. Be authoritative, neutral, and helpful. Use data-driven insights. Keep responses concise and formatted for a chat bubble."
      });

      const chat = model.startChat({
        history: messages.map(m => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }]
        })),
      });

      const result = await chat.sendMessage(inputValue);
      const response = await result.response.text();

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "I'm having trouble connecting to the Federation Data Grid. Please try again in a moment." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-[90vw] sm:w-[400px] h-[600px] bg-white border-4 border-slate-900 shadow-brutalist-xl mb-4 flex flex-col overflow-hidden rounded-none"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white border-b-4 border-slate-900 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg text-primary shadow-brutalist border-2 border-slate-900">
                  <Bot size={20} className="animate-pulse" />
                </div>
                <div>
                  <h3 className="font-inter font-black uppercase tracking-tight text-sm">JanVote AI Analyst</h3>
                  <p className="text-[10px] text-white/70 uppercase font-bold tracking-widest">Powered by Gemini</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                aria-label="Close Chat"
                className="hover:bg-white/10 p-2 rounded-lg transition-colors border-2 border-transparent hover:border-white/20"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4 font-work-sans bg-slate-50 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`group relative max-w-[85%] p-4 border-2 border-slate-900 text-xs font-bold uppercase tracking-tight ${
                    msg.role === "user" 
                      ? "bg-primary text-white shadow-brutalist" 
                      : "bg-white text-slate-800 shadow-brutalist"
                  }`}>
                    {msg.content}
                    {msg.role === "assistant" && (
                      <button 
                        onClick={() => speak(msg.content)}
                        className="absolute -right-2 -top-2 bg-slate-900 text-white p-1 rounded-full border-2 border-white shadow-brutalist opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Speak response"
                      >
                        <Mic size={10} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 border-2 border-slate-900 shadow-brutalist flex items-center gap-2">
                    <div className="flex gap-1">
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Gemini 3.1 is reasoning...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Live Alert */}
            <div className="px-6 py-2 bg-google-red/10 border-y-2 border-slate-900 flex items-center gap-2">
              <AlertCircle size={14} className="text-google-red" />
              <span className="text-[8px] font-black uppercase tracking-widest text-google-red">Live: Apple Party crossing 150 mark</span>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t-4 border-slate-900">
              <div className="relative">
                <input 
                  type="text" 
                  value={inputValue}
                  aria-label="Ask Gemini about results"
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Gemini about results..."
                  className="w-full pl-4 pr-16 py-4 border-2 border-slate-900 focus:shadow-brutalist outline-none transition-all text-xs font-bold uppercase tracking-widest"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <button 
                    onClick={handleSend}
                    aria-label="Send message"
                    className="p-2 bg-primary text-white border-2 border-slate-900 shadow-brutalist-blue hover:translate-y-[-1px] active:translate-y-[1px] active:shadow-none transition-all"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05, x: -2, y: -2 }}
        whileTap={{ scale: 0.95, x: 2, y: 2 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open JanVote AI Assistant"
        className="w-16 h-16 bg-slate-900 text-white border-4 border-slate-900 shadow-brutalist flex items-center justify-center transition-all hover:shadow-brutalist-lg"
      >
        <Bot size={32} />
      </motion.button>
    </div>
  );
};
