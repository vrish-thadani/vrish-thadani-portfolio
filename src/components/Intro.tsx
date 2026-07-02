import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Intro() {
  return (
    <section 
      className="relative w-full h-screen bg-black text-[#F5F5F5] overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Editorial Noise / Subtle Film Grain Texture overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.15] pointer-events-none z-10">
          <svg className="w-full h-full">
            <filter id="editorialNoise">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.75" 
                numOctaves="3" 
                stitchTiles="stitch" 
              />
              <feColorMatrix 
                type="matrix" 
                values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.12 0" 
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#editorialNoise)" />
          </svg>
        </div>
      </div>

      {/* Spacer to push content down below the fixed header */}
      <div className="h-24 md:h-32 pointer-events-none" />

      {/* Centered Editorial Typography Composition */}
      <div className="px-6 z-10 flex-grow flex items-center justify-center relative w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* 1. WELCOME (Small, monospaced, uppercase, letter-spaced) */}
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.65em] text-white/40 uppercase mb-8 block">
            WELCOME
          </span>

          {/* Thin subtle horizontal line */}
          <div className="w-8 h-[1px] bg-white/10 mb-10" />

          {/* 2. GRAPHIC DESIGN (Medium elegant text, light weight) */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-light tracking-[0.25em] text-white/60 uppercase mb-3">
            Graphic Design
          </h2>

          {/* 3. PORTFOLIO (The monumental focal point of the page, high contrast) */}
          <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[8rem] xl:text-[9.5rem] font-sans font-black tracking-tighter uppercase text-white leading-none">
            PORTFOLIO
          </h1>

          {/* Thin subtle horizontal line */}
          <div className="w-16 h-[1px] bg-white/10 my-8" />

          {/* 4. 2026 (Secondary serif italic element below) */}
          <span className="text-sm sm:text-base md:text-lg font-serif italic tracking-[0.3em] text-white/40 block">
            2026
          </span>
        </div>
      </div>

      {/* Bottom Area: Marquee Belt and Scroll Indicator */}
      <div className="w-full z-10 flex flex-col items-center gap-8 pb-12">
        
        {/* Continuous Horizontal Marquee Belt (Luxury Fashion Ticker style) */}
        <div className="w-full border-t border-b border-white/10 py-4 bg-black select-none">
          <div className="overflow-hidden flex whitespace-nowrap w-full">
            <motion.div 
              animate={{ x: [0, -1200] }}
              transition={{
                ease: "linear",
                duration: 32,
                repeat: Infinity
              }}
              className="flex gap-14 pr-14 text-[9px] sm:text-[10px] font-mono tracking-[0.4em] uppercase text-white/30"
            >
              {Array(6).fill([
                "BRAND IDENTITY",
                "VISUAL IDENTITY",
                "LOGO DESIGN",
                "PACKAGING",
                "UI DESIGN",
                "FIGMA",
                "ADOBE PHOTOSHOP",
                "ADOBE ILLUSTRATOR",
                "DAVINCI RESOLVE",
                "AI WORKFLOW"
              ]).flat().map((item, idx) => (
                <span key={idx} className="flex items-center gap-14 text-white/35">
                  <span>{item}</span>
                  <span className="text-white/15">&bull;</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll to Discover Indicator */}
        <div className="flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-[8px] font-mono tracking-[0.4em] text-white/30 uppercase">
            SCROLL TO DISCOVER
          </span>
          <ArrowDown className="w-3 h-3 text-white/20 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
