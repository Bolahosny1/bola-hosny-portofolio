import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { Download, FileText } from "lucide-react";

const CVSection = () => {
  return (
    <section id="cv" className="section-padding max-w-7xl mx-auto">
      <SectionTitle tag="resume" title="Download CV" subtitle="Get a copy of my full resume." />

      <AnimatedSection>
        <div className="glass rounded-lg p-8 md:p-12 text-center max-w-2xl mx-auto">
          <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-display text-xl font-bold text-foreground mb-2">Bola Hosny — CV</h3>
          <p className="text-muted-foreground mb-6 text-sm font-mono">
            Download my complete resume with detailed experience, skills, and certifications.
          </p>
          <motion.a
            href="/Bola_Hosny_CV.pdf"
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-shimmer btn-glow inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">

            <Download className="w-4 h-4" />
            Download CV
          </motion.a>
        </div>
      </AnimatedSection>
    </section>);

};

export default CVSection;