import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Code2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background glowing elements */}
      <div className="glow-circle circle-1"></div>
      <div className="glow-circle circle-2"></div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hi there, I'm
          </motion.div>
          
          <motion.h1 
            className="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Shruti Kumari<span>.</span>
          </motion.h1>
          
          <motion.h2 
            className="role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Software Engineer II
          </motion.h2>

          <motion.p 
            className="summary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            I build high-performance distributed systems, scalable backend services, and robust APIs. 
            Currently optimizing banking platforms at FIS Global, managing 10,000+ daily transactions.
          </motion.p>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="mailto:shrutiii.kumari01@gmail.com" className="btn btn-outline">
              Get In Touch
            </a>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <a href="https://github.com/shrutikri" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/shruti-k-674967a1/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://leetcode.com/u/shruti_kri01/" target="_blank" rel="noopener noreferrer">
              <Code2 />
            </a>
            <a href="mailto:shrutiii.kumari01@gmail.com">
              <Mail />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
