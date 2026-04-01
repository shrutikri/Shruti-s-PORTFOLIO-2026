import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Software Engineer II",
    company: "FIS Global India Pvt. Ltd.",
    location: "Bengaluru, Karnataka",
    period: "Sept 2023 – Present",
    project: "Project: Modern Banking Platform (MBP)",
    highlights: [
      "Designed and maintained microservices-based backend using Java and Spring Boot handling 10,000+ daily transactions across loan payoff, deposits, and real-time balance updates serving 500,000+ active customers",
      "Designed fault-tolerant APIs with retry mechanisms and circuit breakers ensuring 99.9% uptime for critical banking operations, reducing service disruptions by 65%",
      "Implemented asynchronous event-driven architecture to resolve service-event sync conflicts, ensuring eventual consistency across 15+ distributed microservices",
      "Identified and resolved database bottlenecks by optimizing SQL queries and implementing connection pooling, improving throughput from 500 to 2,000 statements/hour (300% improvement)"
    ]
  },
  {
    id: 2,
    role: "IT Trainee",
    company: "FIS Global India Pvt. Ltd.",
    location: "Bengaluru, Karnataka",
    period: "Sept 2023 – Dec 2023",
    project: "",
    highlights: [
      "Completed intensive 3-month full-stack training with hands-on project implementation",
      "Built banking application simulating real-world operations using Java, Spring Boot, and H2 database",
      "Gained domain expertise in US Banking regulations and Core Banking operations"
    ]
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    company: "HighRadius",
    location: "Remote",
    period: "Jan 2022 – April 2022",
    project: "AI-Enabled Fintech B2B Invoice Management Platform",
    highlights: [
      "Developed full-stack B2B invoice management application processing 10,000+ invoices/month using ReactJS, Java Servlets, and MySQL, reducing manual processing time by 40%",
      "Integrated machine learning prediction models (Random Forest) to auto-populate invoice fields with 85% accuracy",
      "Built responsive data grids with real-time search, sorting, pagination, and filtering, improving UI performance by 50% for 50,000+ record datasets",
      "Designed client-server communication layer with comprehensive error handling and retry logic, ensuring data consistency across 5+ modules"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              className="timeline-item" 
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
              <div className="timeline-content glass-panel">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">{exp.company} &bull; <span>{exp.location}</span></div>
                    {exp.project && <div className="exp-project">{exp.project}</div>}
                  </div>
                  <div className="exp-period">{exp.period}</div>
                </div>
                <ul className="exp-highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
