import { motion } from "framer-motion";
import { ExternalLink, Video } from "lucide-react";
import { sectionColors } from "@/theme/colors";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";

const talks = [
  {
    title: "Headless CMS as a Low Code Tool",
    event: "Low-code/No-code Hybrid Meetup | GeekyAnts",
    url: "https://www.youtube.com/watch?v=7-UUZBn8e7c",
    videoId: "7-UUZBn8e7c"
  },
  {
    title: "Panel Discussion Ft. Sanket Sahu and the Speakers",
    event: "Low-code/No-code Hybrid Meetup | GeekyAnts",
    url: "https://www.youtube.com/watch?v=cFcjH4WbRS0",
    videoId: "cFcjH4WbRS0"
  }
];

const TechTalks = () => {
  const techtalksColor = sectionColors.techtalks;
  
  return (
    <section id="talks" className="py-24 relative overflow-hidden">
      <SectionBackground color={techtalksColor} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            label="Presentations"
            title="Tech Talks"
            description="Sharing knowledge and insights through conference talks and presentations."
            color={techtalksColor}
            align="center"
          />
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {talks.map((talk, index) => (
            <motion.div
              key={talk.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <GlassCard color={techtalksColor} className="h-full p-0 overflow-hidden">
                <div className="relative aspect-video bg-black/20 overflow-hidden">
                  <img 
                    src={`https://img.youtube.com/vi/${talk.videoId}/maxresdefault.jpg`} 
                    alt={talk.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img.youtube.com/vi/${talk.videoId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: `${techtalksColor}CC` }}>
                      <Video className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10 group-hover:opacity-70 transition-opacity"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-foreground transition-colors">
                    {talk.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: techtalksColor }}>
                    {talk.event}
                  </p>
                  
                  <div className="mt-auto">
                    <a 
                      href={talk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-full text-white font-medium hover:opacity-90 transition-all"
                      style={{ backgroundColor: techtalksColor }}
                    >
                      Watch Talk
                      <ExternalLink size={14} className="ml-2" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTalks;
