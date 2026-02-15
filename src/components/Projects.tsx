import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { ExternalLink, Github, Cloud, Brain, Plane, Terminal } from "lucide-react";

const projects = [
{
  title: "AWS Cloud Architecting Capstone",
  desc: "Deployed a highly available PHP app on AWS with ALB, Auto Scaling, RDS MySQL, Secrets Manager, and strict security controls.",
  tech: ["AWS", "ALB", "RDS", "Auto Scaling"],
  icon: Cloud,
  github: "https://github.com/Bolahosny1"
},
{
  title: "Emotion Recognition System",
  desc: "Real-time facial emotion detection using CNNs (TensorFlow, Keras, OpenCV). Trained on 35k+ images achieving 82.8% validation accuracy.",
  tech: ["Python", "TensorFlow", "OpenCV", "CNN"],
  icon: Brain,
  github: "https://github.com/Bolahosny1"
},
{
  title: "Flight Reservation App",
  desc: "Python desktop application built with Tkinter and SQLite for flight search, reservation, and cancellation workflows.",
  tech: ["Python", "Tkinter", "SQLite", "OOP"],
  icon: Plane,
  github: "https://github.com/Bolahosny1"
},
{
  title: "Bash DBMS",
  desc: "CLI database management system built in Bash supporting full CRUD operations, data validation, and primary key constraints.",
  tech: ["Bash", "Linux", "CLI"],
  icon: Terminal,
  github: "https://github.com/Bolahosny1"
}];


const Projects = () => {
  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <SectionTitle tag="projects" title="Projects" subtitle="Real projects I've built and deployed." />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) =>
        <AnimatedSection key={project.title} delay={i * 0.1}>
            <motion.div
            whileHover={{ y: -4 }}
            className="glass rounded-lg p-6 h-full flex flex-col group">

              <project.icon className="w-8 h-8 text-primary mb-4 group-hover:text-glow" />
              <h3 className="text-lg font-bold text-foreground mb-2 font-mono">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow font-mono">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) =>
              <span key={t} className="px-2 py-1 text-xs font-mono bg-secondary border border-border rounded text-muted-foreground">
                    {t}
                  </span>
              )}
              </div>
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatedSection>
        )}
      </div>
    </section>);

};

export default Projects;