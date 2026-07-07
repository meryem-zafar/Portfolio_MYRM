import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <span className="about-eyebrow">Contact</span>
        <h1>Let&apos;s build something exceptional together.</h1>
      </div>

      <div className="connect-section">
        <motion.div className="contact-info-panel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <h2>Available for new opportunities</h2>
          <p>
            I&apos;m currently open to collaborations, internships, and ambitious product ideas that sit at the intersection of AI, design, and engineering.
          </p>

          <a className="contact-detail" href="mailto:riameryem786@gmail.com">
            <FaEnvelope />
            <span>riameryem786@gmail.com</span>
          </a>

          <a className="contact-detail" href="tel:+923024400688">
            <FaPhoneAlt />
            <span>+92 302 4400688</span>
          </a>

          <a className="contact-detail" href="https://github.com/meryem-zafar" target="_blank" rel="noreferrer">
            <FaGithub />
            <span>GitHub: meryem-zafar</span>
          </a>

          <a className="contact-detail" href="#home">
            <FaMapMarkerAlt />
            <span>Based in Pakistan</span>
          </a>
        </motion.div>

        <motion.form className="contact-right" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.08 }} onSubmit={(e) => e.preventDefault()}>
          <label>
            <input type="text" placeholder="Your Name" />
          </label>
          <label>
            <input type="email" placeholder="Your Email" />
          </label>
          <label>
            <textarea rows="8" placeholder="Your Message"></textarea>
          </label>
          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
