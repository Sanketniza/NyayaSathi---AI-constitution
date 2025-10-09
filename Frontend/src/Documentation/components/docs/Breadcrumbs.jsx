import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs({ currentSection }) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6">
      <Home size={14} className="text-gray-400 dark:text-gray-500" />
      <ChevronRight size={14} className="text-gray-400 dark:text-gray-500" />
      <span className="text-gray-500 dark:text-gray-400">Docs</span>
      <ChevronRight size={14} className="text-gray-400 dark:text-gray-500" />
      <span className="font-medium text-gray-900 dark:text-white">{currentSection}</span>
    </nav>
  );
}
