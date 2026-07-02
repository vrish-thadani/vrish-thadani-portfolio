import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Phone, Linkedin, MapPin, User } from 'lucide-react';

export default function Contact() {
  const contactDetails = [
    {
      label: "Name",
      value: "Vrish Thadani",
      href: null,
      icon: User
    },
    {
      label: "Email",
      value: "vrishthadani14@gmail.com",
      href: "mailto:vrishthadani14@gmail.com",
      icon: Mail
    },
    {
      label: "Phone",
      value: "+91 9326369815",
      href: "tel:+919326369815",
      icon: Phone
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/vrishthadani",
      href: "https://www.linkedin.com/in/vrishthadani",
      icon: Linkedin
    },
    {
      label: "Location",
      value: "Mumbai, India",
      href: null,
      icon: MapPin
    }
  ];

  return (
    <section id="contact" className="py-32 md:py-44 px-6 md:px-20 bg-[#050505] text-white border-t border-white/5 relative overflow-hidden">
      {/* Background radial soft ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Editorial Heading (Approx 45% width) */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="relative">
                {/* Subtle oversized outlined "CONTACT" watermark */}
                <span 
                  className="absolute -top-8 sm:-top-12 -left-4 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-sans font-black tracking-widest text-transparent uppercase select-none pointer-events-none opacity-[0.05]"
                  style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.45)" }}
                >
                  CONTACT
                </span>
                <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black italic tracking-tight leading-none text-white">
                  Let's Create<br />
                  Something<br />
                  Great.
                </h2>
              </div>
              
              {/* Tasteful premium fine graphic element */}
              <div className="w-16 h-[1px] bg-white/20 mt-4" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Highly Refined Contact Info Card (Approx 55% width) */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl bg-[#090909] border border-white/5 rounded-lg p-6 md:p-8"
            >
              <div className="flex flex-col gap-5">
                {contactDetails.map((detail, index) => {
                  const Icon = detail.icon;
                  const ContentWrapper = detail.href ? 'a' : 'div';
                  
                  return (
                    <ContentWrapper
                      key={index}
                      {...(detail.href ? { 
                        href: detail.href, 
                        target: detail.label === "LinkedIn" ? "_blank" : undefined,
                        rel: detail.label === "LinkedIn" ? "noopener noreferrer" : undefined,
                        className: "flex items-center justify-between group border-b border-white/5 pb-4 last:border-0 last:pb-0 hover:border-white/20 transition-all duration-300"
                      } : {
                        className: "flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0 py-1"
                      })}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-sm bg-white/[0.02] flex items-center justify-center text-white/30 group-hover:text-white/70 transition-all duration-300">
                          <Icon className="w-3.5 h-3.5 stroke-[1.25]" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-white/40 font-mono">
                            {detail.label}
                          </span>
                          <span className="text-xs sm:text-sm font-light text-white/80 group-hover:text-white transition-colors duration-300">
                            {detail.value}
                          </span>
                        </div>
                      </div>
                      {detail.href && (
                        <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      )}
                    </ContentWrapper>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>

        {/* Minimalized Footer */}
        <div className="w-full flex justify-between items-center text-[9px] font-mono uppercase tracking-[0.3em] text-white/30 mt-32 border-t border-white/5 pt-10">
          <div>&copy; Vrish Thadani</div>
          <div className="hidden sm:block">PORTFOLIO &bull; 2026</div>
        </div>

      </div>
    </section>
  );
}
