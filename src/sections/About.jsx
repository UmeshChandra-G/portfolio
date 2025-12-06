import { motion } from 'framer-motion';
import { Code, Lightbulb, Rocket } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const highlights = [
    { icon: Code, text: "Full Stack Development" },
    { icon: Lightbulb, text: "Innovative Solutions" },
    { icon: Rocket, text: "Scalable Applications" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-primary-950/20 -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="About Me" subtitle="Crafting Digital Excellence" />
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="premium-card text-center"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">{highlight.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="premium-card"
        >
          <div className="space-y-6">
            <motion.p 
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I'm a <span className="font-bold gradient-text-static">Packaged App Development Associate</span> at Accenture, 
              specializing in <span className="text-primary-600 dark:text-primary-400 font-semibold">Java Full Stack Development</span>. 
              With a strong foundation in Core Java, Spring Framework, and modern web technologies, 
              I'm passionate about building scalable and efficient applications.
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              My journey includes developing innovative projects like a <span className="text-primary-600 dark:text-primary-400 font-semibold">GUI-based Leukemia Detection system</span> using Deep CNN, 
              achieving <span className="font-bold text-accent-600 dark:text-accent-400">93.62% accuracy</span>, and creating IoT solutions for automated street light control systems.
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              I'm always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
