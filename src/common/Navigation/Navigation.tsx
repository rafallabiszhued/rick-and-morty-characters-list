import InputSearch from 'common/Inputs/InputSearch';
import Hamburger from 'common/Navigation/Hamburger';
import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <nav
      className="
    relative
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
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <Hamburger />
        <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto w-full justify-between items-center">
            <li className="nav-item px-2">
              <Link to={routes.home} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item px-2">
              <InputSearch />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
