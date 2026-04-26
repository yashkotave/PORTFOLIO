import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { personalInfo } from '../config/data'
import gsap from 'gsap'

export default function Footer() {
  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }

  const socialVariants = {
    whileHover: { scale: 1.15, y: -5 },
    whileTap: { scale: 0.95 }
  }

  return (
    <footer className="bg-[#0f172a] border-t border-[rgba(59,130,246,0.1)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent mb-4"
              animate={{ textShadow: ['0 0 10px rgba(59,130,246,0)', '0 0 15px rgba(59,130,246,0.4)', '0 0 10px rgba(59,130,246,0)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              YASH KOTAVE
            </motion.h3>
            <p className="text-[#cbd5e1]">Full Stack Developer crafting digital solutions</p>
            <p className="text-[#cbd5e1] mt-2">Phone: <a href={`tel:${personalInfo.phone}`} className="hover:text-[#3b82f6] transition-colors duration-300">{personalInfo.phone}</a></p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-[#f8fafc] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#cbd5e1]">
              {['About', 'Projects', 'Contact'].map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <a href={`#${link.toLowerCase()}`} className="hover:text-[#3b82f6] transition-colors duration-300">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-[#f8fafc] font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              {[
                { icon: FaGithub, url: personalInfo.socials.github },
                { icon: FaLinkedin, url: personalInfo.socials.linkedin },
                { icon: FaTwitter, url: personalInfo.socials.twitter },
                { icon: FaInstagram, url: personalInfo.socials.instagram }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  variants={socialVariants}
                  whileHover="whileHover"
                  whileTap="whileTap"
                  className="p-3 bg-[#3b82f6]/15 border border-[#3b82f6]/25 rounded-lg text-[#cbd5e1] hover:text-[#60a5fa] transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 flex justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#475569] text-sm"
          >
            © 2024 Yash Kotave. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-[#3b82f6]/18 border border-[#3b82f6]/35 rounded-lg text-[#60a5fa] hover:bg-[#3b82f6]/25 transition-all duration-300"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
