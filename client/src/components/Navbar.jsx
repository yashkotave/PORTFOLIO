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
    open: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  }

  const navItemVariants = {
    whileHover: {
      textShadow: '0 0 8px rgb(99, 102, 241)',
      scale: 1.05
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[rgba(99,102,241,0.1)] shadow-lg'
          : 'bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm sm:text-lg font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent whitespace-nowrap"
        >
          YASH KOTAVE
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-[#94a3b8]">
          {['About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              variants={navItemVariants}
              whileHover="whileHover"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-200 hover:text-[#6366f1] font-medium"
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
          className="md:hidden text-[#6366f1] w-10 h-10 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: 0 }} animate={{ rotate: 90 }} exit={{ rotate: 0 }} transition={{ duration: 0.2 }}>
                <FiX size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }} transition={{ duration: 0.2 }}>
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
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-[#0a0a0f] to-[#111117] border-b border-[rgba(99,102,241,0.1)]"
          >
            <motion.ul
              variants={menuVariants}
              initial="closed"
              animate="open"
              className="flex flex-col gap-2 px-4 sm:px-6 py-4 text-[#94a3b8]"
            >
              {['About', 'Skills', 'Projects', 'Contact'].map(item => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-2 rounded-lg hover:text-[#6366f1] hover:bg-[#6366f1]/5 transition-all duration-200 font-medium"
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
