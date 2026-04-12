import { motion } from 'framer-motion'
import { personalInfo } from '../config/data'

export default function About() {
  const stats = [
    { label: 'Projects', value: '7+' },
    { label: 'Experience', value: '90 Days' },
    { label: 'Technologies', value: '15+' },
    { label: 'Satisfied', value: '100%' }
  ]

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#f1f5f9] mb-16 text-center">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="w-48 h-48 bg-[#6366f1]/20 rounded-lg flex items-center justify-center border border-[#6366f1]/30">
            <div className="text-6xl font-bold text-[#6366f1]">YK</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#111117] border border-[rgba(255,255,255,0.07)] rounded-xl p-6 hover:border-[#6366f1]/30 transition-all duration-300">
                <div className="text-3xl font-bold text-[#6366f1]">{stat.value}</div>
                <div className="text-[#94a3b8] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-[#94a3b8] leading-relaxed">
            {personalInfo.summary}
          </p>

          <div>
            <h3 className="text-xl font-semibold text-[#f1f5f9] mb-4">Location</h3>
            <p className="text-[#94a3b8]">{personalInfo.location}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#f1f5f9] mb-4">Contact</h3>
            <p className="text-[#94a3b8]">{personalInfo.email}</p>
          </div>

          <button className="px-6 py-3 bg-[#6366f1] hover:bg-[#818cf8] text-white font-medium rounded-lg transition-all duration-200">
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  )
}
