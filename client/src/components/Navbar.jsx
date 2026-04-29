import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0, transition: { duration: 0.35 } }
  }

  const navItemVariants = {
    whileHover: {
      textShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
      scale: 1.03,
      color: '#60a5fa',
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[#030712]/95 backdrop-blur-xl border-b border-[rgba(59,130,246,0.1)] shadow-lg'
          : 'bg-[#030712]/80 backdrop-blur-md border-b border-[rgba(148,163,184,0.08)]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-lg font-bold bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent whitespace-nowrap"
        >
          YASH KOTAVE
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-[#cbd5e1]">
          {['About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
              variants={navItemVariants}
              whileHover="whileHover"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-300 hover:text-[#3b82f6] font-medium text-[0.95rem]"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-[#3b82f6] w-10 h-10 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: 0 }} animate={{ rotate: 90 }} exit={{ rotate: 0 }} transition={{ duration: 0.25 }}>
                <FiX size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }} transition={{ duration: 0.25 }}>
                <FiMenu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden bg-gradient-to-b from-[#030712] to-[#0f172a] border-b border-[rgba(59,130,246,0.1)]"
          >
            <motion.ul
              variants={menuVariants}
              initial="closed"
              animate="open"
              className="flex flex-col gap-2 px-4 sm:px-6 py-4 text-[#cbd5e1]"
            >
              {['About', 'Skills', 'Projects', 'Contact'].map(item => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-2 rounded-lg hover:text-[#3b82f6] hover:bg-[#3b82f6]/8 transition-all duration-300 font-medium"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
