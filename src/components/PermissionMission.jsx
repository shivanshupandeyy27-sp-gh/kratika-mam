import { useEffect, useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Reveal, useInView, scrollToId } from '../hooks'
import PermissionCard from './PermissionCard'
import { KARTIKA_NAME } from '../config'
export default function PermissionMission() {
  const steps = ['Me', 'Request', 'Hostel Warden', 'Permission', KARTIKA_NAME, 'Freshers Partner? 👀']
  const [ref, seen] = useInView(0.3)
  const [a, setA] = useState(-1)
  useEffect(() => {
    if (!seen) return
    const id = setInterval(() => setA((x) => (x + 1) % (steps.length + 2)), 800)
    return () => clearInterval(id)
  }, [seen, steps.length])
  return (
    <section id="mission" className="section">
      <Reveal><h2 className="title max-w-3xl">Operation: Meet {KARTIKA_NAME} Ma'am 🫡</h2>
        <p className="mt-3 text-blush">First-year curfew is 10 PM, after all.</p>
        <p className="mt-2 text-cream/70 max-w-lg mx-auto">Because showing up outside the hostel without any curfew extension isn't exactly the move.</p></Reveal>
      <div ref={ref} className="mt-10 flex flex-col items-center">
        {steps.map((s, i) => (<div key={s} className="flex flex-col items-center">
          <div className={`px-6 py-2 rounded-full border transition-all duration-500 ${a === i ? 'bg-wine border-gold text-cream scale-110 shadow-[0_0_20px_#d4af6a66]' : 'glass'}`}>{s}</div>
          {i < steps.length - 1 && <ChevronDown className={`my-1 transition-colors ${a > i ? 'text-gold' : 'text-white/20'}`} />}</div>))}
      </div>
      <Reveal><p className="font-serif italic text-xl text-gold my-10">I decided to do things properly.</p></Reveal>
      <Reveal><PermissionCard /></Reveal>
      <button onClick={() => scrollToId('why')} className="btn-primary mt-10 inline-flex items-center gap-2">Mission Continues <ArrowRight size={18} /></button>
    </section>
  )
}
