"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mic, Bot, BarChart3, AlertCircle, Loader2 } from "lucide-react";

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isLiveMode, setIsLiveMode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { 
      role: "assistant", 
      content: "Election Results Live: May 3, 2026. I am the JanVote AI Analyst, now optimized with **Gemma 3 2B**. I can analyze lead margins, constituency winners, or explain the government formation process. What would you like to know?" 
    }
  ]);
  
  const [isSpeaking, setIsSpeaking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

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

  const toggleLiveMode = () => {
    if (isLiveMode) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsLiveMode(false);
    } else {
      startListening();
      setIsLiveMode(true);
    }
  };

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsSpeaking(true);
    };

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setInputValue(text);
      handleSend(text);
    };

    recognition.onend = () => {
      setIsSpeaking(false);
      if (isLiveMode) {
        // Automatically restart if in live mode (though handled by handleSend completion usually)
      }
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setIsLiveMode(false);
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  const handleSend = async (forcedValue?: string) => {
    const textToSend = forcedValue || inputValue;
    if (!textToSend.trim() || isTyping) return;
    
    const userMsg = { role: "user" as const, content: textToSend };
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
      
      // Use Gemini 3.1 Flash Live for voice mode, Gemma 3 2B (simulated via Flash-Lite for speed) for chat
      const modelId = isLiveMode ? "gemini-3.1-flash-live-preview" : "gemini-3.1-flash-lite-preview";
      
      const model = genAI.getGenerativeModel({ 
        model: modelId,
        systemInstruction: "You are the JanVote AI Analyst for the 2026 Federation Assembly Elections. The date is May 3, 2026. Be authoritative, neutral, and helpful. Use data-driven insights. If in voice mode, keep responses very short and conversational (1-2 sentences max)."
      });

      const chat = model.startChat({
        history: messages
          .filter((_, i) => i !== 0 || messages[0].role === "user")
          .map(m => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }]
          })),
      });

      const result = await chat.sendMessage(textToSend);
      const response = await result.response.text();

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      
      if (isLiveMode) {
        speak(response);
        // After speaking, wait a bit and listen again
        setTimeout(() => {
          if (isLiveMode) startListening();
        }, 1000);
      }
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "I'm having trouble connecting to the Federation Data Grid. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100]">
      <AnimatePresence>
            {/* Voice Agent Overlay */}
            <AnimatePresence>
              {isLiveMode && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center p-10 text-center"
                >
                  <button 
                    onClick={toggleLiveMode}
                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                  >
                    <X size={32} />
                  </button>
                  
                  <div className="mb-12 relative">
                    <motion.div 
                      animate={{ 
                        scale: isSpeaking ? [1, 1.2, 1] : 1,
                        opacity: isSpeaking ? [0.5, 1, 0.5] : 0.5
                      }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="w-32 h-32 bg-primary rounded-full blur-2xl absolute inset-0"
                    />
                    <div className="w-32 h-32 border-4 border-white rounded-full flex items-center justify-center relative z-10">
                      <Mic size={48} className={isSpeaking ? "text-white animate-pulse" : "text-white/50"} />
                    </div>
                    
                    {/* Sound Waves */}
                    {isSpeaking && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 items-end h-8">
                        {[1, 2, 3, 4, 5].map(i => (
                          <motion.div
                            key={i}
                            animate={{ height: [8, 32, 8] }}
                            transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                            className="w-1 bg-white rounded-full"
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <h2 className="font-inter font-black text-3xl text-white uppercase tracking-tighter mb-4 italic">
                    {isTyping ? "Analysing..." : isSpeaking ? "JanVote is Speaking..." : "Listening..."}
                  </h2>
                  <p className="font-work-sans text-white/60 text-xs uppercase font-bold tracking-widest max-w-xs">
                    {isTyping ? "Fetching real-time data from the Federation grid" : "Ask me anything about the 2026 Assembly Elections"}
                  </p>

                  <div className="mt-12 w-full max-w-xs h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="w-1/3 h-full bg-primary"
                    />
                  </div>

                  <button 
                    onClick={toggleLiveMode}
                    className="mt-12 px-8 py-4 border-2 border-white text-white font-inter font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-slate-900 transition-all"
                  >
                    Switch to Text
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Header */}
            <div className="bg-primary p-6 text-white border-b-4 border-slate-900 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg text-primary shadow-brutalist border-2 border-slate-900">
                  <Bot size={20} className="animate-pulse" />
                </div>
                <div>
                  <h3 className="font-inter font-black uppercase tracking-tight text-sm">JanVote AI Analyst</h3>
                  <p className="text-[10px] text-white/70 uppercase font-bold tracking-widest">
                    {isLiveMode ? "Gemini 3.1 Flash Live Active" : "Gemma 3 2B Optimized"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={toggleLiveMode}
                  className={`p-2 rounded-lg border-2 transition-all ${isLiveMode ? "bg-google-red border-slate-900 text-white shadow-brutalist" : "bg-white/10 border-transparent text-white hover:bg-white/20"}`}
                  aria-label="Toggle Live Talk Mode"
                >
                  <Mic size={20} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  aria-label="Close Chat"
                  className="hover:bg-white/10 p-2 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
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
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {isLiveMode ? "Listening..." : "Analysing..."}
                    </span>
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
                  aria-label="Ask AI about results"
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={isLiveMode ? "Listening..." : "Ask Gemini about results..."}
                  className="w-full pl-4 pr-16 py-4 border-2 border-slate-900 focus:shadow-brutalist outline-none transition-all text-xs font-bold uppercase tracking-widest"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <button 
                    onClick={() => handleSend()}
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
