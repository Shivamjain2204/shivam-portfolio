import { motion } from "framer-motion";
import { Github, GitPullRequest, Code } from "lucide-react";
import { sectionColors } from "@/theme/colors";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";

const OpenSource = () => {
  const opensourceColor = sectionColors.opensource;
  
  return (
    <section id="opensource" className="py-24 relative overflow-hidden">
      <SectionBackground color={opensourceColor} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            label="Community"
            title="Open Source Contributions"
            description="Giving back to the community through code contributions."
            color={opensourceColor}
            align="center"
          />
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <GlassCard color={opensourceColor} className="overflow-hidden">
              <div className="p-6 border-b" style={{ borderColor: `${opensourceColor}20` }}>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg flex items-center justify-center" 
                    style={{ backgroundColor: `${opensourceColor}20` }}>
                    <Github style={{ color: opensourceColor }} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">React Native Core</h3>
                    <a 
                      href="https://github.com/facebook/react-native/pull/34555" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-1 text-sm"
                      style={{ color: opensourceColor }}
                    >
                      <GitPullRequest size={16} />
                      <span>PR #34555</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-3 mb-6">
                  <div className="mt-1">
                    <GitPullRequest style={{ color: opensourceColor }} size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Added aria-live alias for accessibilityLiveRegion</h4>
                    <p className="text-muted-foreground mt-2">
                      It unifies aria-live and accessibilityLiveRegion and also maps aria-live='off' to accessibilityLiveRegion='none'.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://github.com/facebook/react-native/pull/34555" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 px-4 py-2 font-medium rounded-lg transition-colors text-white hover:opacity-90"
                    style={{ backgroundColor: opensourceColor }}
                  >
                    <Github className="mr-2" size={18} />
                    View on GitHub
                  </a>
                  <a 
                    href="https://github.com/mayank-96" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 px-4 py-2 border font-medium rounded-lg transition-colors hover:bg-opacity-10"
                    style={{ 
                      borderColor: `${opensourceColor}30`,
                      color: "inherit"
                    }}
                  >
                    <Code className="mr-2" size={18} />
                    More contributions
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard color={opensourceColor} className="p-8">
              <h3 className="text-xl font-bold mb-4">Interested in Collaborating?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always looking for new open source projects to contribute to and collaborate on.
              </p>
              <a 
                href="https://github.com/mayank-96" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 px-6 font-medium rounded-lg transition-colors text-white"
                style={{ backgroundColor: opensourceColor }}
              >
                <Github className="mr-2" size={18} />
                Find me on GitHub
              </a>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
