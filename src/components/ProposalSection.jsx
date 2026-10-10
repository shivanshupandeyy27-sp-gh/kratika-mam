import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { useInView, scrollToId } from '../hooks'
import { KARTIKA_NAME } from '../config'

export default function ProposalSection() {
  const [ref, seen] = useInView(0.5)
  const [ask, setAsk] = useState(false)
  const [ans, setAns] = useState(null)
  useEffect(() => { if (!seen) return; const t = setTimeout(() => setAsk(true), 1800); return () => clearTimeout(t) }, [seen])

  const handleChoice = (choice) => {
    setAns(choice)
    const burst = (o) => confetti({ particleCount: 90, spread: 80, colors: ['#d4af6a', '#f4b6c2', '#f7efe6', '#5b1230'], ...o })
    burst({ origin: { x: 0.2, y: 0.7 } })
    burst({ origin: { x: 0.8, y: 0.7 } })
    setTimeout(() => burst({ origin: { x: 0.5, y: 0.5 }, particleCount: 160 }), 400)
  }

  return (
    <section id="ask" ref={ref} className="section">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wine/30 to-transparent pointer-events-none" />
      <h2 className="title relative">So, {KARTIKA_NAME} Ma'am...</h2>
      <div className={`relative transition-all duration-1000 ${ask ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="font-serif font-bold text-3xl sm:text-5xl mt-8 text-blush leading-tight drop-shadow-[0_0_25px_#f4b6c255] max-w-3xl mx-auto">
          “Would you allow your junior the privilege of taking you out for a Freshers evening — before he loses his courage? 😭😂”
        </p>
        <p className="mt-6 text-gold">Just for Freshers. No other contracts. I promise. 😂</p>
        {!ans && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button onClick={() => handleChoice('senior')} className="btn-primary text-base sm:text-lg px-6 py-3">
              YES, YOU GOT YOUR SENIOR! 😎🎉
            </button>
            <button onClick={() => handleChoice('taste')} className="btn-primary text-base sm:text-lg px-6 py-3">
              YES, THIS JUNIOR HAS GOOD TASTE! 😂
            </button>
          </div>
        )}
        {ans && (
          <div className="glass p-8 mt-10 max-w-lg mx-auto">
            <p className="font-serif text-4xl">LET'S GOOOO! 🎉</p>
            <p className="mt-3 text-lg">
              {ans === 'senior' ? "YES! You got your senior! 😎🎉" : "Agreed! This junior definitely has good taste! 😂"}
            </p>
            <p className="mt-2 text-gold">I'll take care of the courage. You bring the vibe. 😎</p>
            <button onClick={() => scrollToId('final')} className="btn-ghost mt-6">One last thing ↓</button>
          </div>
        )}
      </div>
    </section>
  )
}
