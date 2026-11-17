import { motion } from 'framer-motion'

// The three steps clients go through when working with me
const steps = [
  {
    number: '01',
    title: 'Discover',
    desc: 'We talk about your goals, users and features. You get a clear plan and a fixed quote.',
  },
  {
    number: '02',
    title: 'Build',
    desc: 'You receive regular live previews and updates. Your feedback is included at every stage.',
  },
  {
    number: '03',
    title: 'Launch',
    desc: 'I deploy your product, hand over the code and provide post-launch support.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Process</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900">How we work together</h2>
          <p className="mt-4 text-stone-600">A simple, transparent process from the first idea to the live launch.</p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connecting line behind the cards (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-indigo-300 via-violet-300 to-pink-300" />

          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-white rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-xl transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-extrabold text-xl shadow-lg">
                {s.number}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-stone-900">{s.title}</h3>
              <p className="mt-3 text-stone-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}