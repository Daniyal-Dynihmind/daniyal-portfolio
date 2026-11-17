import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

// Client testimonials. Replace with real client feedback when you have it.
const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Owner, Spice Route',
    rating: 5,
    text: 'Daniyal delivered our restaurant website in under a week. The menu and reservation system work perfectly.',
  },
  {
    name: 'Omar Siddiqui',
    role: 'Founder, Brightpath',
    rating: 5,
    text: 'Clear communication, clean code and a product that looked premium from day one. Highly recommended.',
  },
  {
    name: 'Sara Ahmed',
    role: 'Clinic Manager',
    rating: 5,
    text: 'Our appointment booking system is now live, and patients find slots easily. Great support after launch.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 px-5 bg-white/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Testimonials</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900">What clients say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-7 border border-stone-100 shadow-sm hover:shadow-xl transition"
            >
              <Quote className="text-indigo-300" size={34} />
              <p className="mt-4 text-stone-700 leading-relaxed">{t.text}</p>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-bold text-stone-900">{t.name}</p>
                  <p className="text-xs text-stone-500">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={15}
                      className={idx < t.rating ? 'text-amber-400 fill-amber-400' : 'text-stone-300'}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}