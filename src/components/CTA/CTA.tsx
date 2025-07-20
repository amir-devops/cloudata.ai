import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section className="cta" ref={ref}>
      <div className="cta-container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="cta-title">
            <span className="title-gradient">
              Drive efficiency & performance with Neural Networks
            </span>
          </h2>
          
          <motion.button 
            className="btn btn-primary btn-large"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore more</span>
            <ArrowRight className="btn-icon" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA 