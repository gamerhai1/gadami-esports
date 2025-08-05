import React from 'react';

const SupportButton = () => (
  <button
    onClick={() => alert('Contact support at support@gadami.com')}
    className="bg-blue-500 text-white py-2 px-4 rounded fixed bottom-4 right-4 shadow-lg"
  >
    Support
  </button>
);

export default SupportButton;
