import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function useMorphEffect(ref, options = {}) {
  const {
    colors = ['#6366f1', '#a855f7', '#0ea5e9'],
    duration = 0.5,
    loop = true
  } = options

  useEffect(() => {
    if (!ref.current) return

    let colorIndex = 0

    const morphColor = () => {
      gsap.to(ref.current, {
        backgroundColor: colors[colorIndex % colors.length],
        duration,
        ease: 'sine.inOut',
        onComplete: () => {
          colorIndex++
          if (loop) morphColor()
        }
      })
    }

    morphColor()

    return () => {
      gsap.killTweensOf(ref.current)
    }
  }, [colors, duration, loop])
}
