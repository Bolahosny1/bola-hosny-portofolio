import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { Award } from "lucide-react";

const certs = [
  { name: "AWS Academy Cloud Foundations", org: "Amazon Web Services", year: "2024" },
  { name: "AWS Academy Cloud Architecting", org: "Amazon Web Services", year: "2025" },
  { name: "Linux Essentials Certification", org: "Cisco Networking Academy", year: "2024" },
  { name: "Introduction to Kubernetes", org: "The Linux Foundation", year: "2025" },
  { name: "HCIA-Datacom V1.0", org: "Huawei ICT Academy", year: "2024" },
  { name: "Cloud & Virtualization Concepts", org: "VMware", year: "2024" },
  { name: "Docker Training for Beginners", org: "KodeKloud", year: "2024" },
  { name: "Learning Linux Basics", org: "KodeKloud", year: "2024" },
  { name: "Top Graduate — NTI Summer Training", org: "ITIDA & NTI", year: "2024-2025" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding max-w-7xl mx-auto">
      <SectionTitle tag="certifications" title="Courses & Certifications" subtitle="Professional certifications and training programs." />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((cert, i) => (
          <AnimatedSection key={cert.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ x: 4 }}
              className="glass rounded-lg p-5 flex items-start gap-4 h-full"
            >
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-foreground">{cert.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {cert.org} • {cert.year}
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
