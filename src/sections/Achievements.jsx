import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles } from 'lucide-react';
import { achievements } from '../data';
import SectionTitle from '../components/SectionTitle';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-50/20 to-transparent dark:via-accent-950/10 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Achievements" subtitle="Excellence Recognized" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.03, y: -8, rotateY: 5 }}
              className="group relative perspective-1000"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
              
              <div className="relative premium-card h-full">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.8 }}
                      className="p-5 bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-500 rounded-2xl shadow-xl flex-shrink-0"
                    >
                      <Trophy className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-yellow-500" />
                        <h3 className="text-2xl font-bold gradient-text-static group-hover:gradient-text transition-all">
                          {achievement.title}
                        </h3>
                      </div>
                      <p className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-3">
                        {achievement.organization}
                      </p>
                      {achievement.project && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic px-3 py-2 rounded-lg bg-primary-50/50 dark:bg-primary-900/20 border border-primary-200/50 dark:border-primary-800/50"
                        >
                          <Award className="w-4 h-4 inline mr-2 text-primary-500" />
                          Project: {achievement.project}
                        </motion.p>
                      )}
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
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

export default Achievements;
