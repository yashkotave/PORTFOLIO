import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Smooth scroll to section
export const smoothScroll = (targetId, offset = 0) => {
  const target = document.getElementById(targetId)
  if (!target) return

  gsap.to(window, {
    duration: 0.8,
    scrollTo: {
      y: target,
      offsetY: offset
    },
    ease: 'power2.inOut'
  })
}

// Counter animation (0 to target number)
export const animateCounter = (element, targetValue, duration = 2, delimiter = ',') => {
  const obj = { value: 0 }
  gsap.to(obj, {
    value: targetValue,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toLocaleString('en-US')
    }
  })
}

// Text reveal animation
export const revealText = (element, stagger = 0.05) => {
  if (!element) return

  const text = element.innerText
  element.innerHTML = text
    .split('')
    .map(char => `<span class="inline-block">${char}</span>`)
    .join('')

  gsap.fromTo(
    element.querySelectorAll('span'),
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger,
      ease: 'back.out'
    }
  )
}

// Fade in on scroll with stagger
export const fadeInOnScroll = (selector, options = {}) => {
  const {
    duration = 0.8,
    stagger = 0.1,
    delay = 0,
    start = 'top center+=100',
    toggleActions = 'play none none none'
  } = options

  gsap.utils.toArray(selector).forEach((element, index) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration,
        delay: delay + index * stagger,
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions,
          markers: false
        }
      }
    )
  })
}

// Floating animation (continuous)
export const float = (element, distance = 20, duration = 3) => {
  if (!element) return

  gsap.to(element, {
    y: distance,
    duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
}

// Pulse effect
export const pulse = (element, scale = 1.1, duration = 0.6) => {
  if (!element) return

  gsap.to(element, {
    scale,
    opacity: 0.8,
    duration: duration / 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })
}

// Staggered list animation
export const staggerListItems = (containerSelector, itemSelector, options = {}) => {
  const {
    duration = 0.6,
    stagger = 0.1,
    start = 'top center+=50'
  } = options

  const items = document.querySelectorAll(`${containerSelector} ${itemSelector}`)

  gsap.fromTo(
    items,
    { opacity: 0, x: -30 },
    {
      opacity: 1,
      x: 0,
      duration,
      stagger,
      scrollTrigger: {
        trigger: containerSelector,
        start,
        markers: false
      }
    }
  )
}
