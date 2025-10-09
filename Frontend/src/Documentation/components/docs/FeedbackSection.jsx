import { useState } from 'react';
import { ThumbsUp, ThumbsDown, X, Send } from 'lucide-react';





export function FeedbackSection({ sectionId }) {
  const [feedback, setFeedback] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePositiveFeedback = () => {
    setFeedback('positive');
    saveFeedback('positive', '');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleNegativeFeedback = () => {
    setFeedback('negative');
    setShowModal(true);
  };

  const handleSubmitFeedback = () => {
    if (message.trim()) {
      saveFeedback('negative', message);
      setShowModal(false);
      setSubmitted(true);
      setMessage('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const saveFeedback = (type, msg) => {
    const feedbackData = {
      sectionId,
      type,
      message: msg,
      timestamp: new Date().toISOString(),
    };

    const existingFeedback = localStorage.getItem('nyayasathi_feedback');
    const feedbackArray = existingFeedback ? JSON.parse(existingFeedback) : [];
    feedbackArray.push(feedbackData);
    localStorage.setItem('nyayasathi_feedback', JSON.stringify(feedbackArray));
  };

  return (
    <>
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Was this page helpful?
          </h3>

          {submitted ? (
            <div className="text-green-600 dark:text-green-400 font-medium">
              Thank you for your feedback!
            </div>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={handlePositiveFeedback}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  feedback === 'positive'
                    ? 'bg-green-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <ThumbsUp className="w-5 h-5" />
                <span className="font-medium">Yes</span>
              </button>

              <button
                onClick={handleNegativeFeedback}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  feedback === 'negative'
                    ? 'bg-red-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <ThumbsDown className="w-5 h-5" />
                <span className="font-medium">No</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-lg w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Help us improve
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              What could we do better? Your feedback helps us improve our documentation.
            </p>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what's missing or what could be clearer..."
              className="w-full h-32 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitFeedback}
                disabled={!message.trim()}
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );

}
