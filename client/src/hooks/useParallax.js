import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useParallax = (speed = 0.5) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      y: `${speed * 100}px`,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top center',
        scrub: 1.5,
        markers: false
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === ref.current) t.kill()
      })
    }
  }, [speed])

  return ref
}
