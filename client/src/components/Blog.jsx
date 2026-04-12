import { motion } from 'framer-motion'

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#f1f5f9] mb-16 text-center">Blog</h2>

      <div className="flex items-center justify-center">
        <div className="bg-[#111117] border border-[rgba(255,255,255,0.07)] rounded-xl p-12 text-center max-w-md">
          <p className="text-[#94a3b8] text-lg">Coming Soon</p>
          <p className="text-[#475569] text-sm mt-2">I'll be sharing articles about MERN development, best practices, and tech insights</p>
        </div>
      </div>
    </section>
  )
}
