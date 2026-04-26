import { motion } from 'framer-motion'
import { personalInfo } from '../config/data'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function About() {
  const stats = [
    { label: 'Projects', value: 7, suffix: '+' },
    { label: 'Experience', value: 90, suffix: ' Days' },
    { label: 'Technologies', value: 15, suffix: '+' },
    { label: 'Happy Clients', value: 100, suffix: '%' }
  ]

  const statRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = statRefs.current.indexOf(entry.target)
          if (index !== -1) {
            const stat = stats[index]
            animateCounter(entry.target.querySelector('[data-counter]'), stat.value)
          }
        }
      })
    }, { threshold: 0.5 })

    statRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const animateCounter = (element, targetValue) => {
    if (!element) return
    let current = 0
    const increment = targetValue / 30
    const interval = setInterval(() => {
      current += increment
      if (current >= targetValue) {
        element.textContent = Math.floor(targetValue)
        clearInterval(interval)
      } else {
        element.textContent = Math.floor(current)
      }
    }, 30)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-[#f8fafc] mb-4 text-center"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="h-1 w-20 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#8b5cf6] rounded-full mx-auto mb-16"
      ></motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side - Profile Image & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
            ></motion.div>
            <div className="relative w-56 h-56 bg-gradient-to-br from-[#0f172a] to-[#030712] rounded-2xl flex items-center justify-center border border-[rgba(59,130,246,0.25)] hover:border-[#3b82f6]/60 transition-all duration-300 shadow-lg">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
                  YASH
                </div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-[#a855f7] to-[#0ea5e9] bg-clip-text text-transparent">
                  KOTAVE
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                ref={el => statRefs.current[i] = el}
                variants={itemVariants}
                className="bg-gradient-to-br from-[#0f172a] to-[#030712] border border-[rgba(59,130,246,0.12)] hover:border-[#3b82f6]/50 rounded-xl p-4 sm:p-6 hover:shadow-lg hover:shadow-[#3b82f6]/15 transition-all duration-300 group cursor-default">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text group-hover:from-[#60a5fa] group-hover:to-[#22d3ee] transition-all duration-300">
                  <span data-counter>0</span>{stat.suffix}
                </div>
                <div className="text-[#94a3b8] text-xs sm:text-sm font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - About Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#94a3b8] leading-relaxed text-sm sm:text-base"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#94a3b8] leading-relaxed text-sm sm:text-base"
          >
            I also build intelligent applications using Agentic AI and Gen AI, leveraging RAG, LangChain, and Gemini API to deliver adaptive, context-aware solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold text-[#f1f5f9]">📍 Location</h3>
            <p className="text-[#94a3b8] text-sm sm:text-base">{personalInfo.location}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold text-[#f1f5f9]">✉️ Contact</h3>
            <a href={`mailto:${personalInfo.email}`} className="text-[#60a5fa] hover:text-[#93c5fd] transition-colors duration-300 text-sm sm:text-base">
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="block text-[#60a5fa] hover:text-[#93c5fd] transition-colors duration-300 text-sm sm:text-base">
              {personalInfo.phone}
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#60a5fa] hover:to-[#a78bfa] text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
