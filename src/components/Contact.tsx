import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Loader2, Github, Linkedin, Twitter } from "lucide-react";
import { sectionColors } from "@/theme/colors";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";

const Contact = () => {
  const contactColor = sectionColors.contact;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <SectionBackground color={contactColor} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            label="Contact"
            title="Get In Touch"
            color={contactColor}
            description="Have a project in mind or want to discuss potential opportunities? I'd love to hear from you. Feel free to reach out and I'll get back to you as soon as possible."
            align="center"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard color={contactColor} className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="relative mr-2">
                  Contact Info
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full" style={{ background: `linear-gradient(to right, ${contactColor}, ${contactColor}30)` }}></span>
                </span>
              </h3>
              
              <div className="space-y-6 mt-8">
                <motion.div 
                  className="flex items-start gap-5 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-colors duration-300" 
                    style={{ backgroundColor: `${contactColor}10` }}>
                    <Mail style={{ color: contactColor }} size={22} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <a 
                      href="mailto:pagarmayank07@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      pagarmayank07@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-5 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-colors duration-300" 
                    style={{ backgroundColor: `${contactColor}10` }}>
                    <Phone style={{ color: contactColor }} size={22} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <a 
                      href="tel:+917620415699" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      +91 7620415699
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-5 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-colors duration-300" 
                    style={{ backgroundColor: `${contactColor}10` }}>
                    <MapPin style={{ color: contactColor }} size={22} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Location</h4>
                    <p className="text-muted-foreground">Nashik, Maharashtra, India</p>
                  </div>
                </motion.div>
              </div>
            </GlassCard>
            
            <GlassCard color={contactColor} className="p-8">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <span className="relative mr-2">
                  Let's Connect
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full" style={{ background: `linear-gradient(to right, ${contactColor}, ${contactColor}30)` }}></span>
                </span>
              </h4>
              <div className="flex gap-4">
                <motion.a 
                  href="https://github.com/mayank-96" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-background/50 border rounded-xl flex items-center justify-center hover:bg-opacity-10 hover:border-opacity-30 transition-all duration-300 hover:scale-110"
                  style={{ borderColor: `${contactColor}30` }}
                  aria-label="GitHub"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Github style={{ color: contactColor }} size={22} />
                </motion.a>
                
                <motion.a 
                  href="https://linkedin.com/in/mayank-pagar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-background/50 border rounded-xl flex items-center justify-center hover:bg-opacity-10 hover:border-opacity-30 transition-all duration-300 hover:scale-110"
                  style={{ borderColor: `${contactColor}30` }}
                  aria-label="LinkedIn"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Linkedin style={{ color: contactColor }} size={22} />
                </motion.a>
                
                <motion.a 
                  href="https://twitter.com/mayankp09_" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-background/50 border rounded-xl flex items-center justify-center hover:bg-opacity-10 hover:border-opacity-30 transition-all duration-300 hover:scale-110"
                  style={{ borderColor: `${contactColor}30` }}
                  aria-label="Twitter"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Twitter style={{ color: contactColor }} size={22} />
                </motion.a>
              </div>
            </GlassCard>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard color={contactColor} className="p-8 shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" style={{ backgroundColor: `${contactColor}05` }}></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" style={{ backgroundColor: `${contactColor}05` }}></div>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="relative mr-2">
                  Send a Message
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full" style={{ background: `linear-gradient(to right, ${contactColor}, ${contactColor}30)` }}></span>
                </span>
              </h3>
              
              {isSubmitted ? (
                <motion.div 
                  className="bg-green-500/10 text-green-600 p-6 rounded-xl mb-6 flex items-center gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Message Sent!</h4>
                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-foreground/90">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 border rounded-xl bg-background/60 focus:outline-none focus:ring-2 focus:border-opacity-100 transition-all duration-300"
                      style={{ 
                        borderColor: `${contactColor}20`
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-foreground/90">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 border border-border/80 rounded-xl bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-foreground/90">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-3.5 border border-border/80 rounded-xl bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none transition-all duration-300"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="px-6 py-3.5 text-white rounded-xl font-medium inline-flex items-center gap-2 relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                    style={{ 
                      backgroundColor: contactColor,
                      boxShadow: isSubmitting ? `0 10px 15px -3px ${contactColor}20` : 'none'
                    }}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
