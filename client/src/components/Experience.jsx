import { motion } from 'framer-motion'
import { experience } from '../config/data'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#f1f5f9] mb-16 text-center">Experience</h2>

      <div className="space-y-8">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative pl-8"
          >
            <div className="absolute left-0 top-2 w-4 h-4 bg-[#6366f1] rounded-full border-4 border-[#0a0a0f]"></div>
            <div className="absolute left-1.5 top-8 bottom-0 w-0.5 bg-[#6366f1]/30"></div>

            <div className="bg-[#111117] border border-[rgba(255,255,255,0.07)] rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#f1f5f9]">{exp.role}</h3>
              <p className="text-[#6366f1]">{exp.company}</p>
              <p className="text-[#94a3b8] text-sm mt-1">{exp.duration}</p>
              <p className="text-[#94a3b8] mt-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map(tech => (
                  <span key={tech} className="px-2 py-0.5 bg-[#6366f1]/10 text-[#818cf8] text-xs rounded font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
