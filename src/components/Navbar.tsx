import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0b051b]/80 backdrop-blur-xl border border-purple-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
              : 'bg-[#090317]/40 backdrop-blur-md border border-purple-500/10'
          }`}
        >
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-violet-900 flex items-center justify-center border border-purple-400/30 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300">
              <Terminal className="w-4 h-4 text-purple-200" />
            </div>
            <span className="text-sm font-bold tracking-wider text-slate-100 group-hover:text-purple-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1 bg-black/30 p-1.5 rounded-xl border border-purple-500/10">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-purple-950/30'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/60 to-violet-600/60 rounded-lg border border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-violet-700 rounded-xl hover:from-purple-500 hover:to-violet-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-400/30 active:scale-95"
            >
              Let's Connect
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-purple-950/40 border border-purple-500/20 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 p-4 bg-[#0d071a]/95 backdrop-blur-2xl border border-purple-500/20 rounded-2xl shadow-2xl space-y-2"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-purple-600/30 text-purple-200 border border-purple-500/30'
                      : 'text-slate-300 hover:bg-purple-950/40 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 border-t border-purple-500/10">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-600 to-violet-700 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                >
                  Let's Connect
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
