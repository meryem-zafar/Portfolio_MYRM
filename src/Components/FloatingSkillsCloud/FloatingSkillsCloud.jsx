import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { allSkills } from '../../assets/skills_data';

// Floating Skill Ball Component
const SkillBall = ({ skill, index, totalSkills, containerRef }) => {
  const angle = (index / totalSkills) * Math.PI * 2;
  const radius = 280;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const [isHovered, setIsHovered] = useState(false);
  const ballRef = useRef(null);

  useEffect(() => {
    if (!ballRef.current || !containerRef.current) return;

    const handleMouseMove = (e) => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      // Calculate distance
      const dx = ballRef.current.offsetLeft - mouseX;
      const dy = ballRef.current.offsetTop - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        const angle = Math.atan2(dy, dx);
        const repelX = Math.cos(angle) * 30;
        const repelY = Math.sin(angle) * 30;

        gsap.to(ballRef.current, {
          x: repelX,
          y: repelY,
          duration: 0.3,
        });
      } else {
        gsap.to(ballRef.current, {
          x: 0,
          y: 0,
          duration: 0.3,
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={ballRef}
      className="absolute"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      style={{
        left: '50%',
        top: '50%',
        x: -50,
        y: -50,
      }}
    >
      <motion.div
        className="relative"
        animate={{
          x: x,
          y: y,
        }}
        transition={{
          x: { duration: 20, repeat: Infinity, ease: 'linear' },
          y: { duration: 25, repeat: Infinity, ease: 'linear' },
          delay: index * 0.02,
        }}
      >
        <motion.button
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative w-20 h-20 rounded-full font-semibold text-sm whitespace-nowrap"
          style={{
            background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
            border: `2px solid ${skill.color}60`,
            color: skill.color,
            boxShadow: `0 0 20px ${skill.color}30`,
          }}
          whileHover={{
            scale: 1.2,
            boxShadow: `0 0 40px ${skill.color}80, 0 0 60px ${skill.color}50`,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center h-full text-xs px-2"
          >
            {skill.name}
          </motion.div>
        </motion.button>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap pointer-events-none"
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
          }}
        >
          {skill.name}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const FloatingSkillsCloud = () => {
  const containerRef = useRef(null);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Skills & Tech
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive collection of technologies I've mastered and actively use in development
          </p>
        </motion.div>

        {/* Floating Cloud Container */}
        <motion.div
          ref={containerRef}
          className="relative h-96 md:h-[500px] mb-20 rounded-2xl bg-gradient-to-br from-purple-900/5 to-cyan-900/5 border border-purple-500/10 backdrop-blur-sm"
          variants={item}
        >
          {/* Gradient background effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
            }}
          />

          {/* Skill balls */}
          {allSkills.map((skill, index) => (
            <SkillBall
              key={skill.name}
              skill={skill}
              index={index}
              totalSkills={allSkills.length}
              containerRef={containerRef}
            />
          ))}

          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Skills by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(
            allSkills.reduce((acc, skill) => {
              if (!acc[skill.category]) acc[skill.category] = [];
              acc[skill.category].push(skill.name);
              return acc;
            }, {})
          ).map(([category, skills], idx) => (
            <motion.div
              key={category}
              variants={item}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/10 to-cyan-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-purple-400 font-semibold mb-4 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 text-xs text-purple-300 hover:border-purple-400/60 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FloatingSkillsCloud;
