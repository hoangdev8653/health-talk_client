import React from 'react';
import Logo from "./logoSection/Logo";
import Navigation from './navigation/Navigation';
import UserAction from './userAction/UserAction';

function Header() {
  return (
    <div className='flex justify-around items-center shadow-sm'>
      <Logo />
      <Navigation />
      <UserAction />
    </div>
  );
}

export default Header;