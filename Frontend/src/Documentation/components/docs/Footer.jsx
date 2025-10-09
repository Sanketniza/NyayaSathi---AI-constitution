import { Heart, Github, Linkedin } from 'lucide-react';

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
              href="https://github.com/nyayasathi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/nyayasathi"
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
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Contact</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">API Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
