import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { KARTIKA_NAME } from '../config'
import { scrollToId } from '../hooks'
export default function Hero() {
  const [show, setShow] = useState(false)
  useEffect(() => { const t = setTimeout(() => setShow(true), 2800); return () => clearTimeout(t) }, [])
  const dots = useMemo(() => Array.from({ length: 36 }, () => ({
    l: Math.random() * 100, t: Math.random() * 100, s: 2 + Math.random() * 4, d: Math.random() * 5, f: Math.random() > 0.6 })), [])
  return (
    <section id="hero" className="section overflow-hidden">
      {dots.map((p, i) => <span key={i} className={`absolute rounded-full bg-gold/70 animate-glow ${p.f ? 'animate-float' : ''}`}
        style={{ left: `${p.l}%`, top: `${p.t}%`, width: p.s, height: p.s, animationDelay: `${p.d}s`, boxShadow: '0 0 12px #d4af6a' }} />)}
      <Sparkles className="text-gold animate-float mb-6" />
      <h1 className="title text-4xl sm:text-7xl">Good Evening <span className="text-blush">{KARTIKA_NAME}</span> Ma'am 👋</h1>
      <p className="mt-6 max-w-xl text-cream/80 text-base sm:text-lg leading-relaxed">
        I've got a small question that might make my Freshers a lot more memorable… 👀😂<br />
        Would you give me the honour of having your company for the evening? 😌✨
      </p>
      <p className={`mt-6 font-serif italic text-gold text-lg transition-all duration-1000 ${show ? 'opacity-100' : 'opacity-0 translate-y-3'}`}>
        Actually... it's related to Freshers.
      </p>
      <button onClick={() => scrollToId('story')} className={`btn-primary mt-10 inline-flex items-center gap-2 transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        Okay, What's the Plan? <ArrowRight size={18} />
      </button>
    </section>
  )
}
