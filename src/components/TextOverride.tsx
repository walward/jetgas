
import React, { useEffect } from 'react';

const TextOverride = () => {
  useEffect(() => {
    // Function to find and replace the text
    const replaceGuaranteeText = () => {
      // Look for elements that might contain the text about satisfaction guarantee
      const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, div');
      
      elements.forEach(element => {
        // Skip script and style elements to avoid errors
        if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
          return;
        }
        
        // Only process text nodes directly
        Array.from(element.childNodes).forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && 
              node.textContent && 
              node.textContent.includes('Satisfação garantida ou seu dinheiro de volta')) {
            
            // Create a new text node with the replaced content
            const newText = node.textContent.replace(
              'Satisfação garantida ou seu dinheiro de volta',
              'Satisfação garantida por um equipe especializada'
            );
            
            // Replace the old text node with the new one
            node.textContent = newText;
          }
        });
      });
    };

    // Run once when component mounts with a small delay to ensure DOM is ready
    setTimeout(replaceGuaranteeText, 500);
    
    // Set up a mutation observer to watch for DOM changes
    const observer = new MutationObserver(mutations => {
      // Use a debounce to avoid excessive calls
      if (observer.timeout) {
        clearTimeout(observer.timeout);
      }
      
      // @ts-ignore - Adding custom property to observer
      observer.timeout = setTimeout(() => {
        replaceGuaranteeText();
      }, 100);
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
      // @ts-ignore - Clearing custom property
      if (observer.timeout) {
        // @ts-ignore - Clearing custom property
        clearTimeout(observer.timeout);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default TextOverride;
