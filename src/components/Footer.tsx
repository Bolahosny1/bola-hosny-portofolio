import { Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
          <Terminal className="w-4 h-4 text-primary" />
          <span>bola_hosny_portfolio </span>
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Bola Hosny • Built with passion for infrastructure
        </p>
      </div>
    </footer>);

};

export default Footer;