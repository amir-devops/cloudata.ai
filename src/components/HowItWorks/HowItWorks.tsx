import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Neurons and Layers",
      description: "A neural network consists of interconnected nodes called neurons. Neurons are organized into layers.",
      icon: "🧠",
      color: "#e24c4a"
    },
    {
      number: "02", 
      title: "Activation Function",
      description: "Each neuron applies an activation function to the weighted sum of its inputs and produces an output",
      icon: "⚡",
      color: "#386bb7"
    },
    {
      number: "03",
      title: "Feedforward Process", 
      description: "The inputs are multiplied by their respective weights, summed up, and passed through the activation function.",
      icon: "🔄",
      color: "#2ecc71"
    }
  ];

  return (
    <section className="how-it-works-modern">
      <div className="how-it-works-modern-container">
        <div className="how-it-works-modern-content">
          <div className="section-path-modern">/ how it works /</div>
          
          <h2 className="how-it-works-modern-title">
            Neural networks are a fundamental component of Artificial Intelligence (AI) systems
          </h2>

          <div className="steps-modern-container">
            <div className="steps-modern-track">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="step-modern-item"
                  style={{ '--step-color': step.color } as React.CSSProperties}
                >
                  <div className="step-modern-number">
                    <span className="step-number-text">{step.number}</span>
                    <div className="step-number-ring"></div>
                  </div>
                  
                  <div className="step-modern-icon">
                    <span className="step-icon-emoji">{step.icon}</span>
                    <div className="step-icon-glow"></div>
                  </div>
                  
                  <div className="step-modern-content">
                    <h3 className="step-modern-title">{step.title}</h3>
                    <p className="step-modern-description">{step.description}</p>
                  </div>
                  
                  <div className="step-modern-progress">
                    <div className="progress-line"></div>
                    <div className="progress-dot"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Big Moving Animation Shapes */}
            <div className="how-it-works-shapes">
              {/* Large Rotating Neural Network */}
              <motion.div 
                className="how-it-works-shape shape-neural-large"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                  y: [0, -20, 0]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear",
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
                  <defs>
                    <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e24c4a"/>
                      <stop offset="50%" stopColor="#386bb7"/>
                      <stop offset="100%" stopColor="#2ecc71"/>
                    </linearGradient>
                    <filter id="neuralGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Outer Ring */}
                  <circle cx="150" cy="150" r="120" stroke="url(#neuralGradient)" strokeWidth="3" fill="none" opacity="0.6" filter="url(#neuralGlow)"/>
                  
                  {/* Inner Ring */}
                  <circle cx="150" cy="150" r="80" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
                  
                  {/* Center Circle */}
                  <circle cx="150" cy="150" r="40" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
                  
                  {/* Connection Lines */}
                  <line x1="150" y1="30" x2="150" y2="270" stroke="url(#neuralGradient)" strokeWidth="2" opacity="0.3"/>
                  <line x1="30" y1="150" x2="270" y2="150" stroke="url(#neuralGradient)" strokeWidth="2" opacity="0.3"/>
                  <line x1="60" y1="60" x2="240" y2="240" stroke="url(#neuralGradient)" strokeWidth="2" opacity="0.3"/>
                  <line x1="240" y1="60" x2="60" y2="240" stroke="url(#neuralGradient)" strokeWidth="2" opacity="0.3"/>
                  
                  {/* Nodes */}
                  <circle cx="150" cy="30" r="8" fill="url(#neuralGradient)" opacity="0.9"/>
                  <circle cx="150" cy="270" r="8" fill="url(#neuralGradient)" opacity="0.9"/>
                  <circle cx="30" cy="150" r="8" fill="url(#neuralGradient)" opacity="0.9"/>
                  <circle cx="270" cy="150" r="8" fill="url(#neuralGradient)" opacity="0.9"/>
                  <circle cx="60" cy="60" r="8" fill="url(#neuralGradient)" opacity="0.9"/>
                  <circle cx="240" cy="240" r="8" fill="url(#neuralGradient)" opacity="0.9"/>
                  <circle cx="240" cy="60" r="8" fill="url(#neuralGradient)" opacity="0.9"/>
                  <circle cx="60" cy="240" r="8" fill="url(#neuralGradient)" opacity="0.9"/>
                  <circle cx="150" cy="150" r="12" fill="url(#neuralGradient)" opacity="0.9"/>
                </svg>
              </motion.div>

              {/* Floating Data Particles */}
              <motion.div 
                className="how-it-works-shape shape-data-particles"
                animate={{ 
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <defs>
                    <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2ecc71"/>
                      <stop offset="100%" stopColor="#f39c12"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Data Particles */}
                  <circle cx="50" cy="50" r="6" fill="url(#particleGradient)" opacity="0.8"/>
                  <circle cx="150" cy="50" r="6" fill="url(#particleGradient)" opacity="0.8"/>
                  <circle cx="100" cy="100" r="6" fill="url(#particleGradient)" opacity="0.8"/>
                  <circle cx="50" cy="150" r="6" fill="url(#particleGradient)" opacity="0.8"/>
                  <circle cx="150" cy="150" r="6" fill="url(#particleGradient)" opacity="0.8"/>
                  
                  {/* Connection Lines */}
                  <path d="M50 50 Q75 75 100 100" stroke="url(#particleGradient)" strokeWidth="2" opacity="0.4" fill="none"/>
                  <path d="M150 50 Q125 75 100 100" stroke="url(#particleGradient)" strokeWidth="2" opacity="0.4" fill="none"/>
                  <path d="M100 100 Q75 125 50 150" stroke="url(#particleGradient)" strokeWidth="2" opacity="0.4" fill="none"/>
                  <path d="M100 100 Q125 125 150 150" stroke="url(#particleGradient)" strokeWidth="2" opacity="0.4" fill="none"/>
                </svg>
              </motion.div>

              {/* Pulsing Circuit Board */}
              <motion.div 
                className="how-it-works-shape shape-circuit-board"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
                  <defs>
                    <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#386bb7"/>
                      <stop offset="100%" stopColor="#9b59b6"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Circuit Board Outline */}
                  <rect x="25" y="25" width="200" height="200" stroke="url(#circuitGradient)" strokeWidth="3" fill="none" opacity="0.7" rx="15"/>
                  
                  {/* Circuit Lines */}
                  <line x1="25" y1="125" x2="225" y2="125" stroke="url(#circuitGradient)" strokeWidth="2" opacity="0.5"/>
                  <line x1="125" y1="25" x2="125" y2="225" stroke="url(#circuitGradient)" strokeWidth="2" opacity="0.5"/>
                  <line x1="50" y1="50" x2="200" y2="200" stroke="url(#circuitGradient)" strokeWidth="2" opacity="0.5"/>
                  <line x1="200" y1="50" x2="50" y2="200" stroke="url(#circuitGradient)" strokeWidth="2" opacity="0.5"/>
                  
                  {/* Circuit Nodes */}
                  <circle cx="125" cy="125" r="15" stroke="url(#circuitGradient)" strokeWidth="3" fill="none" opacity="0.8"/>
                  <circle cx="125" cy="125" r="8" fill="url(#circuitGradient)" opacity="0.9"/>
                  <circle cx="75" cy="75" r="6" fill="url(#circuitGradient)" opacity="0.7"/>
                  <circle cx="175" cy="175" r="6" fill="url(#circuitGradient)" opacity="0.7"/>
                  <circle cx="175" cy="75" r="6" fill="url(#circuitGradient)" opacity="0.7"/>
                  <circle cx="75" cy="175" r="6" fill="url(#circuitGradient)" opacity="0.7"/>
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 