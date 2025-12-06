import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Phone, Linkedin, Download, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';
import Button from '../components/Button';
import AnimatedBackground from '../components/AnimatedBackground';
import ResumeModal from '../components/ResumeModal';

const Hero = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const resumeUrl = '/UmeshAccResume.pdf';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    },
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Content */}
          <div className="text-left lg:text-left">
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="mb-6 flex justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect-strong"
              >
                <Sparkles className="w-4 h-4 text-primary-500 animate-pulse-slow" />
                <span className="text-sm font-medium gradient-text-static">
                  Available for Opportunities
                </span>
              </motion.div>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.3
                }}
              >
                <span className="gradient-text block mb-2">
                  {personalInfo.name.split(' ')[0]}
                </span>
                <span className="gradient-text block">
                  {personalInfo.name.split(' ').slice(1).join(' ')}
                </span>
              </motion.h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.p 
                className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {personalInfo.title}
              </motion.p>
              <motion.p 
                className="text-base md:text-lg text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {personalInfo.company} • <span className="text-primary-600 dark:text-primary-400">{personalInfo.location}</span>
              </motion.p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'from-blue-500 to-cyan-500' },
                { icon: Github, href: personalInfo.github, label: 'GitHub', color: 'from-gray-700 to-gray-900' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
                { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone', color: 'from-green-500 to-emerald-500' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 rounded-xl"
                      style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                    />
                    <div className={`relative flex items-center gap-2 px-5 py-3 rounded-xl glass-effect-strong hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300`}>
                      <div className={`p-2 bg-gradient-to-br ${social.color} rounded-lg`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">{social.label}</span>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" icon="external" onClick={() => setIsResumeModalOpen(true)}>
                  View Resume
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" icon="download" href={resumeUrl} download>
                  Download Resume
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" onClick={scrollToContact}>
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Photo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          >
            <div className="relative group">
              {/* Animated glow rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 md:-inset-12 lg:-inset-16"
              >
                <div className="w-full h-full rounded-full border-4 border-transparent bg-gradient-to-r from-green-400/30 via-emerald-400/30 to-green-400/30 bg-clip-border" 
                  style={{ 
                    backgroundImage: 'conic-gradient(from 0deg, transparent, rgba(74, 222, 128, 0.3), transparent, rgba(52, 211, 153, 0.3), transparent)',
                    WebkitMask: 'radial-gradient(circle, transparent 60%, black 60%)',
                    mask: 'radial-gradient(circle, transparent 60%, black 60%)'
                  }}
                />
              </motion.div>
              
              {/* Outer glow effect */}
              <div className="absolute -inset-4 md:-inset-6 lg:-inset-8 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
              
              {/* Photo container - Circular */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-green-400 via-emerald-400 to-green-400">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-1">
                    {/* Photo */}
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="/profile-photo.jpg" 
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to placeholder if image not found
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      {/* Placeholder - shown if image fails to load */}
                      <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center hidden">
                        <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                          {personalInfo.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative dots */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full blur-sm"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 w-4 h-4 bg-emerald-400 rounded-full blur-sm"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        resumeUrl={resumeUrl}
      />
    </section>
  );
};

export default Hero;
