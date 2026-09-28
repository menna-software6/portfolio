import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
          className="text-lg font-semibold tracking-tight text-white hover:text-[#fbcfe8] transition-colors flex items-center gap-2 group"
          aria-label="Menna Abed - Return to top"
        >
          <span className="font-serif italic text-xl font-medium tracking-normal text-white group-hover:text-[#fbcfe8] transition-colors">
            Menna Abed
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#db2777] inline-block"></span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#a1a1aa]"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`transition-colors py-1 relative hover:text-white ${
                  isActive ? 'text-[#fbcfe8] font-medium' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#db2777] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-white/[0.08] hover:bg-[#db2777] border border-white/[0.12] hover:border-[#db2777] rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#a1a1aa] hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#db2777]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b] border-b border-white/[0.1] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-[#d4d4d8] hover:text-[#fbcfe8] py-2 border-b border-white/[0.05] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#a1a1aa]">→</span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="w-full text-center py-3 text-xs font-semibold text-white bg-[#db2777] hover:bg-[#be185d] rounded-full transition-colors shadow-md"
              >
                Get in Touch
              </a>
              <div className="text-center text-xs text-[#71717a] pt-1">
                {PERSONAL_INFO.email}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
