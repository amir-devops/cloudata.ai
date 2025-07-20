import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react'
import './Header.css'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', href: '#home' },
    { 
      label: 'Services', 
      href: '#services',
      dropdown: [
        { label: 'Neural Networks', href: '#neural-networks' },
        { label: 'AI Solutions', href: '#ai-solutions' },
        { label: 'Machine Learning', href: '#machine-learning' }
      ]
    },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ]

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  return (
    <motion.header 
      className={`header-modern ${isScrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-modern-container">
        {/* Logo */}
        <motion.div 
          className="header-modern-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="logo-wrapper">
                            <span className="logo-text">Cloudata.ai</span>
            <div className="logo-accent"></div>
        </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="header-modern-nav">
          <ul className="nav-modern-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-modern-item">
                {item.dropdown ? (
                  <div className="nav-dropdown-container">
                    <button 
                      className="nav-modern-link nav-dropdown-trigger"
                      onClick={() => handleDropdownToggle(item.label)}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                    >
                      {item.label}
                      <ChevronDown size={14} className="dropdown-icon" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div 
                          className="nav-dropdown"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <a 
                              key={dropdownIndex}
                              href={dropdownItem.href} 
                              className="dropdown-item"
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a href={item.href} className="nav-modern-link">
                  {item.label}
                </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <motion.button 
          className="header-cta-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <MessageCircle size={16} />
          <span>Get in Touch</span>
          <div className="btn-glow-effect"></div>
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button 
          className="mobile-menu-btn-modern"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
        <motion.div 
              className="mobile-nav-modern"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="mobile-nav-header">
                <span className="mobile-nav-title">Menu</span>
                <button 
                  className="mobile-nav-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              
              <ul className="mobile-nav-modern-menu">
                {menuItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="mobile-nav-modern-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.dropdown ? (
                      <div className="mobile-dropdown-container">
                        <button 
                          className="mobile-nav-modern-link mobile-dropdown-trigger"
                          onClick={() => handleDropdownToggle(item.label)}
                        >
                          {item.label}
                          <ChevronDown 
                            size={16} 
                            className={`mobile-dropdown-icon ${activeDropdown === item.label ? 'rotated' : ''}`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div 
                              className="mobile-dropdown"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                <a 
                                  key={dropdownIndex}
                                  href={dropdownItem.href} 
                                  className="mobile-dropdown-item"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {dropdownItem.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a 
                        href={item.href} 
                        className="mobile-nav-modern-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                    )}
                  </motion.li>
            ))}
          </ul>
              
              <div className="mobile-nav-footer">
                <button className="mobile-cta-btn">
                  <MessageCircle size={18} />
                  <span>Get in Touch</span>
                </button>
              </div>
        </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header 