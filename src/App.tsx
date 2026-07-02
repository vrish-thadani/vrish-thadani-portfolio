import Intro from './components/Intro';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Capabilities from './components/Capabilities';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-[#050505] font-sans selection:bg-white/20 selection:text-white text-white overflow-x-hidden">
      <Intro />
      <Header />
      <Hero />
      <Experience />
      <Capabilities />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}
