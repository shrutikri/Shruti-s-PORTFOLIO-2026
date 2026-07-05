import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles } from 'lucide-react';
import Fuse from 'fuse.js';
import './AIAssistant.css';

// Pre-defined knowledge base
const qaData = [
  {
    q: "What is your main programming language?",
    a: "My core programming languages are Java, JavaScript, Python, SQL, and C++. I have deep expertise in Java and Spring Boot for building backend services.",
    keywords: "programming language languages java python js javascript main core stack tech"
  },
  {
    q: "Where do you currently work?",
    a: "I work as a Software Engineer II at FIS Global in Bengaluru. I have been with FIS Global for 2.8+ years (since September 2023), progressing from IT Trainee to Software Engineer I and now Software Engineer II.",
    keywords: "work experience current job company fis global role position employment career"
  },
  {
    q: "Tell me about your FIS projects and achievements.",
    a: "At FIS Global, I work on the Modern Banking Platform, a distributed system serving 150K+ accounts and 50K+ daily transactions at under 200ms latency. I implemented Kafka-based messaging, optimized SQL queries from 8s to 1.2s (a 6.7x improvement), introduced Redis caching to reduce database load by 50%, and automated reconciliation pipelines eliminating 60% of manual effort.",
    keywords: "performance scalable optimization speed throughput bottleneck database sql fis global banking projects achievements work"
  },
  {
    q: "What frontend technologies do you know?",
    a: "I have hands-on experience with React, Angular, HTML5, and CSS3. At FIS Global, I developed Angular-based customer dashboard components for transaction tracking and account management.",
    keywords: "frontend ui web react reactjs angular css html design interface"
  },
  {
    q: "Are you good at algorithms and data structures?",
    a: "Yes! I have solved 400+ problems on LeetCode. I have strong problem-solving skills, particularly in Graphs, Dynamic Programming, Trees, Sliding Window, and Binary Search.",
    keywords: "dsa algorithm algorithms data structures leetcode leet code problem solving competitive coding graph tree"
  },
  {
    q: "Do you have experience with microservices?",
    a: "Absolutely. I design and deliver scalable microservices using Java/Spring Boot and Kafka. I have worked on async event-driven systems, implemented patterns like Saga and Circuit Breaker, and migrated monolithic modules to independent services.",
    keywords: "microservices architecture micro service event driven distributed system backend"
  },
  {
    q: "What projects have you built?",
    a: "My key projects include a Distributed Rate Limiter (token bucket/sliding window, handling 10K+ req/sec on AWS EC2), a fully designed Banking System (using Saga, Circuit Breaker, PostgreSQL sharding), and a Vehicle Parking Management mobile app in Flutter with optical plate recognition and Firebase.",
    keywords: "projects rate limiter banking system vehicle parking url shortener simulator"
  },
  {
    q: "How can I contact Shruti?",
    a: "You can email Shruti at shrutiii.kumari01@gmail.com, or reach out on her LinkedIn profile found in the Navbar!",
    keywords: "contact email phone reach linkedin hire message phone number"
  },
  {
    q: "What is your current CTC?",
    a: "My current CTC is 12 LPA. I am aiming for senior engineering roles at top product companies.",
    keywords: "ctc salary compensation package pay expected current lpa remuneration money offer"
  }
];

// Configure Fuse for fuzzy matching
const fuse = new Fuse(qaData, {
  keys: [
    { name: 'keywords', weight: 2 },
    { name: 'q', weight: 1 },
    { name: 'a', weight: 0.5 }
  ],
  threshold: 0.6,
  ignoreLocation: true,
  minMatchCharLength: 2,
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
      const lowerInput = userMsg.toLowerCase();
      let botResponse = "I'm not exactly sure about that. Try asking about her Java experience, work at FIS Global, frontend skills, CTC, or LeetCode achievements!";
      
      // 1. First try direct exact keyword matching for very high accuracy on short words
      const exactMatch = qaData.find(item => 
        item.keywords.split(' ').some(kw => lowerInput.includes(kw))
      );
      
      if (exactMatch) {
        botResponse = exactMatch.a;
      } else {
        // 2. Fallback to fuzzy search for complex sentences
        const results = fuse.search(userMsg);
        if (results.length > 0) {
          botResponse = results[0].item.a;
        }
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
