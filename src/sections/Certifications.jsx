import { motion } from 'framer-motion';
import { BadgeCheck, Award, Sparkles } from 'lucide-react';
import { certifications } from '../data';
import SectionTitle from '../components/SectionTitle';

const Certifications = () => {
  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/20 to-transparent dark:via-primary-950/10 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Certifications" subtitle="Validated Expertise" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-12 md:mt-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, x: index % 2 === 0 ? -5 : 5, y: -5 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              
              <div className="relative premium-card flex items-center gap-3 sm:gap-4 md:gap-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 sm:p-4 md:p-5 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0"
                >
                  <BadgeCheck className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500 flex-shrink-0" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold gradient-text-static group-hover:gradient-text transition-all truncate">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-primary-600 dark:text-primary-400 font-semibold truncate">
                    {cert.issuer}
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4"
                >
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-400/50" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
