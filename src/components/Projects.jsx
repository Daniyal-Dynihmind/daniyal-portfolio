import { motion } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'

// Your 6 projects. Replace the YOUR-...-LINK parts with real Vercel links.
const projects = [
  {
    title: 'ClientFlow CRM',
    desc: 'B2B CRM and invoicing SaaS with live invoice preview, PDF export and branding.',
    tags: ['React', 'LocalStorage', 'SaaS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    live: 'https://clientflow-crm-red.vercel.app/',
    code: 'https://github.com/Daniyal-Dynihmind/clientflow-crm',
  },
  {
    title: 'AI Resume Builder',
    desc: 'Resume builder with Google Gemini summaries, bullet improvements and PDF export.',
    tags: ['Gemini AI', 'JavaScript', 'PDF'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1000&q=80',
    live: 'https://ai-resume-builder-theta-sand.vercel.app/',
    code: 'https://github.com/Daniyal-Dynihmind/ai-resume-builder',
  },
  {
    title: 'Nexora Digital',
    desc: 'Modern agency landing page with services, pricing, FAQ and a contact form.',
    tags: ['Landing Page', 'Tailwind', 'Conversion'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    live: 'https://agency-landing-page-taupe-kappa.vercel.app/',
    code: 'https://github.com/Daniyal-Dynihmind/agency-landing-page',
  },
  {
    title: 'Glow Studio Booking',
    desc: 'Salon booking with live time slots, overlap protection and an admin dashboard.',
    tags: ['Booking', 'Admin Panel', 'Slots'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    live: 'https://glow-studio-booking-mu.vercel.app/',
    code: 'https://github.com/Daniyal-Dynihmind/glow-studio-booking',
  },
  {
    title: 'CareFirst Clinic',
    desc: 'Clinic appointment system with consultation types, slots and admin management.',
    tags: ['Healthcare', 'Booking', 'Admin'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    live: 'https://carefirst-booking.vercel.app/',
    code: 'https://github.com/Daniyal-Dynihmind/carefirst-booking',
  },
  {
    title: 'Spice Route Restaurant',
    desc: 'Restaurant website with digital menu, cart, WhatsApp ordering, reservations and gallery.',
    tags: ['React', 'Framer Motion', 'Restaurant'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    live: 'https://spice-route-restaurant-tan.vercel.app/',
    code: 'https://github.com/Daniyal-Dynihmind/spice-route-restaurant',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Projects</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900">Selected work</h2>
          <p className="mt-4 text-stone-600">Live products I have designed and built. Click to explore.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-2xl transition duration-500"
            >
              {/* Preview image with zoom on hover */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-indigo-400 to-pink-400">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-stone-900">{p.title}</h3>
                <p className="mt-2 text-stone-600">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 transition"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-stone-200 text-stone-800 text-sm font-semibold hover:border-indigo-300 transition"
                  >
                    <Code2 size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}