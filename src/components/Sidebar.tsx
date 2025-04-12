'use client';

import dynamic from 'next/dynamic';

const NavigationMenu = dynamic(() => import('@components/NavigationMenu'));

const Sidebar = () => (
  <div className="hidden w-[180px] min-h-[calc(100vh-144px)] bg-white rounded-lg p-6 lg:block">
    <NavigationMenu />
  </div>
);

export default Sidebar;
