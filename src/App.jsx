import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudies from './components/CaseStudies'

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}