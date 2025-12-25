import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blogs from "@/components/Blogs";
import TechTalks from "@/components/TechTalks";
import Hobbies from "@/components/Hobbies";
import { useThemeStore } from "@/stores/useThemeStore";
import { ArrowUp, Rocket } from "lucide-react";
import { Analytics } from '@vercel/analytics/react';  
import { motion, AnimatePresence } from "framer-motion";
import { sectionColors } from "@/theme/colors";

const Index = () => {
  const { isDarkMode } = useThemeStore();
  const [isVisible, setIsVisible] = useState(false);
  const [isRocketAnimating, setIsRocketAnimating] = useState(false);

  useEffect(() => {
    // Update document title
    document.title = "Shivam Jain | Frontend Developer";
    
    // Apply dark mode class immediately
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      });
    });

    // Show/hide scroll to top button
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isDarkMode]);

  const scrollToTop = () => {
    setIsRocketAnimating(true);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsRocketAnimating(false);
    }, 1000);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Rocket animation variants
  const rocketVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { 
      opacity: [0, 1, 1, 0], 
      y: [-10, -100],
      transition: { 
        duration: 1,
        times: [0, 0.1, 0.8, 1]
      }
    }
  };
  
  return (
    <div className={`min-h-screen bg-background relative ${isDarkMode ? 'dark' : ''}`}>
      <Analytics />
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <div className="container mx-auto px-4 md:px-8">
          <Projects />
          <About />
          <Experience />
          <Skills />
          <Achievements />
          {/* <OpenSource /> */}
          {/* <Blogs /> */}
          {/* <TechTalks /> */}
          {/* <Hobbies /> */}
          <Contact />
        </div>
      </main>
      <Footer />
      
      {/* Back to top button */}
      {isVisible && (
        <motion.button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-20 backdrop-blur-md"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5, scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{ 
            backgroundColor: `rgba(255, 255, 255, 0.1)`,
            border: `1px solid rgba(255, 255, 255, 0.1)`,
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)`
          }}
        >
          <div className="relative">
            <ArrowUp className="h-6 w-6 relative z-10" style={{ color: sectionColors.hero }} />
            <div className="absolute inset-0 rounded-full opacity-20" style={{ 
              background: `radial-gradient(circle, ${sectionColors.hero}, transparent)`,
              filter: 'blur(8px)'
            }}></div>
          </div>
        </motion.button>
      )}
      
      {/* Rocket animation */}
      <AnimatePresence>
        {isRocketAnimating && (
          <motion.div 
            className="fixed z-30 bottom-20 right-11"
            variants={rocketVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Rocket 
              size={28} 
              className="transform -rotate-45"
              style={{ color: sectionColors.hero }}
            />
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-20"
              style={{ 
                background: `linear-gradient(to top, ${sectionColors.hero}00, ${sectionColors.hero}80)`,
                borderRadius: '50%',
                filter: 'blur(6px)',
                opacity: 0.7,
                zIndex: -1
              }}
              animate={{
                height: [0, 20],
                opacity: [0, 0.7, 0],
                y: [0, 20]
              }}
              transition={{
                duration: 1,
                repeat: 1,
                repeatType: "loop"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
