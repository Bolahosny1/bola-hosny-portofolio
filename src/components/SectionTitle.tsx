import { motion } from "framer-motion";

interface SectionTitleProps {
  tag: string;
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ tag, title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16">

      <span className="font-mono text-sm text-primary mb-2 block">
        &lt;{tag} /&gt;
      </span>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
        {title}
      </h2>
      {subtitle &&
      <p className="text-muted-foreground max-w-2xl text-lg font-mono">{subtitle}</p>
      }
      <div className="mt-4 h-px w-20 bg-gradient-to-r from-primary to-accent" />
    </motion.div>);

};

export default SectionTitle;