import { Lightbulb, Eye, UserCheck } from 'lucide-react'
import { Reveal } from '../hooks'
import { KARTIKA_NAME } from '../config'
export default function StoryTimeline() {
  const steps = [
    { n: '01', Icon: Lightbulb, t: 'The Idea 💡', d: 'I needed a company for the Freshers evening.' },
    { n: '02', Icon: Eye, t: 'The Search 👀', d: "Then I thought… why not ask someone I've already managed to have a slightly weird first meeting with? 😅" },
    { n: '03', Icon: UserCheck, t: 'The Choice', d: 'And somehow, your name came to mind. So I decided to take a tiny risk and ask.', big: true },
  ]
  return (
    <section id="story" className="section">
      <Reveal><h2 className="title max-w-2xl">I thought of you as my city senior… and then I accidentally ghosted you? 😭</h2></Reveal>
      <div className="relative mt-14 max-w-xl w-full text-left">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-gold/70 to-transparent" />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 150} className="relative pl-16 pb-10">
            <div className="absolute left-0 top-1 w-10 h-10 rounded-full glass flex items-center justify-center text-gold"><s.Icon size={18} /></div>
            <div className="glass p-5 hover:-translate-y-1 hover:border-gold/40 transition-all">
              <p className="text-gold text-xs tracking-[0.3em]">STEP {s.n}</p>
              <h3 className="font-serif text-xl mt-1">{s.t}</h3>
              <p className="text-cream/80 mt-2">{s.d}</p>
              {s.big && <p className="font-serif text-3xl text-blush mt-4">{KARTIKA_NAME} Ma'am.</p>}
            </div>
          </Reveal>
        ))}
        <Reveal delay={200} className="pl-16"><p className="italic text-cream/70">At this point, I knew I was about to send the most awkward ask-out of my life… that I regret it later, but now you have one of the memory of us that — A first year junior ghost his 4th year senior. 😂</p></Reveal>
      </div>
    </section>
  )
}
