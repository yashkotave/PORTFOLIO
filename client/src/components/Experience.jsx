import { motion } from 'framer-motion'
import { experience } from '../config/data'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

export default function Experience() {
  const cardRefs = useRef([])

  useEffect(() => {
    cardRefs.current.forEach(card => {
      if (!card) return

      const handleMouseEnter = () => {
        gsap.to(card, {
          boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
          borderColor: '#3b82f6',
          duration: 0.3
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          borderColor: 'rgba(255, 255, 255, 0.07)',
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
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#f8fafc] mb-16 text-center" data-scroll-animate>Experience</h2>

      <div className="space-y-8">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative pl-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              className="absolute left-0 top-2 w-4 h-4 bg-[#3b82f6] rounded-full border-4 border-[#030712]"
            ></motion.div>
            <div className="absolute left-1.5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-[#3b82f6]/70 to-[#3b82f6]/10"></div>

            <div
              ref={el => cardRefs.current[idx] = el}
              className="bg-[#0f172a] border border-[rgba(59,130,246,0.12)] rounded-xl p-6 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#f8fafc]">{exp.role}</h3>
              <p className="text-[#60a5fa] font-medium">{exp.company}</p>
              <p className="text-[#cbd5e1] text-sm mt-1">{exp.duration}</p>
              <p className="text-[#cbd5e1] mt-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 + i * 0.05 }}
                    className="px-2 py-0.5 bg-[#3b82f6]/15 text-[#60a5fa] text-xs rounded font-mono"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
