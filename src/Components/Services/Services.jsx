import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaRobot, FaBrain, FaRocket } from 'react-icons/fa';
import './Services.css';
import Services_Data from '../../assets/services_data';

const iconMap = {
  web: <FaCode />,
  mobile: <FaMobileAlt />,
  ai: <FaRobot />,
  ml: <FaBrain />,
  agentic: <FaRocket />,
};

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-title">
        <span className="about-eyebrow">Services</span>
        <h1>Premium digital solutions for modern builders.</h1>
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => (
          <motion.article
            key={service.s_no}
            className="service-format"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div className="service-icon">{iconMap[service.icon]}</div>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Services;
