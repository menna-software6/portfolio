import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Clock } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111116] border border-white/[0.12] rounded-2xl shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#db2777]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 mb-3">
          {project.status === 'Live' ? (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Website</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#f472b6]">
              <Clock className="w-3.5 h-3.5" />
              <span>In Active Development</span>
            </div>
          )}
          <span className="text-zinc-600">·</span>
          <span className="text-xs text-zinc-400 font-mono">{project.subtitle}</span>
        </div>

        {/* Modal Title */}
        <h3
          id="modal-project-title"
          className="font-serif italic text-2xl sm:text-3xl font-medium text-white mb-4"
        >
          {project.title}
        </h3>

        {/* Large Media Preview */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 bg-[#09090b] border border-white/[0.08]">
          <img
            src={project.image}
            alt={`${project.title} visual showcase preview`}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent opacity-40" />
        </div>

        {/* Project Description */}
        <div className="mb-6">
          <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400 mb-2">Overview</h4>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Key Engineering Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400 mb-3">Key Highlights</h4>
            <div className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#db2777] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies List */}
        <div className="mb-8">
          <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400 mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/[0.08]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#db2777] hover:bg-[#be185d] rounded-full transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="px-5 py-2.5 text-xs font-semibold text-zinc-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-full transition-all flex items-center gap-2"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Source on GitHub</span>
            </a>
          )}

          {!project.liveUrl && (
            <div className="text-xs text-zinc-400 italic">
              Project repository and live URL will be linked upon completion of current development sprint.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
