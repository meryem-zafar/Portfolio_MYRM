import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allSkills } from '../../assets/skills_data';
import { 
  FaPython, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaDocker, 
  FaAws, FaDatabase, FaTerminal, FaRobot, FaBrain, FaGamepad, FaLink, 
  FaServer, FaCode, FaHtml5, FaCss3Alt, FaUnity, FaMobileAlt, FaLayerGroup, 
  FaBolt, FaBug, FaRunning
} from 'react-icons/fa';
import { 
  SiCplusplus, SiTypescript, SiDart, SiFlutter, SiNextdotjs, 
  SiExpress, SiFramer, SiFirebase, SiMongodb, SiSqlite
} from 'react-icons/si';

const CSharpIcon = () => (
  <div 
    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-extrabold text-sm sm:text-base rounded-lg border text-white shadow-md select-none"
    style={{
      background: 'linear-gradient(135deg, #239120, #1b6c18)',
      borderColor: '#239120',
      boxShadow: '0 0 10px rgba(35, 145, 32, 0.4)'
    }}
  >
    C#
  </div>
);

const OpenAIIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-10 h-10 sm:w-12 sm:h-12"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M21.3,10.66 C21.13,10.15 20.8,9.7 20.37,9.37 C20.02,9.1 19.61,8.93 19.17,8.87 C19.17,8.68 19.17,8.48 19.14,8.29 C19.06,7.57 18.73,6.91 18.2,6.41 C17.65,5.89 16.92,5.59 16.16,5.57 C15.82,5.57 15.48,5.63 15.17,5.74 C14.93,5.18 14.5,4.72 13.96,4.42 C13.31,4.06 12.56,3.98 11.86,4.19 C11.23,4.38 10.69,4.79 10.33,5.34 C10.05,5.29 9.77,5.28 9.49,5.32 C8.77,5.4 8.11,5.74 7.61,6.26 C7.09,6.8 6.79,7.52 6.77,8.29 C6.77,8.4 6.77,8.51 6.78,8.63 C6.22,8.87 5.76,9.3 5.46,9.84 C5.1,10.49 5.02,11.24 5.23,11.94 C5.42,12.57 5.83,13.11 6.38,13.47 C6.33,13.75 6.32,14.03 6.36,14.31 C6.44,15.03 6.77,15.69 7.3,16.19 C7.85,16.71 8.58,17.01 9.34,17.03 C9.68,17.03 10.02,16.97 10.33,16.86 C10.57,17.42 11,17.88 11.54,18.18 C12.19,18.54 12.94,18.62 13.64,18.41 C14.27,18.22 14.81,17.81 15.17,17.26 C15.45,17.31 15.73,17.32 16.01,17.28 C16.73,17.2 17.39,16.86 17.89,16.34 C18.41,15.8 18.71,15.08 18.73,14.31 C18.73,14.2 18.73,14.09 18.72,13.97 C19.28,13.73 19.74,13.3 20.04,12.76 C20.4,12.11 20.48,11.36 20.27,10.66 C20.08,10.03 19.67,9.49 19.12,9.13 L19.12,9.13 C19.12,9.13 21.3,10.66 21.3,10.66 Z M18.47,13.37 C18.33,13.61 18.12,13.8 17.87,13.92 L15.73,12.69 L15.73,10.23 L17.87,9 C18.04,9.12 18.2,9.28 18.31,9.46 C18.52,9.81 18.59,10.23 18.52,10.64 C18.46,11.04 18.25,11.41 17.95,11.68 L18.47,13.37 Z M16.71,7.24 L14.57,8.47 L14.57,6.01 L16.71,4.78 C16.87,4.92 17.01,5.1 17.11,5.29 C17.3,5.65 17.36,6.07 17.27,6.48 C17.19,6.88 16.96,7.23 16.63,7.47 L16.71,7.24 Z M11.89,5.03 C12.12,4.89 12.38,4.83 12.65,4.85 L12.65,7.31 L10.51,8.54 L10.51,7.31 C10.51,7.05 10.58,6.79 10.72,6.56 L11.89,5.03 Z M8.93,6.34 C9.07,6.1 9.28,5.91 9.53,5.79 L11.67,7.02 L11.67,9.48 L9.53,10.71 C9.36,10.59 9.2,10.43 9.09,10.25 C8.88,9.9 8.81,9.48 8.88,9.07 C8.94,8.67 9.15,8.3 9.45,8.03 L8.93,6.34 Z M6.88,11.16 C7.02,10.92 7.23,10.73 7.48,10.61 L9.62,11.84 L9.62,14.3 L7.48,15.53 C7.31,15.41 7.15,15.25 7.04,15.07 C6.83,14.72 6.76,14.3 6.83,13.89 C6.89,13.49 7.1,13.12 7.4,12.85 L6.88,11.16 Z M11.71,16.5 C11.48,16.64 11.22,16.7 10.95,16.68 L10.95,14.22 L13.09,12.99 L13.09,14.22 C13.09,14.48 13.02,14.74 12.88,14.97 L11.71,16.5 Z" />
  </svg>
);

const getSkillIcon = (name) => {
  switch (name.toLowerCase()) {
    // Programming
    case 'python': return <FaPython />;
    case 'c++': return <SiCplusplus />;
    case 'javascript': return <FaJs />;
    case 'typescript': return <SiTypescript />;
    case 'dart': return <SiDart />;
    case 'c#': return <CSharpIcon />;
    
    // Frameworks
    case 'flutter': return <SiFlutter />;
    case 'react': return <FaReact />;
    case 'next.js': return <SiNextdotjs />;
    case 'node.js': return <FaNodeJs />;
    case 'express': return <SiExpress />;
    case 'framer motion': return <SiFramer />;
    case 'gsap': return <FaBolt />;
    
    // AI
    case 'agentic ai': return <FaRobot />;
    case 'gemini api': return <FaBrain />;
    case 'openai api': return <OpenAIIcon />;
    case 'langchain': return <FaLink />;
    case 'langgraph': return <FaLayerGroup />;
    case 'mcp': return <FaServer />;
    case 'prompt engineering': return <FaTerminal />;
    case 'rag': return <FaDatabase />;
    case 'vector db': return <FaDatabase />;
    
    // Game Dev
    case 'unity': return <FaUnity />;
    case 'urp': return <FaGamepad />;
    case 'navmesh': return <FaLayerGroup />;
    case 'animator': return <FaRunning />;
    case 'ai systems': return <FaRobot />;
    
    // Databases
    case 'firebase': return <SiFirebase />;
    case 'firestore': return <SiFirebase />;
    case 'hive': return <FaDatabase />;
    case 'sqlite': return <SiSqlite />;
    case 'mongodb': return <SiMongodb />;
    
    // Tools
    case 'git': return <FaGitAlt />;
    case 'github': return <FaGithub />;
    case 'vs code': return <FaCode />;
    case 'figma': return <FaFigma />;
    case 'docker': return <FaDocker />;
    default: return <FaCode />;
  }
};

const getBrandColor = (skill) => {
  const c = skill.color.toLowerCase();
  if (c === '#000000' || c === '#181717') {
    return '#e2e8f0'; // Light slate gray for dark logos on dark background
  }
  return skill.color;
};

const FloatingSkillsCloud = () => {
  const containerRef = useRef(null);
  const skillRefs = useRef([]);
  const [radius, setRadius] = useState(185);
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null);

  // Animation refs
  const speedX = useRef(0.002);
  const speedY = useRef(0.002);
  const currentRotation = useRef({ x: 0, y: 0 });
  const isMouseOver = useRef(false);
  const animationFrameId = useRef(null);

  // 1. Responsive Radius
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = window.innerWidth;
      if (width < 640) {
        setRadius(105); // Bounded smaller on mobile to prevent overflow
      } else if (width < 1024) {
        setRadius(145); // Tablets
      } else {
        setRadius(185); // Desktop
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. Generate Fibonacci Sphere Points
  const spherePoints = useMemo(() => {
    const N = allSkills.length;
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2; // y goes from 1 to -1
      const rAtY = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i;

      const x = Math.cos(theta) * rAtY;
      const z = Math.sin(theta) * rAtY;

      points.push({ x, y, z, skill: allSkills[i] });
    }
    return points;
  }, []);

  // 3. Animation Loop (60 FPS DOM updates)
  useEffect(() => {
    const updateSphere = () => {
      // Return slowly to default speed when mouse is not hovering
      if (!isMouseOver.current) {
        speedX.current += (0.001 - speedX.current) * 0.05;
        speedY.current += (0.001 - speedY.current) * 0.05;
      }

      // Update cumulative angles
      currentRotation.current.x += speedX.current;
      currentRotation.current.y += speedY.current;

      const cosX = Math.cos(currentRotation.current.x);
      const sinX = Math.sin(currentRotation.current.x);
      const cosY = Math.cos(currentRotation.current.y);
      const sinY = Math.sin(currentRotation.current.y);

      spherePoints.forEach((point, i) => {
        const el = skillRefs.current[i];
        if (!el) return;

        // Rotate X axis
        const y1 = point.y * cosX - point.z * sinX;
        const z1 = point.y * sinX + point.z * cosX;

        // Rotate Y axis
        const x2 = point.x * cosY + z1 * sinY;
        const z2 = -point.x * sinY + z1 * cosY;

        // Project to 2D
        const screenX = x2 * radius;
        const screenY = y1 * radius;
        const screenZ = z2 * radius; // Depth coordinate: -radius to +radius

        // Calculate Scale, Opacity, Z-Index, and Blur based on depth
        const depthPercent = (screenZ + radius) / (2 * radius); // 0 to 1
        
        let scale = 0.65 + 0.6 * depthPercent; // 0.65 to 1.25
        let opacity = 0.15 + 0.85 * depthPercent; // 0.15 to 1.0
        
        // Boost if current skill is hovered
        const isSelfHovered = hoveredSkillIndex === i;
        if (isSelfHovered) {
          scale *= 1.25;
          opacity = 1;
        } else if (hoveredSkillIndex !== null) {
          opacity *= 0.25; // Dim others
        }

        if (activeCategory && point.skill.category !== activeCategory) {
          opacity *= 0.25; // Dim if category does not match spotlight
          scale *= 0.85;
        } else if (activeCategory && point.skill.category === activeCategory) {
          opacity = Math.max(opacity, 0.85);
          scale = Math.max(scale, 1.05);
        }

        const zIndex = Math.round(depthPercent * 100) + (isSelfHovered ? 200 : 0);
        const blurAmount = screenZ < 0 ? Math.min(2.5, -screenZ / radius * 3.5) : 0;
        const blurFilter = blurAmount > 0.4 && !isSelfHovered ? `blur(${blurAmount}px)` : 'none';

        // Apply styles directly to the DOM for maximum 60fps performance
        el.style.transform = `translate3d(${screenX}px, ${screenY}px, ${screenZ}px) translate(-50%, -50%) scale(${scale})`;
        el.style.opacity = opacity;
        el.style.zIndex = zIndex;
        el.style.filter = blurFilter;
      });

      animationFrameId.current = requestAnimationFrame(updateSphere);
    };

    animationFrameId.current = requestAnimationFrame(updateSphere);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [spherePoints, radius, hoveredSkillIndex, activeCategory]);

  // 4. Mouse interaction with container
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    isMouseOver.current = true;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxSpeed = 0.012;
    const targetSpeedX = -(mouseY / (rect.height / 2)) * maxSpeed;
    const targetSpeedY = (mouseX / (rect.width / 2)) * maxSpeed;

    speedX.current += (targetSpeedX - speedX.current) * 0.15;
    speedY.current += (targetSpeedY - speedY.current) * 0.15;
  };

  const handleMouseLeave = () => {
    isMouseOver.current = false;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Group skills by category for display below
  const categorizedSkills = useMemo(() => {
    return allSkills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill.name);
      return acc;
    }, {});
  }, []);

  return (
    <section className="relative py-20 px-4 overflow-hidden" id="skills">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Skills & Tech
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            3D Brand Sphere: Hover to highlight and slow down, move your cursor to spin the sphere.
          </p>
        </motion.div>

        {/* 3D Sphere Container */}
        <motion.div
          ref={containerRef}
          className="relative h-[360px] sm:h-[450px] md:h-[500px] w-full max-w-4xl mx-auto mb-16 rounded-2xl bg-gradient-to-br from-purple-900/5 to-cyan-900/5 border border-purple-500/10 backdrop-blur-sm overflow-hidden flex items-center justify-center cursor-pointer shadow-2xl shadow-purple-500/5"
          variants={itemVariants}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Subtle Glow background effect */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.06)_0%,transparent_65%)]" />

          {/* Render actual skill icon nodes */}
          <div className="relative w-full h-full flex items-center justify-center">
            {spherePoints.map((point, index) => (
              <div
                key={point.skill.name}
                ref={(el) => (skillRefs.current[index] = el)}
                className="absolute left-1/2 top-1/2 select-none"
                style={{
                  willChange: 'transform, opacity',
                  transition: 'filter 0.3s ease, opacity 0.3s ease',
                }}
                onMouseEnter={() => {
                  setHoveredSkillIndex(index);
                  speedX.current *= 0.15;
                  speedY.current *= 0.15;
                }}
                onMouseLeave={() => {
                  setHoveredSkillIndex(null);
                }}
              >
                {/* Brand Icon wrapper */}
                <div
                  className="relative flex items-center justify-center p-2 rounded-xl transition-all duration-300"
                  style={{
                    color: getBrandColor(point.skill),
                    filter: hoveredSkillIndex === index 
                      ? `drop-shadow(0 0 15px ${getBrandColor(point.skill)})` 
                      : 'none',
                    transform: hoveredSkillIndex === index ? 'scale(1.2)' : 'scale(1)',
                  }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl flex items-center justify-center">
                    {getSkillIcon(point.skill.name)}
                  </div>

                  {/* Tooltip above the hovered icon */}
                  {hoveredSkillIndex === index && (
                    <div 
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg text-[11px] font-bold text-white whitespace-nowrap shadow-xl border border-purple-500/20"
                      style={{
                        background: 'rgba(15, 23, 42, 0.95)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {point.skill.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Center core light emitter or active skill name */}
          <div className="absolute pointer-events-none flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {hoveredSkillIndex !== null ? (
                <motion.div
                  key="hovered-text"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 uppercase tracking-widest text-center"
                >
                  {allSkills[hoveredSkillIndex].name}
                </motion.div>
              ) : (
                <motion.div
                  key="core-dot"
                  className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-30 blur-lg"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Interactive Categories Highlight Panel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categorizedSkills).map(([category, skills]) => {
            const isSpotlight = activeCategory === category;
            return (
              <motion.div
                key={category}
                variants={itemVariants}
                className={`p-6 rounded-xl bg-gradient-to-br border transition-all duration-300 cursor-pointer ${
                  isSpotlight
                    ? 'from-purple-900/25 to-cyan-900/25 border-purple-500/50 shadow-lg shadow-purple-500/10'
                    : 'from-purple-900/10 to-cyan-900/10 border-purple-500/15 hover:border-purple-500/35'
                }`}
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <h3 className="text-purple-400 font-semibold mb-4 capitalize flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-[10px] sm:text-xs text-purple-300 hover:border-purple-400/50 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default FloatingSkillsCloud;
