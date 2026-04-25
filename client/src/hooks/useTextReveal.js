import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useTextReveal(ref, options = {}) {
  const {
    duration = 0.8,
    stagger = 0.02,
    ease = 'power2.out',
    triggerOffset = 100
  } = options

  useEffect(() => {
    if (!ref.current) return

    const text = ref.current.innerText
    ref.current.innerHTML = text
      .split('')
      .map(char => `<span class="text-reveal-char" style="opacity: 0;">${char}</span>`)
      .join('')

    const chars = ref.current.querySelectorAll('.text-reveal-char')

    gsap.fromTo(
      chars,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start: `top+=${triggerOffset}px bottom`,
          once: true
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [duration, stagger, ease, triggerOffset])
}
