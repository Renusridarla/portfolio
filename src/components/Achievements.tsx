import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Award, ShieldCheck, Trophy, Sparkles, Terminal } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const stepTime = Math.abs(Math.floor((duration * 1000) / end));
    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, Math.max(stepTime, 25));

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-extrabold text-white tracking-tight">
      {count}
      {suffix}
    </span>
  );
};

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-7 h-7 text-amber-400" />;
      case 'Award':
        return <Award className="w-7 h-7 text-purple-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-emerald-400" />;
      default:
        return <Trophy className="w-7 h-7 text-purple-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span>MILESTONES & METRICS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Coding Statistics & <span className="text-gradient-purple">Achievements</span>
          </motion.h2>
        </div>

        {/* Counter Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-3xl p-8 border border-purple-500/20 text-center space-y-4 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="p-4 rounded-2xl bg-purple-950/60 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                {getIcon(stat.iconName)}
              </div>

              <div className="text-4xl sm:text-5xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>

              <p className="text-sm font-semibold text-purple-200/90 max-w-[200px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hackathon & Event Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/25 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
              <Trophy className="w-6 h-6 text-purple-400 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Hackathons & Coding Competitions</h3>
              <p className="text-sm text-slate-300/90 mt-1">
                "{ACHIEVEMENTS.hackathonsNote}"
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-500/20 text-xs font-mono text-purple-300 shrink-0">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span>Active Competitor</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
