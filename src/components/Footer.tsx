import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 border-t border-white/[0.08] bg-[#09090b] relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Identity lockup */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="font-serif italic text-2xl font-normal text-white mb-1">
            Menna Abed
          </div>
          <div className="text-xs font-mono text-zinc-400">
            {PERSONAL_INFO.role} · {PERSONAL_INFO.university}
          </div>
        </div>

        {/* Social Navigation Links */}
        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white transition-colors flex items-center gap-1.5"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white transition-colors flex items-center gap-1.5"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
            aria-label="Send direct email"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Back to top button */}
        <div>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#111116] border border-white/[0.1] hover:border-[#db2777]/50 text-zinc-400 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#db2777]"
            aria-label="Back to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono text-center sm:text-left">
        <div>
          © {new Date().getFullYear()} Menna Abed · Designed & Engineered with precision
        </div>
        <div className="flex items-center gap-2">
          <span>Software Engineering Student Portfolio</span>
          <span className="w-1 h-1 rounded-full bg-[#db2777]" />
          <span>Expected 2028</span>
        </div>
      </div>
    </footer>
  );
};
