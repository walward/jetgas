
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a function to handle the app mounting with error boundaries
const mountApp = () => {
  const root = createRoot(document.getElementById("root")!);
  
  if (process.env.NODE_ENV === 'production') {
    // In production, render without extra error handling for performance
    root.render(<App />);
  } else {
    // In development, add extra error handling
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};

// Add event listener for when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
