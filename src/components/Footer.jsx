export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-200 bg-white/70 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#top" className="font-extrabold text-lg">
          Daniyal<span className="text-indigo-600">.dev</span>
        </a>

        <div className="flex gap-6 text-sm text-stone-600">
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
          <a href="#services" className="hover:text-indigo-600 transition">Services</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </div>
        <a href="mailto:Daniyalrasheed5@gmail.com" className="text-sm text-stone-600 hover:text-indigo-600 transition">Daniyalrasheed5@gmail.com</a>
        <p className="text-sm text-stone-500">© {year} Daniyal Dynihmind. Built with React and Tailwind.</p>
      </div>
    </footer>
  )
}