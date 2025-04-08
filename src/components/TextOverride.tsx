
import React, { useEffect } from 'react';

const TextOverride = () => {
  useEffect(() => {
    // Function to find and replace the text
    const replaceGuaranteeText = () => {
      // Look for elements that might contain the text about satisfaction guarantee
      const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, div');
      
      elements.forEach(element => {
        if (element.textContent && element.textContent.includes('Satisfação garantida ou seu dinheiro de volta')) {
          // Replace the text
          element.textContent = element.textContent.replace(
            'Satisfação garantida ou seu dinheiro de volta',
            'Satisfação garantida por um equipe especializada'
          );
        }
      });
    };

    // Run once when component mounts
    replaceGuaranteeText();
    
    // Set up a mutation observer to watch for DOM changes
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          replaceGuaranteeText();
        }
      });
    });

    // Start observing the document body for DOM changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    return () => {
      // Clean up the observer when component unmounts
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default TextOverride;
