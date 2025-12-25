import { motion } from "framer-motion";
import { Award, Medal, Trophy } from "lucide-react";
import { sectionColors } from "@/theme/colors";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";

const achievements = [
  {
    id: 1,
    title: "Mercor Hackathon",
    event: "Textbase Titans Hackathon",
    date: "09/2023",
    location: "Bangalore, India",
    description: "Worked with Textbase, a framework for building AI chatbots that poses relevant follow-up questions, and offer suggestions by searching through database.",
    icon: Trophy
  },
];

const Achievements = () => {
  const achievementsColor = sectionColors.achievements;
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <SectionBackground color={achievementsColor} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            label="Recognition"
            title="Achievements & Awards"
            description="Recognition for my work and contributions to the tech community."
            color={achievementsColor}
            align="center"
          />
        </motion.div>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          <div
            className={`grid gap-8 ${
              achievements.length === 1
                ? "grid-cols-1 place-items-center"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="group h-full"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <GlassCard color={achievementsColor} className="p-6 h-full">
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-6" 
                    style={{ backgroundColor: `${achievementsColor}10` }}>
                    <achievement.icon style={{ color: achievementsColor }} size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <div className="text-sm mb-1 font-medium" style={{ color: achievementsColor }}>
                    {achievement.event}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <span>{achievement.date}</span>
                    <span className="mx-2">•</span>
                    <span>{achievement.location}</span>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard color={achievementsColor} className="p-8">
            <p className="text-muted-foreground italic mb-2">
              "Success is not final, failure is not fatal: It is the courage to continue that counts."
            </p>
            <p className="font-medium mt-2" style={{ color: achievementsColor }}>— Winston Churchill</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
