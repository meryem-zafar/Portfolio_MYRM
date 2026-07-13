import React from 'react';
import { portfolioOwner } from '../../assets/portfolio_data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="w-full bg-[#060816] pt-12 pb-8 px-6 border-t border-purple-500/10 relative z-10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Status Bar Row */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between text-[11px] sm:text-xs text-gray-500 font-semibold tracking-widest uppercase select-none w-full">
          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Status: Available</span>
          </div>

          {/* Location */}
          <div className="text-center sm:text-left">
            Lahore &rarr; Remote &bull; UTC+5
          </div>

          {/* Metrics */}
          <div className="text-center sm:text-right text-purple-400/80">
            Agents in Production: 20K+ MSGs/day
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/15 to-transparent" />

        {/* Bottom Logo & Nav Link Row */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between pt-2">
          {/* Brand Monogram & Name */}
          <div className="flex items-center gap-3">
            {/* Circle Logo */}
            <div className="w-9 h-9 rounded-full border border-purple-500/40 flex items-center justify-center bg-purple-500/10 relative overflow-hidden group shadow-md shadow-purple-500/5">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-20" />
              <div className="w-6 h-6 rounded-full border border-cyan-400/70 flex items-center justify-center">
                <span className="text-[9px] text-cyan-400 font-black tracking-tighter">MZ</span>
              </div>
            </div>
            
            {/* Identity Info */}
            <div className="flex flex-col text-left">
              <span className="text-white font-extrabold tracking-wide text-sm sm:text-base leading-none">
                {portfolioOwner.name}
              </span>
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1.5 leading-none">
                AI Engineer &bull; Agentic AI Developer
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-wider transition-colors duration-250 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-600 mt-6 pt-4 border-t border-purple-500/5">
          <div>
            &copy; {currentYear} Maryam Zafar. All rights reserved.
          </div>
          <div className="mt-1 sm:mt-0">
            Crafted with React, Tailwind &amp; Framer Motion
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
