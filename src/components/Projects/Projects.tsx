import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, ChevronUp, ArrowRight, Code, Brain, Zap, TrendingUp } from 'lucide-react'
import './Projects.css'

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "DeepVision: AI-Powered Image Recognition System",
      description: "Advanced computer vision solution using convolutional neural networks for real-time object detection, facial recognition, and medical image analysis with 99.2% accuracy.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&crop=center",
      category: "Computer Vision",
      icon: Brain
    },
    {
      id: 2,
      title: "NeuralFlow: Intelligent Process Automation Platform",
      description: "End-to-end automation solution leveraging deep learning for document processing, workflow optimization, and intelligent decision-making across enterprise systems.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center",
      category: "Process Automation",
      icon: Zap
    },
    {
      id: 3,
      title: "NLPGenius: Natural Language Processing Engine",
      description: "Sophisticated NLP platform for sentiment analysis, language translation, and conversational AI with multi-language support and contextual understanding.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&crop=center",
      category: "Natural Language Processing",
      icon: Code
    },
    {
      id: 4,
      title: "SmartTrader: Predictive Financial Analytics",
      description: "AI-driven trading platform using neural networks for market prediction, risk assessment, and portfolio optimization with real-time market analysis.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop&crop=center",
      category: "Financial AI",
      icon: TrendingUp
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="projects" className="projects-modern" ref={ref}>
      <div className="projects-modern-container">
        <motion.div 
          className="projects-modern-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="projects-modern-header"
            variants={itemVariants}
          >
            <div className="section-path-modern">/ projects /</div>
            <h2 className="projects-modern-title">
              Pioneering projects for Intelligent solutions
            </h2>
            
            <div className="projects-navigation">
              <div className="nav-controls">
                <button 
                  className="nav-btn nav-btn-prev"
                  onClick={prevProject}
                  aria-label="Previous project"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="nav-btn nav-btn-next"
                  onClick={nextProject}
                  aria-label="Next project"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              <button className="explore-more-btn">
                <ArrowRight size={16} />
                <span>Explore more</span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="projects-cards-container"
            variants={itemVariants}
          >
            <div className="projects-cards-wrapper">
              {projects.map((project, index) => {
                const IconComponent = project.icon
                
                return (
                  <motion.div 
                    key={project.id}
                    className="project-card active"
                    variants={cardVariants}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="project-card-image">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        loading="lazy"
                      />
                      <motion.div 
                        className="project-card-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="project-category-badge">
                          {project.category}
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="project-card-content">
                      <h3 className="project-card-title">{project.title}</h3>
                      <motion.p 
                        className="project-card-description"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        {project.description}
                      </motion.p>
                      
                      <div className="project-card-actions">
                        <motion.button 
                          className="project-learn-more-btn"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          whileHover={{ x: 5 }}
                        >
                          <ArrowRight size={16} />
                          <span>Learn more</span>
                        </motion.button>
                        
                        <motion.button 
                          className="project-card-toggle"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <ChevronUp size={16} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 