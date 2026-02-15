import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = [
{ label: "About", href: "#about" },
{ label: "Skills", href: "#skills" },
{ label: "Experience", href: "#experience" },
{ label: "Projects", href: "#projects" },
{ label: "Certifications", href: "#certifications" },
{ label: "Education", href: "#education" },
{ label: "CV", href: "#cv" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass border-b border-border/50" : "bg-transparent"}`
      }>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2 font-mono text-primary font-bold text-lg">
          <Terminal className="w-5 h-5" />
          <span>Bola Hosny</span>
          <span className="terminal-cursor text-foreground">_</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors duration-200">

              {item.label}
            </a>
          )}
          <button
            onClick={toggleTheme}
            className="p-2 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label="Toggle theme">

            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-foreground p-2"
            aria-label="Toggle theme">

            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2">

            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden">

            <div className="px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) =>
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors py-2">

                  $ cd {item.label.toLowerCase()}
                </a>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

};

export default Navbar;