import { motion } from 'framer-motion';
import { Code, Layers, Wrench, Database, Brain } from 'lucide-react';
import { skills } from '../data';
import SectionTitle from '../components/SectionTitle';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      items: skills.programming,
      gradient: 'from-blue-500 via-cyan-500 to-blue-600',
    },
    {
      title: 'Frameworks',
      icon: Layers,
      items: skills.frameworks,
      gradient: 'from-purple-500 via-pink-500 to-purple-600',
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      items: skills.tools,
      gradient: 'from-orange-500 via-red-500 to-orange-600',
    },
    {
      title: 'Databases',
      icon: Database,
      items: skills.databases,
      gradient: 'from-green-500 via-emerald-500 to-green-600',
    },
    {
      title: 'Core Skills',
      icon: Brain,
      items: skills.core,
      gradient: 'from-indigo-500 via-purple-500 to-indigo-600',
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/20 to-transparent dark:via-primary-950/10 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Technical Skills" subtitle="Mastering the Craft" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-12 md:mt-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, y: -8, rotate: 1 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                <div className="relative premium-card h-full">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-2.5 sm:p-3 md:p-4 bg-gradient-to-br ${category.gradient} rounded-lg sm:rounded-xl shadow-lg flex-shrink-0`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold gradient-text-static group-hover:gradient-text transition-all">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.items.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        whileHover={{ scale: 1.15, y: -2 }}
                        className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-md transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
