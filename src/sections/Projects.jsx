import { motion } from 'framer-motion';
import { ExternalLink, Award, Sparkles, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-50/20 to-transparent dark:via-accent-950/10 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Projects" subtitle="Innovation in Action" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              
              <div className="relative premium-card h-full flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="p-1.5 sm:p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex-shrink-0">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text-static group-hover:gradient-text transition-all truncate">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1.5 sm:p-2 rounded-lg glass-effect hover:bg-primary-500/10 transition-colors flex-shrink-0 ml-2"
                    >
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
                    </motion.a>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                {project.achievements && (
                  <motion.div 
                    className="mb-4 sm:mb-6 space-y-2 sm:space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    {project.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.2 + idx * 0.1 }}
                        className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-primary-50/50 dark:bg-primary-900/20 border border-primary-200/50 dark:border-primary-800/50"
                      >
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Features */}
                {project.features && (
                  <motion.div 
                    className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    {project.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 + idx * 0.05 }}
                        className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-primary-500 mt-0.5 font-bold flex-shrink-0">▸</span>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Tech Stack */}
                <div className={`flex flex-wrap gap-1.5 sm:gap-2 ${project.link ? 'mb-4 sm:mb-6' : 'mb-0'}`}>
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.4 + idx * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold border border-primary-200/50 dark:border-primary-800/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Button */}
                {project.link && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                  >
                    <Button
                      variant="outline"
                      icon="external"
                      href={project.link}
                      className="w-full text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 md:py-3"
                    >
                      {project.linkText || 'View Project'}
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
