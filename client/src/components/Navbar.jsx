import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[rgba(255,255,255,0.06)] z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#6366f1]">YK</div>
        
        <ul className="hidden md:flex gap-8 text-[#94a3b8]">
          <li><a href="#about" className="hover:text-[#6366f1] transition">About</a></li>
          <li><a href="#skills" className="hover:text-[#6366f1] transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#6366f1] transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#6366f1] transition">Contact</a></li>
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#6366f1]">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#111117] border-b border-[rgba(255,255,255,0.06)]">
          <ul className="flex flex-col gap-4 px-6 py-4 text-[#94a3b8]">
            <li><a href="#about" className="hover:text-[#6366f1]">About</a></li>
            <li><a href="#skills" className="hover:text-[#6366f1]">Skills</a></li>
            <li><a href="#projects" className="hover:text-[#6366f1]">Projects</a></li>
            <li><a href="#contact" className="hover:text-[#6366f1]">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
