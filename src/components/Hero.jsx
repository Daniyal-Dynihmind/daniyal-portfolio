import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

// Quick stats shown under the buttons
const stats = [
  { value: '6+', label: 'Live Projects' },
  { value: '1-2 wks', label: 'Typical MVP' },
  { value: '100%', label: 'Responsive' },
]

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Floating background blobs. Bigger and more visible than the test ones */}
      <div className="blob w-[420px] h-[420px] bg-indigo-400 -top-24 -left-24" />
      <div className="blob w-[380px] h-[380px] bg-pink-400 top-1/3 -right-20" />
      <div className="blob w-[300px] h-[300px] bg-violet-300 bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-600 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-stone-900">
            I build web apps that{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
              turn ideas into products
            </span>
          </h1>

          <p className="mt-6 text-lg text-stone-600 max-w-xl leading-relaxed">
           Hi, I'm Daniyal, a web developer who builds modern, fast and responsive websites and web applications for startups and businesses worldwide. I create SaaS dashboards, booking systems, restaurant websites and AI-powered tools using React, Tailwind CSS and Google Gemini. I also use vibe coding with modern AI tools to turn ideas into working products much faster, without losing code quality or clean design. Alongside development, I work as a System Administrator and IT Infrastructure specialist, managing Windows systems, networks, servers and technical support, so every product I build runs reliably after launch.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-stone-200 text-stone-800 font-semibold hover:border-indigo-300 hover:-translate-y-0.5 transition"
            >
              View Projects
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-stone-900">{s.value}</p>
                <p className="text-xs text-stone-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: avatar card (replace with your photo later) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
        <img
            src="/me.jpg"
            alt="Daniyal Dynihmind"
            className="w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] object-cover shadow-2xl shadow-indigo-500/30"
        />
          {/* Floating card on top of the avatar */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-stone-100 px-5 py-4">
            <p className="text-xs text-stone-500">Latest project</p>
            <p className="font-bold text-stone-900">Spice Route Restaurant</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}