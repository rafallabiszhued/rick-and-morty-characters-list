import Navigation from 'common/Navigation';
import React from 'react';

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <header>
      <Navigation />
    </header>
  );
};

export default MainLayout;
