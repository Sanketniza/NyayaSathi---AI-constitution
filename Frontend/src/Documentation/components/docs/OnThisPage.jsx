import { useState, useEffect } from 'react';
import { ChevronRight, ArrowUp } from 'lucide-react';

export function OnThisPage({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const generateId = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const extractHeadings = (text) => {
    const lines = text.split('\n');
    const extracted = [];

    lines.forEach((line, index) => {
      const h2Match = line.match(/^##\s+(.+)$/);
      const h3Match = line.match(/^###\s+(.+)$/);

      if (h2Match) {
        const title = h2Match[1].trim();
        const id = generateId(title);
        extracted.push({ level: 2, title, id, index });
      } else if (h3Match) {
        const title = h3Match[1].trim();
        const id = generateId(title);
        extracted.push({ level: 3, title, id, index });
      }
    });

    return extracted;
  };

  useEffect(() => {
    if (content) {
      const extractedHeadings = extractHeadings(content);
      setHeadings(extractedHeadings);
    }
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      const headingElements = headings.map(h =>
        document.getElementById(h.id)
      ).filter(Boolean);

      let currentActive = '';

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        const rect = element.getBoundingClientRect();

        if (rect.top <= 150) {
          currentActive = element.id;
          break;
        }
      }

      if (currentActive) {
        setActiveId(currentActive);
      } else if (headingElements.length > 0) {
        setActiveId(headingElements[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="hidden xl:block fixed right-0 top-16 h-[calc(100vh-4rem)] w-64 border-l border-gray-200 dark:border-gray-800 overflow-y-auto bg-white dark:bg-gray-900 z-20">
      <div className="p-6 pb-4">
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
          On this page
        </h3>

        <nav className="space-y-1">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToSection(heading.id)}
              className={`
                w-full text-left text-sm transition-all duration-200 block py-2 px-3 rounded-md
                ${heading.level === 3 ? 'pl-6' : ''}
                ${
                  activeId === heading.id
                    ? 'text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 border-l-2 border-transparent'
                }
              `}
            >
              <span className="leading-relaxed line-clamp-2">
                {heading.title}
              </span>
            </button>
          ))}
        </nav>

        {showBackToTop && (
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={scrollToTop}
              className="
                w-full flex items-center justify-center gap-2 px-3 py-2
                text-sm font-medium rounded-md
                bg-gradient-to-r from-blue-600 to-blue-700
                text-white
                hover:from-blue-700 hover:to-blue-800
                transition-all shadow-sm hover:shadow-md
              "
            >
              <ArrowUp size={14} />
              <span>Back to top</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
