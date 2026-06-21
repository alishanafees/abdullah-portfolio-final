import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Menu, X, Send } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const navRef = useRef(null)
  const lastScroll = useRef(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ name: '', role: '', message: '' })

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      if (current > lastScroll.current && current > 120) {
        gsap.to(navRef.current, { y: -120, duration: 0.4, ease: 'power2.out' })
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.4, ease: 'power2.out' })
      }
      lastScroll.current = current
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const submitTestimonial = (e) => {
    e.preventDefault()
    if (!form.name || !form.message) return
    const text = encodeURIComponent(
      `New testimonial\nName: ${form.name}\nRole: ${form.role}\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/923267642918?text=${text}`, '_blank')
    setModalOpen(false)
    setForm({ name: '', role: '', message: '' })
  }

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-zinc-950/60 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-display text-xl md:text-2xl tracking-wide hover:text-red-500 transition-colors duration-300"
          >
            M.<span className="text-red-500">Abdullah</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-sm uppercase tracking-widest text-zinc-300 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2 rounded-full bg-red-600 text-zinc-950 text-sm font-semibold uppercase tracking-wide hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:scale-105 transition-all duration-300"
            >
              Testimonial
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-zinc-950/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button className="absolute top-6 right-6 text-white" onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-4xl font-display uppercase text-white hover:text-red-500 transition-colors"
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={() => {
            setModalOpen(true)
            setMobileOpen(false)
          }}
          className="mt-4 px-8 py-3 rounded-full bg-red-600 text-zinc-950 font-semibold uppercase tracking-wide"
        >
          Leave a Testimonial
        </button>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setModalOpen(false)}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={submitTestimonial}
            className="w-full max-w-md bg-zinc-900/90 border border-white/10 rounded-3xl p-8 space-y-4 shadow-2xl"
          >
            <h3 className="text-2xl font-display uppercase text-white">Add Testimonial</h3>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-zinc-800/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-red-500/60 outline-none transition-colors"
            />
            <input
              type="text"
              placeholder="Your Role / Company"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full bg-zinc-800/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-red-500/60 outline-none transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-zinc-800/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-red-500/60 outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-red-600 text-zinc-950 font-semibold uppercase tracking-wide hover:bg-red-500 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={18} /> Submit via WhatsApp
            </button>
          </form>
        </div>
      )}
    </>
  )
}
