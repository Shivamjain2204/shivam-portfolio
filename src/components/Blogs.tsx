import { ExternalLink, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { sectionColors } from "@/theme/colors";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";

const blogs = [
  {
    title: "NativeBase X Formik",
    url: "https://nativebase.hashnode.dev/nativebase-x-formik",
    publisher: "NativeBase Hashnode",
    description: "A comprehensive guide on integrating NativeBase with Formik for form management in React Native applications.",
    banner: "https://images.unsplash.com/photo-1603468620905-8de7d86b781e?q=80&w=2676&auto=format&fit=crop"
  },
  {
    title: "How Automated Web Scraping can Ease Your Pain",
    url: "https://medium.com/python-in-plain-english/how-automated-web-scraping-can-ease-your-pain-8839f436bb13",
    publisher: "Medium - Python in Plain English",
    description: "An in-depth tutorial on implementing automated web scraping solutions using Python.",
    banner: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"
  }
];

const Blogs = () => {
  const blogsColor = sectionColors.blogs;
  
  return (
    <section id="blogs" className="py-24 relative overflow-hidden">
      <SectionBackground color={blogsColor} />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              label="Knowledge Sharing"
              title="Blogs"
              description="I share my technical knowledge and experiences through articles to help others in the developer community."
              color={blogsColor}
            />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {blogs.map((blog, index) => (
              <motion.div 
                key={blog.title}
                className={`lg:col-span-6 group relative ${index === 0 ? "lg:col-start-1" : "lg:col-start-7"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <GlassCard color={blogsColor} className="h-full p-0 overflow-hidden">
                  <div className="w-full h-56 overflow-hidden relative">
                    <img 
                      src={blog.banner} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" 
                        style={{ backgroundColor: `${blogsColor}10` }}>
                        <BookOpen style={{ color: blogsColor }} size={24} />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-foreground transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-sm font-mono mb-0" style={{ color: blogsColor }}>
                          {blog.publisher}
                        </p>
                      </div>
                    </div>
                    
                    <div className="h-[1px] w-full mb-6" style={{ background: `linear-gradient(to right, ${blogsColor}20, ${blogsColor}10, transparent)` }}></div>
                    
                    <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">
                      {blog.description}
                    </p>
                    
                    <a 
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-mono text-sm uppercase tracking-wide hover:underline mt-auto"
                      style={{ color: blogsColor }}
                    >
                      Read Article
                      <ExternalLink size={14} className="ml-2" />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
