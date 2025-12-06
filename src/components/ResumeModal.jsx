import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import Button from './Button';

const ResumeModal = ({ isOpen, onClose, resumeUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-800">
                <div>
                  <h2 className="text-2xl font-bold gradient-text-static">Resume</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">View or download your resume</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    icon="download"
                    href={resumeUrl}
                    download
                    className="text-sm px-4 py-2"
                  >
                    Download
                  </Button>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                  >
                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                  className="w-full h-full border-0"
                  title="Resume PDF Viewer"
                />
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Having trouble viewing?{' '}
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                  >
                    Open in new tab
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;

