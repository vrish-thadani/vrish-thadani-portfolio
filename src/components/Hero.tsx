import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const educationTimeline = [
  {
    institution: "Ryan International School",
    details: "Grade 1 – 10"
  },
  {
    institution: "PACE Junior Science College",
    details: "Grade 11 – 12"
  },
  {
    institution: "ITM Skills University",
    details: "B.Tech Computer Science Engineering"
  }
];

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen bg-[#050505] text-[#F5F5F5] py-32 px-6 md:px-20 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative">
          
          {/* LEFT COLUMN: Identity, About, and Timeline (Approx 45% width block) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col text-left">
            
            {/* 1. Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tight text-white uppercase leading-none">
                VRISH THADANI
              </h2>
            </motion.div>

            {/* 2. Roles Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2.5 text-sm sm:text-base font-sans font-light tracking-wide text-white/60 mb-14"
            >
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/30"></span>
                <span>Graphic Designer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/30"></span>
                <span>Brand Identity Designer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/30"></span>
                <span>Visual Identity Designer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/30"></span>
                <span>One Year+ Freelance Experience</span>
              </div>
            </motion.div>

            {/* 3. ABOUT ME Section (Large prominent typography) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6 mb-24"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-black uppercase tracking-tight text-white">
                ABOUT ME
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-2xl">
                I create visual identities that combine strategy, clarity and timeless aesthetics. 
                My focus lies at the intersection of rigorous layout discipline, precise typography pairing, 
                and modern system branding. Every line, curve, and layout is balanced to create elite visual identities 
                and digital systems that command attention and drive memorable experiences.
              </p>
            </motion.div>

            {/* 4. EDUCATION Section (Generous whitespace 80-120px above via mb-24 on about me) */}
            <div className="flex flex-col gap-10">
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-xs font-mono uppercase tracking-[0.45em]"
              >
                EDUCATION
              </motion.h3>

              {/* Connected vertical timeline layout */}
              <div className="relative pl-6 sm:pl-8 border-l border-white/10 ml-2 flex flex-col gap-12">
                {educationTimeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    {/* Minimalist marker node */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-black border border-white/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                        <h4 className="text-lg sm:text-xl font-medium tracking-tight text-white">
                          {item.institution}
                        </h4>
                        <span className="text-xs sm:text-sm font-serif italic text-white/40">
                          {item.details}
                        </span>
                      </div>
                    </div>

                    {/* Downward connector arrow between elements */}
                    {idx < educationTimeline.length - 1 && (
                      <div className="absolute -left-[31px] sm:-left-[39px] top-12 w-3.5 flex justify-center text-white/15">
                        <ArrowDown className="w-3 h-3" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Professional Portrait (No borders, naturally blends, matches height) */}
          <div className="lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8 lg:sticky lg:top-32 relative h-fit select-none">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[3/4] overflow-hidden rounded-none"
            >
              <img
                src="/assets/portfolio_image.png"
                alt="Vrish Thadani Portrait"
                className="w-full h-full object-cover object-top pointer-events-none contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              
              {/* Premium soft editorial vignettes to blend portrait into the black page background */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-[#050505]/40 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-[#050505]/40 to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
