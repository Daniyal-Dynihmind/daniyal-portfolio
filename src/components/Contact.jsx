import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, Phone, Link2 } from 'lucide-react'

// Contact details. Replace with your real information.
const contactInfo = {
  email: 'Daniyalrasheed5@gmail.com',
  whatsapp: '923232621608',
  linkedin: 'https://www.linkedin.com/in/daniyal-rasheed-2a99a7a2/',
}

const emptyForm = { name: '', email: '', projectType: 'Web App', message: '' }

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

    // Update one field when the user types
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Send the form to Formspree. Data is delivered to your email.
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch('https://formspree.io/f/xwlooopr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
        setForm(emptyForm)
      } else {
        alert('Something went wrong. Please try again or contact me on WhatsApp.')
      }
    } catch {
      alert('Network error. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-indigo-500 focus:bg-white outline-none transition'

  return (
    <section id="contact" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">

        {/* Left: contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Contact</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900">Let's build something great</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Tell me about your idea. I usually reply within 24 hours with a plan and a quote.
          </p>

          <div className="mt-8 space-y-4">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-stone-100 hover:border-indigo-300 transition">
              <Mail className="text-indigo-600" size={20} />
              <span className="text-stone-700 font-medium">{contactInfo.email}</span>
            </a>
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-stone-100 hover:border-emerald-300 transition">
              <Phone className="text-emerald-600" size={20} />
              <span className="text-stone-700 font-medium">Chat on WhatsApp</span>
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-stone-100 hover:border-sky-300 transition">
              <Link2 className="text-sky-600" size={20} />
              <span className="text-stone-700 font-medium">Connect on LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right: contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 bg-white rounded-3xl p-7 md:p-9 border border-stone-100 shadow-xl"
        >
          {sent ? (
            <div className="text-center py-12">
              <CheckCircle className="mx-auto text-emerald-500" size={56} />
              <h3 className="mt-5 text-2xl font-bold text-stone-900">Thank you!</h3>
              <p className="mt-2 text-stone-600">Your message has been received. I will get back to you soon.</p>
              <button onClick={() => setSent(false)} className="mt-6 px-6 py-2.5 rounded-full bg-stone-900 text-white font-semibold">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Name *</label>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Email *</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Project type</label>
                <select name="projectType" value={form.projectType} onChange={handleChange} className={inputClass}>
                  <option>Web App / SaaS</option>
                  <option>Restaurant or Business Website</option>
                  <option>Booking System</option>
                  <option>AI Integration</option>
                  <option>Landing Page</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Project details *</label>
                <textarea required rows={5} name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your idea, goals and timeline." className={inputClass} />
              </div>

              <button type="submit" disabled={sending} className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 transition disabled:opacity-60">
                <Send size={18} /> {sending ? 'Sending...' : 'Send Message'}
              </button>
              
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}