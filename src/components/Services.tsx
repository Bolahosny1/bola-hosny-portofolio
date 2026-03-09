import { motion } from "framer-motion";
import { 
  Box, 
  Terminal, 
  Server, 
  GitBranch, 
  Cpu, 
  Workflow, 
  Cloud, 
  ShieldCheck 
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "Docker Containerization",
    description: "Containerize your applications using Docker for consistent environments across development, testing, and production.",
    icon: Box,
  },
  {
    title: "Dockerfile & Compose Setup",
    description: "Write optimized Dockerfiles and Docker Compose configurations to run multi-container applications easily.",
    icon: Terminal,
  },
  {
    title: "Linux Server Setup",
    description: "Set up and configure Linux servers, install packages, manage users, and ensure your environment is production-ready.",
    icon: Server,
  },
  {
    title: "Git & GitHub Workflow",
    description: "Organize your codebase with proper Git branching strategies, pull request workflows, and GitHub Actions basics.",
    icon: GitBranch,
  },
  {
    title: "Bash Scripting & Automation",
    description: "Automate repetitive tasks with Bash scripts — from backups to deployments, saving you time and reducing errors.",
    icon: Cpu,
  },
  {
    title: "Basic CI/CD Pipelines",
    description: "Set up simple CI/CD pipelines using GitHub Actions to automate testing and deployment of your projects.",
    icon: Workflow,
  },
  {
    title: "AWS Cloud Solutions",
    description: "Design and implement scalable cloud architectures using AWS core services like EC2, S3, and RDS.",
    icon: Cloud,
  },
  {
    title: "AWS Infrastructure Automation",
    description: "Provision and manage AWS infrastructure using CloudFormation or Terraform for reliability and speed.",
    icon: ShieldCheck,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding max-w-7xl mx-auto">
      <div className="mb-4">
        <span className="font-mono text-sm text-primary mb-1 block">$ ls services/</span>
      </div>
      <SectionTitle 
        tag="services" 
        title="What I Can Do For You" 
        subtitle="As a junior DevOps engineer, here are the services I can help you with to get your projects running smoothly." 
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.1}>
            <div className="glass rounded-lg p-8 h-full flex flex-col items-start group hover:border-primary/50 transition-all duration-300">
              <div className="p-3 bg-secondary/50 rounded-lg border border-border group-hover:border-primary/30 transition-colors mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Services;
