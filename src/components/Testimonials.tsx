import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { Quote } from "lucide-react";
import profileImg from "@/assets/profile-1.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding max-w-7xl mx-auto">
      <SectionTitle tag="highlights" title="Quick Highlights" subtitle="Key achievements at a glance." />

      <div className="grid md:grid-cols-3 gap-6">
        {[
        {
          title: "150+ Problems",
          desc: "Solved competitive programming problems on Codeforces, sharpening algorithmic thinking and problem-solving skills."
        },
        {
          title: "ECPC Contestant",
          desc: "Participated in the Egyptian Collegiate Programming Contest (2024-2025), competing with top university teams."
        },
        {
          title: "Top NTI Graduate",
          desc: "Recognized as one of the Top Graduates of the NTI Summer Training Program organized by ITIDA."
        }].
        map((item, i) =>
        <AnimatedSection key={i} delay={i * 0.1}>
            <div className="glass rounded-lg p-6 h-full flex flex-col">
              <Quote className="w-5 h-5 text-primary/40 mb-3" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground flex-grow leading-relaxed font-mono">{item.desc}</p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>);

};

export default Testimonials;