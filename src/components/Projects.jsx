import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Layout, Layers } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: "Distributed Rate Limiter",
    category: "System Design & Backend",
    description: "Developed a production-grade distributed rate limiting service using token bucket and sliding window algorithms, deployed on AWS EC2 with Redis as the shared state store. Handles 10K+ requests/sec, dynamic rate limiting rules, and graceful degradation.",
    tags: ["Java", "Spring Boot", "Redis", "Docker", "AWS EC2", "System Design"],
    icon: <Code />,
    githubRef: "https://github.com/shrutikri",
    demoRef: "#"
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
    title: "Banking System - Full System Design",
    category: "System Design & Microservices",
    description: "Created end-to-end HLD and LLD for a distributed banking platform covering account management, payments, fraud detection, and notifications, designed to support 1M+ users (Kafka, Redis, PostgreSQL sharding, Saga, Circuit Breaker).",
    tags: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "AWS", "System Design"],
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
