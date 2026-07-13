import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaSearch, FaFilter, FaChartLine, FaLightbulb, FaTools } from 'react-icons/fa';
import mywork_data from '../../assets/mywork_data';

// Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  const [localProject, setLocalProject] = useState(null);

  React.useEffect(() => {
    if (project) {
      setLocalProject(project);
    }
  }, [project]);

  const displayProject = project || localProject;
  if (!displayProject) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/85 z-50 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ backdropFilter: 'blur(12px)' }}
          />

          {/* Modal Container */}
          <div 
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-y-auto cursor-pointer"
            onClick={onClose}
          >
            {/* Modal Box */}
            <motion.div
              className="relative bg-gradient-to-b from-[#0e1227] to-[#070916] rounded-2xl border border-purple-500/25 max-w-3xl w-full p-6 md:p-10 pointer-events-auto my-8 shadow-2xl shadow-purple-500/10 cursor-default"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking modal contents
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-400/20 text-xs text-purple-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {displayProject.w_category} Case Study
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                {displayProject.w_name}
              </h2>

              {/* Long Description */}
              <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                {displayProject.w_description_long}
              </p>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/10">
                  <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <FaLightbulb className="w-4 h-4" /> The Challenge
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {displayProject.w_challenge}
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <FaChartLine className="w-4 h-4" /> The Solution
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {displayProject.w_solution}
                  </p>
                </div>
              </div>

              {/* Client / Performance Metrics */}
              {displayProject.w_metrics && (
                <div className="mb-8">
                  <h3 className="text-white font-semibold mb-4 text-sm sm:text-base flex items-center gap-2">
                    <FaChartLine className="text-cyan-400" /> Key Impact & Metrics
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {displayProject.w_metrics.map((metric, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#141733]/50 border border-purple-500/10 text-center">
                        <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                          {metric.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-3 text-sm sm:text-base flex items-center gap-2">
                  <FaTools className="text-purple-400" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {displayProject.w_tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-purple-400/20 text-xs text-purple-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2 border-t border-purple-500/10">
                <a
                  href={displayProject.w_github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm sm:text-base"
                >
                  <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                  GitHub Repository
                </a>
                {displayProject.w_live && (
                  <a
                    href={displayProject.w_live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg border border-purple-500/40 text-white font-semibold hover:bg-purple-500/10 hover:border-purple-500/75 transition-all duration-300 text-sm sm:text-base"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Live Deployment
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

// Project Card Component
const ProjectCard = ({ project, onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative h-96 rounded-xl overflow-hidden cursor-pointer flex flex-col bg-gradient-to-b from-[#11142d]/30 to-[#090b1c]/70 border border-purple-500/15 hover:border-purple-500/40 transition-all duration-300 shadow-xl"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      onClick={() => onOpen(project)}
      layout
    >
      {/* Background Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Decorative Glow */}
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 blur-lg transition-all duration-300 pointer-events-none" />

      {/* Card Content Wrapper */}
      <div className="relative h-full flex flex-col justify-between p-6 z-10">
        
        {/* Top Section */}
        <div>
          {/* Card Header Tag & Category */}
          <div className="flex justify-between items-center mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-[10px] text-purple-300 uppercase tracking-wider font-semibold">
              {project.w_category}
            </span>
            <FaExternalLinkAlt className="text-gray-500 group-hover:text-purple-400 transition-colors w-3.5 h-3.5" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-1">
            {project.w_name}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
            {project.w_desc}
          </p>
        </div>

        {/* Middle Section: Quick Metrics Display */}
        {project.w_metrics && (
          <div className="py-3 my-1 border-y border-purple-500/10 grid grid-cols-3 gap-2 text-center bg-purple-500/5 rounded-lg">
            {project.w_metrics.slice(0, 3).map((metric, idx) => (
              <div key={idx} className="flex flex-col justify-center">
                <span className="text-[13px] font-extrabold text-cyan-400">
                  {metric.value}
                </span>
                <span className="text-[9px] text-gray-500 uppercase tracking-tight">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Section */}
        <div>
          {/* Tech stack labels (Limit to 3) */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.w_tech.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] bg-purple-600/10 text-purple-300 border border-purple-400/10"
              >
                {tech}
              </span>
            ))}
            {project.w_tech.length > 3 && (
              <span className="px-2 py-0.5 rounded text-[10px] text-gray-500 border border-transparent">
                +{project.w_tech.length - 3} more
              </span>
            )}
          </div>

          {/* Card Button Actions */}
          <div className="flex gap-2">
            <a
              href={project.w_github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 py-2 rounded-lg bg-[#181a38] text-white border border-purple-500/20 text-xs font-semibold text-center hover:bg-purple-500/15 hover:border-purple-500/40 transition-all duration-300"
            >
              GitHub
            </a>
            <button
              className="flex-1 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-semibold text-center hover:shadow-md hover:shadow-purple-500/30 transition-all duration-300"
            >
              Case Study
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

// Main Projects Section
const PremiumProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI', 'Web', 'Mobile'];

  // Handle Project Filtering
  const filteredProjects = mywork_data.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.w_category === activeFilter;
    const matchesSearch =
      project.w_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.w_desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.w_tech.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="work" className="relative py-20 px-4 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated collection of systems I have engineered, spanning Artificial Intelligence, mobile apps, and robust web environments.
          </p>
        </motion.div>

        {/* Filter and Search Bar Container */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 w-full max-w-4xl mx-auto p-4 rounded-2xl bg-[#0e1227]/40 border border-purple-500/10 backdrop-blur-md"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {/* Selected Pill Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs flex items-center">
            <span className="absolute left-3 text-gray-500">
              <FaSearch className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search project or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm text-white rounded-lg bg-[#141733]/50 border border-purple-500/20 focus:border-purple-500/60 focus:outline-none transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-gray-500 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        {/* Projects Grid with Framer Motion AnimatePresence Layout updates */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.w_no}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  onOpen={setSelectedProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-500 text-lg mb-2">No projects found</div>
            <div className="text-gray-600 text-sm">
              Try adjusting your category filter or search keywords.
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Case Study Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default PremiumProjects;
