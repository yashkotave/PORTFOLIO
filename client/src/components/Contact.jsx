import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiMapPin } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { personalInfo } from '../config/data'
import { useState, useRef } from 'react'
import gsap from 'gsap'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const successMsgRef = useRef(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })

        // Animate success message
        if (successMsgRef.current) {
          gsap.fromTo(
            successMsgRef.current,
            { opacity: 0, y: -20, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out' }
          )
        }

        setTimeout(() => {
          if (successMsgRef.current) {
            gsap.to(successMsgRef.current, { opacity: 0, y: -20, scale: 0.8, duration: 0.4 })
          }
          setSuccess(false)
        }, 4000)
      }
    } catch (error) {
      console.error('Contact form error:', error)
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-[#f1f5f9] mb-4 text-center"
      >
        Get In Touch
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="h-1 w-20 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mx-auto mb-16"
      ></motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-[#f1f5f9] mb-6">
              Contact Information
            </motion.h3>
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-[#111117]/50 border border-[rgba(99,102,241,0.1)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-200"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-gradient-to-br from-[#6366f1]/30 to-[#a855f7]/30 rounded-lg text-[#6366f1] flex-shrink-0"
                >
                  <FiMail size={24} />
                </motion.div>
                <div>
                  <p className="text-[#94a3b8] text-sm font-medium">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-[#f1f5f9] hover:text-[#6366f1] transition-colors duration-200 font-medium">
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-[#111117]/50 border border-[rgba(99,102,241,0.1)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-200"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-gradient-to-br from-[#6366f1]/30 to-[#a855f7]/30 rounded-lg text-[#6366f1] flex-shrink-0"
                >
                  <FiMapPin size={24} />
                </motion.div>
                <div>
                  <p className="text-[#94a3b8] text-sm font-medium">Location</p>
                  <p className="text-[#f1f5f9] font-medium">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-[#f1f5f9] mb-6">
              Follow Me
            </motion.h3>
            <motion.div className="flex gap-4 flex-wrap">
              {[
                { icon: FaGithub, url: personalInfo.socials.github, label: 'GitHub' },
                { icon: FaLinkedin, url: personalInfo.socials.linkedin, label: 'LinkedIn' },
                { icon: FaTwitter, url: personalInfo.socials.twitter, label: 'Twitter' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.15, y: -5, boxShadow: '0 15px 30px rgba(99, 102, 241, 0.3)' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-gradient-to-br from-[#111117] to-[#0a0a0f] border border-[rgba(99,102,241,0.1)] hover:border-[#6366f1]/50 rounded-lg text-[#94a3b8] hover:text-[#6366f1] transition-all duration-200"
                  title={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileFocus={{ boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)' }}
            className="w-full bg-[#111117] border border-[rgba(99,102,241,0.1)] rounded-lg px-4 sm:px-6 py-3 text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#6366f1]/60 focus:bg-[#111117] transition-all duration-200 text-sm sm:text-base"
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            whileFocus={{ boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)' }}
            className="w-full bg-[#111117] border border-[rgba(99,102,241,0.1)] rounded-lg px-4 sm:px-6 py-3 text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#6366f1]/60 focus:bg-[#111117] transition-all duration-200 text-sm sm:text-base"
          />

          <motion.input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileFocus={{ boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)' }}
            className="w-full bg-[#111117] border border-[rgba(99,102,241,0.1)] rounded-lg px-4 sm:px-6 py-3 text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#6366f1]/60 focus:bg-[#111117] transition-all duration-200 text-sm sm:text-base"
          />

          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            viewport={{ once: true }}
            whileFocus={{ boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)' }}
            className="w-full bg-[#111117] border border-[rgba(99,102,241,0.1)] rounded-lg px-4 sm:px-6 py-3 text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#6366f1]/60 focus:bg-[#111117] transition-all duration-200 resize-none text-sm sm:text-base"
          ></motion.textarea>

          <motion.button
            type="submit"
            disabled={loading}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: '0 20px 50px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#7c3aed] hover:from-[#818cf8] hover:to-[#a78bfa] text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            {loading ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block"
              >
                ⏳
              </motion.span>
            ) : (
              'Send Message'
            )}
          </motion.button>

          <AnimatePresence>
            {success && (
              <motion.div
                ref={successMsgRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center font-medium"
              >
                ✓ Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  )
}
