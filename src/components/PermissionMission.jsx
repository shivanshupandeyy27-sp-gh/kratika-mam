import { ArrowRight } from 'lucide-react'
import { Reveal, scrollToId } from '../hooks'
import PermissionCard from './PermissionCard'
import { KARTIKA_NAME } from '../config'

export default function PermissionMission() {
  return (
    <section id="mission" className="section">
      <Reveal>
        <h2 className="title max-w-3xl">Operation: Meet {KARTIKA_NAME} Ma'am 🫡</h2>
        <p className="mt-4 text-cream/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-serif">
          “Ma’am, the courage is loading… because stepping out after curfew just to meet you feels like a proper first-year adventure. 😂”
        </p>
      </Reveal>
      <Reveal className="mt-10">
        <PermissionCard />
      </Reveal>
      <button onClick={() => scrollToId('why')} className="btn-primary mt-10 inline-flex items-center gap-2">
        Mission Continues <ArrowRight size={18} />
      </button>
    </section>
  )
}
