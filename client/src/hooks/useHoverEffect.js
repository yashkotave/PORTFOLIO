import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const useHoverEffect = (options = {}) => {
  const ref = useRef(null)
  const {
    scale = 1.05,
    duration = 0.3,
    ease = 'power2.out',
    shadowBlur = 20,
    shadowColor = '#6366f1'
  } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale,
        boxShadow: `0 20px ${shadowBlur}px ${shadowColor}30`,
        duration,
        ease
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        duration,
        ease
      })
    }

    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [scale, duration, ease, shadowBlur, shadowColor])

  return ref
}
