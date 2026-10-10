import { Reveal } from '../hooks'
import { MY_NAME, KARTIKA_NAME } from '../config'

export default function FinalSection() {
  return (
    <section id="final" className="section min-h-[80vh]">
      <Reveal><p className="font-serif italic text-gold text-xl">Whatever your answer…</p></Reveal>
      <Reveal delay={200}><h2 className="title mt-4 max-w-2xl">Thank you for hearing me out, {KARTIKA_NAME} Ma’am. ❤️</h2></Reveal>
      <Reveal delay={400}><p className="mt-6 text-cream/90 max-w-xl text-lg sm:text-xl font-serif">And, of course, a special thanks to Mihir Sir for giving me the green light to make this slightly courageous attempt. 😂🫡</p></Reveal>
      <Reveal delay={600}><p className="mt-4 text-cream/80 max-w-lg">Hopefully, this becomes the start of some great memories, lots of laughs, and a memorable Freshers evening. 🎉</p></Reveal>
      <Reveal delay={800}><p className="font-serif text-2xl text-blush mt-8">— {MY_NAME}</p></Reveal>
      <footer className="absolute bottom-6 text-xs text-cream/40 px-4">Made with courage, questionable levels of planning, and a Freshers event in mind. 😭😂</footer>
    </section>
  )
}
