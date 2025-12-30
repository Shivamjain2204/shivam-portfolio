import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Clock, Building, MapPin, ArrowRight, Star, CheckCircle, Rocket, Target, Zap } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { containerVariants, itemVariants } from "@/theme/animations";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { sectionColors } from "@/theme/colors";
import { GlassCard } from "@/components/ui/GlassCard";

// Function to calculate experience duration
const calculateDuration = (startDate: string, endDate: string = "Present") => {
  const parseDate = (dateStr: string) => {
    if (dateStr === "Present") {
      return new Date();
    }
    
    const [month, year] = dateStr.split("/");
    return new Date(parseInt(year), parseInt(month) - 1);
  };

  const start = parseDate(startDate);
  const end = parseDate(endDate);
  
  // Calculate difference in months
  const diffMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  
  if (years === 0) {
    return `${months} month${months !== 1 ? 's' : ''}`;
  } else if (months === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`;
  }
};

const experiences = [
  {
    id: "arcitech",
    company: "Arcitech",
    title: "Project Lead",
    period: "02/2025 – Present",
    startDate: "01/2025",
    endDate: "Present",
    location: "Navi Mumbai, India",
    isInternship: false,
    responsibilities: [
      <>Playing a pivotal role in developing an AI-powered <a href="https://proschool.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">educational platform.</a></>,
      <>Mentoring junior developers and led code reviews to uphold engineering standards.</>,
      <>Ensured project KPIs were consistently met through diligent communication and coordination.</>,
      <>Refactored legacy onboarding code for <a href="https://proschool.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ProSchool</a>, reducing bugs by 99% through improved logic.</>,
      <>Actively contributing to the core development team by driving discussions on feature enhancements, module design, ensuring alignment with the platform's vision and user needs.</>,
      <>Continuously learning and adapting to new technologies and tools to align with the project outcomes.</>,
      // <> Mentoring junior developers and led code reviews to uphold engineering standards.</>,
      // "Enhanced SDK accessibility and globalization via ARIA, test IDs, and internalization.",
      // "Implemented in-product Video Trimming Editor."
    ]
  },
  {
    id: "arcitech-react",
    company: "Arcitech",
    title: "React Developer",
    period: "03/2024 – 02/2025",
    startDate: "02/2024",
    endDate: "02/2025",
    location: "Navi Mumbai, India",
    isInternship: false,
    responsibilities: [
      <>Playing a pivotal role in developing an AI-powered <a href="https://proschool.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">educational platform.</a></>,
      <>Building reusable, modular components, ensuring a scalable architecture and seamless integration with AI-driven features for personalized learning.</>,
      <>Actively contributing to the core development team by driving discussions on feature enhancements, module design, ensuring alignment with the platform's vision and user needs.</>,
      <>Collaborating with cross-functional teams to integrate AI-driven features such as interactive chatbots.</>,
      // <> Mentoring junior developers and led code reviews to uphold engineering standards.</>,
      // "Enhanced SDK accessibility and globalization via ARIA, test IDs, and internalization.",
      // "Implemented in-product Video Trimming Editor."
    ]
  },
  {
    id: "ivoyant-se",
    company: "iVoyant",
    title: "Software Engineer",
    period: "05/2023 – 02/2024",
    startDate: "05/2023",
    endDate: "03/2024",
    location: "Bangalore, India",
    isInternship: false,
    responsibilities: [
      <>Worked on the Product development using React JS, React TypeScript. </>,
      <>Build stable and maintainable codebase using React Typescript </>,
      <>Led a project by handling setup, fixing bugs, reviewing code, and improving code structure with a small team </>,
    ]
  },
  {
    id: "ivoyant-sei",
    company: "iVoyant",
    title: "Software Engineer Intern",
    period: "12/2022 – 05/2023",
    startDate: "12/2022",
    endDate: "06/2023",
    location: "Bangalore, India",
    isInternship: true,
    responsibilities: [
      <> Created new features, functionality and capabilities on the web application </>,
      <>Created Reusable React Components.</>,
    ]
  },
  {
    id: "letsgrowmore-intern",
    company: "LetsGrowMore",
    title: "Web Development Intern",
    period: "07/2022 – 08/2022",
    startDate: "07/2022",
    endDate: "09/2022",
    location: "Remote (India)",
    isInternship: true,
    responsibilities: [
      <>Automated data collection by scheduling scripts.</>,
      "Actively maintained and improved the library by resolving Github issues and enhancing its functionality for exceptional user experience."
    ]
  },
  {
    id: "sannibh-intern",
    company: "Sannibh Technology",
    title: "Web Development Intern",
    period: "06/2022 – 06/2022",
    startDate: "06/2022",
    endDate: "06/2022",
    location: "Vadodara, India",
    isInternship: true,
    responsibilities: [
      "Developed a website for the platform using MERN stack.",
      "Worked on advanced features such as authentication, course filtering, and Admin Dashboard."
    ]
  },
  {
    id: "oasis-intern",
    company: "Oasis Infobyte",
    title: "Data Science Intern",
    period: "05/2022 – 06/2022",
    startDate: "05/2022",
    endDate: "07/2022",
    location: "Remote (India)",
    isInternship: true,
    responsibilities: [
      "Automated data collection by scheduling scripts.",
      "Created a website using WordPress. Worked on Flutter app by adding some UI elements and a feature for scheduling meetings."
    ]
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);
  const [includeInternships, setIncludeInternships] = useState(true);
  const experienceColor = sectionColors.experience;

  // Calculate total experience
  const totalExperience = useMemo(() => {
    // Filter experiences based on internship toggle
    const filteredExperiences = includeInternships 
      ? experiences 
      : experiences.filter(exp => !exp.isInternship);
    
    // Find earliest start date
    const earliestStart = filteredExperiences.reduce((earliest, exp) => {
      const currentStartDate = exp.startDate.split('/');
      const currentStartMonth = parseInt(currentStartDate[0]);
      const currentStartYear = parseInt(currentStartDate[1]);
      
      if (!earliest) return { month: currentStartMonth, year: currentStartYear };
      
      if (currentStartYear < earliest.year || 
          (currentStartYear === earliest.year && currentStartMonth < earliest.month)) {
        return { month: currentStartMonth, year: currentStartYear };
      }
      
      return earliest;
    }, null as { month: number; year: number } | null);
    
    if (!earliestStart) return "N/A";
    
    const startDateString = `${earliestStart.month}/${earliestStart.year}`;
    return calculateDuration(startDateString);
  }, [includeInternships]);

  // Calculate individual experience durations
  const experiencesWithDuration = useMemo(() => {
    return experiences.map(exp => ({
      ...exp,
      duration: calculateDuration(exp.startDate, exp.endDate)
    }));
  }, []);

  // Filter experiences based on internship toggle
  const filteredExperiences = useMemo(() => {
    return includeInternships 
      ? experiencesWithDuration 
      : experiencesWithDuration.filter(exp => !exp.isInternship);
  }, [experiencesWithDuration, includeInternships]);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <SectionBackground color={experienceColor} />
      
      <div className="absolute left-4 md:left-20 top-40 bottom-40 w-0.5 hidden md:block" 
        style={{
          background: `linear-gradient(to bottom, ${experienceColor}05, ${experienceColor}40, ${experienceColor}05)`
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            label="Career Timeline"
            title="Professional Experience"
            description="My journey as a software engineer, working with innovative teams and technologies to create impactful solutions."
            color={experienceColor}
          />
            
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <motion.div 
              className="px-6 py-3 rounded-full text-primary font-medium flex items-center shadow-sm border"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              style={{ 
                backgroundColor: `${experienceColor}10`,
                borderColor: `${experienceColor}30`,
                color: experienceColor
              }}
            >
              <Clock size={20} className="mr-2" style={{ color: experienceColor }} />
              <span>Total Experience: {totalExperience}</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-3 px-4 py-2 rounded-full border"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              style={{ 
                backgroundColor: `${experienceColor}05`,
                borderColor: `${experienceColor}20`
              }}
            >
              <Switch 
                id="include-internships" 
                checked={includeInternships} 
                onCheckedChange={setIncludeInternships}
                className="data-[state=checked]:bg-primary"
                style={{
                  backgroundColor: includeInternships ? experienceColor : undefined
                }}
              />
              <label 
                htmlFor="include-internships" 
                className="text-sm font-medium cursor-pointer"
              >
                Include Internships
              </label>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Timeline navigation */}
            <motion.div 
              className="lg:col-span-2 order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key="timeline-nav"
            >
              <div className="sticky top-28 space-y-3">
                {filteredExperiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className={`relative cursor-pointer group`}
                    onClick={() => setActiveTab(exp.id)}
                  >
                    <div 
                      className={`
                        relative p-4 rounded-lg transition-all duration-300
                        ${activeTab === exp.id ? 'shadow-sm' : 'hover:bg-secondary/50'}
                        border ${activeTab === exp.id ? '' : 'border-transparent hover:border-border/50'}
                      `}
                      style={{
                        backgroundColor: activeTab === exp.id ? `${experienceColor}10` : undefined,
                        borderColor: activeTab === exp.id ? `${experienceColor}30` : undefined
                      }}
                    >
                      {/* Timeline connector */}
                      <div className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 hidden md:block">
                        <div className={`w-4 h-4 rounded-full z-20`} style={{
                          backgroundColor: activeTab === exp.id ? experienceColor : `${experienceColor}30`
                        }}></div>
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-background ${activeTab === exp.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-1">
                          <h3 className={`font-bold transition-colors ${activeTab === exp.id ? '' : ''}`} style={{
                            color: activeTab === exp.id ? experienceColor : undefined
                          }}>
                            {exp.company}
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Calendar size={14} className="mr-1" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Briefcase size={14} className="mr-1" />
                            <span>{exp.title}</span>
                          </div>
                        </div>
                        <div className={`w-6 flex items-center justify-center transition-transform ${activeTab === exp.id ? 'rotate-0' : '-rotate-90'}`} style={{
                          color: activeTab === exp.id ? experienceColor : undefined
                        }}>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Experience details */}
            <motion.div 
              className="lg:col-span-4 order-1 lg:order-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeTab}
            >
              {filteredExperiences.map((exp) => (
                activeTab === exp.id && (
                  <GlassCard
                    key={exp.id}
                    color={experienceColor}
                    className="overflow-hidden"
                    hoverEffect={false}
                    noPadding={true}
                    variants={itemVariants}
                  >
                    {/* Header */}
                    <div className="p-6" style={{ 
                      background: `linear-gradient(to right, ${experienceColor}20, ${experienceColor}05)`
                    }}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col-span-2">
                          <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                          <div className="flex items-center text-lg font-medium">
                            <Building size={18} className="mr-2" style={{ color: experienceColor }} />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar size={16} className="mr-2" style={{ color: `${experienceColor}70` }} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock size={16} className="mr-2" style={{ color: `${experienceColor}70` }} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin size={16} className="mr-2" style={{ color: `${experienceColor}70` }} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h4 className="flex items-center text-xl font-bold mb-4">
                        <Star className="mr-2" size={20} style={{ color: experienceColor }} />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-4">
                        {exp.responsibilities.map((responsibility, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-start p-4 rounded-lg border transition-all duration-300 hover:shadow-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            style={{
                              backgroundColor: `${experienceColor}05`,
                              borderColor: `${experienceColor}20`,
                              borderWidth: "1px"
                            }}
                          >
                            <div className="mr-3 mt-1">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{
                                backgroundColor: `${experienceColor}20`,
                                color: experienceColor
                              }}>
                                {index === 0 ? <Rocket size={14} /> : 
                                 index === 1 ? <Zap size={14} /> : 
                                 index === 2 ? <Target size={14} /> : 
                                 <CheckCircle size={14} />}
                              </div>
                            </div>
                            <div>{responsibility}</div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                )
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
