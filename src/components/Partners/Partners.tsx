import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Partners: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const partners = [
    { name: "Partner 1", logo: "https://8ded8880.delivery.rocketcdn.me/themes/neuros/wp-content/uploads/2024/01/partners_1.png" },
    { name: "Partner 2", logo: "https://8ded8880.delivery.rocketcdn.me/themes/neuros/wp-content/uploads/2024/01/partners_2.png" },
    { name: "Partner 3", logo: "https://8ded8880.delivery.rocketcdn.me/themes/neuros/wp-content/uploads/2024/01/partners_3.png" },
    { name: "Partner 4", logo: "https://8ded8880.delivery.rocketcdn.me/themes/neuros/wp-content/uploads/2024/01/partners_4.png" },
    { name: "Partner 5", logo: "https://8ded8880.delivery.rocketcdn.me/themes/neuros/wp-content/uploads/2024/01/partners_5.png" },
    { name: "Partner 6", logo: "https://8ded8880.delivery.rocketcdn.me/themes/neuros/wp-content/uploads/2024/01/partners_6.png" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="partners" ref={ref}>
      <div className="partners-container">
        <motion.h2 
          className="partners-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className="title-gradient">
            Unleashing the Potential of <del>Artificial Intelligence</del> for Intelligent Solutions
          </span>
        </motion.h2>

        <motion.div 
          className="partners-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              className="partner-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Partners 