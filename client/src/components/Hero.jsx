import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { personalInfo } from '../config/data'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Full Stack Developer"
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1))
        index++
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute w-96 h-96 bg-[#6366f1]/10 rounded-full blur-3xl -z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto text-center px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-[#f1f5f9] mb-6"
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl text-[#6366f1] mb-8"
        >
          {personalInfo.name}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex gap-4 justify-center mb-12 flex-wrap"
        >
          <button className="px-6 py-3 bg-[#6366f1] hover:bg-[#818cf8] text-white font-medium rounded-lg transition-all duration-200">
            View My Work
          </button>
          <button className="px-6 py-3 border border-[rgba(255,255,255,0.12)] hover:border-[#6366f1]/50 text-[#f1f5f9] rounded-lg transition-all duration-200">
            Download CV
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex gap-6 justify-center text-2xl text-[#94a3b8]"
        >
          <a href={personalInfo.socials.github} target="_blank" className="hover:text-[#6366f1] transition">
            <FaGithub />
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" className="hover:text-[#6366f1] transition">
            <FaLinkedin />
          </a>
          <a href={personalInfo.socials.twitter} target="_blank" className="hover:text-[#6366f1] transition">
            <FaTwitter />
          </a>
          <a href={personalInfo.socials.instagram} target="_blank" className="hover:text-[#6366f1] transition">
            <FaInstagram />
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6366f1]"
        >
          <FiArrowDown size={24} />
        </motion.div>
      </div>
    </section>
  )
}
