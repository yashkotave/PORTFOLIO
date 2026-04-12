import { motion } from 'framer-motion'
import { FiCode, FiServer, FiLayout, FiZap, FiBriefcase, FiCpu } from 'react-icons/fi'
import { services } from '../config/data'

const iconMap = {
  FiCode: FiCode,
  FiServer: FiServer,
  FiLayout: FiLayout,
  FiZap: FiZap,
  FiBriefcase: FiBriefcase,
  FiCpu: FiCpu
}

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#f1f5f9] mb-16 text-center">Services</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => {
          const Icon = iconMap[service.icon] || FiCode
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#111117] border border-[rgba(255,255,255,0.07)] rounded-xl p-6 hover:border-[#6366f1]/30 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-[#6366f1]/20 rounded-lg flex items-center justify-center mx-auto mb-6 text-[#6366f1] group-hover:scale-110 transition-transform">
                <Icon size={28} />
              </div>
              
              <h3 className="text-lg font-semibold text-[#f1f5f9] mb-3">{service.title}</h3>
              <p className="text-[#94a3b8]">{service.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
