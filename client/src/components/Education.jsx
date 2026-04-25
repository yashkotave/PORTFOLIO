import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { education } from '../config/data'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

export default function Education() {
  const cardRefs = useRef([])

  useEffect(() => {
    cardRefs.current.forEach(card => {
      if (!card) return

      const handleMouseEnter = () => {
        gsap.to(card, {
          borderColor: '#6366f1',
          boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
          duration: 0.3
        })
        gsap.to(card.querySelector('[data-icon]'), {
          scale: 1.2,
          rotate: 10,
          duration: 0.3
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          borderColor: 'rgba(255, 255, 255, 0.07)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          duration: 0.3
        })
        gsap.to(card.querySelector('[data-icon]'), {
          scale: 1,
          rotate: 0,
          duration: 0.3
        })
      }

      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    })
  }, [])

  return (
    <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#f1f5f9] mb-16 text-center" data-scroll-animate>Education</h2>

      <div className="max-w-2xl mx-auto">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            ref={el => cardRefs.current[idx] = el}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-[#111117] border border-[rgba(255,255,255,0.07)] rounded-xl p-8 transition-all duration-300 mb-6 last:mb-0"
          >
            <div className="flex items-start gap-4">
              <motion.div
                data-icon
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                className="p-3 bg-[#6366f1]/20 rounded-lg text-[#6366f1] flex-shrink-0"
              >
                <FiAward size={24} />
              </motion.div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#f1f5f9]">{edu.degree}</h3>
                <p className="text-[#6366f1] font-medium">{edu.institution}</p>
                <p className="text-[#94a3b8] text-sm mt-1">{edu.duration}</p>
                <p className="text-[#94a3b8] mt-4">{edu.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
