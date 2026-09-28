import React from 'react';
import { 
  Puzzle, 
  Layers, 
  BookMarked, 
  Eye, 
  Smartphone, 
  Binary, 
  Shuffle, 
  Users 
} from 'lucide-react';
import { WHAT_I_BRING } from '../data/portfolioData';

export const WhatIBring: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Problem Solving':
        return <Puzzle className="w-5 h-5 text-[#f472b6]" />;
      case 'Clean & Structured Development':
        return <Layers className="w-5 h-5 text-[#f472b6]" />;
      case 'Continuous Learning':
        return <BookMarked className="w-5 h-5 text-[#f472b6]" />;
      case 'Attention to Detail':
        return <Eye className="w-5 h-5 text-[#f472b6]" />;
      case 'Responsive Web Development':
        return <Smartphone className="w-5 h-5 text-[#f472b6]" />;
      case 'Programming Fundamentals':
        return <Binary className="w-5 h-5 text-[#f472b6]" />;
      case 'Adaptability':
        return <Shuffle className="w-5 h-5 text-[#f472b6]" />;
      case 'Collaboration':
        return <Users className="w-5 h-5 text-[#f472b6]" />;
      default:
        return <Layers className="w-5 h-5 text-[#f472b6]" />;
    }
  };

  return (
    <section id="qualities" className="py-24 px-6 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f472b6] font-mono block mb-3">
              06 / Developer Mindset
            </span>
            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              What I Bring
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            The core work habits, analytical discipline, and collaborative traits I contribute
            to an engineering team as an aspiring junior developer.
          </p>
        </div>

        {/* 8 Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_I_BRING.map((strength, index) => (
            <div
              key={strength.title}
              className="p-6 rounded-2xl bg-[#111116] border border-white/[0.08] hover:border-[#db2777]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#db2777]/30 transition-colors">
                    {getIcon(strength.title)}
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    0{index + 1}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-[#f472b6] uppercase tracking-wider mb-1">
                  {strength.category}
                </div>

                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#fbcfe8] transition-colors">
                  {strength.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {strength.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] text-[11px] text-zinc-500 font-mono flex items-center justify-between">
                <span>Working Trait</span>
                <span className="text-[#db2777]">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
