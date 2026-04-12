import { motion } from 'framer-motion'
import { useState } from 'react'
import { projects } from '../config/data'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const categories = ['all', 'fullstack', 'ai', 'realtime']

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#f1f5f9] mb-12 text-center">Featured Projects</h2>

      <div className="flex gap-4 justify-center mb-12 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 capitalize ${
              filter === cat
                ? 'bg-[#6366f1] text-white'
                : 'bg-[#111117] border border-[rgba(255,255,255,0.07)] text-[#94a3b8] hover:border-[#6366f1]/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-[#111117] border border-[rgba(255,255,255,0.07)] rounded-xl p-6 hover:border-[#6366f1]/30 hover:-translate-y-1 transition-all duration-300 group relative"
          >
            {project.featured && (
              <div className="absolute top-4 right-4 px-2 py-0.5 bg-[#6366f1]/15 text-[#6366f1] text-xs rounded-full border border-[#6366f1]/20">
                Featured
              </div>
            )}

            <h3 className="text-xl font-semibold text-[#f1f5f9] mb-2">{project.title}</h3>
            <p className="text-[#6366f1] text-sm mb-4">{project.subtitle}</p>
            <p className="text-[#94a3b8] text-sm mb-6 line-clamp-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.slice(0, 3).map(tech => (
                <span key={tech} className="px-2 py-0.5 bg-[#6366f1]/10 text-[#818cf8] text-xs rounded font-mono">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-0.5 bg-[#6366f1]/10 text-[#818cf8] text-xs rounded font-mono">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>

            <a href={project.githubUrl} target="_blank" className="text-[#6366f1] hover:text-[#818cf8] font-medium text-sm transition">
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
