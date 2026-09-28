import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Globe, Cpu, Wrench, Layers, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Terminal className="w-4 h-4 text-[#f472b6]" />;
      case 'web-dev':
        return <Globe className="w-4 h-4 text-[#f472b6]" />;
      case 'software-eng':
        return <Cpu className="w-4 h-4 text-[#f472b6]" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-[#f472b6]" />;
      default:
        return <Layers className="w-4 h-4 text-[#f472b6]" />;
    }
  };

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 px-6 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f472b6] font-mono block mb-3">
              02 / Capabilities
            </span>
            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              Technical Skills
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Core technologies and engineering competencies built through rigorous university studies,
            certified coursework, and hands-on application development.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#111116] border border-white/[0.08] rounded-xl mb-12 w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-white/[0.12] text-white shadow-sm border border-white/[0.1]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            All Competencies
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                activeTab === cat.id
                  ? 'bg-white/[0.12] text-white shadow-sm border border-white/[0.1]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>{cat.number}. {cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-[#111116] border border-white/[0.08] p-8 transition-all duration-300 hover:border-[#db2777]/30"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#f472b6] tracking-wider block">
                      Category {category.number}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-0.5">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono text-zinc-500 hidden sm:inline-block">
                  {category.skills.length} competencies
                </span>
              </div>

              {/* Skills List within this Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-xl bg-[#09090b] border border-white/[0.05] hover:border-[#db2777]/40 transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-base font-semibold text-white group-hover:text-[#fbcfe8] transition-colors">
                          {skill.name}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-[#db2777] opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-zinc-500">
                      <span>Proficiency</span>
                      <span className="text-zinc-300 font-medium">Applied</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
