import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f472b6] font-mono block mb-3">
              03 / Selected Works
            </span>
            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Practical applications built with a focus on clean modular code, responsive interfaces,
            and real-world user workflows.
          </p>
        </div>

        {/* Large Visual Project Showcase */}
        <div className="space-y-16">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className="rounded-3xl bg-[#111116] border border-white/[0.08] hover:border-[#db2777]/40 transition-all duration-500 overflow-hidden shadow-xl group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
                  
                  {/* Visual Image Preview */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer bg-[#09090b] border border-white/[0.06] group-hover:border-white/[0.15] transition-all"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} interface preview`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                      {/* Floating status tag */}
                      <div className="absolute top-4 left-4 z-10">
                        {project.status === 'Live' ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-black/75 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Live Project
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-black/75 backdrop-blur-md text-[#fbcfe8] border border-[#db2777]/30">
                            <Clock className="w-3 h-3 text-[#f472b6]" />
                            In Development
                          </span>
                        )}
                      </div>

                      {/* Click overlay hint */}
                      <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-3 py-1.5 text-xs font-medium text-white bg-black/80 backdrop-blur-md rounded-lg border border-white/20 flex items-center gap-1.5">
                          <span>View Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#f472b6]" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details Content */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-2">
                      <span>0{index + 1}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#f472b6]">{project.subtitle}</span>
                    </div>

                    <h3 className="font-serif italic text-2xl sm:text-3xl font-medium text-white mb-4 group-hover:text-[#fbcfe8] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed font-light mb-6">
                      {project.description}
                    </p>

                    {/* Unboxed Technology Badges */}
                    <div className="mb-8">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons & Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="px-5 py-2.5 text-xs font-semibold text-white bg-[#db2777] hover:bg-[#be185d] rounded-full transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                        >
                          <span>Visit Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="px-5 py-2.5 text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] rounded-full transition-all flex items-center gap-1.5 active:scale-95"
                        >
                          <span>Project Blueprint</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#f472b6]" />
                        </button>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="p-2.5 text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-full transition-colors flex items-center gap-2 text-xs"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-4 h-4" />
                          <span className="hidden sm:inline">Source Code</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="text-xs text-zinc-400 hover:text-[#fbcfe8] py-2 px-1 transition-colors"
                      >
                        Deep Dive →
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Lightbox Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
