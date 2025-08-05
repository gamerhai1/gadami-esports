import React from 'react';

const SidebarRules = () => (
  <aside className="w-64 bg-gray-100 p-4 fixed top-0 right-0 h-full overflow-y-auto">
    <h3 className="font-bold text-lg mb-4">Tournament Rules</h3>
    <ul className="list-disc pl-4">
      <li>No cheating or use of hacks.</li>
      <li>Be on time for matches.</li>
      <li>Respect all players and admins.</li>
      <li>Entry fees are non-refundable.</li>
      <li>Prizes distributed via UPI.</li>
    </ul>
  </aside>
);

export default SidebarRules;
