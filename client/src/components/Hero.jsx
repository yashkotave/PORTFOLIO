import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { personalInfo } from '../config/data'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Full Stack Developer"
  const bgRef = useRef(null)
  const secondBgRef = useRef(null)

  // Enhanced typing effect with better pacing
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1))
        index++
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  // Enhanced parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current || !secondBgRef.current) return
      const x = (e.clientX / window.innerWidth) * 20
      const y = (e.clientY / window.innerHeight) * 20

      gsap.to(bgRef.current, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.9,
        ease: 'power2.out'
      })

      gsap.to(secondBgRef.current, {
        x: x * 0.6,
        y: y * 0.6,
        duration: 0.9,
        ease: 'power2.out'
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced gradient backgrounds with professional colors */}
      <div
        ref={bgRef}
        className="absolute w-96 h-96 bg-gradient-to-tr from-[#3b82f6]/20 to-[#8b5cf6]/15 rounded-full blur-3xl -z-10 top-1/4 left-1/2 -translate-x-1/2"
      ></div>

      <div
        ref={secondBgRef}
        className="absolute w-80 h-80 bg-gradient-to-br from-[#06b6d4]/20 to-[#3b82f6]/15 rounded-full blur-3xl -z-10 top-1/2 right-0"
      ></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 py-12"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#f8fafc] mb-6 tracking-tight"
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity }}
            className="text-[#3b82f6]"
          >
            |
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent mb-4 font-semibold"
        >
          {personalInfo.name}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-lg text-[#cbd5e1] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-3 sm:gap-4 justify-center mb-12 flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#60a5fa] hover:to-[#a78bfa] text-[#f8fafc] font-semibold rounded-lg transition-all duration-300 shadow-lg"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 border-2 border-[#6366f1]/50 hover:border-[#6366f1] text-[#f1f5f9] font-semibold rounded-lg transition-all duration-200"
          >
            Download CV
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center text-2xl sm:text-3xl text-[#94a3b8]"
        >
          {[personalInfo.socials.github, personalInfo.socials.linkedin, personalInfo.socials.twitter, personalInfo.socials.instagram].map((url, idx) => (
            <motion.a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.25,
                color: '#6366f1',
                textShadow: '0 0 8px rgba(99, 102, 241, 0.5)'
              }}
              whileTap={{ scale: 0.85 }}
              className="hover:text-[#6366f1] transition-colors duration-200"
            >
              {idx === 0 && <FaGithub />}
              {idx === 1 && <FaLinkedin />}
              {idx === 2 && <FaTwitter />}
              {idx === 3 && <FaInstagram />}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6366f1]"
        >
          <FiArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
