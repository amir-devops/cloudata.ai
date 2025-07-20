import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Calendar, User } from 'lucide-react'

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const blogPosts = [
    {
      id: 1,
      title: "Is Artificial Intelligence accessible to businesses of all sizes",
      excerpt: "Yes, AI solutions are becoming increasingly accessible to businesses.",
      image: "https://8ded8880.delivery.rocketcdn.me/themes/neuros/wp-content/uploads/2024/03/Ooze-16-1-min-1340x638.jpg",
      date: "5 Jan 2024",
      author: "andrew",
      categories: ["AI", "Business"]
    },
    {
      id: 2,
      title: "How can I get started with Artificial Intelligence for my business?",
      excerpt: "Getting started with AI requires careful planning and the right strategy.",
      image: "https://8ded8880.delivery.rocketcdn.me/themes/neuros/wp-content/uploads/2024/01/maxim-tolchinskiy-v3z79Wzs9kA-unsplash-1-960x718.jpg",
      date: "19 Feb 2024",
      author: "andrew",
      categories: ["AI", "Business"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  return (
    <section id="blog" className="blog" ref={ref}>
      <div className="blog-container">
        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="blog-title">
            <span className="section-label">blog</span>
            <h2 className="section-title">
              <span className="title-gradient">
                Exploring the frontiers of artificial Intelligence: Insights, innovations and impact
              </span>
            </h2>
          </div>
          
          <button className="btn btn-outline">
            <span>More articles</span>
            <ArrowRight className="btn-icon" />
          </button>
        </motion.div>

        <motion.div 
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              className={`blog-card ${index === 0 ? 'blog-card-featured' : 'blog-card-grid'}`}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="blog-image">
                <img 
                  src={post.image} 
                  alt={post.title}
                  loading="lazy"
                />
                <div className="blog-categories">
                  {post.categories.map((category, catIndex) => (
                    <span key={catIndex} className="blog-category">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <div className="blog-date">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="blog-author">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Blog 