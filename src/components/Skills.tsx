import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Wrench, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-violet-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-purple-300" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span>TECHNICAL CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Skills & <span className="text-gradient-purple">Core Competencies</span>
          </motion.h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Categorized overview of programming languages, frameworks, web technologies, engineering tools, and core computer science concepts.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 border border-purple-500/20 flex flex-col justify-between space-y-5"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-purple-500/10 pb-4">
                <div className="p-2.5 rounded-2xl bg-purple-900/40 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-purple-400">
                    {category.skills.length} competencies
                  </span>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-900/40 text-xs font-semibold text-slate-200 transition-all duration-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
