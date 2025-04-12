'use client';

import dynamic from 'next/dynamic';

const NavigationMenu = dynamic(() => import('@components/NavigationMenu'));

const InlineMenu = () => (
  <div className="hidden md:flex justify-center lg:hidden w-full">
    <NavigationMenu inline />
  </div>
);

export default InlineMenu;
