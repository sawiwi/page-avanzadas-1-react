import React from 'react';
import MainNav from './MainNav';

const Header = () => {
  return (
    <header className="px-4 z-50 xl:px-32 border-b fixed top-0 left-0 right-0 bg-secondary xl:bg-primary 2xl:border-none shadow-md">
      <MainNav />
    </header>
  );
};

export default Header;
