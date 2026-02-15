import { motion } from "framer-motion";
import { Cloud, Container, Code2, GitBranch, Monitor, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

const skillCategories = [
  {
    title: "Cloud & Virtualization",
    icon: Cloud,
    skills: ["AWS", "AWS Cloud Architecting", "AWS Cloud Foundations", "VMware"],
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "Docker Compose"],
  },
  {
    title: "Programming & Scripting",
    icon: Code2,
    skills: ["Python", "C++", "SQL", "Bash"],
  },
  {
    title: "DevOps Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "CI/CD", "Ansible"],
  },
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: ["Linux (Ubuntu)", "Red Hat", "Windows Server", "Windows"],
  },
  {
    title: "Networking & Security",
    icon: Shield,
    skills: ["CCNA", "MCSA", "Huawei HCIA-Datacom", "LAN/WAN"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding max-w-7xl mx-auto">
      <SectionTitle tag="skills" title="Tech Stack" subtitle="Tools and technologies I work with." />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.1}>
            <div className="glass rounded-lg p-6 h-full">
              <h3 className="font-mono text-sm font-semibold text-primary mb-4 flex items-center gap-2">
                <cat.icon className="w-4 h-4" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-sm font-mono bg-secondary border border-border rounded-md text-secondary-foreground hover:border-primary/40 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Skills;
