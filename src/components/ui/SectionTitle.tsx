import { motion } from "framer-motion";

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  color: string;
  align?: "left" | "center" | "right";
  titleElement?: React.ReactNode;
}

export const SectionTitle = ({ 
  label, 
  title, 
  description, 
  color,
  align = "center",
  titleElement
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };

  return (
    <motion.div 
      className={`mb-16 md:mb-20 ${alignmentClasses[align]} max-w-3xl`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`inline-block mb-4 ${align === 'center' ? '' : (align === 'right' ? 'float-right' : '')}`}>
        <div className="relative">
          <motion.p 
            className="font-mono text-sm uppercase tracking-wider relative z-10"
            style={{ color }}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {label}
          </motion.p>
          <div className="absolute bottom-0 left-0 w-full h-3" style={{ backgroundColor: `${color}20` }}></div>
        </div>
      </div>
      
      {titleElement ? (
        <div className="mb-6">{titleElement}</div>
      ) : (
        <motion.h2 
          className="text-5xl md:text-6xl lg:text-7xl font-anton uppercase tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title.split(' ').map((word, i) => (
            <span key={i} className={i === 0 ? "bg-clip-text text-transparent mr-3" : "mr-3"} style={{ 
              backgroundImage: i === 0 ? `linear-gradient(to right, ${color}, ${color}70)` : undefined
            }}>
              {word}
            </span>
          ))}
        </motion.h2>
      )}
      
      {description && (
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}; 