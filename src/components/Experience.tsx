import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-36 px-6 md:px-20 bg-[#050505] text-white border-t border-white/10 relative overflow-hidden">
      {/* Abstract background dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none select-none z-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-7xl display-serif font-black italic tracking-tight leading-none"
          >
            Experience
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 py-12 border-b border-t border-white/10 hover:bg-white/[0.01] transition-all duration-500 px-4 -mx-4 rounded-lg"
        >
          {/* Timeline & Title Left Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white/80 group-hover:border-white/25 transition-all duration-500">
                <Briefcase className="w-3.5 h-3.5 stroke-[1.25]" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/30 group-hover:text-white/50 transition-colors duration-500 font-mono">
                WORK TIMELINE
              </span>
            </div>
            
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white group-hover:text-white/95 transition-colors duration-300">
                Freelance Graphic Designer
              </h3>
              <p className="text-sm font-serif italic text-white/50 group-hover:text-white/70 transition-colors duration-300">
                1+ Years Experience
              </p>
            </div>
          </div>

          {/* Core Wording Right Column */}
          <div className="md:col-span-8 flex flex-col justify-center">
            <p className="text-base font-light text-white/70 group-hover:text-white/90 leading-relaxed transition-colors duration-500 border-l border-white/10 pl-6 md:pl-8 py-1">
              Over the past year, I have worked independently on branding, logo design, visual identity systems, packaging concepts, social media creatives and UI design for personal projects and clients. This experience has strengthened my ability to manage complete design workflows—from research and concept development to final execution—while maintaining consistency, attention to detail and a strong understanding of modern brand communication.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
