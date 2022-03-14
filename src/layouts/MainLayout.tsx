import Navigation from 'common/Navigation';
import React from 'react';
import styled from 'styled-components/macro';

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 56px;
  max-width: 1150px;
  margin: 0 auto;
  nav {
    max-width: 1150px;
  }
`;

const Container = styled.main`
  min-height: calc(100vh - 56px);
  background-color: #eff0f5; //TODO background color to global style
`;

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Container className="">{children}</Container>
    </>
  );
};

export default MainLayout;
