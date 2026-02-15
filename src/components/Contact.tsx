import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <SectionTitle tag="contact" title="Get In Touch" subtitle="Let's connect and build something great together." />

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        <AnimatedSection>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono"> Email</p>
                <a href="mailto:bolahosny10@gmail.com" className="text-foreground text-sm hover:text-primary transition-colors">bolahosny10@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono"> Phone</p>
                <p className="text-foreground text-sm">+201270964427</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono"> Location</p>
                <p className="text-foreground text-sm">Cairo, Egypt</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {[
              { icon: Github, href: "https://github.com/Bolahosny1" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/bola-hosny/" }].
              map(({ icon: Icon, href }, i) =>
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg text-muted-foreground hover:text-primary transition-all duration-300">

                  <Icon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs font-mono text-muted-foreground block mb-1">name</label>
              <input
                type="text"
                className="w-full glass rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors font-mono"
                placeholder="Your name" />

            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground block mb-1">email</label>
              <input
                type="email"
                className="w-full glass rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors font-mono"
                placeholder="your@email.com" />

            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground block mb-1">message</label>
              <textarea
                rows={4}
                className="w-full glass rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors font-mono resize-none"
                placeholder="Your message..." />

            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-shimmer btn-glow inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity w-full justify-center">

              <Send className="w-4 h-4" />
              Send Message
            </motion.button>
          </form>
        </AnimatedSection>
      </div>
    </section>);

};

export default Contact;