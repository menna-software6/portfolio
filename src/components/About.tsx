import React from 'react';
import { GraduationCap, MapPin, Calendar, Compass, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#f472b6] font-mono block mb-3">
            01 / Background
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            <p>
              I am a Software Engineering student at the{' '}
              <strong className="text-white font-medium">University of Petra</strong> with expected graduation in{' '}
              <strong className="text-[#fbcfe8] font-medium">2028</strong>. My passion lies at the intersection of
              disciplined software engineering logic and modern, responsive web development.
            </p>

            <p>
              Rather than viewing code solely as abstract syntax, I focus on building practical, tangible projects.
              I dedicate regular hours to strengthening my problem-solving capabilities, analyzing computational logic,
              and transforming project specifications into intuitive, structured interfaces.
            </p>

            <p>
              Whether structuring object-oriented applications in Java and C++, designing semantic responsive layouts in
              HTML and CSS, or orchestrating client-side interactivity with JavaScript, I strive for clarity, clean
              code separation, and purposeful design.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#projects"
                className="text-xs font-semibold uppercase tracking-wider text-[#f472b6] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Explore my featured work</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Facts / Educational Focus Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#111116] border border-white/[0.08] p-8 relative overflow-hidden group hover:border-[#db2777]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#db2777]/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-serif italic text-xl font-medium text-white mb-6">
                Academic Profile
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#f472b6] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase font-mono tracking-wider">Institution</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{PERSONAL_INFO.university}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Faculty of Information Technology</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#f472b6] shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase font-mono tracking-wider">Degree Program</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{PERSONAL_INFO.field}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Undergraduate Degree Candidate</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#f472b6] shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase font-mono tracking-wider">Timeline</div>
                    <div className="text-sm font-semibold text-white mt-0.5">Expected Graduation {PERSONAL_INFO.expectedGraduation}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Active Academic Term</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#f472b6] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase font-mono tracking-wider">Location</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{PERSONAL_INFO.location}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Available for Remote & Local Opportunities</div>
                  </div>
                </div>
              </div>

              {/* Bottom quote */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs text-zinc-400 italic">
                &ldquo;Dedicated to continuous learning, building real software, and writing clean, reliable code.&rdquo;
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
