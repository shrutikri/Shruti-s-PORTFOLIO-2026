import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            Shruti Kumari
          </div>
          <div className="footer-socials">
            <a href="https://github.com/shrutikri" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shruti-k-674967a1/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://leetcode.com/u/shruti_kri01/" target="_blank" rel="noopener noreferrer">
              <Code2 size={20} />
            </a>
            <a href="mailto:shrutiii.kumari01@gmail.com">
              <Mail size={20} />
            </a>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Designed & Built by Shruti Kumari
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
