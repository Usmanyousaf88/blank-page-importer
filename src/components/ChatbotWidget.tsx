import React, { useEffect } from 'react';

const ChatbotWidget: React.FC = () => {
  useEffect(() => {
    // Dynamically load the chatbot script
    const script = document.createElement('script');
    script.src = 'https://intellisync-server-fbc47e09b67b.herokuapp.com/chatbot-embed.js';
    script.setAttribute('data-intellisync-id', 'pNXqEuc4jTU3Y07ylF5I');
    script.type = 'module';
    script.crossOrigin = 'anonymous';
    script.defer = true;

    // Ensure the script is added only once
    if (!document.querySelector(`script[src="${script.src}"]`)) {
      document.body.appendChild(script);
    }

    return () => {
      // Optional: Remove the script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div id="intellisync-chat"></div>;
};

export default ChatbotWidget;
