import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/meryem-zafar',
      label: 'GitHub',
      color: '#ffffff',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/maryam-zafar',
      label: 'LinkedIn',
      color: '#0077b5',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:riameryem786@gmail.com',
      label: 'Email',
      color: '#ea4335',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="premium-footer">
      {/* Background Elements */}
      <div className="footer-bg-gradient" />
      
      <motion.div
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Top Section */}
        <motion.div className="footer-top-section" variants={itemVariants}>
          <div className="footer-content">
            <div className="footer-left">
              <h3 className="footer-heading">Let's Build Something Amazing</h3>
              <p className="footer-description">
                Ready to collaborate on innovative projects? Reach out and let's create something extraordinary together.
              </p>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="footer-scroll-btn"
              whileHover={{ scale: 1.1, rotate: -90 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div className="footer-divider" variants={itemVariants} />

        {/* Middle Section - Links */}
        <motion.div className="footer-middle-section" variants={itemVariants}>
          <div className="footer-links-grid">
            {/* Navigation Links */}
            <div className="footer-links-column">
              <h4 className="footer-links-title">Navigate</h4>
              <ul className="footer-links-list">
                {footerLinks.map((link, idx) => (
                  <motion.li key={idx} whileHover={{ x: 5 }}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="footer-social-column">
              <h4 className="footer-links-title">Connect</h4>
              <div className="footer-social-links">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-icon"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="footer-contact-column">
              <h4 className="footer-links-title">Contact</h4>
              <a href="mailto:riameryem786@gmail.com" className="footer-email">
                riameryem786@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div className="footer-divider" variants={itemVariants} />

        {/* Bottom Section */}
        <motion.div className="footer-bottom-section" variants={itemVariants}>
          <p className="footer-copyright">
            © {currentYear} All rights reserved. Crafted with passion.
          </p>
          <p className="footer-tagline">
            Designed & Built with <span className="heart">❤</span> using React, Framer Motion & Modern Web Technologies
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
