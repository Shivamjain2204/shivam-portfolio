import { motion } from "framer-motion";
import { CodeIcon, Heart, Cpu, Coffee, Globe, BookOpen, Lightbulb, User } from "lucide-react";
import { sectionColors } from "@/theme/colors";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { containerVariants, itemVariants } from "@/theme/animations";
import { GlassCard } from "@/components/ui/GlassCard";

const About = () => {
  const aboutColor = sectionColors.about;

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <SectionBackground color={aboutColor} />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            label="About Me"
            title="Passionate About Development"
            description="My journey and philosophy as a software engineer"
            color={aboutColor}
          />
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="lg:col-span-5 lg:col-start-1" variants={itemVariants}>
              <GlassCard 
                color={aboutColor}
                className="space-y-6 mb-8"
              >
                <motion.div className="flex items-start space-x-3" variants={itemVariants}>
                  <Lightbulb className="text-primary mt-1 flex-shrink-0" size={20} style={{ color: aboutColor }} />
                  <p className="text-muted-foreground">
                    My passion for software lies with dreaming up ideas and making them come true with elegant pixel-perfect interfaces. I take great care in the experience, architecture, and code quality of the things I build.
                  </p>
                </motion.div>
                <motion.div className="flex items-start space-x-3" variants={itemVariants}>
                  <Globe className="text-primary mt-1 flex-shrink-0" size={20} style={{ color: aboutColor }} />
                  <p className="text-muted-foreground">
                    With expertise across front-end and back-end development, I bring a holistic perspective to creating software solutions that not only meet functional requirements but also deliver exceptional user experiences.
                  </p>
                </motion.div>
                <motion.div className="flex items-start space-x-3" variants={itemVariants}>
                  <User className="text-primary mt-1 flex-shrink-0" size={20} style={{ color: aboutColor }} />
                  <p className="text-muted-foreground">
                    I enjoy collaborating with teams to solve complex problems and am always eager to learn new technologies and methodologies to enhance my skill set.
                  </p>
                </motion.div>
              </GlassCard>

              <motion.div 
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <a 
                  href="#contact" 
                  className="px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    backgroundColor: aboutColor,
                    color: "white"
                  }}
                >
                  Get in Touch
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border rounded-lg transition-all duration-300 hover:shadow-md"
                  style={{ 
                    borderColor: aboutColor,
                    color: aboutColor
                  }}
                >
                  Resume
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-6 lg:col-start-7"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <CodeIcon size={24} />, title: "Clean Code", desc: "I write clean, maintainable code with a focus on performance and scalability." },
                  { icon: <Heart size={24} />, title: "Pixel Perfect", desc: "I'm passionate about creating pixel-perfect, responsive interfaces that users love." },
                  { icon: <Cpu size={24} />, title: "Problem Solver", desc: "I enjoy tackling complex problems and finding efficient, elegant solutions." },
                  { icon: <BookOpen size={24} />, title: "Continuous Learner", desc: "I'm always learning and exploring new technologies and approaches." },
                  { icon: <Coffee size={24} />, title: "Team Player", desc: "I thrive in collaborative environments and enjoy working with diverse teams." },
                  { icon: <Lightbulb size={24} />, title: "Fast Delivery", desc: "I focus on delivering high-quality solutions efficiently and on time." }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard color={aboutColor} className="h-full">
                      <div 
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-colors"
                        style={{ 
                          backgroundColor: `${aboutColor}15`,
                          color: aboutColor
                        }}
                      >
                        <div className="text-primary" style={{ color: aboutColor }}>
                          {item.icon}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
