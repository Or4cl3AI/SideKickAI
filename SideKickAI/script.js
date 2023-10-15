// Import the Chrome Storage API
import chrome from 'chrome';

// Define a function to store user preferences
function storePreferences(preferences) {
  chrome.storage.local.set({ preferences }, () => {
    console.log('User preferences stored successfully');
  });
}

// Define a function to retrieve user preferences
function getPreferences(callback) {
  chrome.storage.local.get('preferences', (result) => {
    const preferences = result.preferences || {};
    callback(preferences);
  });
}

// Define a function to store conversation history
function storeConversationHistory(history) {
  chrome.storage.local.set({ history }, () => {
    console.log('Conversation history stored successfully');
  });
}

// Define a function to retrieve conversation history
function getConversationHistory(callback) {
  chrome.storage.local.get('history', (result) => {
    const history = result.history || [];
    callback(history);
  });
}

// Export the functions for external use
export {
  storePreferences,
  getPreferences,
  storeConversationHistory,
  getConversationHistory,
};