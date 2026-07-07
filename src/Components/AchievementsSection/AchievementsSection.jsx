import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaBriefcase, FaLightbulb, FaAward } from 'react-icons/fa';

const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    let startTime;
    const countUp = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(progress * end));
        requestAnimationFrame(countUp);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(countUp);
  }, [end, duration]);

  return count;
};

const AchievementCard = ({ icon: Icon, number, suffix, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="p-6 rounded-xl bg-gradient-to-br from-purple-900/10 to-cyan-900/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-center group"
    >
      {/* Icon */}
      <motion.div
        className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white"
        whileHover={{ scale: 1.1, rotate: 10 }}
      >
        <Icon className="w-8 h-8" />
      </motion.div>

      {/* Counter */}
      <motion.div
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2"
        whileInView={() => ({
          animate: { scale: [1, 1.05, 1] },
        })}
      >
        <AnimatedCounter end={number} />
        {suffix}
      </motion.div>

      {/* Label */}
      <p className="text-gray-300 font-semibold">{label}</p>
    </motion.div>
  );
};

const AchievementsSection = () => {
  const achievements = [
    {
      icon: FaGithub,
      number: 500,
      suffix: '+',
      label: 'GitHub Contributions',
      delay: 0,
    },
    {
      icon: FaBriefcase,
      number: 25,
      suffix: '+',
      label: 'Projects Completed',
      delay: 0.1,
    },
    {
      icon: FaLightbulb,
      number: 40,
      suffix: '+',
      label: 'Technologies Mastered',
      delay: 0.2,
    },
    {
      icon: FaAward,
      number: 15,
      suffix: '+',
      label: 'Courses Completed',
      delay: 0.3,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
              Achievements
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A snapshot of my growth and accomplishments in tech
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={container}
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={item}>
              <AchievementCard {...achievement} />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Achievements */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Languages */}
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-br from-purple-900/10 to-cyan-900/10 border border-purple-500/20"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🌍</span> Languages & Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {['Python', 'JavaScript', 'Dart', 'C++', 'Flutter', 'React', 'Unity', 'Node.js'].map(
                (lang, idx) => (
                  <motion.div
                    key={idx}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-400/30 text-purple-300 text-center text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {lang}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Recognition */}
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-br from-purple-900/10 to-cyan-900/10 border border-purple-500/20"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">⭐</span> Recognition
            </h3>
            <ul className="space-y-3">
              {[
                'Active open-source contributor',
                'Full-stack development expertise',
                'AI systems implementation',
                'Cross-platform mobile development',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-2 text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="text-purple-400 text-lg">→</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
