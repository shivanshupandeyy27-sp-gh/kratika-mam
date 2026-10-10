import { useState } from 'react'
import { Sparkles, Users, PartyPopper, GlassWater, Flame, Compass, Laugh, MoreHorizontal } from 'lucide-react'
import { Reveal } from '../hooks'

const items = [
  [Sparkles, 'Good Memories'],
  [PartyPopper, 'Making Memories'],
  [Users, 'Good Company'],
  [GlassWater, 'Minty Mocktails'],
  [Flame, 'Worth the Risk'],
  [Compass, 'Emergency Guidance'],
  [Laugh, 'Random Freshers Chaos'],
  [MoreHorizontal, 'Etc. ✨'],
]

export default function FreshersPlan() {
  const [on, setOn] = useState([])
  const toggle = (i) => setOn((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]))

  return (
    <section id="plan" className="section">
      <Reveal>
        <h2 className="title">Imagine This...</h2>
        <p className="text-cream/80 mt-3 max-w-xl mx-auto text-base sm:text-lg font-serif">
          good memories, making memories, good company, minty mocktails, worth the Risk, emergency guidance, random freshers chaos, etc.
        </p>
        <p className="text-cream/50 text-xs mt-1">(tap what sounds good)</p>
      </Reveal>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mt-10">
        {items.map(([Icon, label], i) => (
          <button
            key={label}
            onClick={() => toggle(i)}
            className={`glass p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 ${on.includes(i) ? 'bg-wine/60 border-gold shadow-[0_0_20px_#d4af6a44] scale-105' : ''}`}
          >
            <Icon className={on.includes(i) ? 'text-gold' : 'text-blush'} />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
      <p className="mt-6 text-gold h-6">{on.length > 0 && `${on.length}/${items.length} approved 😌`}</p>
      <Reveal><p className="font-serif text-2xl mt-6 text-blush">Sounds more fun with your company, doesn't it?</p></Reveal>
    </section>
  )
}
