import { Heart, Terminal, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { sectionColors } from "@/theme/colors";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const Footer = () => {
  const contactColor = sectionColors.contact;

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    // { name: "Open Source", href: "#opensource" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Shivamjain2204", 
      label: "GitHub",
      color: contactColor
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/shivam-jain2204/", 
      label: "LinkedIn",
      color: contactColor
    },
    { 
      icon: Twitter, 
      href: "https://x.com/Shivamjain013", 
      label: "Twitter",
      color: contactColor
    },
    { 
      icon: Mail, 
      href: "jainshivam2204@gmail.com", 
      label: "Email",
      color: contactColor
    }
  ];

  return (
    <footer className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-background via-secondary/10 to-background"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64" style={{ backgroundColor: `${contactColor}05`, borderRadius: '100%', filter: 'blur(100px)' }}></div>
      <div className="absolute bottom-20 right-10 w-72 h-72" style={{ backgroundColor: `${contactColor}05`, borderRadius: '100%', filter: 'blur(80px)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <GlassCard color={contactColor} className="mb-10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <motion.div 
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center p-2 rounded-lg" 
                  style={{ backgroundColor: `${contactColor}20`}}>
                  <Terminal size={20} style={{ color: contactColor }} />
                </div>
                <div className="text-2xl font-mono font-bold">
                  <span>Shivam</span>
                </div>
              </motion.div>
              <motion.p 
                className="text-muted-foreground mb-4 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Software engineer specializing in building exceptional digital experiences with a focus on responsive design and clean code.
              </motion.p>
            </div>
            
            <div className="md:col-span-1">
              <motion.h3 
                className="text-lg font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Quick Links
              </motion.h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:pl-1"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <motion.h3 
                className="text-lg font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Let's Connect
              </motion.h3>
              <motion.div 
                className="flex gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a 
                      key={index}
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
                      style={{ 
                        backgroundColor: `rgba(255, 255, 255, 0.05)`,
                        border: `1px solid rgba(255, 255, 255, 0.1)`,
                        color: social.color
                      }}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </motion.div>
              
              <motion.div 
                className="text-muted-foreground space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>jainshivam2204@gmail.com</p>
                <p>+91 7620150801</p>
                <p>Navi Mumbai, India</p>
              </motion.div>
            </div>
          </div>
        </GlassCard>
        
        <motion.div 
          className="text-center text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Shivam Jain. Made with 
            <motion.span 
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            >
              <Heart size={16} style={{ color: contactColor }} />
            </motion.span> 
            in Navi Mumbai, India
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
