import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import mywork_data from '../../assets/mywork_data';

// Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 z-40 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-purple-500/30 max-w-2xl w-full p-8 pointer-events-auto max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {/* Content */}
              <div>
                {/* Category Badge */}
                <div className="inline-block mb-4">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 text-xs text-purple-300">
                    {project.w_category || 'Project'}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-white mb-4">{project.w_name}</h2>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {project.w_description_long || project.w_desc}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-purple-400 font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.w_tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-400/30 text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.w_github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                    View on GitHub
                  </a>
                  {project.w_live && (
                    <a
                      href={project.w_live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg border border-purple-500/50 text-white font-semibold hover:bg-purple-500/10 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Project Card Component
const ProjectCard = ({ project, onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -10 }}
        onClick={() => onOpen(project)}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />

        {/* Border Gradient */}
        <motion.div
          className="absolute inset-0 rounded-xl border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300"
        />

        {/* Glow Effect */}
        <motion.div
          className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6 z-10">
          {/* Header */}
          <div>
            <motion.div
              className="inline-block mb-3"
              animate={{ y: isHovered ? -5 : 0 }}
            >
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 text-xs text-purple-300">
                {project.w_category || 'Project'}
              </span>
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
              {project.w_name}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {project.w_desc}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.w_tech.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 rounded text-xs bg-gradient-to-r from-purple-600/30 to-cyan-600/30 text-purple-300 border border-purple-400/20"
                >
                  {tech}
                </span>
              ))}
              {project.w_tech.length > 3 && (
                <span className="px-2 py-1 rounded text-xs text-gray-400">
                  +{project.w_tech.length - 3} more
                </span>
              )}
            </div>

            {/* Footer */}
            <motion.div
              className="flex gap-3"
              animate={{ y: isHovered ? 5 : 0 }}
            >
              <motion.a
                href={project.w_github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Code
              </motion.a>
              <motion.button
                className="flex-1 px-4 py-2 rounded-lg border border-purple-500/50 text-white text-sm font-semibold hover:bg-purple-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Details
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Main Projects Component
const PremiumProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my best work across AI, Web Development, Flutter, and Game Development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
        >
          {mywork_data.map((project, index) => (
            <motion.div key={project.w_no} variants={item}>
              <ProjectCard
                project={project}
                onOpen={setSelectedProject}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default PremiumProjects;
