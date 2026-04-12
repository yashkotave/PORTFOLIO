import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { personalInfo } from '../config/data'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

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
        setTimeout(() => setSuccess(false), 3000)
      }
    } catch (error) {
      console.error('Contact form error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#f1f5f9] mb-16 text-center">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-[#f1f5f9] mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#6366f1]/20 rounded-lg text-[#6366f1]">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-[#f1f5f9] hover:text-[#6366f1] transition">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#6366f1]/20 rounded-lg text-[#6366f1]">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">Location</p>
                  <p className="text-[#f1f5f9]">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#f1f5f9] mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a href={personalInfo.socials.github} target="_blank" className="p-3 bg-[#111117] border border-[rgba(255,255,255,0.07)] rounded-lg hover:border-[#6366f1]/50 text-[#94a3b8] hover:text-[#6366f1] transition-all duration-200">
                <FaGithub size={20} />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" className="p-3 bg-[#111117] border border-[rgba(255,255,255,0.07)] rounded-lg hover:border-[#6366f1]/50 text-[#94a3b8] hover:text-[#6366f1] transition-all duration-200">
                <FaLinkedin size={20} />
              </a>
              <a href={personalInfo.socials.twitter} target="_blank" className="p-3 bg-[#111117] border border-[rgba(255,255,255,0.07)] rounded-lg hover:border-[#6366f1]/50 text-[#94a3b8] hover:text-[#6366f1] transition-all duration-200">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#111117] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#6366f1]/60 transition-all duration-200"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[#111117] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#6366f1]/60 transition-all duration-200"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-[#111117] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#6366f1]/60 transition-all duration-200"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-[#111117] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#6366f1]/60 transition-all duration-200 resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-[#6366f1] hover:bg-[#818cf8] text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {success && (
            <p className="text-[#6366f1] text-center">Message sent successfully! ✓</p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
