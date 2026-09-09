import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Compass, Code, Brain, Server, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const interestIcons = [
    { name: "Software Development", icon: Code, color: "text-purple-400" },
    { name: "Full-Stack Development", icon: Server, color: "text-violet-400" },
    { name: "Data Structures & Algorithms", icon: Brain, color: "text-indigo-400" },
    { name: "Problem Solving", icon: Terminal, color: "text-emerald-400" },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/20 text-xs font-mono text-purple-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>ABOUT ME</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Academic Foundation & <span className="text-gradient-purple">Technical Focus</span>
          </motion.h2>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-panel rounded-3xl p-8 space-y-6 flex flex-col justify-between border border-purple-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300">
                  {PERSONAL_INFO.timeline}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-purple-400">INSTITUTION</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">
                  {PERSONAL_INFO.institution}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-purple-950/30 border border-purple-500/15 p-4 rounded-2xl">
                  <span className="text-[11px] font-mono uppercase text-slate-400">DEGREE</span>
                  <p className="text-sm font-semibold text-purple-200 mt-1">
                    {PERSONAL_INFO.degree}
                  </p>
                </div>

                <div className="bg-purple-950/30 border border-purple-500/15 p-4 rounded-2xl">
                  <span className="text-[11px] font-mono uppercase text-slate-400">ACADEMIC SCORE</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-extrabold text-white">9.17</span>
                    <span className="text-xs font-bold text-purple-400">/ 10 CGPA</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed border-t border-purple-500/10 pt-4">
              Building a strong computer science core in Visakhapatnam, maintaining high academic performance while actively engineering real-world software applications and algorithm solutions.
            </p>
          </motion.div>

          {/* Right Column: Focus Areas & Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 glass-panel rounded-3xl p-8 space-y-6 flex flex-col justify-between border border-purple-500/20"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Core Technical Interests</h3>
              </div>

              <p className="text-sm text-slate-300/80 leading-relaxed">
                Focused on architecting scalable full-stack web applications, mastering algorithmic problem solving, and leveraging modern software development practices.
              </p>
            </div>

            {/* Interest Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {interestIcons.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/15 hover:border-purple-400/35 transition-all duration-300"
                  >
                    <div className={`p-2 rounded-xl bg-purple-900/40 border border-purple-500/20 ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-200">{item.name}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick quote box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 to-violet-950/40 border border-purple-500/20 flex items-start gap-3">
              <Award className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <p className="text-xs text-purple-200/90 leading-relaxed italic">
                "Driven by curiosity to solve complex logical problems and turn full-stack concepts into high-performing, robust software products."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
