import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null)
  const {
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
    duration = 0.8,
    stagger = 0,
    trigger = 'start center+=100',
    toggleActions = 'play none none none'
  } = options

  useEffect(() => {
    if (!ref.current) return

    const targets = ref.current.querySelectorAll('[data-scroll-animate]')
    if (targets.length === 0) return

    gsap.fromTo(
      targets,
      from,
      {
        ...to,
        duration,
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start: trigger,
          toggleActions,
          markers: false
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === ref.current) t.kill()
      })
    }
  }, [from, to, duration, stagger, trigger, toggleActions])

  return ref
}
