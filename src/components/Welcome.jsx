import { useState, useRef } from 'react'
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Professional Connections', value: '500+' },
  { label: 'Certified By', value: 'Google' },
]

const expertise = ['Off-Market Lead Sourcing', 'Skip Tracing & Data Mining', 'Facebook & Google Ads', 'SEO Strategy']

const testimonials = [
  { name: 'James Mitchell', role: 'Real Estate Wholesaler, Texas', quote: 'Abdullah\'s Google Ads campaign brought us 3x more motivated seller leads in the very first month. Best investment I made for my wholesale business.' },
  { name: 'Sarah Thompson', role: 'Property Investor, Florida', quote: 'Finally found someone who actually understands off-market lead generation. Our pipeline is consistently full now. Absolutely worth every penny.' },
  { name: 'Michael Davis', role: 'Real Estate Entrepreneur, Ohio', quote: 'The Facebook ads he ran for us were incredibly targeted. Our cost per lead dropped by 40% while quality went up. Genuinely impressive work.' },
  { name: 'Robert Wilson', role: 'Wholesale Buyer, California', quote: 'Abdullah\'s skip tracing and data mining saved us countless hours of manual work. Fast, accurate, and always professional. Highly recommend.' },
  { name: 'Jennifer Clark', role: 'Small Business Owner, New York', quote: 'We struggled with SEO for months. Abdullah fixed our entire strategy within weeks and we\'re now ranking on the first page of Google. Game changer.' },
  { name: 'David Martinez', role: 'Property Wholesaler, Arizona', quote: 'Delivered exactly what he promised — no fluff, no excuses. Our motivated seller list grew significantly and deals started closing faster.' },
]

export default function Welcome() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(0)

  const go = (dir) => setActive((a) => (a + dir + testimonials.length) % testimonials.length)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1)
  }

  return (
    <section id="about" className="relative bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-display uppercase text-[14vw] md:text-[9vw] leading-none text-white/[0.07] absolute inset-x-0 -top-10 select-none">
          WELCOME
        </h2>
        <div className="relative pt-20 md:pt-28">
          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-6">To my creative space</p>
          <p className="text-2xl md:text-3xl font-medium text-zinc-200 leading-relaxed mb-10">
            Are you a US-based real estate wholesaler or business owner struggling to find motivated sellers and scale revenue through ads?
          </p>
          <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12">
            I'm Muhammad Abdullah — a dual-threat professional combining real estate lead generation with high-ROI digital marketing.
            I build complete systems that bring motivated sellers directly into your pipeline, instead of just running ads or pulling lists in isolation.
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto mb-16">
            {stats.map((s) => (
              <div key={s.label} className="border border-white/10 rounded-2xl py-5 md:py-6 px-2 md:px-3 bg-white/[0.02]">
                <p className="font-display text-2xl md:text-4xl text-red-500">{s.value}</p>
                <p className="text-[10px] md:text-xs uppercase tracking-wide text-zinc-500 mt-2">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm text-zinc-400">
            {expertise.map((item) => (
              <span key={item} className="flex items-center gap-2 border border-white/10 rounded-full px-4 py-2">
                <CheckCircle2 size={14} className="text-red-500" /> {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-zinc-500 mb-8 px-6">Client Love — What People Are Saying</p>

        <div className="max-w-xl mx-auto px-6" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 md:p-8 min-h-[230px] flex flex-col justify-between">
            <p className="text-zinc-300 text-base leading-relaxed italic">"{testimonials[active].quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center text-sm text-red-500 font-semibold shrink-0">
                {testimonials[active].name.charAt(0)}
              </div>
              <div>
                <p className="text-sm text-white">{testimonials[active].name}</p>
                <p className="text-xs text-zinc-500">{testimonials[active].role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={() => go(-1)}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-red-600 hover:border-transparent transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-red-600' : 'w-2 bg-white/20'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-red-600 hover:border-transparent transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
