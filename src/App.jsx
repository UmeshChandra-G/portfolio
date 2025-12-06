import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Certifications />
        <Contact />
        
        {/* Footer */}
        <footer className="relative py-12 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-950 dark:via-gray-900 dark:to-black text-gray-400 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
                <span className="text-primary-500 font-semibold text-xl">UC</span>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
              </div>
              <p className="text-sm">
                © {new Date().getFullYear()} GORREPATI UMESH CHANDRA. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Built with <span className="text-primary-500">React</span>, <span className="text-primary-500">Vite</span>, and <span className="text-primary-500">TailwindCSS</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
