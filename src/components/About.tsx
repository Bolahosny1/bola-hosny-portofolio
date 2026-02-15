import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { Server, GitBranch, Shield, Zap } from "lucide-react";
import profileImg from "@/assets/profile-3.jpg";

const highlights = [
{ icon: Server, title: "Cloud (AWS)", desc: "Designing scalable cloud architectures on AWS" },
{ icon: GitBranch, title: "CI/CD & Git", desc: "Building automated pipelines with Git & GitHub" },
{ icon: Shield, title: "Linux & Networking", desc: "Managing Linux servers, CCNA & MCSA certified" },
{ icon: Zap, title: "Containers", desc: "Docker & Kubernetes for container orchestration" }];


const About = () => {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <SectionTitle tag="about" title="About Me" subtitle="Passionate about cloud infrastructure and DevOps automation." />

      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedSection>
          <div className="glass rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <img src={profileImg} alt="Bola at event" className="w-20 h-20 rounded-lg object-cover border border-border" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Bola Hosny Refaat</h3>
                <p className="text-primary font-mono text-sm">DevOps Engineer</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 font-mono">
              Computer Science student at Future Academy with hands-on experience in AWS cloud 
              infrastructure and DevOps fundamentals gained through internships and intensive training 
              programs, including NTI and the Digital Egypt Pioneers Initiative (DEPI).
            </p>
            <p className="text-muted-foreground leading-relaxed font-mono">
              Skilled in Linux, Docker, Git, Kubernetes, and cloud architecture, with practical exposure 
              to designing scalable and secure solutions. Motivated to grow as a Cloud/DevOps Engineer 
              and contribute to real-world cloud systems. Solved 150+ algorithmic problems on Codeforces 
              and participated in ECPC.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) =>
            <div
              key={title}
              className="glass rounded-lg p-5 group cursor-default">

                <Icon className="w-6 h-6 text-primary mb-3 group-hover:text-glow transition-all" />
                <h3 className="font-mono text-sm font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>);

};

export default About;