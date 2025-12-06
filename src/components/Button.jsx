import { motion } from 'framer-motion';
import { ExternalLink, Download } from 'lucide-react';

const Button = ({ children, variant = 'primary', icon, onClick, href, download, className = '' }) => {
  const baseClasses = 'inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden';
  
  const variants = {
    primary: 'premium-button text-white',
    outline: 'border-2 border-primary-500/50 text-primary-600 dark:text-primary-400 hover:bg-primary-500/10 dark:hover:bg-primary-500/20 backdrop-blur-sm glass-effect',
    ghost: 'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20',
  };

  const content = (
    <>
      {icon === 'download' && <Download className="w-4 h-4" />}
      {icon === 'external' && <ExternalLink className="w-4 h-4" />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        target={download ? undefined : "_blank"}
        rel={download ? undefined : "noopener noreferrer"}
        download={download}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
};

export default Button;
