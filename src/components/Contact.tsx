import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, Sparkles, CheckCircle2, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    // Trigger purple/gold celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#c084fc', '#9333ea', '#e9d5ff', '#ffffff']
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span>GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Let's Build <span className="text-gradient-purple">Something Together</span>
          </motion.h2>

          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Open to software engineering roles, internships, full-stack collaborations, and technical discussions.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Direct Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-panel rounded-3xl p-8 space-y-8 border border-purple-500/20 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Contact Credentials</h3>
                <p className="text-xs text-slate-300/80 leading-relaxed">
                  Feel free to reach out directly via email, phone, or LinkedIn. I respond promptly to inquiries.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/15 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-500/30 text-purple-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono uppercase text-slate-400">EMAIL</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="block text-xs sm:text-sm font-semibold text-purple-200 truncate hover:text-white transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-purple-300 hover:bg-purple-900/40 transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/15 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-500/30 text-purple-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400">PHONE</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="block text-xs sm:text-sm font-semibold text-purple-200 hover:text-white transition-colors">
                      +91 {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg text-slate-400 hover:text-purple-300 hover:bg-purple-900/40 transition-colors shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Link Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/15 flex items-center gap-3 group hover:border-purple-400/40 transition-all duration-300 block"
              >
                <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-500/30 text-purple-300 shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] font-mono uppercase text-slate-400">LINKEDIN</span>
                  <span className="block text-xs sm:text-sm font-semibold text-purple-200 truncate group-hover:text-white transition-colors">
                    renusri-darla-a2a1682a2
                  </span>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-purple-500/10 text-xs text-slate-400">
              📍 Based in Visakhapatnam, Andhra Pradesh, India
            </div>
          </motion.div>

          {/* Contact Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-purple-500/20"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-purple-900/60 border border-purple-400 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-md">
                  Thank you for reaching out, {formData.name}. I will review your message and reply as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>
                  <p className="text-xs text-slate-400">Fill out the form below to send me a message directly.</p>
                </div>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-purple-300 mb-1.5 font-medium">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-purple-300 mb-1.5 font-medium">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono text-purple-300 mb-1.5 font-medium">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hello Darla, I'd like to discuss a project or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] border border-purple-400/30 transition-all duration-300 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 text-purple-200" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
