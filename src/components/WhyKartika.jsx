import { Reveal } from '../hooks'

export default function WhyKartika() {
  const cards = [
    {
      n: '01',
      t: "Why You're the Main Character 👀",
      d: "You seemed like someone I’d genuinely enjoy having as a senior — and hopefully, a good bond could come along with it",
    },
    {
      n: '02',
      t: 'My Slightly Embarrassing Plot Twist 😭',
      d: 'And also… a small apology for mistakenly ghosting you and I somehow assumed you were my city senior. 😭🌻',
    },
    {
      n: '03',
      t: 'The Fun Part',
      d: 'Honestly, Ma’am… I could’ve made a very serious list of reasons, but I thought asking you would be much more fun.',
    },
  ]

  return (
    <section id="why" className="section">
      <Reveal><h2 className="title">Why You? Let Me Explain Myself… 😂</h2></Reveal>
      <div className="grid gap-5 sm:grid-cols-3 max-w-5xl mt-12">
        {cards.map((c, i) => (
          <Reveal key={c.n} delay={i * 150}>
            <div className="glass p-6 h-full text-left hover:-translate-y-2 hover:border-gold/50 transition-all duration-300">
              <p className="text-gold font-serif text-4xl">{c.n}</p>
              <h3 className="font-serif text-xl mt-2">{c.t}</h3>
              <p className="mt-3 text-cream/80">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={400}><p className="mt-10 text-cream/60 italic">No complicated reasons. No dramatic story. Just a genuine invitation.</p></Reveal>
    </section>
  )
}
