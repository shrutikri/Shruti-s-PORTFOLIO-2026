import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Layout, Layers } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: "Scalable URL Shortener",
    category: "System Design",
    description: "Designed a highly scalable URL shortening service capable of supporting 1M+ daily requests. Implemented consistent hashing for database sharding and Redis caching to minimize latency on redirection.",
    tags: ["System Design", "Redis", "Hashing", "High Availability"],
    icon: <Code />,
    githubRef: "https://github.com/shrutikri/url-shortener-backend",
    demoRef: "https://url-shortener-frontend-nine-rho.vercel.app/"
  },
  {
    title: "Vehicle Parking Management System",
    category: "Mobile Application",
    description: "Developed a Flutter mobile app for managing parking slots. Integrated an optical recognition API to scan vehicle number plates and utilized Firebase for real-time cloud data storage and push notification alerts.",
    tags: ["Flutter", "Firebase", "Optical Scanner API", "Mobile App"],
    icon: <Layout />,
    githubRef: "https://github.com/shrutikri",
    demoRef: "#"
  },
  {
    title: "Core Banking Simulator",
    category: "Backend Development",
    description: "Built a fully functional banking application simulating real-world operations using Java, Spring Boot, and H2 database. Created during intensive full-stack training, gaining deep domain expertise in Banking regulations.",
    tags: ["Java", "Spring Boot", "H2 Database", "Full Stack"],
    icon: <Layers />,
    githubRef: "https://github.com/shrutikri",
    demoRef: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Selected Projects & Achievements
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card glass-panel"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="project-icon-wrapper">
                {project.icon}
              </div>
              <p className="project-category">{project.category}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.githubRef} className="btn-icon" target="_blank" rel="noopener noreferrer">
                  <Github size={18} /> Source Code
                </a>
                <a href={project.demoRef} className="btn-icon primary" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
