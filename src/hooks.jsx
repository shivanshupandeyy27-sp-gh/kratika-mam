import { useEffect, useRef, useState } from 'react'
export function useInView(threshold = 0.35) {
  const ref = useRef(null); const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold })
    io.observe(el); return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}
export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, seen] = useInView(0.2)
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
    className={`transition-all duration-700 ${seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}>{children}</div>
}
export const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
