import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaGraduationCap, FaRocket, FaCode } from 'react-icons/fa';
import './About.css';
import pic from '../../../assets/pic.jpeg';

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['C++', 'Python', 'JavaScript', 'Dart', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Technologies',
    items: ['Flutter', 'React', 'Node.js', 'Firebase', 'REST APIs', 'Git & GitHub'],
  },
  {
    title: 'AI & Machine Learning',
    items: ['Agentic AI', 'LLMs', 'Prompt Engineering', 'AI Chatbots', 'Automation', 'ML Basics'],
  },
];

const stats = [
  { value: '6+', label: 'AI & App Projects' },
  { value: '10+', label: 'Creative Builds' },
  { value: '4+', label: 'Core Tech Stacks' },
  { value: '100%', label: 'Curiosity-Driven Growth' },
];

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div className="about-header" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <span className="about-eyebrow">About Me</span>
        <h1>Building intelligent software with clarity, craft, and purpose.</h1>
        <p>
          I&apos;m a Computer Science student who loves creating AI-driven apps, responsive web experiences, and cross-platform products that feel elegant and useful.
        </p>
      </motion.div>

      <motion.section
        className="about-circle-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="about-circle-badge-solo">
          <span>2</span>
          <small>Years Experience</small>
        </div>

        <div className="about-circle-copy">
          <h3>Hands-on experience in the field</h3>
          <p>
            Currently in my 4th semester of Computer Science with proven expertise in AI, full-stack development, and Flutter apps.
          </p>
          <p>
            Building modern, polished digital experiences with a focus on clean code and user-first design.
          </p>
        </div>
      </motion.section>

      <div className="about-grid-main">
        <motion.div className="about-card about-card-large" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <img src={pic} alt="Maryam Zafar" className="about-avatar" />
          <div>
            <h3>Who I am</h3>
            <p>
              I combine product thinking with technical execution to build modern tools for startups, creators, and curious teams.
            </p>
            <div className="about-badges">
              <span>AI Engineer</span>
              <span>Flutter</span>
              <span>Full Stack</span>
            </div>
          </div>
        </motion.div>

        <motion.div className="about-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="about-card-title">
            <FaBrain />
            <h3>What I focus on</h3>
          </div>
          <ul className="about-list">
            <li>AI-powered experiences and automation</li>
            <li>Flutter applications for iOS and Android</li>
            <li>Responsive front-end architecture</li>
            <li>Creative problem solving with clean code</li>
          </ul>
        </motion.div>
      </div>

      <div className="about-grid">
        <motion.div className="about-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.25 }}>
          <div className="about-card-title">
            <FaGraduationCap />
            <h3>Education</h3>
          </div>
          <ul className="about-list compact">
            <li>B.Sc. Computer Science — currently in 4th semester</li>
            <li>Web Development Course — Arfa Karim Technology Incubator</li>
            <li>Agentic AI Course — University of Management and Technology (UMT)</li>
          </ul>
        </motion.div>

        <motion.div className="about-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <div className="about-card-title">
            <FaRocket />
            <h3>Career goals</h3>
          </div>
          <p className="about-goal">
            My goal is to build scalable AI products and modern digital experiences that push technology toward more intuitive, useful solutions.
          </p>
        </motion.div>

        <motion.div className="about-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.35 }}>
          <div className="about-card-title">
            <FaCode />
            <h3>Core stack</h3>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h4>{group.title}</h4>
                <div className="skill-pills">
                  {group.items.map((skill) => (
                    <span className="skill-pill" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="about-stats">
        {stats.map((stat) => (
          <motion.div className="stat-card" key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
