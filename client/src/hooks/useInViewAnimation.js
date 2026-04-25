import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useInViewAnimation(ref, options = {}) {
  const {
    animation = 'fadeIn',
    duration = 0.6,
    delay = 0,
    stagger = 0,
    once = true
  } = options

  useEffect(() => {
    if (!ref.current) return

    const animations = {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      slideInUp: {
        from: { opacity: 0, y: 40 },
        to: { opacity: 1, y: 0 }
      },
      slideInDown: {
        from: { opacity: 0, y: -40 },
        to: { opacity: 1, y: 0 }
      },
      slideInLeft: {
        from: { opacity: 0, x: -40 },
        to: { opacity: 1, x: 0 }
      },
      slideInRight: {
        from: { opacity: 0, x: 40 },
        to: { opacity: 1, x: 0 }
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 }
      },
      rotateIn: {
        from: { opacity: 0, rotate: -10 },
        to: { opacity: 1, rotate: 0 }
      }
    }

    const selectedAnimation = animations[animation] || animations.fadeIn

    gsap.fromTo(
      ref.current,
      selectedAnimation.from,
      {
        ...selectedAnimation.to,
        duration,
        delay,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          once
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animation, duration, delay, stagger, once])
}
