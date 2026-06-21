import { ShieldCheck, ExternalLink } from 'lucide-react'

const credentials = [
  {
    title: 'AI-Powered Performance Ads Certification',
    issuer: 'Google',
    issued: 'Feb 2026',
    expires: 'Feb 2027',
    id: '174938925',
    color: '#4285F4',
    link: 'https://skillshop.credential.net/25443028-16bf-4745-bf54-b46beb5f866d#acc.OjDiKZFM',
  },
  {
    title: 'Certificate of Registration — Freelancer',
    issuer: 'Pakistan Software Export Board (PSEB)',
    issued: 'Feb 2026',
    expires: 'Jan 2027',
    id: 'FL21/PSEB/2026/23869',
    color: '#facc15',
    link: 'https://portal.techdestination.com/verify-certificate/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpc3RyYXRpb25ObyI6IkZMMjEvUFNFQi8yMDI2LzIzODY5IiwidHlwZSI6ImZyZWVsYW5jZXIiLCJpYXQiOjE3NzIwMTc4NjMsImV4cCI6MTc3OTc5Mzg2M30.VfhTT0NMKp2Erhr-PNb-8_8X2yQcgBkpMQCisNZEqj8',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    issued: 'May 2026',
    expires: null,
    id: null,
    color: '#00bceb',
    link: 'https://www.credly.com/badges/e2527513-d658-416b-9b1b-590aa20c3996/linked_in_profile',
  },
]

export default function Credentials() {
  return (
    <section id="credentials" className="relative bg-zinc-950 text-white py-28 overflow-hidden">
      <h2 className="absolute inset-x-0 top-6 text-center font-display uppercase text-[14vw] md:text-[10vw] leading-none text-white/[0.04] select-none">
        Verified
      </h2>
      <div className="relative max-w-6xl mx-auto px-6">
        <p className="text-center text-red-600 uppercase tracking-[0.3em] text-sm mb-3">Credentials</p>
        <h3 className="text-center font-display uppercase text-3xl md:text-5xl mb-16 text-white">Certified &amp; Registered</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((c, i) => (
            <div
              key={c.title}
              className="group relative bg-zinc-900 rounded-[28px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-white/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${c.color}1A` }}>
                <ShieldCheck size={26} style={{ color: c.color }} />
              </div>
              <h4 className="font-semibold text-lg leading-snug mb-2">{c.title}</h4>
              <p className="text-sm text-zinc-400 mb-4">{c.issuer}</p>
              <div className="text-xs text-zinc-500 space-y-1 mb-6">
                <p>
                  Issued {c.issued}
                  {c.expires ? ` · Expires ${c.expires}` : ''}
                </p>
                {c.id && <p>ID: {c.id}</p>}
              </div>
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-red-500 transition-colors"
              >
                Verify credential <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
