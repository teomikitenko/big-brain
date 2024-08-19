import NavItem from './NavItem';
import { NavConstants } from '@/constants/constants';
import React from 'react';

const NavigationPanel = () => {
  return (
    <div className="sticky top-20 flex h-fit flex-col gap-6 pl-0 pr-6 pt-5 md:pr-14 ">
      {NavConstants.map((l) => (
        <NavItem key={l.title} item={l} />
      ))}
    </div>
  );
};

export default NavigationPanel;
