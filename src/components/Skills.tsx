import { motion, Variants } from "framer-motion";
import { Code, Database, Layout, Server, Terminal, Layers, Flame, Sparkles, Box, Globe, Cpu, Zap, Hexagon, Dices } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { sectionColors } from "@/theme/colors";
import { containerVariants, itemVariants, scaleVariants } from "@/theme/animations";
import { GlassCard } from "@/components/ui/GlassCard";

const Skills = () => {
  const skillsColor = sectionColors.skills;
  
  const skillCategories = [
    {
      name: "Languages",
      icon: Code,
      color: "#6366F1", // indigo
      skills: ["JavaScript", "TypeScript", "Python"],
      description: "Programming languages I'm proficient in, forming the foundation of my technical stack."
    },
    {
      name: "Frontend",
      icon: Layout,
      color: "#EC4899", // pink
      skills: ["React.js", "Next.js", "React Native", "HTML5", "CSS3", "Figma Plugin Development", "Component Library Development", "SDK Development", "Design Systems"],
      description: "Tools and frameworks I use to create beautiful, responsive user interfaces."
    },
    {
      name: "Backend",
      icon: Server,
      color: "#10B981", // emerald
      skills: [ "Cloud Functions", "Node.js", "Express.js",  "RESTful APIs"],
      description: "Technologies I employ to build robust and scalable server-side applications."
    },
    {
      name: "Databases",
      icon: Database,
      color: "#F59E0B", // amber
      skills: ["MySQL", "NoSQL", "MongoDB", "Firebase Realtime Database"],
      description: "Database systems I use to efficiently store and retrieve data."
    },
    {
      name: "Others",
      icon: Terminal,
      color: "#8B5CF6", // violet
      skills: ["Git", "Testing", "Debugging", "Agile", "SDLC", "Internationalization", "Problem-Solving"],
      description: "Additional tools and methodologies that enhance my development workflow."
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <SectionBackground color={skillsColor} particleCount={20} />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            label="What I Know"
            title="Technical Skills"
            description="My toolkit for creating exceptional digital experiences"
            color={skillsColor}
          />
          
          <motion.div
            className="grid grid-cols-1 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={category.name}
                variants={itemVariants}
              >
                <GlassCard 
                  color={category.color} 
                  className="overflow-hidden"
                  noPadding={true}
                >
                  <div 
                    className="p-6 border-b border-border/40"
                    style={{
                      background: `linear-gradient(to right, ${category.color}15, transparent)`
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ 
                          backgroundColor: `${category.color}20`,
                          color: category.color
                        }}
                      >
                        <category.icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold" style={{ color: category.color }}>
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => {
                        // Select appropriate icon based on skill name
                        let SkillIcon = Sparkles;
                        if (skill.includes("React")) SkillIcon = Layers;
                        else if (skill.includes("Script")) SkillIcon = Code;
                        else if (skill.includes("API")) SkillIcon = Globe;
                        else if (skill.includes("Firebase")) SkillIcon = Flame;
                        else if (skill.includes("SQL")) SkillIcon = Database;
                        else if (skill.includes("Testing")) SkillIcon = Dices;
                        else if (skill.includes("Design")) SkillIcon = Hexagon;
                        else if (skill.includes("Git")) SkillIcon = Cpu;
                        else if (skill.includes("Problem")) SkillIcon = Zap;
                        
                        return (
                          <motion.div
                            key={skill}
                            variants={scaleVariants}
                            whileHover="hover"
                            className="group"
                            custom={skillIndex}
                            transition={{ delay: skillIndex * 0.03 }}
                          >
                            <div 
                              className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300"
                              style={{ 
                                backgroundColor: `${category.color}10`,
                                borderColor: `${category.color}30`,
                                color: category.color
                              }}
                            >
                              <SkillIcon 
                                size={16} 
                                className="opacity-70 group-hover:opacity-100 transition-opacity" 
                              />
                              <span className="text-sm font-medium text-foreground">{skill}</span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
