import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, Filter } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedOrg, setSelectedOrg] = useState<string>('all');

  const organizations = [
    { id: 'all', label: 'All Courses (11)' },
    { id: 'ORACLE', label: 'ORACLE' },
    { id: 'Cisco Networking Academy', label: 'Cisco Networking Academy' },
    { id: 'ANTHROPIC — CLAUDE ACADEMY', label: 'Anthropic — Claude Academy' },
  ];

  const filteredCerts =
    selectedOrg === 'all'
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.organization === selectedOrg);

  const getOrgTheme = (org: string) => {
    switch (org) {
      case 'ORACLE':
        return {
          badge: 'bg-red-500/10 text-red-300 border-red-500/20',
          accent: 'border-l-red-500',
        };
      case 'Cisco Networking Academy':
        return {
          badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
          accent: 'border-l-sky-500',
        };
      case 'ANTHROPIC — CLAUDE ACADEMY':
        return {
          badge: 'bg-[#db2777]/10 text-[#fbcfe8] border-[#db2777]/20',
          accent: 'border-l-[#db2777]',
        };
      default:
        return {
          badge: 'bg-white/[0.08] text-white border-white/[0.1]',
          accent: 'border-l-zinc-500',
        };
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f472b6] font-mono block mb-3">
              05 / Professional Credentials
            </span>
            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              Courses & Certifications
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Completed technical coursework and specialized curricula across software engineering,
            computer networks, and modern developer tooling.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#111116] border border-white/[0.08] rounded-xl mb-12 w-fit">
          {organizations.map((org) => (
            <button
              key={org.id}
              type="button"
              onClick={() => setSelectedOrg(org.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedOrg === org.id
                  ? 'bg-white/[0.12] text-white shadow-sm border border-white/[0.1]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {org.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => {
            const theme = getOrgTheme(cert.organization);
            return (
              <div
                key={cert.id}
                className="rounded-2xl bg-[#111116] border border-white/[0.08] p-6 hover:border-[#db2777]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg"
              >
                <div>
                  {/* Top Bar with Organization Badge & Year */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-md border ${theme.badge}`}
                    >
                      {cert.organization}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {cert.year}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#fbcfe8] transition-colors leading-snug mb-3">
                    {cert.title}
                  </h3>
                </div>

                {/* Bottom Meta */}
                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <CheckCircle className="w-3.5 h-3.5 text-[#db2777]" />
                    <span>Completed Course</span>
                  </div>
                  {cert.category && (
                    <span className="font-mono text-[11px] text-zinc-500">
                      {cert.category}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
