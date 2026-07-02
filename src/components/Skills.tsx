import { motion } from 'motion/react';

const tools = [
  {
    name: "Adobe Photoshop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
  },
  {
    name: "Adobe Illustrator",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
  },
  {
    name: "Adobe Lightroom",
    logo: "/assets/software/adobe_lightroom.png"
  },
  {
    name: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
  },
  {
    name: "Canva",
    logo: "/assets/software/canva.png"
  },
  {
    name: "DaVinci Resolve",
    logo: "/assets/software/davinci_resolve.png"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-[#050505] text-white border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-12">
          
          {/* Header */}
          <div className="border-b border-white/5 pb-6">
            <h2 className="text-3xl md:text-5xl font-serif italic font-black text-white leading-none">
              Tools & Software
            </h2>
          </div>

          {/* Premium Branded Minimalist 3x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-lg border border-white/5 bg-[#090909] p-5 flex items-center gap-4 transition-all duration-500 hover:border-white/15"
              >
                {/* Small rounded square with official logo */}
                <div className="w-10 h-10 flex items-center justify-center p-2 bg-white/[0.02] border border-white/5 rounded-md transition-all duration-300 group-hover:bg-white/[0.04]">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} Logo`} 
                    className="w-6 h-6 object-contain" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <h3 className="text-sm font-medium tracking-tight text-white/80 group-hover:text-white transition-colors duration-300">
                  {tool.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
