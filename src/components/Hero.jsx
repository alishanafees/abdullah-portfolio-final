import { MessageCircle } from 'lucide-react'
import { InstagramIcon, LinkedinIcon, FacebookIcon } from './SocialIcons'
import profileHero from '../assets/profile-hero.jpg'

const socials = [
  { Icon: MessageCircle, href: 'https://wa.me/923267642918', label: 'WhatsApp', color: 'hover:bg-green-500' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/jarryabdullah_007', label: 'Instagram', color: 'hover:bg-pink-500' },
  { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/muhammadabdullah-va', label: 'LinkedIn', color: 'hover:bg-blue-600' },
  { Icon: FacebookIcon, href: 'https://www.facebook.com/share/1HxfCFS4LS/', label: 'Facebook', color: 'hover:bg-blue-500' },
]

export default function Hero() {
  return (
    <section className="relative min-h-fit md:min-h-screen flex items-center px-6 md:px-12 py-16 md:py-0">
      {/* Premium red ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-red-700/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-red-900/10 blur-[80px]" />
      </div>
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="text-center md:text-left">
          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">Freelance Professional</p>
          <h1 className="font-display uppercase leading-[0.95] text-[12vw] md:text-[5.5vw] tracking-tight">
            Hello, I'm
            <br />
            <span className="text-red-500">Abdullah</span>
          </h1>
          <p className="mt-6 text-zinc-400 max-w-md mx-auto md:mx-0 leading-relaxed">
            Helping US real estate wholesalers and business owners scale with motivated seller leads and high-ROI Facebook & Google ad campaigns.
          </p>

          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            {socials.map(({ Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:border-transparent hover:shadow-lg ${color}`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end mt-2 md:mt-0">
          <div className="w-[220px] md:w-[340px] rounded-[2rem] overflow-hidden border border-white/10 drop-shadow-2xl">
            <img src={profileHero} alt="Muhammad Abdullah" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
