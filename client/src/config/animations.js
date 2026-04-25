/**
 * @file animations.js
 * @description Centralized animation configuration
 * All animation timings, easing functions, and animation presets are managed here
 */

export const animations = {
  // Duration Presets
  duration: {
    instant: 0,
    fast: 0.15,
    base: 0.3,
    slow: 0.6,
    slower: 0.8,
    slowest: 1,
  },

  // Easing Functions
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    easeInExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  },

  // GSAP Easing Shortcuts
  gsapEasing: {
    inOut: 'power2.inOut',
    in: 'power2.in',
    out: 'power2.out',
    back: 'back.out',
    elastic: 'elastic.out',
    none: 'none',
  },

  // Scroll Animations
  scrollAnimations: {
    fadeIn: {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
      duration: 0.8,
      trigger: 'start center+=100',
    },
    slideInLeft: {
      from: { opacity: 0, x: -30 },
      to: { opacity: 1, x: 0 },
      duration: 0.6,
    },
    slideInRight: {
      from: { opacity: 0, x: 30 },
      to: { opacity: 1, x: 0 },
      duration: 0.6,
    },
    scaleIn: {
      from: { opacity: 0, scale: 0.8 },
      to: { opacity: 1, scale: 1 },
      duration: 0.6,
    },
  },

  // Hover Animations
  hover: {
    scale: 1.05,
    scaleLarge: 1.15,
    shadowBlur: 20,
    shadowColor: '#6366f1',
    shadowIntensity: 0.2,
    duration: 0.3,
  },

  // Staggered Animation Settings
  stagger: {
    sm: 0.05,    // 50ms between items
    md: 0.1,     // 100ms between items
    lg: 0.15,    // 150ms between items
    xl: 0.2,     // 200ms between items
  },

  // Page Transitions
  pageTransition: {
    duration: 0.5,
    ease: 'power2.inOut',
  },

  // Floating Animation
  float: {
    distance: 20,
    duration: 3,
    ease: 'sine.inOut',
  },

  // Parallax
  parallax: {
    speed: 0.5,
    scrubIntensity: 1.5,
  },

  // Counter Animation
  counter: {
    duration: 2,
    ease: 'power2.out',
    increment: 30, // Updates per 30ms
  },

  // Pulse Animation
  pulse: {
    scale: 1.1,
    duration: 0.6,
    ease: 'power1.inOut',
  },

  // Bounce Animation
  bounce: {
    duration: 0.6,
    ease: 'elastic.out(1.2, 0.75)',
  },
}

export default animations
