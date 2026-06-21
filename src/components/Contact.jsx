import { useState } from 'react'
import { MessageCircle, Send } from 'lucide-react'
import { InstagramIcon, LinkedinIcon, FacebookIcon } from './SocialIcons'

const socials = [
  { Icon: MessageCircle, href: 'https://wa.me/923267642918', label: 'WhatsApp' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/jarryabdullah_007', label: 'Instagram' },
  { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/muhammadabdullah-va', label: 'LinkedIn' },
  { Icon: FacebookIcon, href: 'https://www.facebook.com/share/1HxfCFS4LS/', label: 'Facebook' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name required'
    if (!form.message.trim()) newErrors.message = 'Message required'
    setErrors(newErrors)
    if (Object.keys(newErrors).length) return

    const text = encodeURIComponent(
      `Portfolio Inquiry\nName: ${form.name}\nEmail: ${form.email || 'N/A'}\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/923267642918?text=${text}`, '_blank')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative bg-[#0a0a0a] rounded-t-[40px] py-24 px-6 overflow-hidden">
      <h2 className="absolute inset-x-0 top-10 text-center font-display uppercase text-[20vw] md:text-[18vw] leading-none text-white/[0.03] select-none">
        CONNECT
      </h2>

      <div className="relative max-w-2xl mx-auto text-center">
        <h3 className="font-display uppercase text-white text-[12vw] md:text-[6vw] leading-none mb-8">Let's Talk</h3>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:border-white/50 outline-none transition-colors duration-300"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:border-white/50 outline-none transition-colors duration-300"
          />
          <div>
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:border-white/50 outline-none transition-colors duration-300 resize-none"
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-red-600 text-white uppercase tracking-widest font-semibold hover:bg-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send size={18} /> Send
          </button>
        </form>
      </div>
    </section>
  )
}
