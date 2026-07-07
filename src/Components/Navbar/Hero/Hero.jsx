import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';
import './Hero.css';
import pic from '../../../assets/pic.jpeg';

const codeLines = [
  'const developer = {',
  '  name: "Maryam Zafar",',
  '  focus: ["AI Engineering", "Full Stack", "Flutter"],',
  '  stack: ["React", "Node.js", "Python", "Firebase"],',
  '};',
  '',
  'function buildDreams() {',
  '  return developer.focus.map((skill) => `⚡ ${skill}`);',
  '}',
];

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-orb orb-one" />
      <div className="hero-bg-orb orb-two" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="hero-badge">Available for freelance, internships & ambitious builds</span>
        <h1>
          Hi, I&apos;m <span>Maryam Zafar</span>
        </h1>
        <div className="hero-typing">
          <TypeAnimation
            sequence={['AI Engineer', 1400, 'Full Stack Developer', 1400, 'Flutter Developer', 1400, 'Agentic AI Builder', 1400]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </div>
        <p className="hero-subtitle">
          I design intelligent applications, polished web experiences, and modern mobile products that make an impact.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="hero-primary">
            Contact Me
          </a>
          <a href="mailto:riameryem786@gmail.com?subject=Resume%20Request" className="hero-secondary">
            Download Resume <FaDownload />
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/meryem-zafar" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-editor-wrap"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="editor-window">
          <div className="editor-toolbar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>

          <div className="editor-body">
            <div className="editor-code">
              {codeLines.map((line, index) => (
                <div key={index} className="editor-line">
                  <span className="editor-number">{index + 1}</span>
                  <span className="editor-text">{line}</span>
                </div>
              ))}
            </div>
            <div className="editor-preview">
              <img src={pic} alt="Maryam Zafar" />
              <div className="editor-caption">
                <strong>Building the future</strong>
                <span>AI • Flutter • Web</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
