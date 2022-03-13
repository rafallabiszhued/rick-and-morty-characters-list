import InputSearch from 'common/Inputs/InputSearch';
import Hamburger from 'common/Navigation/Hamburger';
import useOnClickOutside from 'hooks/useOnClickOutside';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';
import styled from 'styled-components/macro';

type MenuProps = {
  isShow: boolean;
};
const Menu = styled.div<MenuProps>`
  display: ${({ isShow }) => (isShow ? `visible` : `none`)};
`;

const MenuList = styled.ul`
  max-width: 1150px;
  margin: 0 auto;
  padding: 0rem 2rem;
`;

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = (props) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const toggleShow = () => setShow((prev) => !prev);

  //close mobile menu if click outside nav
  useOnClickOutside(ref, () => toggleShow());

  return (
    <nav
      className="
    fixed
    w-full
    flex flex-wrap
    items-center
    justify-between
    py-4
    bg-white
    text-gray-500
    hover:text-gray-700
    focus:text-gray-700
    navbar navbar-expand-lg navbar-light
    "
      ref={ref}
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <Hamburger toggleShow={toggleShow} />
        <Menu className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent" isShow={show}>
          <MenuList className="navbar-nav flex flex-col pl-0 list-style-none mr-auto w-full justify-between items-center">
            <li className="nav-item px-2">
              <Link to={routes.home} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item px-2">
              <InputSearch />
            </li>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};

export default Navigation;
