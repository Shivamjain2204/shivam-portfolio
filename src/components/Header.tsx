import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, Menu, X, FileText, Terminal, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/stores/useThemeStore";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Works", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/mayank-96", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mayank-pagar", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/mayankp09_", label: "Twitter" },
    { icon: Mail, href: "mailto:pagarmayank07@gmail.com", label: "Email" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full py-5 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-xl font-mono font-bold hover:text-primary transition-colors flex items-center gap-2 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center p-2 bg-primary/10 rounded-lg text-primary relative overflow-hidden group-hover:bg-primary/15 transition-colors duration-300">
              <Terminal size={18} className="text-primary relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex items-baseline">
              <span className="text-foreground group-hover:text-primary transition-colors duration-300">Mayank</span>
            </div>
          </motion.a>

          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="text-sm uppercase tracking-wider hover:text-primary transition-all duration-300 relative px-1"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/70 transform scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <motion.button 
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors duration-300"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-primary" />
              )}
            </motion.button>
            
            <motion.a 
              href="https://drive.google.com/file/d/1kd6prOH4zqCzRvaJ17mlOz_VH6COTj8K/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-lg flex items-center gap-2 hover:bg-primary/20 transition-all duration-300 group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -2 }}
            >
              <FileText size={16} className="group-hover:animate-pulse" />
              <span className="font-medium">Resume</span>
            </motion.a>
            
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <social.icon size={18} />
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 transform scale-x-0 origin-center transition-transform duration-300 hover:scale-x-100"></span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-1.5 rounded-md"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-primary" />
              )}
            </button>
            
            <button 
              className="text-foreground p-1.5 bg-background/50 backdrop-blur-sm rounded-md border border-border/50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 md:hidden flex flex-col"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
              <a href="#" className="text-xl font-mono font-bold flex items-center gap-1.5">
                <div className="flex items-center justify-center p-1.5 bg-primary/10 rounded-lg text-primary">
                  <Terminal size={18} />
                </div>
                <div className="flex items-baseline">
                  <span className="text-foreground">Mayank</span>
                  <span className="text-primary">.dev</span>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <button 
                  onClick={toggleDarkMode}
                  className="p-1.5 rounded-md"
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDarkMode ? (
                    <Sun size={18} className="text-yellow-400" />
                  ) : (
                    <Moon size={18} className="text-primary" />
                  )}
                </button>
                
                <button 
                  onClick={toggleMenu} 
                  className="text-foreground p-1.5 bg-background/50 backdrop-blur-sm rounded-md border border-border/50"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col justify-center px-4">
              <nav className="mb-10">
                <ul className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={index} 
                      className="border-b border-border/50 pb-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                    >
                      <a 
                        href={link.href} 
                        className="text-2xl font-anton uppercase tracking-wide hover:text-primary transition-colors block"
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              <div className="space-y-8">
                <motion.div 
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <a 
                    href="https://drive.google.com/file/d/1ysG2hAJbTCnYUpigg4PbjsVD2kMnyqot/view?usp=drive_link" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary/10 text-primary border border-primary/30 rounded-lg flex items-center gap-2 hover:bg-primary/20 transition-colors"
                  >
                    <FileText size={18} />
                    <span className="font-medium">Resume</span>
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex justify-center gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  {socials.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors p-2"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
