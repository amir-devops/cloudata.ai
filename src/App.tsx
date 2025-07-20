import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Projects from './components/Projects/Projects'
import Testimonials from './components/Testimonials/Testimonials'
import Blog from './components/Blog/Blog'
import Partners from './components/Partners/Partners'
import CTA from './components/CTA/CTA'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Projects />
        <Testimonials />
        <Blog />
        <Partners />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App 