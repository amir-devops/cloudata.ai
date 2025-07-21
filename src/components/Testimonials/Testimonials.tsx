import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote: "Working with Neuro has been a game-changer for our business. Their AI solutions have revolutionized our operations, enabling us to automate repetitive tasks and make data-driven decisions with ease. We couldn't be happier with the results.",
      author: "John Anderson",
      position: "CEO of XYZ Company",
      avatar: "/avatars/john-anderson.jpg"
    },
    {
      id: 2,
              quote: "The neural network solutions provided by Cloudata.ai have exceeded our expectations. The team's expertise and dedication to delivering cutting-edge AI technology is truly impressive.",
      author: "Sarah Chen",
      position: "CTO of TechCorp",
      avatar: "/avatars/sarah-chen.jpg"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials" ref={ref}>
      <div className="testimonials-container">
        <div className="testimonials-content">
          <motion.div 
            className="testimonials-slider"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="testimonial-item">
              <Quote className="quote-icon" size={48} />
              <blockquote className="testimonial-quote">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              <div className="testimonial-author">
                <span className="author-name">{testimonials[currentTestimonial].author}</span>
                <span className="author-position">{testimonials[currentTestimonial].position}</span>
              </div>
            </div>
            
            <div className="testimonial-controls">
              <button 
                onClick={prevTestimonial}
                className="testimonial-nav"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="testimonial-nav"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="testimonials-info">
          <motion.div 
            className="testimonials-header"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="section-path-modern">/ testimonials /</div>
            <h2 className="how-it-works-modern-title">
              Hear what our customers say about our AI solutions
            </h2>
          </motion.div>

          <motion.div 
            className="testimonials-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="stat-card">
              <div className="stat-number">250+</div>
              <div className="stat-label">Happy clients</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 