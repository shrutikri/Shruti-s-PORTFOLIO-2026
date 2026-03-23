import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: "Languages \u0026 Core",
    icon: <Code2 className="skill-icon" />,
    skills: ["Java", "Python", "JavaScript", "SQL", "C/C++", "Data Structures", "Algorithms"]
  },
  {
    title: "Backend \u0026 Architecture",
    icon: <Server className="skill-icon" />,
    skills: ["Spring Boot", "Hibernate", "Microservices", "REST APIs", "Node.js", "Event-Driven Architecture", "High Availability Design"]
  },
  {
    title: "Databases \u0026 Storage",
    icon: <Database className="skill-icon" />,
    skills: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "PL/SQL", "Query Optimization", "Database Indexing"]
  },
  {
    title: "DevOps \u0026 Tools",
    icon: <Cloud className="skill-icon" />,
    skills: ["Splunk", "JUnit", "Postman", "Git", "JIRA", "CI/CD", "Linux", "Swagger", "ReactJS", "Angular"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Technical Arsenal
        </motion.h2>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category glass-panel"
              variants={itemVariants}
            >
              <div className="category-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
