/**
 * @file animations.js
 * @description Centralized animation configuration with smooth professional animations
 * All animation timings, easing functions, and animation presets are managed here
 */

export const animations = {
  // Duration Presets
  duration: {
    instant: 0,
    fast: 0.2,
    base: 0.4,
    slow: 0.7,
    slower: 0.9,
    slowest: 1.2,
  },

  // Premium Easing Functions for Smooth Motion
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    // Premium smooth curves
    smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    smoothIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
    smoothOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    // Advanced easing for professional feel
    easeInExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    easeOutCubic: 'cubic-bezier(0.33, 0.66, 0.66, 1)',
    easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    // Subtle bounce effects
    easeOutElastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  },

  // GSAP Easing Shortcuts - Premium animations
  gsapEasing: {
    inOut: 'power3.inOut',
    in: 'power3.in',
    out: 'power3.out',
    smooth: 'power2.inOut',
    smoothOut: 'power2.out',
    back: 'back.out(1.2)',
    elastic: 'elastic.out(1, 0.5)',
    none: 'none',
  },

  // Scroll Animations - Smooth entry effects
  scrollAnimations: {
    fadeIn: {
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, y: 0 },
      duration: 0.8,
      trigger: 'start center+=100',
    },
    slideInLeft: {
      from: { opacity: 0, x: -40 },
      to: { opacity: 1, x: 0 },
      duration: 0.7,
    },
    slideInRight: {
      from: { opacity: 0, x: 40 },
      to: { opacity: 1, x: 0 },
      duration: 0.7,
    },
    scaleIn: {
      from: { opacity: 0, scale: 0.85 },
      to: { opacity: 1, scale: 1 },
      duration: 0.7,
    },
    revealUp: {
      from: { opacity: 0, y: 60 },
      to: { opacity: 1, y: 0 },
      duration: 0.9,
    },
  },

  // Hover Animations - Smooth interactive feedback
  hover: {
    scale: 1.03,
    scaleLarge: 1.08,
    shadowBlur: 20,
    shadowColor: '#06b6d4',
    shadowIntensity: 0.25,
    duration: 0.35,
  },

  // Staggered Animation Settings - Smooth cascading effects
  stagger: {
    xs: 0.03,    // 30ms between items
    sm: 0.06,    // 60ms between items
    md: 0.12,    // 120ms between items
    lg: 0.18,    // 180ms between items
    xl: 0.24,    // 240ms between items
  },

  // Page Transitions - Smooth page-to-page transitions
  pageTransition: {
    duration: 0.6,
    ease: 'power3.inOut',
  },

  // Floating Animation - Smooth gentle floating
  float: {
    distance: 15,
    duration: 4,
    ease: 'sine.inOut',
  },

  // Parallax - Smooth depth effect
  parallax: {
    speed: 0.4,
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
