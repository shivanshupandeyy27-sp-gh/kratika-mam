import { useEffect, useState } from 'react'
import { Reveal, useInView } from '../hooks'
export default function CourageSection() {
  const [ref, seen] = useInView(0.5)
  const [p, setP] = useState(10)
  useEffect(() => {
    if (!seen) return
    let x = 10
    const id = setInterval(() => { x = Math.min(100, x + Math.random() * 6 + 2); setP(Math.round(x)); if (x >= 100) clearInterval(id) }, 130)
    return () => clearInterval(id)
  }, [seen])
  const filled = Math.floor(p / 10)
  return (
    <section id="courage" className="section">
      <Reveal><h2 className="title">Then Came The Difficult Part...</h2></Reveal>
      <Reveal delay={200}><p className="mt-8 text-cream/80 text-lg">Approaching a senior is already intimidating...</p></Reveal>
      <Reveal delay={600}><p className="mt-3 text-xl sm:text-2xl font-serif text-blush">Approaching YOU was a whole different level. 😭</p></Reveal>
      <div ref={ref} className="glass p-6 mt-12 w-full max-w-md">
        <div className="flex justify-between text-sm text-gold tracking-widest mb-3"><span>COURAGE LEVEL</span><span>{p}%</span></div>
        <div className="flex gap-1">{Array.from({ length: 10 }).map((_, i) =>
          <div key={i} className={`h-4 flex-1 rounded-sm transition-all duration-300 ${i < filled ? 'bg-gradient-to-r from-wine to-blush shadow-[0_0_10px_#f4b6c2]' : 'bg-white/10'}`} />)}</div>
        <p className={`mt-5 font-serif text-xl transition-opacity duration-700 ${p >= 100 ? 'opacity-100' : 'opacity-0'}`}>Okay. Let's do this. 🫡</p>
      </div>
    </section>
  )
}
