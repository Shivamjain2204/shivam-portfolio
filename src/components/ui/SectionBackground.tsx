import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SectionBackgroundProps {
  color: string;
  particleCount?: number;
  disableParticles?: boolean;
}

export const SectionBackground = ({ 
  color, 
  particleCount = 15,
  disableParticles = false
}: SectionBackgroundProps) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-background via-secondary/30 to-background -z-10"></div>
      
      <div className="absolute top-20 left-10 w-64 h-64" style={{ backgroundColor: `${color}05`, borderRadius: '100%', filter: 'blur(100px)' }}></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      {!disableParticles && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: particleCount }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{ backgroundColor: `${color}20` }}
              initial={{ 
                x: Math.random() * windowSize.width, 
                y: Math.random() * windowSize.height 
              }}
              animate={{ 
                x: Math.random() * windowSize.width, 
                y: Math.random() * windowSize.height 
              }}
              transition={{ 
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}; 