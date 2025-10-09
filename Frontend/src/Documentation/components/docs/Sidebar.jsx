import { FileText } from 'lucide-react';

export function Sidebar({ sections, activeSection, onSectionChange, isOpen }) {
  return (
    <aside
      className={`
        fixed left-0 top-16 h-[calc(100vh-4rem)] w-64
        bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
        overflow-y-auto transition-transform duration-300 z-20
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}
    >
      <nav className="p-4">
        <div className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`
                w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200
                flex items-center gap-3 group
                ${
                  activeSection === section.id
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }
              `}
            >
              <FileText
                size={18}
                className={
                  activeSection === section.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400'
                }
              />
              <span className="text-sm">{section.title}</span>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
