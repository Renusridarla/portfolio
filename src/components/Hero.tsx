import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, FileText, Send, Terminal, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ResumeModal } from './ResumeModal';

export const Hero: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-violet-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{PERSONAL_INFO.statusBadge}</span>
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="block text-slate-100 mb-1">Hi, I'm</span>
            <span className="text-gradient drop-shadow-[0_10px_20px_rgba(168,85,247,0.25)]">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <p className="text-lg sm:text-2xl font-semibold text-purple-300/90 max-w-3xl mx-auto tracking-wide">
            {PERSONAL_INFO.headline}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-slate-300/80 max-w-2xl mx-auto leading-relaxed"
        >
          "{PERSONAL_INFO.shortIntro}"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="inline-block max-w-xl w-full text-left bg-[#0a0518]/90 border border-purple-500/20 rounded-2xl p-4 shadow-2xl backdrop-blur-md"
        >
          <div className="flex items-center justify-between pb-3 border-b border-purple-500/10 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-slate-400 text-[11px]">developer.ts</span>
            </div>
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="pt-3 font-mono text-xs sm:text-sm space-y-1 text-slate-300">
            <p>
              <span className="text-purple-400">const</span> developer = &#123;
            </p>
            <p className="pl-4">
              name: <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
            </p>
            <p className="pl-4">
              role: <span className="text-emerald-300">"Software Engineer"</span>,
            </p>
            <p className="pl-4">
              education: <span className="text-purple-300">"B.Tech CSE @ VIIT"</span>,
            </p>
            <p className="pl-4">
              cgpa: <span className="text-amber-300">{PERSONAL_INFO.cgpa}</span>,
            </p>
            <p className="pl-4">
              location: <span className="text-emerald-300">"Visakhapatnam, India"</span>
            </p>
            <p>&#125;;</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-violet-800 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] border border-purple-400/40 transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 rounded-xl bg-purple-950/30 hover:bg-purple-900/50 border border-purple-500/30 hover:border-purple-400/60 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 active:scale-95"
          >
            <Send className="w-4 h-4 text-purple-400" />
            <span>Contact Me</span>
          </a>

          <button
            onClick={() => setIsResumeOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-purple-300 rounded-xl bg-purple-900/20 hover:bg-purple-900/40 border border-purple-500/25 hover:border-purple-400/50 transition-all duration-300 active:scale-95"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span>View Resume</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="pt-12 flex justify-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-purple-300 transition-colors group"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-purple-400" />
          </a>
        </motion.div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};
