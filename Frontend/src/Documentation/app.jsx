import { ThemeProvider } from './contexts/ThemeContext';
import { DocumentationPage } from './components/docs/DocumentationPage';

function App() {
  return (
    <ThemeProvider>
      <DocumentationPage />
    </ThemeProvider>
  );
}

export default App;
