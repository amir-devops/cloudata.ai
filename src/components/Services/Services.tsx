import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Brain, Zap, Code } from 'lucide-react'
import './Services.css'

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const services = [
    {
      icon: Brain,
      title: "AI Frameworks",
      description: "Implementing NVIDIA's NeMo for natural language processing and Riva for speech applications.",
      color: "#e24c4a",
      number: "01"
    },
    {
      icon: Zap,
      title: "CyberFuse",
      description: "Cloudata.ai is currently part of building CyberFuse, a revolutionary multi-modal GenAI to aggregate several cybersecurity data sources in one single pane of glass, with multi-modal AI agents and hyperscaling data processing techniques.",
      color: "#386bb7",
      number: "02"
    },
    {
      icon: Code,
      title: "Developer Support",
      description: "Providing resources and guidance to foster a thriving technical community.",
      color: "#2ecc71",
      number: "03"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="services" className="services-modern" ref={ref}>
      {/* Abstract Wave Shape */}
      <div className="services-abstract-shape">
        <svg width="400" height="600" viewBox="0 0 400 600" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e5e5e5" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#e5e5e5" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#e5e5e5" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          {/* Main wave shape */}
          <path 
            d="M0 100 Q100 80 200 120 Q300 160 400 100 L400 600 L0 600 Z" 
            fill="url(#waveGradient)"
            opacity="0.6"
          />
          {/* Parallel lines */}
          {Array.from({ length: 40 }, (_, i) => (
            <path
              key={i}
              d={`M0 ${100 + i * 8} Q100 ${80 + i * 8} 200 ${120 + i * 8} Q300 ${160 + i * 8} 400 ${100 + i * 8}`}
              stroke="#e5e5e5"
              strokeWidth="1"
              fill="none"
              opacity={0.3 - (i * 0.005)}
            />
          ))}
          {/* Additional curved lines for depth */}
          {Array.from({ length: 20 }, (_, i) => (
            <path
              key={`curve-${i}`}
              d={`M0 ${150 + i * 12} Q150 ${130 + i * 12} 300 ${170 + i * 12} Q350 ${190 + i * 12} 400 ${170 + i * 12}`}
              stroke="#e5e5e5"
              strokeWidth="0.5"
              fill="none"
              opacity={0.2 - (i * 0.008)}
            />
          ))}
        </svg>
      </div>

      <div className="services-modern-container">
        <div className="services-modern-content">
          <motion.div 
            className="services-modern-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-path-modern">/ services /</div>
            <h2 className="services-modern-title">
              Advanced AI Solutions for Modern Businesses
            </h2>
          </motion.div>

          <motion.div 
            className="services-modern-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div 
                  key={index}
                  className="service-modern-card"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  style={{ '--service-color': service.color } as React.CSSProperties}
                >
                  <div className="service-modern-icon">
                    <div className="service-icon-wrapper">
                      <IconComponent size={28} />
                    </div>
                    <div className="service-icon-glow"></div>
                  </div>
                  
                  <div className="service-modern-content">
                    <div className="service-content-header">
                      <h3 className="service-modern-title">{service.title}</h3>
                      <button className="service-modern-link">
                        <ArrowRight size={16} />
                        <span>Learn more</span>
                      </button>
                    </div>
                    <p className="service-modern-description">{service.description}</p>
                  </div>
                  
                  <div className="service-modern-number">
                    {service.number}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div 
            className="services-modern-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="btn-modern btn-primary-modern">
              <span>Get Started with AI</span>
              <ArrowRight className="btn-icon-modern" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services 