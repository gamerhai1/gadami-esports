import React from 'react';

const NotificationBanner = ({ message }) => (
  <div className="bg-yellow-200 p-2 text-center fixed top-0 w-full z-10">
    {message || 'Important: Matches start soon! Check for updates.'}
  </div>
);

export default NotificationBanner;
