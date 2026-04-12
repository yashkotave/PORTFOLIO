import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { personalInfo } from '../config/data'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-[#111117] border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#6366f1] mb-4">YK</h3>
            <p className="text-[#94a3b8]">Full Stack Developer crafting digital solutions</p>
          </div>

          <div>
            <h4 className="text-[#f1f5f9] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#94a3b8]">
              <li><a href="#about" className="hover:text-[#6366f1] transition">About</a></li>
              <li><a href="#projects" className="hover:text-[#6366f1] transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-[#6366f1] transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f1f5f9] font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href={personalInfo.socials.github} target="_blank" className="p-3 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-lg text-[#94a3b8] hover:text-[#6366f1] transition-all duration-200">
                <FaGithub size={20} />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" className="p-3 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-lg text-[#94a3b8] hover:text-[#6366f1] transition-all duration-200">
                <FaLinkedin size={20} />
              </a>
              <a href={personalInfo.socials.twitter} target="_blank" className="p-3 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-lg text-[#94a3b8] hover:text-[#6366f1] transition-all duration-200">
                <FaTwitter size={20} />
              </a>
              <a href={personalInfo.socials.instagram} target="_blank" className="p-3 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-lg text-[#94a3b8] hover:text-[#6366f1] transition-all duration-200">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 flex justify-between items-center">
          <p className="text-[#475569] text-sm">
            © 2024 Yash Kotave. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-lg text-[#6366f1] hover:bg-[#6366f1]/20 transition-all duration-200"
          >
            <FiArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
