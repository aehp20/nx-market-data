import { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import { useAppContext } from '../../app/AppContext';
import { MENU } from './constants';
import classNames from 'classnames';
import { MENU_DISPLAY_TYPE } from './types';

export function NavBar() {
  const { selectedMenu, setSelectedMenu } = useAppContext();
  const location = useLocation();

  const menu: MENU_DISPLAY_TYPE[] = [];
  Object.getOwnPropertyNames(MENU).forEach((key) => {
    menu.push({
      to: MENU[key].pathname,
      menuId: MENU[key].menuId,
      menuName: MENU[key].menuName,
    });
  });

  useEffect(() => {
    if (selectedMenu !== location.pathname) {
      setSelectedMenu(location.pathname);
    }
  }, [location.pathname, selectedMenu]);

  return (
    <Nav>
      <span>Market Data</span>
      {menu.map((item) => (
        <Link
          key={item.menuId}
          onClick={() => setSelectedMenu(item.to)}
          to={item.to}
          className={classNames(selectedMenu === item.to && 'active')}
        >
          {item.menuName}
        </Link>
      ))}
    </Nav>
  );
}

const Nav = styled.nav`
  overflow: hidden;
  background-color: #333;
  span {
    float: left;
    background-color: #155263;
    color: #ffffff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-weight: bold;
  }

  a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

    &:hover {
      background-color: #4e8396;
      color: black;
    }
    &.active {
      background-color: #69b26e;
      color: white;
    }
  }
`;
