import { motion } from 'framer-motion'

// Skills shown as chips in the About section
const skills = [
  'React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Node.js',
  'Python', 'Supabase', 'Gemini API', 'REST APIs', 'Vercel', 'Git & GitHub',
  'E-commerce Development', 'Shopify', 'Stripe Payments',
]

// Highlights shown as small cards below the bio
const highlights = [
  { label: 'Clear communication', icon: '💬' },
  { label: 'On-time delivery', icon: '⏱️' },
  { label: 'Clean, responsive UI', icon: '🎨' },
  { label: 'Post-launch support', icon: '🛠️' },
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

        {/* Right: bio, services and skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-3 space-y-6"
        >
          <p className="text-stone-600 leading-relaxed">
            I am a full-stack web developer and AI app builder who helps startups, agencies and businesses
            around the world turn their ideas into fast, reliable and beautiful digital products. I work with
            modern tools like React, Tailwind CSS and Google Gemini AI, combined with solid engineering fundamentals.
          </p>

          <p className="text-stone-600 leading-relaxed">
            My work covers SaaS dashboards, booking systems, restaurant websites and AI-powered tools.
            On the backend, I build APIs and data-driven features with Node.js and Python, and I use Supabase
            for databases and authentication. I also build online stores and e-commerce experiences, including
            product pages, carts and payment integration.
          </p>

          <p className="text-stone-600 leading-relaxed">
            Whether you need an MVP to validate an idea, an online store to start selling, or a complete product
            for your business, I build it with scalability in mind and provide support after launch.
          </p>

          {/* Service focus areas */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Web Apps & SaaS', desc: 'Dashboards, CRMs and admin panels' },
              { title: 'Python & AI', desc: 'APIs, automation and Gemini AI features' },
              { title: 'E-commerce', desc: 'Online stores, product pages and checkout' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-white border border-stone-100 shadow-sm">
                <p className="font-bold text-stone-900">{item.title}</p>
                <p className="mt-1 text-sm text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-stone-100 shadow-sm">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-semibold text-stone-700">{item.label}</span>
              </div>
            ))}
          </div>

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