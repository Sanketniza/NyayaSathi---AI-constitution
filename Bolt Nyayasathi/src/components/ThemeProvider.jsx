import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'system';
  });

  const [systemTheme, setSystemTheme] = useState('dark');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

    const handleChange = (e) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    const root = document.documentElement;
    const effectiveTheme = theme === 'system' ? systemTheme : theme;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark', 'amoled', 'sepia');
    
    // Add current theme class
    root.classList.add(effectiveTheme);
  }, [theme, systemTheme]);

  const themes = [
    { id: 'system', name: 'System', icon: '🖥️' },
    { id: 'light', name: 'Light', icon: '☀️' },
    { id: 'dark', name: 'Dark', icon: '🌙' },
    { id: 'amoled', name: 'AMOLED', icon: '⚫' },
    { id: 'sepia', name: 'Sepia', icon: '📜' }
  ];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes, systemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};