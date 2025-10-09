export const docsData = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `
  # Introduction
  
  NyayaSathi is an AI-powered legal assistant that helps make complex Indian legal documents simple and understandable.
  
  ## Purpose
  
  It serves two main purposes:
  
  - **Simplifies legal language** using NLP and Large Language Models (LLMs).
  - **Translates documents** into regional languages (Hindi, Marathi, etc.) with both text and voice support.
  
  ## Goal
  
  Make legal knowledge accessible to everyone, especially in rural India or for people not fluent in English.
  
  ---
  
  **NyayaSathi** empowers users to understand their legal rights and navigate the Indian legal system with confidence.
      `.trim()
    },
    {
      id: 'getting-started',
      title: 'Getting Started',
      content: `
  # Getting Started
  
  Follow these simple steps to begin using NyayaSathi:
  
  ## Quick Start Guide
  
  **Step 1:** Visit the NyayaSathi website.
  
  **Step 2:** Create an account or sign in.
  
  **Step 3:** Upload your legal document (PDF or text).
  
  **Step 4:** Ask your question or request a translation.
  
  **Step 5:** NyayaSathi simplifies and translates your document instantly.
  
  ## Pro Tip
  
  💡 You can also enable **"voice output"** for listening to the simplified explanation in your preferred language.
  
  ---
  
  ### Need Help?
  
  If you encounter any issues, check out our [FAQs / Troubleshooting](#faqs-troubleshooting) section or reach out to our support team.
      `.trim()
    },
    {
      id: 'core-features',
      title: 'Core Features',
      content: `
  # Core Features
  
  NyayaSathi combines cutting-edge AI technology to provide powerful legal assistance tools.
  
  ## Main Features
  
  ### 1. Document Simplification
  
  Converts complex legal terms into simple everyday language that anyone can understand.
  
  ### 2. Multilingual Translation
  
  Supports Hindi, Marathi, and other regional languages, making legal documents accessible to non-English speakers.
  
  ### 3. RAG Chatbot
  
  Uses **Retrieval Augmented Generation** for accurate answers with references to legal documents and precedents.
  
  ### 4. Incident-Based Query
  
  Lets users describe an incident and get relevant IPC/Act sections along with potential punishments and legal advice.
  
  ### 5. Language Split
  
  View answers in both English and regional language side-by-side for better understanding and comparison.
  
  ## Technology Stack
  
  🔧 **Powered by:** NLP, Translation APIs, and Large Language Models (LLMs)
  
  ---
  
  ### What Makes NyayaSathi Different?
  
  - **Accuracy:** Backed by verified legal databases
  - **Accessibility:** Available in multiple Indian languages
  - **User-Friendly:** Designed for people without legal background
  - **Voice Support:** Listen to explanations in your language
      `.trim()
    },
    {
      id: 'dataset-backend',
      title: 'Dataset & Backend',
      content: `
  # Dataset & Backend
  
  ## Overview
  
  NyayaSathi's backend is the foundation that powers document understanding and AI interactions.
  
  It handles:
  
  - Document upload & preprocessing
  - Vectorization and embedding storage
  - Query routing and retrieval (RAG)
  - Simplification and translation API calls
  
  ## Data Preparation Pipeline
  
  **1.** Collect public Indian legal datasets (judgments, acts, case summaries).
  
  **2.** Clean & normalize text data (remove noise, section headers, duplicates).
  
  **3.** Split documents into chunks (~512 tokens).
  
  **4.** Generate embeddings using an embedding model (e.g., text-embedding-3-large).
  
  **5.** Store vectors in a database (e.g., Pinecone, MongoDB + Vector plugin).
  
  ## Backend Flow
  
  The complete processing pipeline:
  
  **User** → **Upload Document** → **Preprocessing** → **Embedding** → **Store in Vector DB** → **Query** → **Retrieve** → **LLM Response** → **Translation/Voice Output**
  
  ## APIs
  
  ### Core Endpoints
  
  - **/upload** – Handles document uploads
  - **/query** – Accepts user question + file ID and returns simplified answer
  - **/translate** – Translates simplified output into target language
  
  ## Technology Stack
  
  Backend built with **Node.js + Express** and connected to **MongoDB**.
  
  ---
  
  ### Database Architecture
  
  - **MongoDB**: Stores user data, document metadata, and query history
  - **Vector Database**: Stores embeddings for semantic search and retrieval
  - **Redis**: Caches frequently accessed documents and translations
      `.trim()
    },
    {
      id: 'ai-architecture',
      title: 'AI Architecture',
      content: `
  # AI Architecture
  
  ## Overview
  
  NyayaSathi uses a **Retrieval Augmented Generation (RAG)** pipeline integrated with translation and speech services.
  
  ## Components
  
  ### 1. Document Preprocessor
  
  Extracts and chunks uploaded legal documents for efficient processing.
  
  ### 2. Embedding Generator
  
  Creates vector embeddings for semantic search using advanced NLP models.
  
  ### 3. Retriever
  
  Fetches most relevant chunks for each user query from the vector database.
  
  ### 4. LLM Reasoner
  
  Simplifies legal text and generates human-friendly responses with proper context.
  
  ### 5. Translator + TTS
  
  Converts responses into regional languages and adds voice output for accessibility.
  
  ## Simplified Flow
  
  The AI processing pipeline:
  
  **User Query**
  ↓
  **Retriever** (fetch relevant chunks)
  ↓
  **LLM** (Simplify + Summarize + Reference)
  ↓
  **Translator** (Hindi/Marathi + Voice Output)
  ↓
  **Response UI**
  
  ## Tech Stack
  
  ### Core Technologies
  
  - **LLM:** OpenAI GPT / Gemini / custom NLP model
  - **Vector DB:** Pinecone / Weaviate / MongoDB Atlas Vector Search
  - **Translation:** Google Translate API / Indic Trans 2
  - **TTS/STT:** Azure Speech or Google Cloud Speech
  
  ---
  
  ### Future Development
  
  🚀 **Planned Enhancement:** Fine-tuned LLM on Indian legal corpus for improved accuracy and context-specific understanding.
  
  ## Why RAG?
  
  Retrieval Augmented Generation ensures:
  
  - **Accuracy:** Responses backed by actual legal documents
  - **Transparency:** Citations and references for every answer
  - **Up-to-date:** Always uses the latest legal information from the database
  - **Cost-effective:** Only processes relevant document chunks instead of entire corpus
      `.trim()
    },
    {
      id: 'frontend',
      title: 'Frontend',
      content: `
  # Frontend
  
  ## Overview
  
  Built with **React + Tailwind CSS** for a responsive, app-like experience that works seamlessly across all devices.
  
  ## Core Components
  
  ### Chat Interface
  
  Chat-style window for document queries and responses with real-time interaction.
  
  ### File Uploader
  
  Drag-and-drop PDF/Text upload with progress indicators and file validation.
  
  ### Language Selector
  
  Switch between English/Hindi/Marathi with instant UI updates.
  
  ### Voice Response Player
  
  Play simplified answers via audio with playback controls and speed adjustment.
  
  ### Docs Section
  
  Comprehensive documentation portal (current feature) with search and navigation.
  
  ## User Flow
  
  The complete user experience:
  
  **User** → **Upload Doc** → **Ask Question** → **Backend Processes** → **Frontend Displays Simplified Answer + Translation + Voice**
  
  ## UI Libraries & Tools
  
  ### Design System
  
  - **Tailwind CSS** – Utility-first CSS framework for rapid UI development
  - **React Markdown Renderer** – Dynamic content rendering with formatting support
  - **Framer Motion** – Smooth animations and transitions
  - **Shadcn UI** – Beautiful, accessible components for cards/buttons
  
  ### State Management
  
  - **React Context API** – Theme management and global state
  - **React Hooks** – Component state and lifecycle management
  
  ---
  
  ## Features
  
  ### Responsive Design
  
  ✨ Mobile-first approach ensuring perfect experience on phones, tablets, and desktops
  
  ### Dark Mode Support
  
  🌙 Automatic theme switching with localStorage persistence
  
  ### Accessibility
  
  ♿ WCAG compliant with keyboard navigation and screen reader support
  
  ### Performance
  
  ⚡ Optimized bundle size and lazy loading for fast page loads
  
  ## Component Architecture
  
  The frontend follows a modular component structure:
  
  - **/components/docs/** – Documentation portal components
  - **/components/chat/** – Chat interface and message components
  - **/components/upload/** – File upload and management
  - **/contexts/** – Global state management
  - **/data/** – Static content and configuration
      `.trim()
    },
    {
      id: 'security-privacy',
      title: 'Security & Privacy',
      content: `
  # 🛡️ Security & Privacy
  
  ## Overview
  
  Your data security is our top priority. NyayaSathi implements industry-standard security practices to protect your sensitive legal documents and personal information.
  
  ## Core Security Features
  
  ### 🔒 Data Encryption
  
  All documents are securely processed with multiple layers of encryption:
  
  - **In-Transit:** HTTPS/TLS 1.3 encryption for all data transmission
  - **At-Rest:** AES-256 encryption for database storage
  - **End-to-End:** Document content encrypted before storage
  
  ### 🧠 LLM Privacy
  
  **Zero Data Retention Policy:**
  
  - No training data is stored or used for model retraining
  - User queries are processed in real-time and not logged permanently
  - AI interactions are isolated per user session
  - Legal documents are never shared with third-party AI providers
  
  ### 🪪 User Authentication
  
  Secure session management using industry standards:
  
  - **JWT Tokens:** Stateless authentication with short expiry times
  - **OAuth2 Support:** Integration with Google, Microsoft, and GitHub
  - **Multi-Factor Authentication:** Optional 2FA for enhanced security
  - **Session Management:** Automatic timeout and refresh token rotation
  
  ### ⚙️ Access Control
  
  Role-based permissions ensure proper data isolation:
  
  - **User Role:** Upload documents, query AI, view own history
  - **Admin Role:** Manage users, monitor system health, access analytics
  - **Developer Role:** API access, integration testing, webhook configuration
  
  ### 🧩 API Security
  
  Robust protection for all API endpoints:
  
  - **Rate Limiting:** Prevents abuse with configurable request limits
  - **API Key Validation:** Secure key-based authentication for developers
  - **CORS Policies:** Whitelist-based origin control
  - **Input Validation:** SQL injection and XSS prevention
  - **Request Signing:** HMAC-based integrity verification
  
  ### 🧭 Compliance
  
  NyayaSathi adheres to international and Indian data protection standards:
  
  - **GDPR Compliant:** User rights to access, delete, and export data
  - **Digital Personal Data Protection Act (DPDPA):** Indian compliance framework
  - **ISO 27001 Standards:** Information security management
  - **Regular Audits:** Third-party security assessments
  
  ---
  
  ## Security Audit Roadmap
  
  ### Upcoming Features
  
  **Q2 2025:**
  - 📋 **Audit Logs:** Complete activity tracking for compliance
  - 🚨 **Anomaly Detection:** AI-powered threat identification
  
  **Q3 2025:**
  - ✅ **Consent Management:** Granular user consent controls
  - 🤝 **Data Sharing Controls:** User-approved third-party integrations
  
  **Q4 2025:**
  - 🛡️ **Zero-Knowledge Encryption:** Client-side encryption options
  - 🔐 **Hardware Security Module:** Enhanced key management
  
  ---
  
  ### Report Security Issues
  
  Found a vulnerability? Please report it responsibly:
  
  📧 **Email:** security@nyayasathi.in
  
  🔒 **PGP Key:** Available on our website for encrypted communication
      `.trim()
    },
    {
      id: 'faqs-troubleshooting',
      title: 'FAQs / Troubleshooting',
      content: `
  # 🧩 FAQs / Troubleshooting
  
  ## Common Issues & Solutions
  
  ### Q: The AI isn't responding to my uploaded legal document.
  
  **A:** Please verify the following:
  
  - Ensure the document format is **.pdf** or **.docx**
  - Check if file size is **less than 10MB**
  - Verify the document contains readable text (not just scanned images)
  - Try re-uploading after clearing browser cache
  - Check your internet connection stability
  
  ---
  
  ### Q: Translation feature not working?
  
  **A:** Try these troubleshooting steps:
  
  - Check if regional language model is available in your account settings
  - Re-enable **Regional Language Support** under Settings → Languages
  - Verify your selected target language is supported (Hindi, Marathi, etc.)
  - Refresh the page and try again
  - Contact support if the issue persists
  
  ---
  
  ### Q: Dark mode toggle missing?
  
  **A:** This is usually a localStorage issue:
  
  - Clear your browser cache and localStorage
  - Press **F12** → Console → Type: localStorage.clear()
  - Refresh the page
  - Theme state is persisted in localStorage, clearing it resets the toggle
  
  ---
  
  ### Q: Backend API returns 401 Unauthorized.
  
  **A:** Authentication token issue:
  
  - Check if your **JWT token** has expired
  - Use the **/auth/refresh** endpoint to get a new token
  - Verify API key is correctly set in headers: Authorization: Bearer YOUR_TOKEN
  - Log out and log back in to refresh your session
  - Ensure your account has proper permissions
  
  ---
  
  ### Q: Voice output is lagging or not working.
  
  **A:** Browser compatibility issue:
  
  - **Recommended:** Use **Google Chrome** for best speech synthesis support
  - Other browsers (Firefox, Safari, Edge) may have varying TTS performance
  - Check if your browser has text-to-speech enabled in settings
  - Ensure system volume is not muted
  - Try switching to a different regional language voice
  
  ---
  
  ### Q: Document upload is failing repeatedly.
  
  **A:** Network or file format issue:
  
  - Check file size (must be under 10MB)
  - Verify file is not corrupted or password-protected
  - Use a stable internet connection
  - Try converting the document to PDF format
  - Disable browser extensions that might block uploads
  
  ---
  
  ### Q: How do I delete my uploaded documents?
  
  **A:** Data management:
  
  - Go to **My Documents** section in your dashboard
  - Click the **Delete** icon next to each document
  - Documents are permanently removed from our servers
  - You can also use **Bulk Delete** to remove multiple files
  
  ---
  
  ### Q: Can I use NyayaSathi offline?
  
  **A:** NyayaSathi requires an internet connection:
  
  - AI processing happens on cloud servers
  - Translation and TTS services need online access
  - **Offline mode** is planned for Q3 2025 with cached documents
  
  ---
  
  ## Need More Help?
  
  💡 **If you face any issue not listed here:**
  
  - Visit the [Developer Integration](#developer-integration) page for API troubleshooting
  - Raise a **GitHub Issue** at: github.com/nyayasathi/issues
  - Contact support: support@nyayasathi.in
  - Join our **Discord Community** for real-time help
      `.trim()
    },
    {
      id: 'developer-integration',
      title: 'Developer Integration',
      content: `
  # 🧠 Developer Integration
  
  ## Overview
  
  Integrate NyayaSathi's powerful legal AI capabilities into your own applications using our comprehensive API.
  
  ## API Access
  
  ### REST API Endpoints
  
  NyayaSathi provides RESTful APIs for core functionality:
  
  **Document Upload**
  - **POST** /api/v1/documents/upload
  - **POST** /api/v1/documents/analyze
  
  **AI Simplification**
  - **POST** /api/v1/simplify
  - **GET** /api/v1/simplify/:id
  
  **Translation**
  - **POST** /api/v1/translate
  - **GET** /api/v1/translate/:id
  
  **Query & Chat**
  - **POST** /api/v1/query
  - **POST** /api/v1/chat
  
  ### GraphQL Support
  
  For advanced queries and mutations:
  
  - **Endpoint:** /graphql
  - **Playground:** Available at /graphql-playground
  - **Schema:** Auto-generated documentation
  
  ---
  
  ## SDKs
  
  ### Official Software Development Kits
  
  **Coming Soon:**
  
  - 📦 **JavaScript/TypeScript SDK** - Q2 2025
  - 🐍 **Python SDK** - Q2 2025
  - ☕ **Java SDK** - Q3 2025
  - 💎 **Ruby SDK** - Q4 2025
  
  **Installation (Preview):**
  
  JavaScript:
  npm install @nyayasathi/sdk
  
  Python:
  pip install nyayasathi-sdk
  
  ---
  
  ## Webhooks
  
  Receive real-time updates for document processing:
  
  **Supported Events:**
  
  - document.uploaded
  - document.processed
  - simplification.completed
  - translation.completed
  - error.occurred
  
  **Configuration:**
  
  Set webhook URLs in your developer dashboard at /developer/webhooks
  
  ---
  
  ## Authentication
  
  All API requests require authentication using **JWT Bearer tokens**.
  
  **Header Format:**
  
  Authorization: Bearer YOUR_API_KEY
  
  **Getting Your API Key:**
  
  **1.** Sign up at nyayasathi.in/developer
  
  **2.** Generate API key from dashboard
  
  **3.** Store securely in environment variables
  
  **4.** Never expose keys in client-side code
  
  ---
  
  ## Environment Setup
  
  Required environment variables for local development:
  
  **Backend Configuration:**
  
  API_KEY=your_api_key_here
  DB_URI=mongodb://localhost:27017/nyayasathi
  OPENAI_API_KEY=your_openai_key
  TRANSLATION_API_KEY=your_translation_key
  JWT_SECRET=your_jwt_secret
  PORT=3000
  
  **Frontend Configuration:**
  
  VITE_API_URL=http://localhost:3000/api/v1
  VITE_API_KEY=your_api_key
  
  ---
  
  ## Sample Code Snippet
  
  ### Simplify Legal Document
  
  **Using fetch():**
  
  const response = await fetch('https://api.nyayasathi.in/v1/simplify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      documentId: 'doc_123456',
      language: 'en',
      simplificationLevel: 'medium'
    })
  });
  
  const data = await response.json();
  console.log(data.simplifiedText);
  
  **Using axios:**
  
  const axios = require('axios');
  
  const result = await axios.post(
    'https://api.nyayasathi.in/v1/simplify',
    {
      documentId: 'doc_123456',
      language: 'en',
      simplificationLevel: 'medium'
    },
    {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    }
  );
  
  console.log(result.data.simplifiedText);
  
  ---
  
  ## Contribution Guide
  
  Want to contribute to NyayaSathi? Follow these steps:
  
  **1. Fork the Repository**
  
  Visit github.com/nyayasathi/core and click Fork
  
  **2. Clone Locally**
  
  git clone https://github.com/YOUR_USERNAME/nyayasathi-core.git
  cd nyayasathi-core
  
  **3. Install Dependencies**
  
  npm install
  
  **4. Run Development Server**
  
  npm run dev
  
  **5. Make Your Changes**
  
  Create a new branch for your feature
  
  **6. Submit Pull Request**
  
  Push changes and open a PR with detailed description
  
  ---
  
  ## Plugin Support
  
  ### Upcoming Integrations
  
  **Q3 2025:**
  - 🔌 **VS Code Extension:** In-editor legal document analysis
  - 🌐 **Browser Plugins:** Chrome, Firefox, Edge extensions
  
  **Q4 2025:**
  - 📱 **Mobile SDKs:** iOS and Android native libraries
  - 🤖 **Slack Bot:** Legal queries in your workspace
  - 💬 **Discord Bot:** Community legal assistance
  
  ---
  
  ## Rate Limits
  
  **Free Tier:**
  - 100 requests/day
  - 10 requests/minute
  
  **Pro Tier:**
  - 10,000 requests/day
  - 100 requests/minute
  
  **Enterprise:**
  - Custom limits
  - Dedicated support
  
  ---
  
  ## Support & Resources
  
  - 📚 **Full API Docs:** docs.nyayasathi.in/api
  - 💬 **Developer Forum:** community.nyayasathi.in
  - 📧 **Developer Support:** dev@nyayasathi.in
  - 🐛 **Report Bugs:** github.com/nyayasathi/issues
      `.trim()
    },
    {
      id: 'roadmap-future-plans',
      title: 'Roadmap / Future Plans',
      content: `
  # 🗺️ Roadmap / Future Plans
  
  ## Product Timeline
  
  ### ✅ Q1 2025: Launch MVP
  
  **Status:** Completed
  
  - ✅ Legal document simplification engine
  - ✅ Multi-language translation (Hindi, Marathi)
  - ✅ Basic chat interface
  - ✅ User authentication & document management
  - ✅ Dark mode support
  - ✅ Comprehensive documentation portal
  
  ---
  
  ### 🚀 Q2 2025: Voice & Accessibility
  
  **In Progress**
  
  - 🎤 **Voice-Based Document Reading:** Listen to simplified legal text
  - 🔊 **Text-to-Speech Engine:** Multi-language audio output
  - 🎙️ **Voice Queries:** Ask questions using speech input
  - ♿ **Enhanced Accessibility:** WCAG 2.1 AAA compliance
  - 📱 **Mobile App Beta:** iOS and Android preview release
  - 🔔 **Push Notifications:** Real-time document processing updates
  
  ---
  
  ### 🌐 Q3 2025: Multilingual Expansion
  
  **Planned**
  
  - 🗣️ **Additional Languages:** Tamil, Telugu, Bengali, Gujarati, Kannada
  - 💬 **Multilingual Chat Interface:** Seamless language switching mid-conversation
  - 🌍 **Regional Legal Systems:** State-specific law coverage
  - 📖 **Language Glossary:** Legal term dictionary in 10+ Indian languages
  - 🎓 **Legal Education Mode:** Interactive learning modules
  - 🔄 **Real-Time Translation:** Live document translation while reading
  
  ---
  
  ### 🧩 Q4 2025: Developer Ecosystem
  
  **Planned**
  
  - 🔌 **Public API Launch:** Full REST and GraphQL API access
  - 📦 **Official SDKs:** JavaScript, Python, Java libraries
  - 🔗 **Webhook System:** Real-time event notifications
  - 🛠️ **Developer Dashboard:** API analytics and monitoring
  - 📚 **Code Examples:** Integration templates and tutorials
  - 🎯 **API Marketplace:** Third-party plugin ecosystem
  
  ---
  
  ### 🤝 Q1 2026: Legal Database Integration
  
  **Planned**
  
  - ⚖️ **Indian Court Databases:** Live case law references
  - 📜 **Supreme Court Judgments:** Searchable historical decisions
  - 🏛️ **High Court Integration:** State-wise legal precedents
  - 🔍 **Advanced Search:** Citation-based legal research
  - 📊 **Case Analytics:** Judgment trends and statistics
  - 🔗 **Automated Citations:** Auto-link to relevant case law
  
  ---
  
  ### 💼 Q2 2026: Enterprise Solutions
  
  **Planned**
  
  - 🏢 **Enterprise Version:** Custom deployment options
  - 📈 **Compliance Dashboard:** Regulatory reporting tools
  - 👥 **Team Collaboration:** Multi-user workspaces
  - 🔐 **Advanced Security:** SSO, SAML, custom authentication
  - 📋 **Audit Logs:** Complete activity tracking
  - 🎛️ **Admin Panel:** User and permission management
  - 💾 **On-Premise Deployment:** Self-hosted solutions
  - 🤝 **SLA Guarantees:** 99.9% uptime commitment
  
  ---
  
  ## Long-Term Vision
  
  ### 2027 and Beyond
  
  **Ambitious Goals:**
  
  - 🌏 **Pan-India Coverage:** All 22 official languages supported
  - 🎓 **Legal Education Platform:** Free courses for students and citizens
  - 🏛️ **Government Partnerships:** Integration with official portals
  - 🤖 **Advanced AI Models:** Fine-tuned on 50M+ Indian legal documents
  - 🌍 **International Expansion:** ASEAN and SAARC legal systems
  - 🔬 **Legal Research AI:** Predictive case outcome analysis
  - 💡 **Citizen Empowerment:** 100M+ users accessing legal knowledge
  
  ---
  
  ## Community-Driven Development
  
  ### Your Voice Matters
  
  We build features based on community feedback:
  
  - 🗳️ **Feature Voting:** Vote on upcoming features
  - 💬 **Community Forum:** Suggest and discuss ideas
  - 🐛 **Bug Bounty Program:** Report issues, earn rewards
  - 🤝 **Open Source Contributions:** Contribute code and documentation
  - 📊 **User Surveys:** Regular feedback collection
  
  ---
  
  ## Stay Updated
  
  ### Follow Our Progress
  
  - 📧 **Newsletter:** Monthly product updates
  - 🐦 **Twitter:** @NyayaSathi - Real-time announcements
  - 💼 **LinkedIn:** Company updates and team highlights
  - 📱 **Blog:** Deep dives into features and technology
  - 🎥 **YouTube:** Tutorial videos and demos
  
  ---
  
  ## Join the Mission
  
  💬 **NyayaSathi's journey is just beginning — join us in making Indian legal knowledge accessible to all.**
  
  Whether you're a user, developer, legal professional, or advocate for justice, there's a place for you in our community.
  
  **Together, we can democratize legal understanding in India.**
  
  🌟 **Be part of the change. Be part of NyayaSathi.**
      `.trim()
    },
    {
      id: 'community',
      title: 'Community',
      content: `
  # 🤝 Community
  
  ## Join Our Community
  
  Connect with fellow users, contributors, and the NyayaSathi team. We believe in building together and making legal knowledge accessible for everyone.
  
  ---
  
  ## Communication Channels
  
  ### 💬 Discord Server
  
  **Join our active Discord community:**
  
  🔗 **discord.gg/nyayasathi**
  
  Channels include:
  - **#general** - Community discussions
  - **#help** - Get support from community members
  - **#feature-requests** - Suggest new features
  - **#bug-reports** - Report issues
  - **#developers** - Technical discussions
  - **#showcase** - Share your projects using NyayaSathi
  
  ---
  
  ### 📱 Telegram Group
  
  **Quick updates and community chat:**
  
  🔗 **t.me/nyayasathi**
  
  - Daily updates and announcements
  - Quick Q&A with the team
  - Community networking
  - Regional language support groups
  
  ---
  
  ### 💼 LinkedIn
  
  **Follow us for professional updates:**
  
  🔗 **linkedin.com/company/nyayasathi**
  
  - Product announcements
  - Team updates and hiring
  - Legal tech industry insights
  - Case studies and success stories
  
  ---
  
  ### 🐦 Twitter/X
  
  **Real-time updates:**
  
  🔗 **@NyayaSathi**
  
  - Feature launches
  - System status updates
  - Community highlights
  - Legal tech news
  
  ---
  
  ## Contributor Guidelines
  
  ### How to Contribute
  
  We welcome contributions from everyone! Here's how you can help:
  
  **1. Code Contributions**
  
  - Fork the repository on GitHub
  - Create a feature branch: git checkout -b feature/amazing-feature
  - Make your changes following our coding standards
  - Write tests for new functionality
  - Submit a pull request with detailed description
  
  **2. Documentation**
  
  - Improve existing documentation
  - Add examples and tutorials
  - Translate docs to regional languages
  - Fix typos and clarify explanations
  
  **3. Bug Reports**
  
  - Search existing issues first
  - Provide detailed reproduction steps
  - Include screenshots and error logs
  - Specify your environment (OS, browser, version)
  
  **4. Feature Requests**
  
  - Explain the problem you're trying to solve
  - Describe your proposed solution
  - Provide use cases and examples
  - Discuss alternatives you've considered
  
  ---
  
  ### Contribution Standards
  
  **Code Quality:**
  
  - Follow existing code style and conventions
  - Write clear, self-documenting code
  - Add comments for complex logic
  - Ensure all tests pass before submitting
  
  **Commit Messages:**
  
  - Use clear, descriptive commit messages
  - Start with a verb: "Add", "Fix", "Update", "Remove"
  - Reference issue numbers when applicable
  - Keep messages concise but informative
  
  **Pull Requests:**
  
  - One feature or fix per PR
  - Include tests for new functionality
  - Update documentation as needed
  - Respond to review feedback promptly
  
  ---
  
  ## Code of Conduct
  
  ### Our Pledge
  
  We are committed to providing a welcoming and inclusive environment for everyone, regardless of:
  
  - Age, body size, disability, ethnicity
  - Gender identity and expression
  - Level of experience
  - Nationality, personal appearance
  - Race, religion, or sexual identity and orientation
  
  ### Expected Behavior
  
  **✅ Do:**
  
  - Be respectful and considerate
  - Welcome newcomers and help them learn
  - Accept constructive criticism gracefully
  - Focus on what's best for the community
  - Show empathy towards others
  
  **❌ Don't:**
  
  - Use sexualized language or imagery
  - Troll, insult, or make derogatory comments
  - Harass others publicly or privately
  - Share others' private information
  - Engage in unprofessional conduct
  
  ### Reporting Issues
  
  If you experience or witness unacceptable behavior:
  
  📧 **Email:** conduct@nyayasathi.in
  
  🔒 **All reports are confidential**
  
  Our team will review and respond within 48 hours.
  
  ---
  
  ## Recognition
  
  ### Contributors Hall of Fame
  
  We celebrate our contributors:
  
  🏆 **Top Contributors** featured on our website
  
  🎁 **Swag and Rewards** for significant contributions
  
  📣 **Social Media Shoutouts** for community members
  
  💼 **Job Opportunities** for outstanding contributors
  
  ---
  
  ## Community Events
  
  ### Upcoming
  
  **Monthly Meetups:**
  - First Saturday of every month
  - Online via Discord video chat
  - Demo new features and discuss roadmap
  
  **Hackathons:**
  - Quarterly themed hackathons
  - Prizes and recognition for winners
  - Opportunity to shape the product
  
  **Office Hours:**
  - Every Wednesday, 6-8 PM IST
  - Ask the team anything
  - Get help with integration
  
  ---
  
  ## Get Involved Today
  
  🚀 **Start Contributing:** github.com/nyayasathi/core
  
  💬 **Join Discord:** discord.gg/nyayasathi
  
  📧 **Subscribe to Newsletter:** newsletter.nyayasathi.in
  
  🐦 **Follow on Twitter:** @NyayaSathi
  
  **Together, we're making legal knowledge accessible to all Indians!**
      `.trim()
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: `
  # 📧 Contact Us
  
  ## Get in Touch
  
  Have questions, feedback, or just want to say hello? We'd love to hear from you!
  
  ---
  
  ## Support Channels
  
  ### 💬 General Inquiries
  
  **Email:** hello@nyayasathi.in
  
  **Response Time:** Within 24 hours
  
  ---
  
  ### 🛠️ Technical Support
  
  **Email:** support@nyayasathi.in
  
  **Response Time:** Within 12 hours
  
  **For Urgent Issues:**
  - Join our Discord: discord.gg/nyayasathi
  - Tag @support in #help channel
  
  ---
  
  ### 💼 Business & Partnerships
  
  **Email:** partnerships@nyayasathi.in
  
  **Topics:**
  - Enterprise solutions
  - API partnerships
  - Integration opportunities
  - Bulk licensing
  
  ---
  
  ### 🔒 Security Issues
  
  **Email:** security@nyayasathi.in
  
  **PGP Key:** Available on our website
  
  **Please report security vulnerabilities responsibly**
  
  ---
  
  ### 📰 Press & Media
  
  **Email:** press@nyayasathi.in
  
  **Topics:**
  - Media inquiries
  - Interview requests
  - Press releases
  - Brand assets
  
  ---
  
  ## Office Locations
  
  ### Headquarters
  
  **NyayaSathi Technologies Pvt. Ltd.**
  
  📍 Bangalore, Karnataka, India
  
  🌐 Visit: nyayasathi.in
  
  ---
  
  ## Social Media
  
  Stay connected with us:
  
  🐦 **Twitter:** @NyayaSathi
  
  💼 **LinkedIn:** linkedin.com/company/nyayasathi
  
  📷 **Instagram:** @nyayasathi.official
  
  ▶️ **YouTube:** youtube.com/@nyayasathi
  
  ---
  
  ## Feedback Form
  
  Prefer to send feedback directly? Use the feedback buttons at the bottom of each documentation page or reach out via email.
  
  ---
  
  ## Office Hours
  
  **Available for live chat:**
  
  🕐 **Monday - Friday:** 9:00 AM - 6:00 PM IST
  
  🕐 **Saturday:** 10:00 AM - 2:00 PM IST
  
  🕐 **Sunday:** Closed (Emergency support via Discord)
  
  ---
  
  ## Mailing List
  
  📬 **Subscribe to our newsletter:**
  
  Get monthly updates on:
  - New features and releases
  - Community highlights
  - Legal tech insights
  - Tips and best practices
  
  **Sign up:** newsletter.nyayasathi.in
  
  ---
  
  ## We Value Your Feedback
  
  Your input helps us build a better product. Whether it's a bug report, feature request, or just a suggestion, we're all ears!
  
  **Thank you for being part of the NyayaSathi community!**
      `.trim()
    }
  ];
  