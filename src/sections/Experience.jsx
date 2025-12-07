import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Code2, Sparkles } from 'lucide-react';
import { experience } from '../data';
import SectionTitle from '../components/SectionTitle';

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-50/20 to-transparent dark:via-accent-950/10 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Experience" subtitle="Building the Future" />

        <div className="space-y-6 sm:space-y-8 md:space-y-10 mt-8 sm:mt-12 md:mt-16">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              
              <div className="relative premium-card">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 sm:mb-8">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-2.5 sm:p-3 md:p-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl sm:rounded-2xl shadow-lg flex-shrink-0"
                      >
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text-static mb-2 sm:mb-3 group-hover:gradient-text transition-all">
                          {exp.title}
                        </h3>
                        <p className="text-lg sm:text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-bold mb-3 sm:mb-4">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-gray-600 dark:text-gray-400">
                          <motion.div 
                            className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg glass-effect"
                            whileHover={{ scale: 1.05 }}
                          >
                            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500" />
                            <span className="text-xs sm:text-sm font-medium">{exp.location}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg glass-effect"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-500" />
                            <span className="text-xs sm:text-sm font-medium">{exp.period}</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="ml-0 sm:ml-12 md:ml-16 lg:ml-20 space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {exp.description.map((desc, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + idx * 0.1 }}
                      className="flex items-start gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-primary-50/50 dark:bg-primary-900/20 border border-primary-200/50 dark:border-primary-800/50"
                    >
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="ml-0 sm:ml-12 md:ml-16 lg:ml-20">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                    <p className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Tech Stack:
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {exp.techStack.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 text-primary-700 dark:text-primary-300 rounded-full text-xs sm:text-sm font-semibold border border-primary-200/50 dark:border-primary-800/50 shadow-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
