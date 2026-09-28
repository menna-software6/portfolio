import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f472b6] font-mono block mb-3">
              04 / Academic Path
            </span>
            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              Education
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Rigorous undergraduate studies focusing on computer science foundations,
            software systems engineering, and programming theory.
          </p>
        </div>

        {/* Premium Education Card */}
        <div className="rounded-3xl bg-[#111116] border border-white/[0.08] p-8 sm:p-12 relative overflow-hidden group hover:border-[#db2777]/30 transition-all duration-300">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#db2777]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Core Credential */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-[#f472b6]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#f472b6] uppercase tracking-wider block">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-0.5">
                    {PERSONAL_INFO.university}
                  </h3>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-serif italic text-xl sm:text-2xl font-normal text-[#fbcfe8]">
                  {PERSONAL_INFO.field}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 pt-1 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#f472b6]" />
                    <span>Expected Graduation {PERSONAL_INFO.expectedGraduation}</span>
                  </span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#f472b6]" />
                    <span>{PERSONAL_INFO.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                Pursuing comprehensive coursework covering software architecture, object-oriented design,
                data structures, algorithms, system debugging, and modern web application development.
              </p>
            </div>

            {/* Right Column: Academic Focus Areas */}
            <div className="lg:col-span-5 bg-[#09090b] rounded-2xl p-6 border border-white/[0.06] space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#f472b6]" />
                <span>Program Core Themes</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#db2777] mt-1.5 shrink-0" />
                  <div>
                    <span className="font-medium text-white block">Software Engineering Principles</span>
                    <span className="text-zinc-400">Software lifecycle, requirements analysis, system design, and testing.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#db2777] mt-1.5 shrink-0" />
                  <div>
                    <span className="font-medium text-white block">Computational Logic & Algorithms</span>
                    <span className="text-zinc-400">Object-Oriented Programming (OOP), efficiency, and algorithmic problem solving.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#db2777] mt-1.5 shrink-0" />
                  <div>
                    <span className="font-medium text-white block">Network & Systems Foundations</span>
                    <span className="text-zinc-400">Computer networks, client-server models, protocols, and developer workflows.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
