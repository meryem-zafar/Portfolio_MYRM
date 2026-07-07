import React from 'react';
import { motion } from 'framer-motion';
import './MyWork.css';
import mywork_Data from '../../assets/mywork_data';

const MyWork = () => {
  return (
    <section className="mywork" id="work">
      <div className="mywork-title">
        <span className="about-eyebrow">Featured Projects</span>
        <h1>A selection of polished builds and experiments.</h1>
      </div>

      <div className="mywork-container">
        {mywork_Data.map((work, index) => (
          <motion.article
            className="work-card"
            key={work.w_name + index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <img src={work.w_img} alt={work.w_name} />
            <div className="work-card-content">
              <div className="work-card-top">
                <h3>{work.w_name}</h3>
                <span>Featured</span>
              </div>
              <p>{work.w_desc}</p>
              <div className="work-techs">
                {work.w_tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="work-actions">
                <a href={work.w_github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={work.w_live} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <a className="mywork-showmore" href="https://github.com/meryem-zafar" target="_blank" rel="noreferrer">
        Explore more on GitHub
      </a>
    </section>
  );
};

export default MyWork;
