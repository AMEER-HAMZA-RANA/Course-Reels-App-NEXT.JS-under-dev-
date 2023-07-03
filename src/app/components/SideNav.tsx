'use client'

import { usePathname } from 'next/navigation';
import React from 'react';
import NavSVG1 from './ui/svg/NavSVG1';
import NavSVG2 from './ui/svg/NavSVG2';
import NavSVG3 from './ui/svg/NavSVG3';
import NavSVG4 from './ui/svg/NavSVG4';
import NavItem from './NavItem';

const SideNav = () => {
  const pathname = usePathname();

  return (
    <section id="nav">
      <div className="container">
        <ul className="flex flex-col items-stretch justify-start absolute top-30 left-0 bg-slate-900 h-[100vh] w-[100px] z-0 text-white py-6 gap-y-">
          <NavItem href="/" isActive={pathname === '/'}>
            <NavSVG1/>
            Projects
          </NavItem>
          <NavItem href="/script" isActive={pathname === '/script'}>
          <NavSVG2/>
            Script
          </NavItem>
          <NavItem href="/editor" isActive={pathname === '/editor'}>
            <NavSVG3/>
            Editor
          </NavItem>
          <NavItem href="/render" isActive={pathname === '/render'}>
          <NavSVG4/>
            Render
          </NavItem>
        </ul>
      </div>
    </section>
  );
};

export default SideNav;
