import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: "Languages & CS Core",
    icon: <Code2 className="skill-icon" />,
    skills: ["Java", "JavaScript", "Python", "SQL", "C++", "OOP", "Design Patterns", "Multithreading", "Data Structures & Algorithms"]
  },
  {
    title: "Backend & System Design",
    icon: <Server className="skill-icon" />,
    skills: ["Spring Boot", "Hibernate", "Microservices", "RESTful APIs", "Kafka", "Node.js", "Distributed Caching", "Rate Limiting", "Event-Driven Architecture", "Database Sharding", "HLD & LLD"]
  },
  {
    title: "Databases & Cloud",
    icon: <Database className="skill-icon" />,
    skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis", "Firebase", "AWS (EC2, S3, Lambda, API Gateway)", "Docker", "CI/CD (Jenkins, Git)"]
  },
  {
    title: "Frontend, Observability & Tools",
    icon: <Cloud className="skill-icon" />,
    skills: ["React", "Angular", "HTML5 & CSS3", "Splunk", "Postman", "Swagger / OpenAPI", "JUnit", "JIRA", "Agile / Scrum"]
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
