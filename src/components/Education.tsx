import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { GraduationCap, Trophy } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding max-w-7xl mx-auto">
      <SectionTitle tag="education" title="Education" />

      <div className="space-y-4">
        <AnimatedSection>
          <div className="glass rounded-lg p-6 flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-lg shrink-0">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">Bachelor of Computer Science</h3>
              <p className="text-primary font-mono text-sm">Faculty of Computers and Information — Future Academy</p>
              <p className="text-xs text-muted-foreground mt-1">2022 - 2026 • Cairo, Egypt</p>
              <p className="text-sm text-muted-foreground mt-2">Grade: Very Good</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="glass rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Competitions & Achievements</h3>
            </div>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex items-start gap-2 font-mono">
                <span className="text-primary mt-1 shrink-0">▸</span>
                Solved 150+ algorithmic problems on Codeforces
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2 font-mono">
                <span className="text-primary mt-1 shrink-0">▸</span>
                Participated in ECPC (Egyptian Collegiate Programming Contest) 2024-2025
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2 font-mono">
                <span className="text-primary mt-1 shrink-0">▸</span>
                Top Graduate of NTI Summer Training Program (ITIDA & NTI) 2024-2025
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>);

};

export default Education;