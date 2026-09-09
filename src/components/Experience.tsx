import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { INTERNSHIP } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/20 text-xs font-mono text-purple-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>WORK EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Internship <span className="text-gradient-purple">Timeline</span>
          </motion.h2>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-3xl mx-auto pt-4">
          {/* Vertical Purple Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-purple-800 to-transparent -translate-x-1/2" />

          {/* Timeline Node Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col md:flex-row items-center justify-between"
          >
            {/* Glowing Purple Center Node */}
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0d071a] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.8)] z-10">
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-ping opacity-75" />
              <div className="w-2.5 h-2.5 rounded-full bg-purple-400 absolute" />
            </div>

            {/* Main Timeline Card Box */}
            <div className="ml-12 sm:ml-0 sm:w-full glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/25 shadow-2xl space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-500/15 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">
                      {INTERNSHIP.company}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-purple-300">
                    {INTERNSHIP.role}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/50 border border-purple-500/20 text-xs font-mono text-purple-300">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{INTERNSHIP.period}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3 pt-1">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Core Responsibilities & Technical Contributions:
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {INTERNSHIP.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
