import { useState } from 'react'
import { Mic, GlassWater, Camera, Laugh, Music, PartyPopper, Pizza } from 'lucide-react'
import { Reveal } from '../hooks'
const items = [
  [Mic, 'Stage Moments'], [GlassWater, 'Minty Mocktails'], [Camera, 'Pictures'], [Laugh, 'Random Freshers Chaos'],
  [Music, 'Dancing / Events'], [PartyPopper, 'Making Memories'], [Pizza, 'Post-event Food'],
]
export default function FreshersPlan() {
  const [on, setOn] = useState([])
  const toggle = (i) => setOn((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]))
  return (
    <section id="plan" className="section">
      <Reveal><h2 className="title">Imagine This...</h2><p className="text-cream/60 mt-2">(tap what sounds good)</p></Reveal>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mt-10">
        {items.map(([Icon, label], i) => (
          <button key={label} onClick={() => toggle(i)}
            className={`glass p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 ${on.includes(i) ? 'bg-wine/60 border-gold shadow-[0_0_20px_#d4af6a44] scale-105' : ''}`}>
            <Icon className={on.includes(i) ? 'text-gold' : 'text-blush'} /><span className="text-sm">{label}</span></button>))}
      </div>
      <p className="mt-6 text-gold h-6">{on.length > 0 && `${on.length}/${items.length} approved 😌`}</p>
      <Reveal><p className="font-serif text-2xl mt-6 text-blush">Sounds more fun with your company, doesn't it?</p></Reveal>
    </section>
  )
}
