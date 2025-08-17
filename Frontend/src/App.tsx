import React from 'react';

export default function App() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-brand-600">NyayaSathi</h1>
        <p className="text-gray-600">AI Constitution Assistant Starter</p>
      </header>
      <main className="space-y-4">
        <section className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Tailwind CSS configured (see <code>tailwind.config.js</code>).</li>
            <li>Custom brand color palette added.</li>
            <li>TypeScript strict mode enabled.</li>
            <li>Vite React plugin for fast HMR.</li>
          </ul>
        </section>
        <section className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Next Steps</h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>Create layout components.</li>
            <li>Add routing (e.g. react-router-dom).</li>
            <li>Integrate API client for Backend.</li>
            <li>Add state management if needed (Zustand/Redux Toolkit).</li>
          </ol>
        </section>
      </main>
      <footer className="mt-12 text-xs text-gray-500">&copy; {new Date().getFullYear()} NyayaSathi</footer>
    </div>
  );
}
