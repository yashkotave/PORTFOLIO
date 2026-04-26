import { motion } from 'framer-motion'
import { skills } from '../config/data'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function Skills() {
  const skillGroups = [
    {
      title: 'Full-Stack Development',
      categories: [
        { label: 'Languages', items: skills.languages },
        { label: 'Frontend', items: skills.frontend },
        { label: 'Backend', items: skills.backend },
        { label: 'Databases', items: skills.databases }
      ]
    },
    {
      title: 'AI & Tools',
      categories: [
        { label: 'AI / ML', items: skills.ai },
        { label: 'Tools', items: skills.tools }
      ]
    },
    {
      title: 'Foundations',
      categories: [
        { label: 'Core Concepts', items: skills.core } ]
    }
  ]

  const skillRefs = useRef([])

  useEffect(() => {
    skillRefs.current.forEach(skill => {
      if (!skill) return

      const handleMouseEnter = () => {
        gsap.to(skill, {
          scale: 1.08,
          backgroundColor: '#3b82f6',
          color: '#f8fafc',
          boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)',
          duration: 0.35,
          ease: 'power2.out'
        })
      }

      const handleMouseLeave = () => {
        gsap.to(skill, {
          scale: 1,
          backgroundColor: '#0f172a',
          color: '#cbd5e1',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          duration: 0.35,
          ease: 'power2.out'
        })
      }

      skill.addEventListener('mouseenter', handleMouseEnter)
      skill.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        skill.removeEventListener('mouseenter', handleMouseEnter)
        skill.removeEventListener('mouseleave', handleMouseLeave)
      }
    })
  }, [])

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-[#f8fafc] mb-4 text-center"
      >
        Skills & Expertise
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="h-1 w-20 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#8b5cf6] rounded-full mx-auto mb-16"
      ></motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid gap-6 xl:grid-cols-3"
      >
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            variants={categoryVariants}
            className="bg-[#111117] border border-[rgba(99,102,241,0.12)] rounded-3xl p-6 shadow-xl shadow-[#0f172a]/40"
          >
            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-white mb-5"
            >
              {group.title}
            </motion.h3>

            <div className="space-y-5">
              {group.categories.map((category) => (
                <div key={category.label} className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#94a3b8]">
                    {category.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <button
                        key={skill}
                        ref={el => {
                          if (el && !skillRefs.current.includes(el)) {
                            skillRefs.current.push(el)
                          }
                        }}
                        className="px-3 py-2 bg-[#0f172a] border border-[rgba(99,102,241,0.12)] text-[#cbd5e1] text-xs sm:text-sm rounded-2xl transition-all duration-200 hover:bg-[#111827] hover:border-[#6366f1]/40"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
