import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';
// Removed image logo import


const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const offset = window.scrollY + 180;

      for (const section of sections) {
        const node = document.getElementById(section.id);
        if (node) {
          const top = node.offsetTop;
          const bottom = top + node.offsetHeight;

          if (offset >= top && offset < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`Navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Custom Brand Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer transition-transform duration-250 hover:scale-104 select-none"
        onClick={() => {
          setMobileMenuOpen(false);
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      >
        <div className="w-8 h-8 rounded-full border border-purple-500/50 flex items-center justify-center bg-purple-500/10 shadow-md shadow-purple-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-20 group-hover:opacity-60 transition-opacity duration-300" />
          <div className="w-5 h-5 rounded-full border border-cyan-400/80 flex items-center justify-center">
            <span className="text-[8px] text-cyan-400 font-extrabold tracking-tighter">MZ</span>
          </div>
        </div>
        <span className="text-lg font-black tracking-widest text-white">MZ</span>
      </div>


      <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {sections.map((item) => (
          <li key={item.id}>
            <ScrollLink
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
              activeClass="active"
            >
              {item.label}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <button
        className="nav-connect"
        onClick={() => {
          setMobileMenuOpen(false);
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      >
        Let&apos;s Talk
      </button>

      <button className="nav-toggle" onClick={() => setMobileMenuOpen((prev) => !prev)} aria-label="Toggle menu">
        {mobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
