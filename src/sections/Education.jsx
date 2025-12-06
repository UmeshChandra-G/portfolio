import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { education } from '../data';
import SectionTitle from '../components/SectionTitle';

const Education = () => {
  const getIcon = (type) => {
    switch(type) {
      case 'degree': return GraduationCap;
      case 'intermediate': return BookOpen;
      default: return Award;
    }
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/20 to-transparent dark:via-primary-950/10 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Education" subtitle="Academic Excellence" />

        <div className="relative mt-16">
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform md:-translate-x-1/2 rounded-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ originY: 0 }}
          />

          <div className="space-y-16">
            {education.map((edu, index) => {
              const Icon = getIcon(edu.type);
              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot with Glow */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-primary-500 rounded-full blur-xl opacity-50 animate-pulse-slow" />
                      <div className="relative w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="premium-card group"
                    >
                      <div className="flex items-start gap-6">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl shadow-lg flex-shrink-0"
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold gradient-text-static mb-2 group-hover:gradient-text transition-all">
                            {edu.degree}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg mb-2">
                            {edu.institution}
                          </p>
                          {edu.board && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                              {edu.board}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-3 mt-4">
                            <motion.span
                              whileHover={{ scale: 1.1 }}
                              className="px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 text-primary-700 dark:text-primary-300 rounded-full text-sm font-bold border border-primary-200/50 dark:border-primary-800/50"
                            >
                              CGPA: {edu.cgpa}
                            </motion.span>
                            <motion.span
                              whileHover={{ scale: 1.1 }}
                              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                            >
                              {edu.years}
                            </motion.span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
