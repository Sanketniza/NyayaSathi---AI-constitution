import React, { useState } from 'react';
import { Palette, ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeSelector = () => {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const currentTheme = themes.find(t => t.id === theme);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-surface-secondary border border-border rounded-lg text-text-primary hover:bg-surface-tertiary transition-all duration-300 transform hover:scale-105"
      >
        <Palette className="w-4 h-4" />
        <span className="hidden sm:inline">{currentTheme?.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-surface-primary border border-border rounded-lg shadow-xl z-50 min-w-[160px] overflow-hidden">
          {themes.map((themeOption) => (
            <button
              key={themeOption.id}
              onClick={() => {
                setTheme(themeOption.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-surface-secondary transition-colors duration-200 ${
                theme === themeOption.id ? 'bg-surface-secondary text-accent' : 'text-text-primary'
              }`}
            >
              <span className="text-lg">{themeOption.icon}</span>
              <span className="font-medium">{themeOption.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;