import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import Fuse from 'fuse.js';
import './AIAssistant.css';

// Pre-defined knowledge base
const qaData = [
  {
    q: "What is your main programming language?",
    a: "My core programming languages are Java, Python, and JavaScript. I am highly proficient in building scalable backends with Java and Spring Boot.",
    keywords: "programming language languages java python js javascript main core"
  },
  {
    q: "Where do you currently work?",
    a: "I currently work as a Software Engineer II at FIS Global in Bengaluru, where I architect and maintain microservices-based backends handling 10,000+ daily transactions.",
    keywords: "work experience current job company fis global role position"
  },
  {
    q: "Tell me about your performance optimization achievements.",
    a: "At FIS Global, I optimized SQL queries and implemented connection pooling, improving throughput by 300%. I also reduced high-frequency API response times by 35% through strategic indexing on 5M+ records.",
    keywords: "performance scalable optimization speed throughput bottleneck database sql"
  },
  {
    q: "What frontend technologies do you know?",
    a: "I have experience with ReactJS, Angular, HTML5, CSS3, Bootstrap, and building responsive, dynamic designs.",
    keywords: "frontend ui web react angular css html design"
  },
  {
    q: "Are you good at algorithms and data structures?",
    a: "Yes! I have solved 250+ problems on LeetCode across Easy, Medium, and Hard difficulty levels. I have strong proficiency in Dynamic Programming, Graphs, Trees, and Two-Pointer strategies.",
    keywords: "dsa algorithm algorithms data structures leetcode problem solving competitive"
  },
  {
    q: "Do you have experience with microservices?",
    a: "Absolutely. I architected a fault-tolerant microservices backend using Event-Driven Architecture ensuring eventual consistency across 15+ distributed services.",
    keywords: "microservices architecture micro service event driven distributed system"
  },
  {
    q: "How can I contact Shruti?",
    a: "You can email Shruti at shrutiii.kumari01@gmail.com, or reach out on her LinkedIn profile found in the Navbar!",
    keywords: "contact email phone reach linkedin hire message"
  }
];

// Configure Fuse for fuzzy matching
const fuse = new Fuse(qaData, {
  keys: ['q', 'keywords'],
  threshold: 0.4,
  includeScore: true
});

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm Shruti's AI Assistant. Ask me anything about her skills, experience, or projects!" }
  ]);
  const [inputStr, setInputStr] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputStr.trim()) return;

    // Add user message
    const userMsg = inputStr.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
    setInputStr('');

    // Simulate AI processing delay
    setTimeout(() => {
      const results = fuse.search(userMsg);
      let botResponse = "I'm not exactly sure about that. Try asking about her Java experience, work at FIS Global, frontend skills, or LeetCode achievements!";
      
      if (results.length > 0) {
        botResponse = results[0].item.a;
      }
      
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 600);
  };

  return (
    <>
      <motion.button 
        className="ai-fab btn-primary"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Sparkles size={20} className="ai-icon" />
        <span className="ai-label">Chat with Resume</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="ai-chat-window glass-panel"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="ai-header">
              <div className="ai-header-title">
                <Sparkles size={18} />
                <h3>Resume AI</h3>
              </div>
              <button className="ai-close-btn" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="ai-body">
              {messages.map((msg, idx) => (
                <div key={idx} className={`ai-message-wrapper ${msg.type}`}>
                  <div className={`ai-message ${msg.type}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form className="ai-footer" onSubmit={handleSend}>
              <input 
                type="text" 
                placeholder="Ask about her skills..." 
                value={inputStr}
                onChange={(e) => setInputStr(e.target.value)}
              />
              <button type="submit" className="ai-send-btn" disabled={!inputStr.trim()}>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
