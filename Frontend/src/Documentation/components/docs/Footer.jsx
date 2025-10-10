import { Heart, Github, Linkedin, GithubIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>© 2025 NyayaSathi</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by AI Developers
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Sanketniza?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sanket-talekar-94087a263"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-500">
            <Link to="/privacy" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Contact</Link>
            <span>•</span>
            <Link to="/status" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">API Status</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
