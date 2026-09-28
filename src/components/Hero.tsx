import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Code2, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Ambient background pink glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#db2777]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Clean unboxed metadata separator */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium text-[#f472b6] tracking-wide mb-6"
            >
              <span>{PERSONAL_INFO.role}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-300">{PERSONAL_INFO.university}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Graduating {PERSONAL_INFO.expectedGraduation}</span>
            </motion.div>

            {/* Main Name & Title with Luxurious Calligraphic Treatment */}
            <motion.h1
              initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl luxury-signature-name text-white mb-3 tracking-normal select-none"
            >
              <span className="bg-gradient-to-r from-white via-[#fdf2f8] to-[#fbcfe8] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(251,207,232,0.18)]">
                Menna Abed
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif italic text-2xl sm:text-3xl md:text-4xl font-normal text-[#fbcfe8] mb-6 leading-snug"
            >
              Junior Software Developer & Web Developer
            </motion.h2>

            {/* Introduction prose */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mb-10 font-normal"
            >
              {PERSONAL_INFO.shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <button
                type="button"
                onClick={() => scrollTo('#projects')}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-white/[0.08] hover:bg-[#db2777] border border-white/[0.15] hover:border-[#db2777] rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-[0_0_25px_rgba(219,39,119,0.35)] active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="px-6 py-3.5 text-sm font-semibold text-zinc-200 hover:text-white bg-transparent hover:bg-white/[0.06] border border-white/[0.1] rounded-full transition-all duration-200 flex items-center gap-2 active:scale-95"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-[#f472b6]" />
              </button>
            </motion.div>

            {/* Social Links & Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-6 pt-4 border-t border-white/[0.08]"
            >
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Connect</span>
              
              <div className="flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors group flex items-center gap-2 text-xs"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 group-hover:text-[#fbcfe8] transition-colors" />
                  <span className="hidden sm:inline text-zinc-400 group-hover:text-zinc-200">GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors group flex items-center gap-2 text-xs"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 group-hover:text-[#fbcfe8] transition-colors" />
                  <span className="hidden sm:inline text-zinc-400 group-hover:text-zinc-200">LinkedIn</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors group flex items-center gap-2 text-xs"
                  aria-label="Send direct email"
                >
                  <Mail className="w-4 h-4 group-hover:text-[#fbcfe8] transition-colors" />
                  <span className="hidden sm:inline text-zinc-400 group-hover:text-zinc-200">Email</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md group"
            >
              {/* Outer soft pink glow on hover */}
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#db2777]/30 via-transparent to-white/10 opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl bg-[#111116] border border-white/[0.1] overflow-hidden p-6 shadow-2xl">
                {/* Visual Header bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Terminal className="w-3.5 h-3.5 text-[#f472b6]" />
                    <span>developer.env</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#db2777]/80" />
                  </div>
                </div>

                {/* Workspace Visual Representation */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#09090b] border border-white/[0.05]">
                  <img
                    src="/src/assets/images/developer_workspace_1790596497287.jpg"
                    alt="Developer workstation setup representing Menna Abed's focus on software engineering"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent opacity-60" />
                </div>

                {/* Core focus summary highlights */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-zinc-400 py-1 border-b border-white/[0.04]">
                    <span>Primary Focus</span>
                    <span className="font-medium text-zinc-200">Software Engineering & Web</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400 py-1 border-b border-white/[0.04]">
                    <span>Core Languages</span>
                    <span className="font-mono text-[#fbcfe8]">Java · C++ · JavaScript</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400 py-1">
                    <span>Engineering Approach</span>
                    <span className="text-zinc-200">Clean Structure & Problem Solving</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
