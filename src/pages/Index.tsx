import { Navbar } from "@/components/portfolio/Navbar";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectsTimeline } from "@/components/portfolio/ProjectsTimeline";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ProjectsTimeline />
        <Skills />
        <Experience />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
