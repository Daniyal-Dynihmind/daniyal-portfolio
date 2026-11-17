import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

// Navbar links. Each one points to a section id on the page.
const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  // scrolled: true when the user has scrolled down a bit
  const [scrolled, setScrolled] = useState(false)
  // open: mobile menu open or closed
  const [open, setOpen] = useState(false)

  // Listen to scroll and update the scrolled state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-sm border-b border-stone-200/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500" />
          Daniyal<span className="text-indigo-600">.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-indigo-600 transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me button (desktop) and menu toggle (mobile) */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-block px-5 py-2.5 rounded-full bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 transition"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-stone-100"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-stone-200 px-5 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-stone-700 font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}