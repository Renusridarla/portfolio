import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/20 text-xs font-mono text-purple-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>CREDENTIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Verified <span className="text-gradient-purple">Certifications</span>
          </motion.h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 border border-purple-500/20 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-purple-900/40 border border-purple-500/30 text-purple-300">
                    <ShieldCheck className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono font-medium text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-purple-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {cert.description && (
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
