import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, CheckCircle2, Lightbulb, Target } from 'lucide-react'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudies() {
  // The case study currently open in the modal (null = closed)
  const [active, setActive] = useState(null)

  // Close on Escape and lock page scroll while the modal is open
  useEffect(() => {
    if (!active) return
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="case-studies" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Case Studies</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900">How I solve real problems</h2>
          <p className="mt-4 text-stone-600">A closer look at the problem, approach and results behind my projects.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.button
              key={cs.id}
              type="button"
              onClick={() => setActive(cs)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group text-left bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-2xl transition"
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-indigo-400 to-pink-400">
                <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-bold text-indigo-700">
                  {cs.category}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-stone-900">{cs.title}</h3>
                <p className="mt-2 text-stone-600">{cs.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                  Read case study <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal with full case study details */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] bg-stone-900/50 backdrop-blur-sm flex items-start justify-center p-4 md:p-10 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden my-auto"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-stone-100 shadow"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <img src={active.image} alt={active.title} className="w-full h-60 object-cover" />

              <div className="p-7 md:p-10 space-y-8">
                <div>
                  <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">{active.category}</p>
                  <h3 className="mt-2 text-3xl font-extrabold text-stone-900">{active.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">{t}</span>
                    ))}
                  </div>
                </div>

                <Section icon={Target} title="The Problem">
                  <p className="text-stone-600 leading-relaxed">{active.problem}</p>
                </Section>

                <Section icon={Lightbulb} title="My Approach">
                  <p className="text-stone-600 leading-relaxed">{active.approach}</p>
                </Section>

                <Section title="Goals">
                  <List items={active.goals} />
                </Section>

                <Section title="Key Features">
                  <List items={active.features} />
                </Section>

                <Section title="Challenges & Solutions">
                  <div className="space-y-4">
                    {active.challenges.map((c, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-100">
                        <p className="font-semibold text-stone-900">Challenge: {c.problem}</p>
                        <p className="mt-2 text-stone-600">Solution: {c.solution}</p>
                      </div>
                    ))}
                  </div>
                </Section>

                <Section title="Results">
                  <List items={active.results} />
                </Section>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={active.live} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold">
                    View Live Project
                  </a>
                  <a href={active.code} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-white border border-stone-200 font-semibold text-stone-800">
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// Reusable section heading + content block
function Section({ icon: Icon, title, children }) {
  return (
    <div>
      <h4 className="flex items-center gap-2 text-lg font-bold text-stone-900 mb-3">
        {Icon && <Icon size={18} className="text-indigo-600" />} {title}
      </h4>
      {children}
    </div>
  )
}

// Bulleted list with check icons
function List({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-stone-600">
          <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}