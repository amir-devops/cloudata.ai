import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, ArrowRight, Sparkles } from 'lucide-react'

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const particleVariants = {
    animate: {
      y: [0, -100],
      opacity: [1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="hero-modern" ref={ref}>
      {/* Animated Background */}
      <div className="hero-bg-modern">
        <div className="hero-bg-image-modern">
          <img 
            src="https://demo.artureanec.com/themes/neuros/wp-content/uploads/2024/01/Ooze-25-6.jpg" 
            alt="Neural Network Background" 
          />
        </div>
        <div className="hero-overlay-modern"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{
              delay: Math.random() * 2,
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Mouse Follow Effect */}
      <motion.div 
        className="mouse-follow"
        style={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <div className="hero-container-modern">
        <motion.div 
          className="hero-content-modern"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Badge */}
          <motion.div 
            className="hero-badge"
            variants={textVariants}
          >
            <Sparkles className="badge-icon" />
            <span>AI-Powered Solutions</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="hero-title-modern"
            variants={textVariants}
          >
            <span className="hero-title-line">
              <span className="hero-title-gradient">Revolutionary</span> Neural
            </span>
            <span className="hero-title-line">
              Network <span className="hero-title-accent">Solutions</span>
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="hero-subtitle-modern"
            variants={textVariants}
          >
            Transform your business with cutting-edge AI technology. Our advanced neural networks 
            deliver intelligent solutions that drive innovation and accelerate growth.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="hero-buttons-modern"
            variants={textVariants}
          >
            <motion.button 
              className="btn-modern btn-primary-modern"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Journey</span>
              <ArrowRight className="btn-icon-modern" />
              <div className="btn-glow"></div>
            </motion.button>
            
            <motion.button 
              className="btn-modern btn-secondary-modern"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="play-button">
                <Play className="play-icon" />
              </div>
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>
          
        </motion.div>
        
        {/* Visual Section */}
        <motion.div 
          className="hero-visual-modern"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Neural Network Visualization */}
          <div className="neural-network-modern">
            <motion.div 
              className="network-container"
              variants={floatingVariants}
              animate="animate"
            >
              {/* Input Layer */}
              <div className="network-layer input-layer">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`input-${i}`}
                    className="neural-node-modern input-node"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1 + (i * 0.1),
                    }}
                  />
                ))}
              </div>

              {/* Hidden Layer 1 */}
              <div className="network-layer hidden-layer-1">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`hidden1-${i}`}
                    className="neural-node-modern hidden-node"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.5 + (i * 0.1),
                    }}
                  />
                ))}
              </div>

              {/* Hidden Layer 2 */}
              <div className="network-layer hidden-layer-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`hidden2-${i}`}
                    className="neural-node-modern hidden-node"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 2 + (i * 0.1),
                    }}
                  />
                ))}
              </div>

              {/* Output Layer */}
              <div className="network-layer output-layer">
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={`output-${i}`}
                    className="neural-node-modern output-node"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 2.5 + (i * 0.1),
                    }}
                  />
                ))}
              </div>

              {/* Connection Lines */}
              <svg className="network-connections" viewBox="0 0 400 300">
                {/* Add animated connection lines here */}
                <motion.path
                  d="M50 75 L150 50 L250 100 L350 75"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2, delay: 3 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 3 }}
      >
        <motion.div 
          className="scroll-dot"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero 