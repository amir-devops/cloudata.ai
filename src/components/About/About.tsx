import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, ArrowRight, Star } from 'lucide-react'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="about-new" ref={ref}>
      <div className="about-new-container">
        <motion.div 
          className="about-new-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Section - Dark Theme */}
          <motion.div 
            className="about-left-section"
            variants={imageVariants}
          >
            {/* Main Image */}
            <div className="about-main-image">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Neural Network Visualization" 
              />
              <div className="image-overlay">
                <Star className="star-icon" />
              </div>
              <button className="watch-video-btn">
                <Play className="play-icon" />
                <span>Watch video</span>
              </button>
            </div>

            {/* Stats Section */}
            <motion.div 
              className="about-stats-section"
              variants={itemVariants}
            >
              <div className="stats-content">
                <div className="stats-left">
                  <span className="stats-label">Well established</span>
                </div>
                <div className="stats-center">
                  <div className="stat-number">1K+</div>
                  <div className="stat-label">Realized projects</div>
                </div>
                <div className="stats-right">
                  <div className="stat-number">250+</div>
                  <div className="stat-label">Active users every day</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Light Theme */}
          <motion.div 
            className="about-right-section"
            variants={itemVariants}
          >
            <div className="about-text-content">
              {/* Title */}
              <div className="about-title">
                <span className="title-outline">
                  <span className="title-blue">Cloud</span>
                  <span className="title-red">ata</span>
                </span>
                <span className="title-ai">.ai</span>
              </div>

              {/* Section Label */}
              <div className="section-path">/ about /</div>

              {/* Main Heading */}
              <h2 className="about-heading">
                Transforming Industries Through Advanced AI
              </h2>

              {/* Description */}
              <div className="about-description">
                <p>
                  Cloudata.ai is dedicated to transforming industries across the Middle East, Africa, and Turkey 
                  through advanced AI platforms and strategic collaborations. Founded by a seasoned expert in 
                  AI ecosystems and cloud solutions, we specialize in integrating state-of-the-art frameworks 
                  such as NeMo, Riva for speech AI, DeepStream for vision AI, and the comprehensive suite of 
                  NVIDIA SDKs to empower businesses and developers alike.
                </p>
              </div>

              {/* CTA Button */}
              <motion.button 
                className="explore-btn"
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="arrow-icon" />
                <span>Explore more</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 