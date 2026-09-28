import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 px-6 relative border-t border-white/[0.06]">
      {/* Background ambient pink illumination */}
      <div
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#db2777]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#f472b6] font-mono block mb-3">
            07 / Get in Touch
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-4">
            Contact
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-[#fbcfe8] font-normal leading-snug">
            Let&apos;s Build Something Meaningful
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info & Links */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-base text-zinc-300 leading-relaxed font-light">
              I am actively seeking junior software developer and web developer opportunities,
              internships, and collaborative engineering projects. Whether you have an open role,
              a project inquiry, or simply want to connect, I would love to hear from you.
            </p>

            {/* Email Contact Card */}
            <div className="p-6 rounded-2xl bg-[#111116] border border-white/[0.08] hover:border-[#db2777]/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Direct Email</span>
                <span className="text-xs text-[#f472b6] font-mono">Response within 24h</span>
              </div>
              <div className="text-sm sm:text-base font-semibold text-white font-mono break-all mb-4">
                {PERSONAL_INFO.email}
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-2 text-xs font-medium text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] rounded-lg transition-colors flex items-center gap-2 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-4 py-2 text-xs font-medium text-white bg-[#db2777] hover:bg-[#be185d] rounded-lg transition-colors flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <span>Open Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                Professional Profiles
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-4 rounded-xl bg-[#111116] border border-white/[0.08] hover:border-[#db2777]/40 hover:bg-white/[0.02] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#fbcfe8] transition-colors">
                        GitHub
                      </div>
                      <div className="text-[11px] text-zinc-500 font-mono">menna-software6</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#f472b6] transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-4 rounded-xl bg-[#111116] border border-white/[0.08] hover:border-[#db2777]/40 hover:bg-white/[0.02] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#fbcfe8] transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-[11px] text-zinc-500 font-mono">menna-abed</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#f472b6] transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111116] border border-white/[0.08] shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-[#f472b6]" />
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Send a Direct Message
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="sender-name"
                      className="block text-xs font-medium text-zinc-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-white/[0.1] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#db2777] focus:ring-1 focus:ring-[#db2777] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sender-email"
                      className="block text-xs font-medium text-zinc-300 mb-2"
                    >
                      Your Email Address
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-white/[0.1] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#db2777] focus:ring-1 focus:ring-[#db2777] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-zinc-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Junior Developer Opportunity / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-white/[0.1] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#db2777] focus:ring-1 focus:ring-[#db2777] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-zinc-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hello Menna, we reviewed your portfolio and would like to discuss an opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-white/[0.1] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#db2777] focus:ring-1 focus:ring-[#db2777] transition-all resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold text-white bg-[#db2777] hover:bg-[#be185d] rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_20px_rgba(219,39,119,0.35)] active:scale-95"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[11px] text-zinc-500 mt-2 font-mono">
                    Submitting opens your preferred mail client addressed to {PERSONAL_INFO.email}
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
