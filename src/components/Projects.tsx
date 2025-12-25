import { ExternalLink, Github, Chrome, Code, Database, Library, ShoppingBag, Music, Film } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sectionColors } from "@/theme/colors";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";

const Projects = () => {
  const projectsColor = sectionColors.projects;

  const personalProjects = [
    {
      title: "CodeSphere",
      description: "A platform offering practical courses to build essential professional skills and boost career growth.",
      tech: ["Next.js", "TypeScript"],
      icon: ShoppingBag,
      color: "bg-blue-600",
      link: "https://nextjs-project-theta-taupe.vercel.app/"
    },
    {
      title: "Snake Game",
      description: "The player controls a snake that moves around, eats food to grow longer, and avoids walls or its own tail.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: Music,
      color: "bg-purple-600",
      link: "https://snake-game-topaz.vercel.app/"
    },
    {
      title: "MyBlog",
      description: "A simple and intuitive app to share your thoughts and creativity effortlessly online with a global audience every day",
      tech: ["React", "CSS", "Appwrite"],
      icon: Music,
      color: "bg-purple-600",
      link: "https://myblog-murex-two.vercel.app/"
    },
  ];

  const professionalProjects = [
    {
      title: "ProSchool.ai",
      description: "An AI-powered personalized learning platform for smarter education.",
      tech: ["React", "TypeScript", "CSS"],
      link: "https://proschool.ai/"
    },
    {
      title: "Arcitech UI",
      description: "An AI-driven tech company building intelligent web, app, and software solutions for business growth.",
      tech: ["React", "TypeScript"],
      link: "https://arcitech.ai/"
    },
    {
      title: "iVoyant",
      description: "An AI-driven digital solutions company delivering cloud and software services.",
      tech: ["React Native", "TypeScript"],
      link: "https://www.ivoyant.com/"
    }
  ];

  const renderProject = (project, projectIndex) => (
    <motion.div
      key={project.title}
      className="group h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <GlassCard color={projectsColor} className="p-0 h-full">
        <div className="p-7 flex flex-col h-full">
          <div className="mb-5 flex items-start justify-between relative z-10">
            <div className="flex items-center gap-3">
              {project.icon && (
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-3 transition-transform duration-300" 
                  style={{ backgroundColor: `${projectsColor}20` }}>
                  <project.icon size={22} style={{ color: projectsColor }} />
                </div>
              )}
              <h4 className="text-xl font-bold tracking-tight">{project.title}</h4>
            </div>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:scale-110 transform transition-all duration-300"
                style={{ color: projectsColor }}
                aria-label={`Visit ${project.title} website`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
          
          <p className="text-muted-foreground mb-6 flex-grow relative z-10">
            {project.description}
          </p>
          
          <div className="mt-auto relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <Badge 
                  key={tech} 
                  variant="secondary"
                  className="hover:bg-opacity-20 transition-colors duration-300"
                  style={{ backgroundColor: `${projectsColor}10`, color: projectsColor }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <SectionBackground color={projectsColor} />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              label="Portfolio"
              title="My Work"
              color={projectsColor}
              description="A selection of my personal and professional projects across various domains."
            />
          </motion.div>
          
          <div className="space-y-28">            
            <div className="space-y-12">
              <motion.h3 
                className="inline-block text-3xl font-anton uppercase relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative after:absolute after:w-full after:h-1 after:-bottom-1 after:left-0 after:rounded-full" style={{ color: projectsColor }}>
                  <span className="relative">
                    Personal Projects
                    <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full" style={{ background: `linear-gradient(to right, ${projectsColor}, ${projectsColor}30)` }}></span>
                  </span>
                </span>
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {personalProjects.map((project, projectIndex) => 
                  renderProject(project, projectIndex)
                )}
              </div>
            </div>

            <div className="space-y-12 mt-16">
              <motion.h3 
                className="inline-block text-3xl font-anton uppercase relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative" style={{ color: projectsColor }}>
                  Professional Work
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full" style={{ background: `linear-gradient(to right, ${projectsColor}, ${projectsColor}30)` }}></span>
                </span>
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {professionalProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <GlassCard color={projectsColor} className="p-5 h-full">
                        <h4 className="text-lg font-bold mb-2 flex items-center justify-between">
                          {project.title}
                          <ExternalLink size={15} className="opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: projectsColor }} />
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map(tech => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="text-xs py-0 bg-opacity-5"
                              style={{ 
                                borderColor: `${projectsColor}20`, 
                                backgroundColor: `${projectsColor}05`, 
                                color: `${projectsColor}` 
                              }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </GlassCard>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <motion.div 
            className="mt-20 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="https://github.com/Shivamjain2204" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-foreground/90 hover:text-foreground transition-colors px-6 py-3 rounded-full border hover:border-opacity-50"
              style={{ 
                borderColor: `${projectsColor}30`, 
                backgroundColor: "transparent"
              }}
            >
              <Github size={18} className="group-hover:animate-pulse" style={{ color: projectsColor }} />
              <span>View more on GitHub</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
