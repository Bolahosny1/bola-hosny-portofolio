import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

const experiences = [
{
  role: "DevOps Engineer Trainee",
  company: "Digital Egypt Pioneers Initiative (DEPI)",
  period: "Nov 2025 - Present",
  points: [
  "Training on Linux, Bash scripting, Git, and GitHub",
  "Learning containerization using Docker and environment setup",
  "Participating in structured labs and coursework in the DEPI DevOps track"]

},
{
  role: "DevOps Foundations Intern",
  company: "Sprints x Microsoft Summer Camp",
  period: "Aug 2025 - Sep 2025",
  points: [
  "Completed 40+ hours of intensive DevOps fundamentals training",
  "Covered containerization, AWS Cloud & Microsoft Learn essentials",
  "Applied concepts through practical capstone projects"]

},
{
  role: "Cloud Architect Trainee",
  company: "National Telecommunication Institute (NTI)",
  period: "Aug 2025 - Sep 2025",
  points: [
  "Completed 120-hour training on virtualization and AWS cloud",
  "Solved 10+ hands-on labs on cloud architecture and security",
  "Gained expertise in AWS cost solutions and resource management"]

},
{
  role: "Infrastructure Engineer Trainee",
  company: "Suez Canal Authority",
  period: "Jul 2025 - Aug 2025",
  points: [
  "Hands-on training on IT infrastructure and network setup",
  "Managed enterprise-level server maintenance and hardware config",
  "Supported LAN/WAN design, system monitoring, and troubleshooting"]

},
{
  role: "AWS Cloud Trainee",
  company: "National Telecommunication Institute (NTI)",
  period: "Aug 2024 - Sep 2024",
  points: [
  "Completed 120-hour AWS foundations program",
  "Solved 10+ hands-on labs on core cloud services",
  "Covered cloud architecture and deployment fundamentals"]

},
{
  role: "Flight Simulator Training",
  company: "EgyptAir",
  period: "Jul 2024 - Aug 2024",
  points: [
  "Gained insights into aviation simulation engineering",
  "Worked with system operations, hardware integration, and real-time data"]

}];


const Experience = () => {
  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto">
      <SectionTitle tag="experience" title="Experience & Training" subtitle="My professional journey in Cloud & DevOps." />

      <div className="relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) =>
          <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative pl-8 md:pl-20">
                <div className="absolute left-0 md:left-8 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px] animate-pulse-glow" />

                <div className="glass rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-mono text-sm">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) =>
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2 font-mono">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {point}
                      </li>
                  )}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>);

};

export default Experience;