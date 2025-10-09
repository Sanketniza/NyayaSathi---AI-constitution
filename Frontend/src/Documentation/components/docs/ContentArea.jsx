import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Breadcrumbs } from './Breadcrumbs';
import { FeedbackSection } from './FeedbackSection';

export function ContentArea({ section }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [section.id]);

  return (
    <div
      className={`
        transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      <Breadcrumbs section={section} />
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown>{section.content}</ReactMarkdown>
      </div>

      <FeedbackSection section={section} />
    </div>
  );
}
