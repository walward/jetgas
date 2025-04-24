
// Helper functions for Google Tag Manager integration

// Push an event to the dataLayer
export const pushEvent = (eventName: string, eventData: Record<string, any> = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData
    });
    console.log(`GTM Event pushed: ${eventName}`, eventData);
  } else {
    console.warn('dataLayer not found. GTM may not be initialized correctly.');
  }
};

// Track a button click
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  pushEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation
  });
};

// Track a link click
export const trackLinkClick = (linkText: string, linkUrl: string, linkLocation: string) => {
  pushEvent('link_click', {
    link_text: linkText,
    link_url: linkUrl,
    link_location: linkLocation
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string, formData: Record<string, any> = {}) => {
  pushEvent('form_submit', {
    form_name: formName,
    ...formData
  });
};

// Track page views (for SPAs)
export const trackPageView = (pagePath: string, pageTitle: string) => {
  pushEvent('virtual_page_view', {
    page_path: pagePath,
    page_title: pageTitle
  });
};
