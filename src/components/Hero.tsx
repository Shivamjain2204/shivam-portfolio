import { Code } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { sectionColors } from "@/theme/colors";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionTitle } from "@/components/ui/SectionTitle";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const northernLightsRef = useRef<HTMLDivElement>(null);
  const heroColor = sectionColors.hero;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (northernLightsRef.current) {
      const { x, y } = mousePosition;
      const xOffset = (x - 50) * 0.02;
      const yOffset = (y - 50) * 0.02;
      northernLightsRef.current.style.transform = `translate(${xOffset}rem, ${yOffset}rem)`;
    }
  }, [mousePosition]);

  return (
    <section id="hero" className="relative overflow-hidden py-32" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center"
    }}>
      <SectionBackground color={heroColor} disableParticles={true} />
      
      {/* Custom northern lights effect - kept separate from SectionBackground */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          ref={northernLightsRef}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ 
            filter: "blur(100px)",
            opacity: 0.5,
            willChange: "transform"
          }}
        >
          <div className="absolute top-[-10%] left-[5%] w-[50%] h-[50%] rounded-full opacity-60" style={{ backgroundColor: heroColor }}></div>
          <div className="absolute top-[20%] left-[10%] w-[65%] h-[50%] rounded-full bg-[#0EA5E9] opacity-50"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-[#8B5CF6] opacity-40"></div>
          <div className="absolute bottom-[30%] left-[30%] w-[30%] h-[30%] rounded-full bg-[#3B82F6] opacity-30"></div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.p
                className="font-mono text-sm uppercase tracking-wider mb-4 relative z-10"
                style={{ color: heroColor }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Welcome to my portfolio
              </motion.p>
              
              <h1 className="text-6xl md:text-8xl font-anton uppercase tracking-tight leading-none relative z-10">
                <motion.span 
                  className="block bg-clip-text text-transparent"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  style={{ backgroundImage: `linear-gradient(to right, ${heroColor}, ${heroColor}70)` }}
                >
                  Front
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  End
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ color: heroColor }}
                >
                  Developer
                </motion.span>
              </h1>
            </div>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Results-oriented Frontend Developer👨🏻‍💻 with expertise in React🕸️ and Next.js, building scalable, AI-powered web applications that enhance user experiences and drive growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-5 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="#contact" 
                className="group relative px-8 py-3.5 font-medium uppercase tracking-wide inline-flex items-center transition-all duration-300 overflow-hidden rounded-lg"
                style={{ 
                  backgroundColor: heroColor,
                  color: "white"
                }}
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
              <a 
                href="#projects" 
                className="group relative px-8 py-3.5 border font-medium uppercase tracking-wide transition-all duration-300 overflow-hidden rounded-lg"
                style={{ 
                  borderColor: `${heroColor}30`,
                  backgroundColor: "transparent"
                }}
              >
                <span className="relative z-10">View Work</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: `${heroColor}05` }}></span>
                <span className="absolute bottom-0 left-0 h-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" style={{ backgroundColor: `${heroColor}30` }}></span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <GlassCard color={heroColor} className="p-7 lg:p-8 transition-all duration-300 group relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl" style={{ backgroundColor: `${heroColor}10` }}>
                  <Code style={{ color: heroColor }} size={24} />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-mono opacity-70">developer.profile</p>
                  <div className="h-0.5 w-full mt-1 rounded-full" style={{ background: `linear-gradient(to right, ${heroColor}30, transparent)` }}></div>
                </div>
              </div>
              
              <div className="font-mono text-sm">
                <div className="mb-3">
                  <span style={{ color: heroColor }}>const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> = {"{"}
                </div>
                
                <div className="pl-6 space-y-1.5">
                  <div>
                    <span className="text-orange-600 dark:text-orange-400">name</span>: <span className="text-green-600 dark:text-green-400">'Shivam Jain'</span>,
                  </div>
                  <div>
                    <span className="text-orange-600 dark:text-orange-400">title</span>: <span className="text-green-600 dark:text-green-400">'Software Engineer'</span>,
                  </div>
                  <div>
                    <span className="text-orange-600 dark:text-orange-400">location</span>: <span className="text-green-600 dark:text-green-400">'Navi Mumbai, India'</span>,
                  </div>
                  <div>
                    <span className="text-orange-600 dark:text-orange-400">skills</span>: [
                  </div>
                  <div className="pl-6">
                    <span className="text-green-600 dark:text-green-400">'React'</span>,{" "}
                    <span className="text-green-600 dark:text-green-400">'Next.js'</span>,{" "}
                    <span className="text-green-600 dark:text-green-400">'React Native'</span>,{" "}
                  </div>
                  <div className="pl-6">
                    <span className="text-green-600 dark:text-green-400">'TypeScript'</span>,{" "}
                    <span className="text-green-600 dark:text-green-400">'UI/UX'</span>,{" "}
                    <span className="text-green-600 dark:text-green-400">'Problem Solving'</span>
                  </div>
                  <div>
                    ],
                  </div>
                </div>
                
                <div className="mt-3">{"}"}</div>
              </div>
            </GlassCard>
            
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl -z-10 blur-md" style={{ 
              background: `linear-gradient(to bottom right, ${heroColor}20, transparent)`
            }}></div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 w-32 h-32 border rounded-full opacity-20 pointer-events-none" style={{ borderColor: `${heroColor}20` }}></div>
      <div className="absolute top-32 right-10 w-16 h-16 border rounded-full opacity-20 pointer-events-none" style={{ borderColor: `${heroColor}20` }}></div>
    </section>
  );
};

export default Hero;
