import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ isScrolled }) => {
  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          Shruti<span>.</span>Kumari
        </a>
        
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>

        <div className="nav-socials">
          <a href="https://github.com/shrutikri" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/shruti-k-674967a1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://leetcode.com/u/shruti_kri01/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <Code2 size={20} />
          </a>
          <a href="mailto:shrutiii.kumari01@gmail.com" className="btn btn-primary nav-contact-btn">
            <Mail size={16} /> Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
