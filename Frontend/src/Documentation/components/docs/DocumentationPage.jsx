import { useState, useMemo, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { ContentArea } from './ContentArea';
import { OnThisPage } from './OnThisPage';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';
import { VersionBadge } from './VersionBadge';
import { docsData } from '../../data/docsData';

export function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return docsData;
    }

    const query = searchQuery.toLowerCase();
    return docsData.filter(section =>
      section.title.toLowerCase().includes(query) ||
      section.content.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const currentSection = docsData.find(section => section.id === activeSection) || docsData[0];

  useEffect(() => {
    const title = `${currentSection.title} - NyayaSathi Documentation`;
    document.title = title;
  }, [currentSection]);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setIsSidebarOpen(false);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors flex flex-col">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <Sidebar
        sections={filteredSections}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isOpen={isSidebarOpen}
      />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main className="pt-16 lg:pl-64 xl:pr-64 transition-all flex-1">
        <div className="p-8 lg:p-12 max-w-5xl">
          <ContentArea section={currentSection} />
        </div>
      </main>

      <OnThisPage content={currentSection.content} />
      <BackToTop />
      <VersionBadge />
      <Footer />
    </div>
  );
}
