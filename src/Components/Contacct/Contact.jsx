import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaCalendarAlt, FaGithub, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import { portfolioOwner } from '../../assets/portfolio_data';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Clear success notification after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden" id="contact">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Get In</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to explore opportunities? Send a message below!
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Card (8 grid cols) */}
          <motion.div 
            className="lg:col-span-8 p-6 md:p-10 rounded-2xl bg-gradient-to-b from-[#11142d]/30 to-[#090b1c]/70 border border-purple-500/15 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            {/* Form Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-gray-400 text-sm">Fill out the form below and I will get back to you shortly.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#141733]/50 border border-purple-500/15 focus:border-purple-500/50 focus:outline-none text-white text-sm transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#141733]/50 border border-purple-500/15 focus:border-purple-500/50 focus:outline-none text-white text-sm transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number *</label>
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#141733]/50 border border-purple-500/15 focus:border-purple-500/50 focus:outline-none text-white text-sm transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Discussion"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#141733]/50 border border-purple-500/15 focus:border-purple-500/50 focus:outline-none text-white text-sm transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 3: Message Textarea */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Tell me more about your project *</label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#141733]/50 border border-purple-500/15 focus:border-purple-500/50 focus:outline-none text-white text-sm transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-lg hover:shadow-purple-500/40 text-white font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Submit <FaPaperPlane className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                {/* Success alert message */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-emerald-400 font-semibold text-sm"
                    >
                      ✓ Message sent successfully!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </motion.div>

          {/* Right Column: Info Panel Stack (4 grid cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            
            {/* Box 1: Email */}
            <motion.div 
              className="p-5 rounded-2xl bg-gradient-to-b from-[#11142d]/30 to-[#090b1c]/70 border border-purple-500/15 flex items-center gap-4 hover:border-purple-500/35 transition-colors duration-250"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full border border-purple-500/40 flex items-center justify-center bg-purple-500/10 text-purple-400">
                <FaEnvelope className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Email</span>
                <a href={`mailto:${portfolioOwner.email}`} className="text-white hover:text-purple-400 text-sm font-semibold transition-colors mt-0.5 break-all">
                  {portfolioOwner.email}
                </a>
              </div>
            </motion.div>

            {/* Box 2: Schedule */}
            <motion.div 
              className="p-5 rounded-2xl bg-gradient-to-b from-[#11142d]/30 to-[#090b1c]/70 border border-purple-500/15 flex flex-col gap-4 hover:border-purple-500/35 transition-colors duration-250"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-purple-500/40 flex items-center justify-center bg-purple-500/10 text-cyan-400">
                  <FaCalendarAlt className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Schedule</span>
                  <span className="text-white text-sm font-semibold mt-0.5">Book a Call</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 text-left leading-relaxed">
                Free 30-min consultation to discuss your project requirements, tech stack, and goals.
              </p>
              <a
                href={portfolioOwner.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/70 text-xs font-semibold text-center transition-all duration-250 flex items-center justify-center gap-2 cursor-pointer"
              >
                Schedule a Call
              </a>
            </motion.div>

            {/* Box 3: Socials */}
            <motion.div 
              className="p-5 rounded-2xl bg-gradient-to-b from-[#11142d]/30 to-[#090b1c]/70 border border-purple-500/15 flex flex-col gap-4 hover:border-purple-500/35 transition-colors duration-250"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.14 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-purple-500/40 flex items-center justify-center bg-purple-500/10 text-purple-400">
                  <FaEnvelope className="w-4 h-4" style={{ display: 'none' }} />
                  <span className="text-xs font-extrabold">&lt;/&gt;</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Socials</span>
                  <span className="text-white text-sm font-semibold mt-0.5">Connect with me</span>
                </div>
              </div>
              
              {/* Circular Social Buttons */}
              <div className="flex gap-3">
                <a
                  href={portfolioOwner.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-purple-500/20 bg-purple-500/5 hover:border-purple-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-250 hover:shadow-md hover:shadow-purple-500/20"
                >
                  <FaGithub className="w-4.5 h-4.5" />
                </a>
                <a
                  href={portfolioOwner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-purple-500/20 bg-purple-500/5 hover:border-purple-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-250 hover:shadow-md hover:shadow-purple-500/20"
                >
                  <FaLinkedin className="w-4.5 h-4.5" />
                </a>
                <a
                  href={portfolioOwner.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-purple-500/20 bg-purple-500/5 hover:border-purple-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-250 hover:shadow-md hover:shadow-purple-500/20"
                >
                  <FaWhatsapp className="w-4.5 h-4.5" />
                </a>
              </div>
            </motion.div>

            {/* Box 4: Location */}
            <motion.div 
              className="p-5 rounded-2xl bg-gradient-to-b from-[#11142d]/30 to-[#090b1c]/70 border border-purple-500/15 flex items-center gap-4 hover:border-purple-500/35 transition-colors duration-250"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-10 h-10 rounded-full border border-purple-500/40 flex items-center justify-center bg-purple-500/10 text-cyan-400">
                <FaMapMarkerAlt className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Location</span>
                <span className="text-white text-sm font-semibold mt-0.5">Remote Worldwide</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
