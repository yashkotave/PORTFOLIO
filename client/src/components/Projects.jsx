import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { projects } from '../config/data'
import gsap from 'gsap'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const categories = ['all', 'fullstack', 'ai', 'realtime']
  const cardRefs = useRef([])

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  useEffect(() => {
    cardRefs.current.forEach(card => {
      if (!card) return

      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: '0 25px 50px rgba(99, 102, 241, 0.3)',
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    })
  }, [filtered])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2
          variants={titleVariants}
          className="text-4xl sm:text-5xl font-bold text-[#f1f5f9] mb-4 text-center"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          variants={titleVariants}
          className="h-1 w-20 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mx-auto mb-12"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex gap-2 sm:gap-4 justify-center mb-12 flex-wrap px-2"
        >
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 capitalize text-sm sm:text-base ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#7c3aed] text-white shadow-lg shadow-[#6366f1]/50'
                  : 'bg-[#111117] border border-[rgba(255,255,255,0.1)] text-[#94a3b8] hover:border-[#6366f1]/50 hover:text-[#6366f1]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              ref={el => cardRefs.current[idx] = el}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#111117] to-[#0a0a0f] border border-[rgba(99,102,241,0.1)] hover:border-[rgba(99,102,241,0.3)] rounded-xl p-6 group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-[#a855f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              {project.featured && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: idx * 0.1 + 0.3, type: 'spring' }}
                  className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 text-[#6366f1] text-xs font-semibold rounded-full border border-[#6366f1]/30 backdrop-blur-sm"
                >
                  ⭐ Featured
                </motion.div>
              )}

              <h3 className="text-lg sm:text-xl font-semibold text-[#f1f5f9] mb-2 group-hover:text-[#6366f1] transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-[#6366f1]/80 text-sm mb-3 font-medium">{project.subtitle}</p>
              <p className="text-[#94a3b8] text-sm mb-6 line-clamp-3 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 3).map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 + i * 0.05 }}
                    className="px-2.5 py-1 bg-[#6366f1]/10 hover:bg-[#6366f1]/15 text-[#818cf8] text-xs rounded-md font-mono transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2.5 py-1 bg-[#6366f1]/10 text-[#818cf8] text-xs rounded-md font-mono">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-3 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-2 text-[#6366f1] hover:text-[#818cf8] font-medium text-sm transition-colors duration-200"
                >
                  <FiGithub size={16} /> GitHub
                </motion.a>
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-[#a855f7] hover:text-[#d084f8] font-medium text-sm transition-colors duration-200 ml-auto"
                  >
                    Live <FiExternalLink size={16} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
