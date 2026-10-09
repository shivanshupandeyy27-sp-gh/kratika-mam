import { Reveal } from '../hooks'
export default function WhyKartika() {
  const cards = [
    { n: '01', t: 'Vibe ✨', d: "Because I think we'd make a pretty good Freshers duo, and I'd like to apologise for accidentally ghosting you." },
    { n: '02', t: 'Confidence 😎', d: 'You seem like someone who can handle the chaos of Freshers better than I can.' },
    { n: '03', t: 'The Actual Reason 👀', d: 'Honestly... I just thought it would be fun to ask you.' },
  ]
  return (
    <section id="why" className="section">
      <Reveal><h2 className="title">Okay... But Why You?</h2></Reveal>
      <div className="grid gap-5 sm:grid-cols-3 max-w-5xl mt-12">
        {cards.map((c, i) => (<Reveal key={c.n} delay={i * 150}>
          <div className="glass p-6 h-full text-left hover:-translate-y-2 hover:border-gold/50 transition-all duration-300">
            <p className="text-gold font-serif text-4xl">{c.n}</p><h3 className="font-serif text-xl mt-2">{c.t}</h3><p className="mt-3 text-cream/80">{c.d}</p></div></Reveal>))}
      </div>
      <Reveal delay={400}><p className="mt-10 text-cream/60 italic">No complicated reasons. No dramatic story. Just a genuine invitation.</p></Reveal>
    </section>
  )
}
