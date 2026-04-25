import { motion } from 'framer-motion'
import { FiCode, FiServer, FiLayout, FiZap, FiBriefcase, FiCpu } from 'react-icons/fi'
import { services } from '../config/data'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

const iconMap = {
  FiCode: FiCode,
  FiServer: FiServer,
  FiLayout: FiLayout,
  FiZap: FiZap,
  FiBriefcase: FiBriefcase,
  FiCpu: FiCpu
}

export default function Services() {
  const cardRefs = useRef([])

  useEffect(() => {
    cardRefs.current.forEach(card => {
      if (!card) return

      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
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
          scale: 1,
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
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#f1f5f9] mb-16 text-center" data-scroll-animate>Services</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => {
          const Icon = iconMap[service.icon] || FiCode

          return (
            <motion.div
              key={idx}
              ref={el => cardRefs.current[idx] = el}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#111117] border border-[rgba(255,255,255,0.07)] rounded-xl p-6 transition-all duration-300 text-center group"
            >
              <motion.div
                data-icon
                className="w-16 h-16 bg-[#6366f1]/20 rounded-lg flex items-center justify-center mx-auto mb-6 text-[#6366f1]"
                whileHover={{ rotate: 20 }}
              >
                <Icon size={28} />
              </motion.div>

              <h3 className="text-lg font-semibold text-[#f1f5f9] mb-3">{service.title}</h3>
              <p className="text-[#94a3b8]">{service.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
