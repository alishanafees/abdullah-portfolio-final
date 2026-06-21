import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import profileLens from '../assets/profile-lens.jpg'

const colors = [
  { name: 'zinc', value: '#09090b' },
  { name: 'red', value: '#3f0d0d' },
  { name: 'amber', value: '#3f2d0d' },
  { name: 'green', value: '#0d3f1a' },
  { name: 'purple', value: '#2a0d3f' },
  { name: 'rose', value: '#3f0d24' },
]

export default function Portfolio() {
  const sectionRef = useRef(null)
  const clipRef = useRef(null)
  const lensPos = useRef({ x: -300, y: -300 })
  const [bg, setBg] = useState(colors[0].value)
  const [isTouch, setIsTouch] = useState(false)

  // Detect touch/mobile devices — cursor lens effect makes no sense without a mouse
  useEffect(() => {
    const checkTouch = () => {
      const noHover = window.matchMedia('(hover: none), (pointer: coarse)').matches
      setIsTouch(noHover || window.innerWidth < 768)
    }
    checkTouch()
    window.addEventListener('resize', checkTouch)
    return () => window.removeEventListener('resize', checkTouch)
  }, [])

  useEffect(() => {
    if (isTouch) return // skip cursor-tracking entirely on touch devices

    const updateClip = () => {
      if (clipRef.current) {
        clipRef.current.style.clipPath = `circle(150px at ${lensPos.current.x}px ${lensPos.current.y}px)`
      }
    }
    const xTo = gsap.quickTo(lensPos.current, 'x', { duration: 0.5, ease: 'power3', onUpdate: updateClip })
    const yTo = gsap.quickTo(lensPos.current, 'y', { duration: 0.5, ease: 'power3', onUpdate: updateClip })

    const handleMove = (e) => {
      const rect = sectionRef.current.getBoundingClientRect()
      xTo(e.clientX - rect.left)
      yTo(e.clientY - rect.top)
    }
    const handleLeave = () => {
      xTo(-300)
      yTo(-300)
    }

    const el = sectionRef.current
    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [isTouch])

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`relative h-screen w-full overflow-hidden flex items-center justify-center transition-colors duration-700 ${isTouch ? '' : 'cursor-crosshair'}`}
      style={{ backgroundColor: bg }}
    >
      <h1 className="absolute font-display uppercase text-[13vw] md:text-[15vw] leading-none text-white/[0.06] select-none whitespace-nowrap tracking-tight">
        ABDULLAH
      </h1>

      {isTouch ? (
        // Mobile/touch: show the clear photo directly — no cursor to drag a lens with
        <div className="relative flex items-center justify-center">
          <div className="w-[230px] h-[230px] sm:w-[280px] sm:h-[280px] rounded-[2rem] overflow-hidden relative">
            <img src={profileLens} alt="Muhammad Abdullah" className="w-full h-full object-cover" />
            <div className="absolute inset-0 rounded-[2rem] border-2 border-dashed border-red-500/70" />
          </div>
        </div>
      ) : (
        <>
          {/* Blurred base layer — always visible */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[260px] h-[260px] md:w-[400px] md:h-[400px] rounded-[2rem] overflow-hidden blur-lg brightness-[0.55] saturate-[0.6]">
              <img src={profileLens} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Sharp layer — only visible inside the cursor lens */}
          <div ref={clipRef} className="absolute inset-0 flex items-center justify-center" style={{ clipPath: 'circle(0px at -300px -300px)' }}>
            <div className="w-[260px] h-[260px] md:w-[400px] md:h-[400px] rounded-[2rem] overflow-hidden relative">
              <img src={profileLens} alt="Muhammad Abdullah" className="w-full h-full object-cover" />
              <div className="absolute inset-0 rounded-[2rem] border-2 border-dashed border-red-500/70" />
            </div>
          </div>
        </>
      )}

      <p className="absolute bottom-28 text-xs uppercase tracking-[0.3em] text-white/30 select-none px-6 text-center">
        {isTouch ? 'Tap a colour below to set the mood' : 'Move your cursor to find the signal'}
      </p>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-3 rounded-full border border-white/10 z-10">
        {colors.map((c) => (
          <button
            key={c.name}
            onClick={() => setBg(c.value)}
            className="w-6 h-6 rounded-full border-2 border-white/30 hover:scale-125 active:scale-110 transition-transform duration-300"
            style={{ backgroundColor: c.value }}
            aria-label={`Switch background to ${c.name}`}
          />
        ))}
      </div>
    </section>
  )
}
