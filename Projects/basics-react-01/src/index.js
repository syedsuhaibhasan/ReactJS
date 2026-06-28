import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// In a React application, the index.html file usually contains a single root element such as <div id="root"></div>. When the application starts, index.js or main.jsx selects this element using document.getElementById("root") and passes it to ReactDOM.createRoot(), which creates a React root attached to that DOM node. React then renders the App component, creating a Virtual DOM tree in memory that represents the UI. React compares this Virtual DOM with the previous version whenever data or state changes, determines exactly what has changed, and updates only those specific parts of the browser's real DOM instead of rebuilding the entire page. For example, if App.js returns <h1>Hello World</h1>, React ultimately inserts that heading inside the root div in the real DOM. While writing the same HTML directly in index.html would be simpler for a static page, React's approach provides efficient updates, reusable components, and easier management of complex, dynamic user interfaces.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);