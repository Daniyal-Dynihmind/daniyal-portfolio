import { motion } from 'framer-motion'
import { Rocket, LayoutDashboard, CalendarCheck, UtensilsCrossed, Bot, Globe } from 'lucide-react'

// Services offered to clients. Edit titles and descriptions here.
const services = [
  { icon: Rocket, title: 'MVP & Web Apps', desc: 'Validate your startup idea with a working product in 1 to 2 weeks.', color: 'from-indigo-500 to-violet-500' },
  { icon: LayoutDashboard, title: 'SaaS & Dashboards', desc: 'CRMs, invoicing tools and admin panels built for your workflow.', color: 'from-violet-500 to-fuchsia-500' },
  { icon: CalendarCheck, title: 'Booking Systems', desc: 'Online appointments with live time slots and an admin dashboard.', color: 'from-fuchsia-500 to-pink-500' },
  { icon: UtensilsCrossed, title: 'Restaurant Websites', desc: 'Digital menus, cart, WhatsApp ordering and table reservations.', color: 'from-pink-500 to-rose-500' },
  { icon: Bot, title: 'AI Integration', desc: 'Smart summaries, content generators and AI features using Gemini.', color: 'from-indigo-500 to-cyan-500' },
  { icon: Globe, title: 'Landing Pages', desc: 'Fast, responsive and conversion-focused pages for businesses.', color: 'from-cyan-500 to-teal-500' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-5 bg-white/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Services</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900">What I can build for you</h2>
          <p className="mt-4 text-stone-600">From a quick landing page to a full SaaS product, I cover the whole journey.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-3xl p-7 border border-stone-100 shadow-sm hover:shadow-xl transition"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-stone-900">{s.title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}