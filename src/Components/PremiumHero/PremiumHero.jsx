import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { portfolioOwner } from '../../assets/portfolio_data';

// Particle Component
const Particle = ({ x, y, delay }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
      initial={{ opacity: 0.3, x, y }}
      animate={{
        opacity: [0.3, 0.8, 0.3],
        x: x + (Math.random() - 0.5) * 100,
        y: y + (Math.random() - 0.5) * 100,
      }}
      transition={{ duration: Math.random() * 4 + 8, delay, repeat: Infinity }}
    />
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    // Parallax effect
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;

      gsap.to(containerRef.current, {
        rotationX: y,
        rotationY: x,
        duration: 0.8,
        overwrite: 'auto',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % portfolioOwner.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const particles = useMemo(() => {
    // Generate static particle coords once to prevent jumping on re-renders
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const height = typeof window !== 'undefined' ? window.innerHeight : 1080;
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      delay: i * 0.1,
    }));
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 perspective"
      style={{ perspective: '1200px' }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <Particle
            key={p.id}
            x={p.x}
            y={p.y}
            delay={p.delay}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"
        animate={{
          y: [0, -50, 0],
          x: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"
        animate={{
          y: [0, 50, 0],
          x: [0, -50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div variants={item} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Welcome to my portfolio
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={item} className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-white">I'm</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 inline-block">
              {portfolioOwner.name}
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-2">Computer Science Student & Tech Innovator</p>
        </motion.div>

        {/* Animated Role Switcher */}
        <motion.div variants={item} className="mb-8 h-16 flex items-center justify-center">
          <div className="text-2xl sm:text-3xl font-semibold relative h-10 w-full overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRoleIndex}
                className="absolute text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 px-4 whitespace-nowrap"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {portfolioOwner.roles[currentRoleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Passionate about building intelligent systems, creating immersive experiences, and pushing the boundaries of what's possible with AI, Flutter, Web Technologies, and Game Development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href={portfolioOwner.resume}
            className="px-8 py-3 rounded-lg border border-purple-500/50 text-white font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="w-4 h-4" />
            Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={item} className="flex justify-center gap-6">
          <motion.a
            href={portfolioOwner.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={portfolioOwner.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            whileHover={{ scale: 1.2, rotate: -10 }}
          >
            <FaLinkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={`mailto:${portfolioOwner.email}`}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
