import { MessageCircle } from 'lucide-react'
import { InstagramIcon } from './SocialIcons'
import profileAvatar from '../assets/profile-avatar.jpg'

const navLinks = ['Home', 'About', 'Services', 'Credentials', 'Contact']
const marqueeText = 'DIGITAL MARKETING • REAL ESTATE VA • LEAD GENERATION • FACEBOOK ADS • GOOGLE ADS • SKIP TRACING • '

export default function Footer() {
  return (
    <footer className="relative bg-red-600 text-zinc-950 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <p className="whitespace-nowrap font-display uppercase text-4xl md:text-6xl tracking-tight opacity-[0.06]">
          {marqueeText.repeat(3)}
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-zinc-950/10 shadow-2xl overflow-hidden mb-8">
          <img src={profileAvatar} alt="Muhammad Abdullah" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://www.instagram.com/jarryabdullah_007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <InstagramIcon size={18} /> Follow
          </a>
          <a
            href="https://wa.me/923267642918"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-medium hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle size={18} /> Message
          </a>
        </div>

        <h3 className="font-display uppercase text-3xl mb-2">
          <span className="text-zinc-950">Muhammad</span>{' '}
          <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">Abdullah</span>
        </h3>
        <p className="text-zinc-800/80 text-sm mb-10">Digital Marketing &amp; Real Estate VA — Helping Wholesalers Scale</p>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-zinc-900 hover:text-white transition-colors duration-300">
              {link}
            </a>
          ))}
        </nav>

        <div className="h-px bg-zinc-950/15 rounded-full mb-6" />

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-zinc-800/70">
          <span>© 2026 Muhammad Abdullah. All rights reserved.</span>
          <a href="#" className="hover:text-zinc-950 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-950 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}
