import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const services = [
  { title: 'Off-Market Lead Sourcing', tag: 'Real Estate', color: '#84cc16', description: 'Distressed, pre-foreclosure, FSBO, vacant & high-equity property leads, sourced directly for your pipeline.' },
  { title: 'Skip Tracing & Data Mining', tag: 'Data', color: '#3b82f6', description: 'Accurate owner contact info via TruePeopleSearch, CyberBackgroundChecks, Zillow, Redfin & county records.' },
  { title: 'Facebook & Google Ads', tag: 'Paid Media', color: '#ff4500', description: 'High-ROI ad campaigns built to target motivated sellers and convert clicks into qualified leads.' },
  { title: 'SEO for Cash Buyers', tag: 'Organic', color: '#eab308', description: 'Local SEO strategy that ranks your "we buy houses" site for the cash buyer keywords that matter.' },
  { title: 'Lead Pipeline Management', tag: 'Operations', color: '#ef4444', description: 'Clean, organized lead sheets and reporting — from sourcing all the way to delivery.' },
  { title: '"We Buy Houses" Funnels', tag: 'Conversion', color: '#22d3ee', description: 'Funnel creation and optimization built specifically to convert motivated sellers into signed deals.' },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(0)

  const go = (dir) => setActive((a) => (a + dir + services.length) % services.length)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1)
  }

  return (
    <section id="services" className="relative bg-zinc-950 py-28 overflow-hidden">
      <h2 className="absolute inset-x-0 top-4 text-center font-display uppercase text-[14vw] md:text-[9vw] leading-none text-white/[0.05] select-none">
        SERVICES
      </h2>

      <div className="relative max-w-6xl mx-auto px-6">
        <p className="text-center text-red-500 uppercase tracking-[0.3em] text-sm mb-3">What I Offer</p>
        <h3 className="text-center font-display uppercase text-3xl md:text-5xl text-white mb-16">Services Built To Convert</h3>

        <div
          className="relative h-[420px] md:h-[460px] flex items-center justify-center"
          style={{ perspective: '1200px' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {services.map((s, i) => {
            let offset = i - active
            if (offset > services.length / 2) offset -= services.length
            if (offset < -services.length / 2) offset += services.length
            const isVisible = Math.abs(offset) <= 2

            return (
              <div
                key={s.title}
                className="absolute w-[72vw] sm:w-[260px] md:w-[320px] h-[380px] md:h-[400px] rounded-[28px] border border-white/10 backdrop-blur-md p-6 md:p-7 flex flex-col justify-between transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${offset * 65}%) translateZ(${-Math.abs(offset) * 120}px) rotateY(${offset * -12}deg) scale(${1 - Math.abs(offset) * 0.15})`,
                  opacity: isVisible ? 1 - Math.abs(offset) * 0.35 : 0,
                  zIndex: 10 - Math.abs(offset),
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  pointerEvents: offset === 0 ? 'auto' : 'none',
                }}
              >
                <div>
                  <span
                    className="inline-block text-xs uppercase tracking-wide px-3 py-1 rounded-full mb-5"
                    style={{ backgroundColor: `${s.color}33`, color: s.color }}
                  >
                    {s.tag}
                  </span>
                  <h4 className="text-white text-xl md:text-2xl font-semibold leading-snug mb-3">{s.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.description}</p>
                </div>
                <div className="h-1.5 w-12 rounded-full" style={{ backgroundColor: s.color }} />
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => go(-1)}
            className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-red-600 hover:text-zinc-950 hover:border-transparent transition-all duration-300"
            aria-label="Previous service"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-red-600' : 'w-2 bg-white/20'}`}
                aria-label={`Go to service ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-red-600 hover:text-zinc-950 hover:border-transparent transition-all duration-300"
            aria-label="Next service"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
