import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Software Engineer II",
    company: "FIS Global India Pvt. Ltd.",
    location: "Bengaluru, Karnataka",
    period: "Jan 2026 – Present",
    project: "Project: Modern Banking Platform (MBP) - Serving 150k+ accounts, 50K+ daily transactions",
    highlights: [
      "Designed and delivered scalable RESTful microservices in Java/Spring Boot for loan processing, balance management, and transaction reconciliation, processing 50K+ daily transactions at under 200ms latency",
      "Implemented Kafka-based event-driven communication between 5+ microservices, improving system throughput by 35% during peak load and ensuring eventual consistency",
      "Reduced critical query execution time from 8s to 1.2s by re-engineering 40+ SQL queries and PL/SQL stored procedures with composite indexing, a 6.7x improvement",
      "Optimized high-traffic read operations using Redis caching, reducing database load by 50% and improving API response times for balance inquiries",
      "Automated reconciliation pipelines to replace manual validation workflows, eliminating 60% of manual effort and significantly reducing SLA breach risk",
      "Developed Angular-based customer dashboard components and created Splunk dashboards for centralized log correlation and distributed tracing"
    ]
  },
  {
    id: 2,
    role: "Software Engineer I",
    company: "FIS Global India Pvt. Ltd.",
    location: "Bengaluru, Karnataka",
    period: "Jan 2025 – Jan 2026",
    project: "Project: Modern Banking Platform (MBP)",
    highlights: [
      "Owned development of 8+ REST API endpoints for transaction history and account management modules, achieving under 150ms p99 latency in load testing",
      "Contributed to migration of monolithic billing module to event-driven microservice, reducing deployment blast radius and enabling independent scaling",
      "Built and maintained core backend modules for deposit, withdrawal, and fund transfer flows using Java and Spring Boot, and resolved 15+ production bugs",
      "Wrote comprehensive integration test suites covering edge cases in fund transfer and reconciliation, improving test coverage from 60% to 80%",
      "Optimized 10+ slow SQL queries causing latency spikes in high-traffic reporting endpoints, improving response times by up to 4x"
    ]
  },
  {
    id: 3,
    role: "IT Trainee",
    company: "FIS Global India Pvt. Ltd.",
    location: "Bengaluru, Karnataka",
    period: "Sep 2023 – Jan 2025",
    project: "",
    highlights: [
      "Completed intensive full-stack bootcamp covering Java, Spring Boot, microservices, React, and REST API design",
      "Delivered a banking simulation app with Spring Security/JWT auth and full Swagger documentation"
    ]
  },
  {
    id: 4,
    role: "Software Engineering Intern",
    company: "HighRadius Pvt. Ltd.",
    location: "Remote",
    period: "Jan 2022 – Apr 2022",
    project: "Project: B2B Invoice Management Platform",
    highlights: [
      "Designed and built a full-stack AI-enabled B2B Invoice Management Platform using ReactJS, Java Servlets, and MySQL, handling 1,000+ invoice records",
      "Integrated an ML-based invoice classification API, boosting processing efficiency by 35% and reducing manual classification overhead",
      "Architected a normalized database schema with optimized SQL queries, achieving under 1.5s page load times across dynamic data tables"
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
