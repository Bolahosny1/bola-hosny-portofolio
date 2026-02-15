import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

const getVariants = (direction: Direction) => {
  const map = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  };
  return map[direction];
};

const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) => {
  const variants = getVariants(direction);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{
        duration: 0.7,
        delay,
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
