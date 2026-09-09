import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, CheckCircle2, Play } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/20 text-xs font-mono text-purple-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>FEATURED WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Software & <span className="text-gradient-purple">Web Engineering Projects</span>
          </motion.h2>

          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Explore live deployed web applications and GitHub source code repositories.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-400/60 shadow-2xl transition-all duration-300 group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image Column - Direct Link to Live App */}
                  <div className={`lg:col-span-6 overflow-hidden relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-[16/10] overflow-hidden bg-purple-950/40 group/img cursor-pointer"
                      title={`Open Live Demo: ${project.title}`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700 opacity-90 group-hover/img:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d071a] via-transparent to-transparent opacity-80" />

                      {/* Hover Overlay Badge */}
                      <div className="absolute inset-0 bg-purple-950/50 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-sm">
                        <span className="px-5 py-2.5 rounded-xl bg-purple-600/90 border border-purple-300/40 shadow-[0_0_25px_rgba(168,85,247,0.7)] flex items-center gap-2">
                          <Play className="w-4 h-4 fill-white" /> Open Live Application
                        </span>
                      </div>

                      {/* Badge */}
                      {project.badge && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-black/70 backdrop-blur-md text-purple-300 border border-purple-500/40 shadow-lg">
                            {project.badge}
                          </span>
                        </div>
                      )}
                    </a>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 p-6 sm:p-8 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block group/title"
                      >
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover/title:text-purple-300 transition-colors flex items-center gap-2">
                          <span>{project.title}</span>
                          <ExternalLink className="w-5 h-5 text-purple-400 opacity-80 group-hover/title:opacity-100 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all" />
                        </h3>
                      </a>
                      <p className="text-xs font-mono text-purple-400">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-slate-300/90 leading-relaxed">
                      "{project.description}"
                    </p>

                    {/* Features List Grid */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
                        Key Features & Capabilities:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg bg-purple-950/60 border border-purple-500/25 text-purple-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Side-by-Side Direct Action Links: Live Application & GitHub */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      {/* Live Application Button */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 border border-purple-400/40 text-xs font-semibold text-white transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-95"
                      >
                        <ExternalLink className="w-4 h-4 text-purple-200" />
                        <span>Live Application ↗</span>
                      </a>

                      {/* GitHub Repository Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-900/30 hover:bg-purple-800/50 border border-purple-500/30 hover:border-purple-400/50 text-xs font-semibold text-slate-200 hover:text-white transition-all duration-300 active:scale-95"
                      >
                        <Github className="w-4 h-4 text-purple-300" />
                        <span>View on GitHub</span>
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
