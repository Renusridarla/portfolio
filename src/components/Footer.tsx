import React from 'react';
import { ChevronUp, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-purple-500/15 bg-[#05020f]/90 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span>
            © {new Date().getFullYear()} <strong className="text-purple-300 font-semibold">{PERSONAL_INFO.name}</strong>. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-slate-500 text-[11px]">
            Designed & Engineered with React + TypeScript
          </span>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/20 hover:border-purple-400/50 text-slate-300 hover:text-white transition-all duration-300 focus:outline-none"
            title="Back to top"
          >
            <ChevronUp className="w-4 h-4 text-purple-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
