import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import './Services.css'

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const services = [
    {
      title: "AI Frameworks",
      description: "Implementing NVIDIA's NeMo for natural language processing and Riva for speech applications.",
      color: "#386bb7"
    },
    {
      title: "CyberFuse",
      description: "Cloudata.ai is currently part of building CyberFuse, a revolutionary multi-modal GenAI to aggregate several cybersecurity data sources in one single pane of glass, with multi-modal AI agents and hyperscaling data processing techniques.",
      color: "#e24c4a"
    },
    {
      title: "Developer Support",
      description: "Providing resources and guidance to foster a thriving technical community.",
      color: "#2ecc71"
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
    <section id="services" className="services-new" ref={ref}>
      <div className="services-new-container">
        <div className="services-new-content">
          {/* Left Column - Heading */}
          <motion.div 
            className="services-left-column"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="services-breadcrumb">/ services /</div>
            <h2 className="services-main-title">
              <span>Empowering business</span>
              <span>transformation with</span>
              <span>Neural Network</span>
              <span>solutions</span>
            </h2>
            <button className="explore-more-btn main-btn">Explore more</button>
          </motion.div>

          {/* Right Column - Services List */}
          <motion.div 
            className="services-right-column"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-item"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Abstract Graphic */}
                <div className="service-graphic">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#386bb7"/>
                        <stop offset="100%" stopColor="#e24c4a"/>
                      </linearGradient>
                    </defs>
                    {/* Twisted loop shape */}
                    <path
                      d="M10 30 Q20 15 30 25 Q40 35 50 20"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 35 Q20 20 30 30 Q40 40 50 25"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 40 Q20 25 30 35 Q40 45 50 30"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 45 Q20 30 30 40 Q40 50 50 35"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Service Content */}
                <div className="service-content">
                  <button className="service-title-link" tabIndex={0}>{service.title}</button>
                  <p className="service-description">{service.description}</p>
                </div>

                {/* Separator Line */}
                {index < services.length - 1 && (
                  <div className="service-separator"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services 