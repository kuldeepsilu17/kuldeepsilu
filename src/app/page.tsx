import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStackMarquee from "@/components/TechStackMarquee";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStackMarquee />
      <Skills />
      <Achievements />
      <Contact />
    </>
  );
}
