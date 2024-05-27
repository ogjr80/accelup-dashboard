import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <nav>
        <ul>
          <li><Link href="/">Overview</Link></li>
          <li><Link href="/startups">Startups</Link></li>
          <li><Link href="/applications">Applications</Link></li>
          <li><Link href="/progress-report">Progress Reports</Link></li>
          <li><Link href="/financial-tracking">Financial Tracking</Link></li>
          <li><Link href="/impact-metrics">Impact Metrics</Link></li>
          <li><Link href="/settings">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
