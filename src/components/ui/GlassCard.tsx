import { motion, Variants } from "framer-motion";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  color: string;
  className?: string;
  hoverEffect?: boolean;
  variants?: Variants;
  noPadding?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  color,
  className = "",
  hoverEffect = true,
  variants,
  noPadding = false
}) => {
  return (
    <motion.div
      className={`bg-background/50 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden shadow-md ${!noPadding ? 'p-6' : ''} ${className}`}
      style={{
        boxShadow: `0 8px 32px -8px ${color}20`
      }}
      variants={variants}
      whileHover={hoverEffect ? { scale: 1.02, boxShadow: `0 10px 40px -10px ${color}30` } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}; 