import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import profileImg from "@/assets/profile-2.jpg";

const lines = [
"$ whoami",
"> Bola Hosny — DevOps Engineer",
"$ cat specialties.txt",
"> AWS | Docker | Kubernetes | Linux | CI/CD",
"$ uptime",
"> CS Student & Cloud/DevOps Enthusiast"];


const Hero = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
      }, i * 400);
    });
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(160 80% 45% / 0.3) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(160 80% 45% / 0.3) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="shrink-0">

            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/30 card-glow">
              <img alt="Bola Hosny" className="w-full h-full object-cover" src="/lovable-uploads/21b825a0-d586-40a2-be6e-961949f39031.jpg" />
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4">

              <span className="font-mono text-primary text-sm">// ready to deploy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4">

              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text text-glow">Bola Hosny</span>
              <br />
              <span className="text-foreground text-2xl md:text-3xl lg:text-4xl">DevOps Engineer</span>
            </motion.h1>

            {/* Terminal block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass rounded-lg p-4 md:p-6 max-w-xl mb-6">

              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-terminal-amber/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
                
              </div>
              <div className="font-mono text-sm space-y-1">
                {displayedLines.map((line, i) =>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={line.startsWith("$") ? "text-primary" : line.startsWith(">") ? "text-muted-foreground" : "text-foreground"}>

                    {line}
                  </motion.div>
                )}
                <span className="inline-block w-2 h-4 bg-primary terminal-cursor" />
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-4">

              {[
              { icon: Github, href: "https://github.com/Bolahosny1", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/bola-hosny/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:bolahosny10@gmail.com", label: "Email" }].
              map(({ icon: Icon, href, label }) =>
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-3 glass rounded-lg text-muted-foreground hover:text-primary transition-all duration-300">

                  <Icon className="w-5 h-5" />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors">

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>);

};

export default Hero;