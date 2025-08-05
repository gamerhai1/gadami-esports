import React from 'react';
import HomePage from './pages/HomePage';
import NotificationBanner from './components/NotificationBanner';
import Leaderboard from './components/Leaderboard';
import SidebarRules from './components/SidebarRules';
import FAQSection from './components/FAQSection';
import SupportButton from './components/SupportButton';

const App = () => (
  <div className="relative min-h-screen">
    <NotificationBanner />
    <SidebarRules />
    <HomePage />
    <Leaderboard />
    <FAQSection />
    <SupportButton />
  </div>
);

export default App;
