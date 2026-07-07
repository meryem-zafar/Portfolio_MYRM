import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import educationData from '../../assets/education_data';

const EducationSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        className="max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Education &</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Learning
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and continuous professional development
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={item}
              className="group relative p-8 rounded-xl overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 z-0" />

              {/* Border */}
              <div className="absolute inset-0 rounded-xl border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 z-0" />

              {/* Glow Effect on Hover */}
              <motion.div
                className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 z-0"
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white">
                    <FaGraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-400/30 text-xs text-purple-300 font-semibold">
                    {edu.duration || edu.semester || 'Active'}
                  </span>
                </div>

                {/* Degree */}
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>

                {/* Institution */}
                <p className="text-purple-300 font-semibold mb-3">{edu.institution}</p>

                {/* Period */}
                <p className="text-sm text-gray-400 mb-4">{edu.period}</p>

                {/* GPA if available */}
                {edu.gpa && (
                  <p className="text-cyan-400 font-semibold mb-4">GPA: {edu.gpa}</p>
                )}

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

                {/* Highlights */}
                <div className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          variants={item}
          className="p-8 rounded-xl bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Beyond formal education, I'm a self-taught developer who actively learns through:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Online Courses & Tutorials',
              'Open Source Contributions',
              'Technical Documentation',
              'Project-Based Learning',
              'Tech Blogs & Articles',
              'Community Engagement',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
