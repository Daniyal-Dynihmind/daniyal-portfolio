import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
    </div>
  )
}