import { motion } from 'framer-motion'

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#f1f5f9] mb-16 text-center" data-scroll-animate>Blog</h2>

      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111117] border border-[rgba(255,255,255,0.07)] rounded-xl p-12 text-center max-w-md hover:border-[#6366f1]/30 transition-all duration-300"
        >
          <motion.p
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#94a3b8] text-lg font-medium"
          >
            Coming Soon
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[#475569] text-sm mt-2"
          >
            I'll be sharing articles about MERN development, best practices, and tech insights
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex justify-center gap-2"
          >
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 bg-[#6366f1] rounded-full"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
