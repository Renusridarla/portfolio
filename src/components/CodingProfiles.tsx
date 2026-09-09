import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Terminal, Zap, ExternalLink, Sparkles } from 'lucide-react';
import { CODING_PROFILES } from '../data/portfolioData';

export const CodingProfiles: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-6 h-6 text-white" />;
      case 'Linkedin':
        return <Linkedin className="w-6 h-6 text-blue-400" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-purple-400" />;
      default:
        return <Terminal className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="profiles" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span>ONLINE PRESENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Coding Profiles & <span className="text-gradient-purple">Platforms</span>
          </motion.h2>

          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Direct access to my competitive programming handles, source code repositories, and professional network.
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CODING_PROFILES.map((profile, index) => (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 border border-purple-500/20 flex flex-col justify-between space-y-6 group relative overflow-hidden"
            >
              {/* Subtle gradient hover blur accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-purple-950/60 border border-purple-500/30 group-hover:border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-colors">
                    {getIcon(profile.iconName)}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-300 transition-colors" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {profile.platform}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-purple-400 mt-0.5">
                    @{profile.username}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-purple-500/10">
                <span className="text-[11px] text-slate-400 font-medium">
                  {profile.highlight}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
