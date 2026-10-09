import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { useInView, scrollToId } from '../hooks'
import { KARTIKA_NAME } from '../config'
export default function ProposalSection() {
  const [ref, seen] = useInView(0.5)
  const [ask, setAsk] = useState(false)
  const [ans, setAns] = useState(null)
  useEffect(() => { if (!seen) return; const t = setTimeout(() => setAsk(true), 1800); return () => clearTimeout(t) }, [seen])
  const yes = () => {
    setAns('yes')
    const burst = (o) => confetti({ particleCount: 90, spread: 80, colors: ['#d4af6a', '#f4b6c2', '#f7efe6', '#5b1230'], ...o })
    burst({ origin: { x: 0.2, y: 0.7 } }); burst({ origin: { x: 0.8, y: 0.7 } }); setTimeout(() => burst({ origin: { x: 0.5, y: 0.5 }, particleCount: 160 }), 400)
  }
  return (
    <section id="ask" ref={ref} className="section">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wine/30 to-transparent pointer-events-none" />
      <h2 className="title relative">So, {KARTIKA_NAME} Ma'am...</h2>
      <div className={`relative transition-all duration-1000 ${ask ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="font-serif font-bold text-4xl sm:text-6xl mt-8 text-blush leading-tight drop-shadow-[0_0_25px_#f4b6c255]">Would You Be My Fresher's Companion? ❤️</p>
        <p className="mt-6 text-gold">Just for Freshers. No other contracts. I promise. 😂</p>
        {!ans && <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button onClick={yes} className="btn-primary text-lg">YES, LET'S DO IT! 🎉</button>
          <button onClick={() => setAns('talk')} className="btn-ghost text-lg">LET'S TALK ABOUT IT 🙂</button></div>}
        {ans === 'yes' && <div className="glass p-8 mt-10 max-w-lg mx-auto">
          <p className="font-serif text-4xl">LET'S GOOOO! 🎉</p><p className="mt-3 text-lg">Looks like we have a Freshers plan!</p>
          <p className="mt-2 text-gold">I'll take care of the courage. You bring the vibe. 😎</p>
          <button onClick={() => scrollToId('final')} className="btn-ghost mt-6">One last thing ↓</button></div>}
        {ans === 'talk' && <div className="glass p-8 mt-10 max-w-lg mx-auto">
          <p className="font-serif text-4xl">Absolutely!</p><p className="mt-3 text-lg">No pressure at all. Just say YES to your junior ma'am.</p>
          <div className="flex gap-3 justify-center mt-6"><button onClick={yes} className="btn-primary">Okay, YES 🎉</button>
            <button onClick={() => scrollToId('final')} className="btn-ghost">Continue ↓</button></div></div>}
      </div>
    </section>
  )
}
