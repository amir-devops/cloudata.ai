import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Facebook, Twitter, Linkedin, Youtube, MapPin, 
  ArrowRight, MessageCircle
} from 'lucide-react'
import './Footer.css'

const Footer: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Contact', href: '#contact' }
    ],
    services: [
      { label: 'AI Frameworks', href: '#services' },
      { label: 'CyberFuse', href: '#services' },
      { label: 'Developer Support', href: '#services' }
    ],
    resources: [
      { label: 'API Reference', href: '#api' },
      { label: 'Blog', href: '#blog' },
      { label: 'Support', href: '#support' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: '#1877f2' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1da1f2' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0077b5' },
    { icon: Youtube, href: '#', label: 'YouTube', color: '#ff0000' }
  ]



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

  return (
    <footer id="contact" className="footer-modern" ref={ref}>
      {/* Background Pattern */}
      <div className="footer-bg-pattern">
        <svg width="100%" height="100%" viewBox="0 0 1200 400" fill="none">
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(226, 76, 74, 0.03)"/>
              <stop offset="50%" stopColor="rgba(56, 107, 183, 0.03)"/>
              <stop offset="100%" stopColor="rgba(46, 204, 113, 0.03)"/>
            </linearGradient>
          </defs>
          <path d="M0 200 Q300 150 600 200 Q900 250 1200 200 L1200 400 L0 400 Z" fill="url(#footerGradient)"/>
        </svg>
      </div>

      <div className="footer-modern-container">
        <motion.div 
          className="footer-modern-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Main Footer Section */}
          <div className="footer-main-section">
            {/* Brand Section */}
            <motion.div className="footer-brand-section" variants={itemVariants}>
              <div className="footer-logo-modern">
                <div className="logo-wrapper-modern">
                  <span className="logo-text-modern">Cloudata.ai</span>
                  <div className="logo-accent-modern"></div>
                </div>
                <p className="footer-tagline">
                  Empowering businesses with cutting-edge neural network solutions and artificial intelligence technology.
                </p>
              </div>

              <div className="footer-contact-modern">
                <div className="contact-items-modern">
                  {/* Removed Amsterdam, Netherlands location */}
                </div>
              </div>
            </motion.div>

            {/* Links Section */}
            <motion.div className="footer-links-section" variants={itemVariants}>
              <div className="footer-links-grid">
                <div className="footer-column-modern">
                  <h6 className="footer-column-title">Company</h6>
                  <ul className="footer-links-list">
                    {footerLinks.company.map((link, index) => (
                      <motion.li 
                        key={index}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a href={link.href} className="footer-link-modern">
                          <ArrowRight size={12} />
                          <span>{link.label}</span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="footer-column-modern">
                  <h6 className="footer-column-title">Services</h6>
                  <ul className="footer-links-list">
                    {footerLinks.services.map((link, index) => (
                      <motion.li 
                        key={index}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a href={link.href} className="footer-link-modern">
                          <ArrowRight size={12} />
                          <span>{link.label}</span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="footer-column-modern">
                  <h6 className="footer-column-title">Resources</h6>
                  <ul className="footer-links-list">
                    {footerLinks.resources.map((link, index) => (
                      <motion.li 
                        key={index}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a href={link.href} className="footer-link-modern">
                          <ArrowRight size={12} />
                          <span>{link.label}</span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>



          {/* Social & Newsletter Section */}
          <motion.div className="footer-social-section" variants={itemVariants}>
            <div className="social-newsletter-wrapper">
              <div className="social-links-modern">
                <h6 className="social-title">Follow Us</h6>
                <div className="social-icons-grid">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        className="social-link-modern"
                        aria-label={social.label}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{ '--social-color': social.color } as React.CSSProperties}
                      >
                        <IconComponent size={20} />
                        <div className="social-glow"></div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              <div className="newsletter-modern">
                <h6 className="newsletter-title">Stay Updated</h6>
                <p className="newsletter-description">Get the latest insights on AI and neural networks</p>
                <div className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="newsletter-input"
                  />
                  <motion.button 
                    className="newsletter-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle size={16} />
                    <span>Subscribe</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom-modern"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="footer-bottom-content">
            <div className="footer-copyright-modern">
              ©2025Cloudata.ai. All rights reserved.
            </div>
            
            <div className="footer-legal-modern">
              <a href="#terms" className="legal-link">Terms of Service</a>
              <span className="legal-separator">•</span>
              <a href="#privacy" className="legal-link">Privacy Policy</a>
              <span className="legal-separator">•</span>
              <a href="#cookies" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 