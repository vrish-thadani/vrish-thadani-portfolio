import { motion } from 'motion/react';

interface ProjectPlaceholder {
  aspect: string;
  label?: string;
  image?: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  introduction: string;
  challenge: string;
  solution: string;
  approach: string;
  identity: string;
  outcome: string;
  placeholders: ProjectPlaceholder[];
}

const projects: Project[] = [
  {
    id: 'verve',
    title: 'VERVE',
    category: 'Premium Energy Beverage Branding',
    introduction: 'VERVE is a modern premium energy beverage created for young professionals and creatives who want energy without the loud, aggressive visual language commonly seen in the category. The identity balances high-performance vitality with quiet sophistication, redefining what a functional beverage can look like. Every asset is crafted to appeal to a design-conscious audience that values clean ingredients and understated aesthetics.',
    challenge: 'The functional beverage category is saturated with loud, neon colors, aggressive sporty graphics, and hyper-masculine aesthetics. Our challenge was to design a brand identity that communicates focus and performance while fitting seamlessly into a high-end office environment or art gallery. We needed to create a packaging system and brand strategy that projects confidence and refinement, proving that clean energy does not require noisy design.',
    solution: 'We created a highly structured, ultra-minimalist brand system rooted in premium print design and Swiss style typography. By choosing a high-contrast black-and-white color palette and emphasizing crisp layout grids, we established a sense of luxurious weight and timeless presence. The product sits as a clean sculptural element on any shelf, demanding attention through absolute visual simplicity.',
    approach: 'The layout is governed by a strict typographic grid that dictates the placement of every character, barcode, and description. We selected an elegant, bold editorial serif typeface for the main titles, balanced with light, spacious sans-serif subheaders for functional copy. This dynamic visual hierarchy ensures that the branding system is instantly recognizable, regardless of the physical application or format.',
    identity: 'The visual system centers around expressive editorial typography, confident layout frames, and a lack of superficial decoration. This identity is carried consistently across matte-finish cans, textured secondary packaging, grid-based social media layouts, and large-scale promotional material. The resulting identity avoids sporty cliches, projecting a sense of refined power and clean, modern luxury.',
    outcome: 'The final identity successfully positions VERVE as a benchmark for design-led functional products. It commands a premium presence that resonates deeply with design-forward demographics, integrating seamlessly into contemporary lifestyles.',
    placeholders: [
      { aspect: 'aspect-[16/9]', label: 'HERO', image: '/assets/verve/hero_verve.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'PACKAGING COMPOSITION', image: '/assets/verve/verve_coffee.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'TYPOGRAPHIC GRID', image: '/assets/verve/verve_insta.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'BRAND BOOK INTERIOR', image: '/assets/verve/verve_stationery.png' },
      { aspect: 'aspect-[16/9]', label: 'IDENTITY GUIDELINES', image: '/assets/verve/verve_website.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'MATTE FINISH DECO', image: '/assets/verve/brand_guideline_verve.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'STATIONERY SYSTEM', image: '/assets/verve/Continue_using_the_approved_VERVE_202606300534.jpeg' }
    ]
  },
  {
    id: 'crave',
    title: 'CRAVE',
    category: 'Premium Restaurant & Food Brand',
    introduction: 'CRAVE is a contemporary restaurant identity designed around elevated dining experiences and refined visual storytelling. The brand captures the visceral joy of hospitality by combining sensory focus with a highly sophisticated design language. It establishes a warm, memorable dialogue with diners through every physical and digital touchpoint.',
    challenge: 'Modern hospitality brands often struggle to strike a balance between friendly, welcoming accessibility and premium, upscale culinary credibility. CRAVE needed an identity that felt deeply sensory and appetite-inducing without resorting to traditional restaurant cliches or sterile, overly formal minimalism. The brand required a unified system that could adapt from physical space graphics to high-touch digital applications.',
    solution: 'We developed a design system that pairs warm, tactile typography with structured editorial compositions. By using a highly consistent grid system and premium monochrome layouts accented with rich photography styles, we established a refined sensory experience. The branding communicates modern luxury, ensuring that every touchpoint feels deliberate, elegant, and welcoming.',
    approach: 'Our approach relied on a beautiful, high-contrast serif typeface that evokes artisanal craft, paired with spacious layout structures that give imagery room to breathe. The typography is treated as a core design element, applied across tactile menus, clean takeout boxes, and environmental signage. Every piece of collateral is designed to build anticipation and celebrate the dining experience.',
    identity: 'The visual system bridges the gap between physical architecture and print design through sophisticated menu layouts, refined takeaway packaging, and clean environmental graphics. The social media presence reflects this same editorial precision, treating food photography and typography as high-end editorial spreads. Consistent brand standards unify the entire customer journey, from booking to the final check.',
    outcome: 'The completed brand system elevates CRAVE into a cohesive culinary lifestyle brand, creating a lasting impression of hospitality and design excellence. It resonates with sophisticated diners who seek memorable, high-concept sensory encounters.',
    placeholders: [
      { aspect: 'aspect-[16/9]', label: 'HERO', image: '/assets/crave/hero_crave.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'SILKSCREEN PACKAGING', image: '/assets/crave/brand_identity_crave.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'BRAND COLLATERAL SET', image: '/assets/crave/crave_branding.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'EMBOSSED TYPE DETAIL', image: '/assets/crave/crave_insta.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'EDITORIAL MENU LAYOUT', image: '/assets/crave/crave_logo.png' },
      { aspect: 'aspect-[16/9]', label: 'EXPRESSIVE MARK SYSTEM', image: '/assets/crave/crave_packaging.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'TACTILE TRAY SHEET', image: '/assets/crave/crave_website.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'MOBILE WEBSITE', image: '/assets/crave/mobile_website_crave.jpeg' }
    ]
  },
  {
    id: 'evyatra',
    title: 'EV YATRA',
    category: 'Electric Mobility Brand',
    introduction: 'EV YATRA is a modern electric mobility company focused on sustainable urban transportation. The brand system emphasizes clarity, innovation, and absolute accessibility across vehicle graphics, digital interfaces, and marketing applications. It positions sustainable travel not just as a technology, but as a seamless and beautiful daily ritual.',
    challenge: 'The electric vehicle sector is often marketed through sterile, hyper-futuristic designs or overly technical, hard-to-navigate digital platforms. EV YATRA required an approachable, human-centric identity that speaks to reliability and ease of use while maintaining an innovative, premium edge. The brand needed to scale across vehicle surfaces, mobile screen interfaces, and massive physical charging stations.',
    solution: 'We constructed a future-focused, modular identity system that is digital-first, clean, and incredibly adaptable. We established a visual language based on precise linear structures, ample negative space, and premium layout systems that convey reliability and quiet innovation. This grid-based approach ensures flawless clarity in high-motion environments, from roadside graphics to app interfaces.',
    approach: 'The design system relies on a functional sans-serif typeface that maximizes legibility under diverse physical conditions, accented with a bespoke editorial serif for hero titles. We designed a clear information hierarchy for navigation graphics, charging screens, and vehicle wraps. The layout feels highly structured and premium, using light-to-dark contrasts to highlight critical functional details.',
    identity: 'The visual assets feature an integrated ecosystem of clean vehicle graphics, a modular mobile application interface, minimalist charging station branding, and a spacious website layout. The environmental graphics and livery use bold, clean proportions to command presence on urban streets. This cohesion establishes immediate trust, celebrating ecological responsibility through beautiful, refined design.',
    outcome: 'EV YATRA\'s new visual system provides a clean, premium framework for the future of sustainable travel. It successfully bridges hardware and software, creating a recognizable, trusted presence in the physical and digital landscape.',
    placeholders: [
      { aspect: 'aspect-[16/9]', label: 'HERO', image: '/assets/evyatra/hero_evyatra.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'VEHICLE GRAPHICS LIVERY', image: '/assets/evyatra/evyatra_dashboard.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'MOBILE ECOSYSTEM UI', image: '/assets/evyatra/evyatra_web_homepage.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'CHARGING INTERFACE DESIGN', image: '/assets/evyatra/designsystem_evyatra.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'MODULAR SYMBOLOGY GRID', image: '/assets/evyatra/mobile_app.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'FINAL PRESENTATION', image: '/assets/evyatra/evyatra_final.jpeg' }
    ]
  },
  {
    id: 'elan',
    title: 'ELAN',
    category: 'Luxury Fashion Brand',
    introduction: 'ELAN is a premium fashion label that embraces timeless minimalism and understated luxury. The brand identity is inspired by elegance, exclusivity, and refined editorial design, rejecting transient trends in favor of permanent sophistication. Every element is carefully crafted to communicate luxury through a quiet, confident aesthetic.',
    challenge: 'Luxury fashion branding is a crowded landscape where brands often rely on loud logos or over-complicated visual themes to capture attention. ELAN required a quiet, confident voice that communicates high-end exclusivity through negative space and typographic discipline. The system had to feel cohesive across clothing packaging, tactile brand stationery, digital campaigns, and physical garments.',
    solution: 'We implemented an elegant, classical layout structure driven by editorial serif typography and ample room to breathe. By focusing purely on material texture, premium paper stock simulations in photography, and structural simplicity, we established a timeless luxury language. The brand\'s presence is quiet yet instantly recognizable, relying on the quality of proportions.',
    approach: 'The grid is deliberately simple, allowing high-fashion imagery and classical typography to tell the story of the collection. We established a strict visual discipline where logo placement is discreet, acting as a luxury signature rather than a loud statement. Stationery, clothing tags, and packaging receive a clean treatment to celebrate high-end tactile quality.',
    identity: 'The visual identity spans stunning minimalist packaging, heavy-gauge paper shopping bags, woven clothing labels, textured business cards, and a spacious digital platform. Editorial fashion campaigns utilize quiet layouts, allowing the silhouettes and fabrics to take center stage. The resulting look is elegant, exclusive, and tailored for a highly design-conscious consumer base.',
    outcome: 'The brand identity establishes ELAN as a modern luxury fashion icon. It speaks directly to consumers who value craftsmanship, exclusivity, and the art of understated elegance.',
    placeholders: [
      { aspect: 'aspect-[16/9]', label: 'HERO', image: '/assets/elan/hero_bottle.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'EDITORIAL CAMPAIGN LAYOUT', image: '/assets/elan/lux_website.jpeg' },
      { aspect: 'aspect-[16/9]', label: 'TACTILE PACKAGING SUITE', image: '/assets/elan/packaging.jpeg' }
    ]
  }
];

const projectOverviews: Record<string, { deliverables: string[]; tools: string[] }> = {
  verve: {
    deliverables: ['Branding', 'Packaging Design', 'Typography Grid', 'Brand Guidelines', 'Stationery System'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma']
  },
  crave: {
    deliverables: ['Restaurant Identity', 'Editorial Menu Design', 'Packaging Design', 'Website Design', 'Social Media'],
    tools: ['Figma', 'Adobe Photoshop', 'Adobe InDesign']
  },
  evyatra: {
    deliverables: ['Brand Identity', 'Vehicle Livery Design', 'Mobile App UI/UX', 'Design System', 'Iconography'],
    tools: ['Figma', 'Adobe Illustrator', 'After Effects']
  },
  elan: {
    deliverables: ['Luxury Brand Signature', 'Packaging Suite', 'Woven Clothing Labels', 'Editorial Web Design', 'Campaign Direction'],
    tools: ['Figma', 'Cinema 4D', 'Adobe Photoshop']
  }
};

interface BehanceImageProps {
  src: string;
  alt?: string;
}

function BehanceImage({ src, alt }: BehanceImageProps) {
  return (
    <div className="w-full h-auto overflow-hidden">
      <img
        src={src}
        alt={alt || 'Project asset'}
        className="w-full h-auto object-contain block transition-opacity duration-500 hover:opacity-95"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

interface ProjectCaseProps {
  project: Project;
  key?: string;
}

function ProjectCase({ project }: ProjectCaseProps) {
  const overview = projectOverviews[project.id] || { deliverables: [], tools: [] };

  return (
    <div className="py-20 md:py-24 border-t border-white/5 bg-[#050505] flex flex-col items-center">
      {/* 1. Minimal Editorial Header Block */}
      <div className="px-6 md:px-12 w-full max-w-[1450px] mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Title and Intro */}
        <div className="lg:col-span-8 flex flex-col gap-3">
          <div>
            <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] text-white/40 uppercase block mb-1">
              {project.category}
            </span>
            <h3 className="text-4xl md:text-7xl display-serif font-black italic tracking-tighter leading-tight text-white uppercase">
              {project.title}
            </h3>
          </div>
          <p className="text-sm md:text-base text-white/60 leading-relaxed font-light max-w-2xl mt-2">
            {project.introduction}
          </p>
        </div>

        {/* Project Overview Sideblock */}
        <div className="lg:col-span-4 border-l border-white/10 pl-6 lg:pl-10 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:gap-6 lg:py-1">
          <div>
            <h4 className="text-[9px] uppercase font-mono tracking-[0.4em] text-white/40 mb-2">
              Project Overview
            </h4>
            <ul className="flex flex-col gap-1">
              {overview.deliverables.map((item, idx) => (
                <li key={idx} className="text-xs text-white/60 font-mono tracking-wide">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[9px] uppercase font-mono tracking-[0.4em] text-white/40 mb-2">
              Tools
            </h4>
            <ul className="flex flex-col gap-1">
              {overview.tools.map((item, idx) => (
                <li key={idx} className="text-xs text-white/60 font-mono tracking-wide">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Custom Behance Style Layout Compositions */}
      <div className="px-6 md:px-12 w-full max-w-[1450px] flex flex-col gap-3 md:gap-4">
        {project.id === 'verve' && (
          <>
            {/* Full-width premium hero */}
            <div className="w-full">
              <BehanceImage src="/assets/verve/hero_verve.jpeg" alt="Verve Hero Beverage Branding" />
            </div>
            {/* Two images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <BehanceImage src="/assets/verve/verve_coffee.jpeg" alt="Verve Packaging Composition" />
              <BehanceImage src="/assets/verve/verve_insta.jpeg" alt="Verve Typographic Grid Layout" />
            </div>
            {/* Occasional centered single image */}
            <div className="w-full max-w-[1100px] mx-auto py-4 md:py-8">
              <BehanceImage src="/assets/verve/verve_stationery.png" alt="Verve Brand Book Stationery" />
            </div>
            {/* Three equal columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              <BehanceImage src="/assets/verve/verve_website.jpeg" alt="Verve Identity Guidelines" />
              <BehanceImage src="/assets/verve/brand_guideline_verve.jpeg" alt="Verve Matte Finish Deco Packaging" />
              <BehanceImage src="/assets/verve/Continue_using_the_approved_VERVE_202606300534.jpeg" alt="Verve Stationery System" />
            </div>
          </>
        )}

        {project.id === 'crave' && (
          <>
            {/* Full hero */}
            <div className="w-full">
              <BehanceImage src="/assets/crave/hero_crave.jpeg" alt="Crave Restaurant Hero Branding" />
            </div>
            {/* Asymmetric - one large + two stacked */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4 items-stretch">
              <div className="lg:col-span-7 flex items-center justify-center">
                <BehanceImage src="/assets/crave/brand_identity_crave.jpeg" alt="Crave Silkscreen Packaging" />
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3 md:gap-4 justify-between">
                <BehanceImage src="/assets/crave/crave_branding.jpeg" alt="Crave Brand Collateral Set" />
                <BehanceImage src="/assets/crave/crave_insta.jpeg" alt="Crave Embossed Typographic Details" />
              </div>
            </div>
            {/* Single centered brand mark */}
            <div className="w-full max-w-[750px] mx-auto py-6 md:py-12">
              <BehanceImage src="/assets/crave/crave_logo.png" alt="Crave Logo Mark System" />
            </div>
            {/* Image strip */}
            <div className="w-full">
              <BehanceImage src="/assets/crave/crave_packaging.jpeg" alt="Crave Expressive Food Packaging" />
            </div>
            {/* Alternating layout (Two equal columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <BehanceImage src="/assets/crave/crave_website.jpeg" alt="Crave Editorial Menu Layout" />
              <BehanceImage src="/assets/crave/mobile_website_crave.jpeg" alt="Crave Mobile Responsive Design" />
            </div>
          </>
        )}

        {project.id === 'evyatra' && (
          <>
            {/* Hero */}
            <div className="w-full">
              <BehanceImage src="/assets/evyatra/hero_evyatra.jpeg" alt="EV Yatra Electric Mobility Hero" />
            </div>
            {/* Asymmetric alternating side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4 items-start">
              <div className="lg:col-span-5">
                <BehanceImage src="/assets/evyatra/evyatra_dashboard.jpeg" alt="EV Yatra Vehicle Graphics Livery" />
              </div>
              <div className="lg:col-span-7">
                <BehanceImage src="/assets/evyatra/evyatra_web_homepage.jpeg" alt="EV Yatra Web Portal Homepage" />
              </div>
            </div>
            {/* Image strip (Charging system) */}
            <div className="w-full py-2 md:py-4">
              <BehanceImage src="/assets/evyatra/designsystem_evyatra.jpeg" alt="EV Yatra Design System Charging Interface" />
            </div>
            {/* Two equal columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <BehanceImage src="/assets/evyatra/mobile_app.jpeg" alt="EV Yatra Mobile Ecosystem" />
              <BehanceImage src="/assets/evyatra/evyatra_final.jpeg" alt="EV Yatra Presentation Graphics" />
            </div>
          </>
        )}

        {project.id === 'elan' && (
          <>
            {/* Hero */}
            <div className="w-full">
              <BehanceImage src="/assets/elan/hero_bottle.jpeg" alt="Elan Luxury Bottle Design" />
            </div>
            {/* Two images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <BehanceImage src="/assets/elan/lux_website.jpeg" alt="Elan Editorial Fashion Campaign Layout" />
              <BehanceImage src="/assets/elan/packaging.jpeg" alt="Elan Luxury Tactile Brand Packaging" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-[#050505]">
      {/* Small intro row */}
      <div className="py-20 px-6 md:px-12 max-w-[1450px] mx-auto flex items-center justify-between border-t border-white/5">
         <h2 className="text-4xl md:text-5xl display-serif font-black italic text-white tracking-tight">
            Projects
         </h2>
         <div className="w-1/4 h-[1px] bg-white/10 hidden md:block"></div>
      </div>
      
      {projects.map((project) => (
        <ProjectCase key={project.id} project={project} />
      ))}
    </section>
  );
}
