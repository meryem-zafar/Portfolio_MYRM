import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';
import logo from '../../assets/lom.png';

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
      <img
        src={logo}
        alt="Maryam Zafar logo"
        className="navbar-logo"
        onClick={() => {
          setMobileMenuOpen(false);
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      />

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
