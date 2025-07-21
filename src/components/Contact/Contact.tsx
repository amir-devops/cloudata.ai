import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, MessageSquare, ArrowRight } from 'lucide-react'

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  }

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="contact-icon" />,
      title: "Our Location",
      details: "123 AI Innovation Street, Tech District, Silicon Valley, CA 94025",
      link: "https://maps.google.com"
    },
    {
      icon: <Phone className="contact-icon" />,
      title: "Phone Number",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <Mail className="contact-icon" />,
      title: "Email Address",
              details: "hello@cloudata.ai",
        link: "mailto:hello@cloudata.ai"
    },
    {
      icon: <Clock className="contact-icon" />,
      title: "Working Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM PST",
      link: null
    }
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="contact-header" variants={itemVariants}>
            <div className="section-path-modern">/ contact us /</div>
            <h2 className="how-it-works-modern-title">
              Get in Touch with Our Team
            </h2>
            <p className="section-subtitle">
              Ready to transform your business with AI? Let's discuss how our neural network 
              solutions can help you achieve your goals.
            </p>
          </motion.div>

          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-section"
              variants={formVariants}
            >
              <div className="form-container">
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                
                {isSubmitted ? (
                  <motion.div 
                    className="success-message"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="success-icon" />
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for contacting us. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <div className="input-wrapper">
                        <User className="input-icon" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                        <div className="input-focus-border"></div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <div className="input-wrapper">
                        <Mail className="input-icon" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email address"
                        />
                        <div className="input-focus-border"></div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <div className="input-wrapper">
                        <Phone className="input-icon" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                        <div className="input-focus-border"></div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <div className="input-wrapper">
                        <MessageSquare className="input-icon" />
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="consultation">AI Consultation</option>
                          <option value="project">Project Discussion</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership</option>
                        </select>
                        <div className="input-focus-border"></div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <div className="input-wrapper">
                        <MessageSquare className="input-icon" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          placeholder="Tell us about your project or inquiry..."
                        />
                        <div className="input-focus-border"></div>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className="btn btn-primary submit-btn"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="loading-spinner"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="btn-icon" />
                          <span>Send Message</span>
                        </>
                      )}
                      <div className="btn-glow-effect"></div>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="contact-info-section"
              variants={infoVariants}
            >
              <div className="info-container">
                <h3>Get in Touch</h3>
                <p>We're here to help you harness the power of artificial intelligence. Reach out to us through any of the channels below.</p>
                
                <div className="contact-info-list">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index}
                      className="contact-info-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className="info-icon-wrapper">
                        {info.icon}
                      </div>
                      <div className="info-content">
                        <h4>{info.title}</h4>
                        {info.link ? (
                          <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                            {info.details}
                          </a>
                        ) : (
                          <span>{info.details}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="contact-cta">
                  <h4>Ready to Start Your AI Journey?</h4>
                  <p>Schedule a free consultation with our AI experts and discover how neural networks can transform your business.</p>
                  <motion.button 
                    className="btn btn-outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="btn-icon" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 