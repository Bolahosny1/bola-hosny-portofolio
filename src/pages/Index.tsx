import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import CVSection from "@/components/CVSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Certifications />
      <Education />
      <CVSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
