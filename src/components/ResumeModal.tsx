import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Briefcase, GraduationCap, Code2, Award, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, INTERNSHIP, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c061d] border border-purple-500/30 rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.25)] flex flex-col overflow-hidden z-10"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-purple-950/20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
              <h3 className="text-sm font-semibold text-purple-200 tracking-wider">
                CURRICULUM VITAE — DARLA RENUSRI
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-purple-900/40 hover:bg-purple-800/60 text-purple-200 border border-purple-500/30 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Print / Save PDF
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto text-slate-200">
            <div className="border-b border-purple-500/15 pb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-purple-400 mt-1">
                {PERSONAL_INFO.headline}
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  {PERSONAL_INFO.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  Visakhapatnam, India
                </span>
              </div>
            </div>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300">
                <GraduationCap className="w-4 h-4 text-purple-400" /> Education
              </h2>
              <div className="bg-purple-950/20 border border-purple-500/15 p-4 rounded-xl">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-white">{PERSONAL_INFO.institution}</h3>
                    <p className="text-xs text-purple-300">{PERSONAL_INFO.degree}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">{PERSONAL_INFO.timeline}</span>
                    <p className="text-xs font-bold text-purple-400">CGPA: {PERSONAL_INFO.cgpa}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300">
                <Briefcase className="w-4 h-4 text-purple-400" /> Internship Experience
              </h2>
              <div className="bg-purple-950/20 border border-purple-500/15 p-4 rounded-xl space-y-2">
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-white">{INTERNSHIP.role}</h3>
                    <p className="text-xs text-purple-300">{INTERNSHIP.company}</p>
                  </div>
                  <span className="text-xs text-slate-400">{INTERNSHIP.period}</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pt-2">
                  {INTERNSHIP.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300">
                <Code2 className="w-4 h-4 text-purple-400" /> Key Projects
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="bg-purple-950/20 border border-purple-500/15 p-4 rounded-xl space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                      <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 text-xs flex items-center gap-1">
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-300">{proj.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-[10px] font-mono rounded bg-purple-900/40 text-purple-300 border border-purple-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300">
                <Award className="w-4 h-4 text-purple-400" /> Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="bg-purple-950/20 border border-purple-500/15 p-3 rounded-xl">
                    <p className="font-bold text-white">{cert.title}</p>
                    <p className="text-purple-300">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
