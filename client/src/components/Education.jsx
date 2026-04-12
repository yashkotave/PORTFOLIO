import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { education } from '../config/data'

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#f1f5f9] mb-16 text-center">Education</h2>

      <div className="max-w-2xl mx-auto">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111117] border border-[rgba(255,255,255,0.07)] rounded-xl p-8 hover:border-[#6366f1]/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#6366f1]/20 rounded-lg text-[#6366f1]">
                <FiAward size={24} />
              </div>
              
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
