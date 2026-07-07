import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBrain,
  FaMicrochip,
  FaCode,
  FaMobileAlt,
  FaGamepad,
  FaBook,
} from 'react-icons/fa';
import experienceData from '../../assets/experience_data';

const iconMap = {
  brain: FaBrain,
  cpu: FaMicrochip,
  code: FaCode,
  smartphone: FaMobileAlt,
  gamepad2: FaGamepad,
  book: FaBook,
};

const ExperienceTimeline = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto"
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
              Experience
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Journey through my learning and professional development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-cyan-600 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceData.map((exp) => {
              const IconComponent = iconMap[exp.icon] || FaCode;

              return (
                <motion.div
                  key={exp.id}
                  variants={item}
                  className="relative pl-32"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white z-10"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(139,92,246,0.5)',
                        '0 0 40px rgba(34,211,238,0.8)',
                        '0 0 20px rgba(139,92,246,0.5)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className="p-6 rounded-xl bg-gradient-to-br from-purple-900/10 to-cyan-900/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>

                      <span className="text-sm text-purple-400 font-semibold">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-purple-300 font-semibold mb-2">
                      {exp.organization}
                    </p>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-400/30 text-xs text-purple-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceTimeline;