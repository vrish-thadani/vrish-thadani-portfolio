import { motion } from 'motion/react';
import { 
  Layers, 
  PenTool, 
  Grid, 
  Package, 
  Layout, 
  Eye, 
  Target, 
  Sparkles 
} from 'lucide-react';

const capabilitiesList = [
  {
    title: "Brand Identity Design",
    description: "Complete visual identity systems built for memorable brands.",
    icon: Layers
  },
  {
    title: "Logo Design",
    description: "Distinctive marks designed for longevity and recognition.",
    icon: PenTool
  },
  {
    title: "Visual Identity Systems",
    description: "Cohesive branding across every touchpoint.",
    icon: Grid
  },
  {
    title: "Packaging Design",
    description: "Packaging that balances strategy and aesthetics.",
    icon: Package
  },
  {
    title: "UI Design",
    description: "Clean, modern digital experiences with usability at the core.",
    icon: Layout
  },
  {
    title: "Creative Direction",
    description: "Guiding visual storytelling from concept to execution.",
    icon: Eye
  },
  {
    title: "Brand Strategy",
    description: "Building brands with clarity, positioning and purpose.",
    icon: Target
  },
  {
    title: "AI Assisted Design Workflow",
    description: "Leveraging AI to accelerate ideation and creative production.",
    icon: Sparkles
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-36 px-6 md:px-20 bg-[#050505] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Elements */}
        <div className="mb-20">
          <div className="border-b border-white/10 pb-6">
            <h2 className="text-4xl md:text-6xl display-serif italic font-black text-white leading-none">
              Capabilities
            </h2>
          </div>
        </div>

        {/* 4x2 Grid of highly compact, premium cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilitiesList.map((cap, index) => {
            const IconComponent = cap.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.03, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="group relative bg-white/[0.01] hover:bg-white/[0.03] border border-white/10 hover:border-white/30 rounded-lg p-5 flex flex-col justify-between transition-all duration-500 hover:scale-[1.01] overflow-hidden cursor-default min-h-[140px]"
              >
                {/* Subtle light background shift on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex flex-col gap-4 relative z-10">
                  {/* Icon */}
                  <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                    <IconComponent className="w-3.5 h-3.5 stroke-[1.25]" />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-semibold tracking-tight text-white group-hover:text-white transition-colors duration-300">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300 font-light leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
