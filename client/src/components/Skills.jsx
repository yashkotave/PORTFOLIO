import { motion } from 'framer-motion'
import { skills } from '../config/data'

export default function Skills() {
  const skillCategories = Object.entries(skills)

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#f1f5f9] mb-16 text-center">Skills & Expertise</h2>

      <div className="space-y-12">
        {skillCategories.map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-[#f1f5f9] capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {items.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 + i * 0.05 }}
                  className="px-3 py-1.5 bg-[#18181f] border border-[rgba(255,255,255,0.07)] text-[#94a3b8] text-sm rounded-md hover:border-[#6366f1]/40 transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
