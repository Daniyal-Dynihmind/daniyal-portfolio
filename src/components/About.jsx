import { motion } from 'framer-motion'

// Skills shown as chips in the About section
const skills = [
  'React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Node.js',
  'Python', 'Supabase', 'Gemini API', 'REST APIs', 'Vercel', 'Git & GitHub',
]

export default function About() {
  return (
    <section id="about" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">

        {/* Left: section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">About Me</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900">
            A builder who ships fast and cares about details
          </h2>
        </motion.div>

        {/* Right: bio and skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-3 space-y-6"
        >
          <p className="text-stone-600 leading-relaxed">
            I am a full-stack web developer and AI app builder based in Karachi, Pakistan. I combine modern
            tools like React, Tailwind and Gemini AI with solid fundamentals to deliver products that look
            premium and work reliably.
          </p>
          <p className="text-stone-600 leading-relaxed">
            My work covers SaaS dashboards, booking systems, restaurant websites and AI-powered tools. I focus on
            clean UI, responsive design, and clear communication, so clients always know what is happening.
          </p>

          {/* Skill chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-white border border-stone-200 text-sm font-medium text-stone-700 shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}