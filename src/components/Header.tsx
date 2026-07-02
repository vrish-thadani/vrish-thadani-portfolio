import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled ? 'py-4 bg-[#050505]/80 backdrop-blur-md border-b border-subtle' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
        <a href="#" className="text-[#F5F5F5] font-medium text-[11px] tracking-[0.4em] uppercase">
          PORTFOLIO 2026
        </a>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/50 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/50 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/50 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}
