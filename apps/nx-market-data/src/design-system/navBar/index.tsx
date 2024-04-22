import { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import { useAppContext } from '../../app/AppContext';
import classNames from 'classnames';
import { MENU_DISPLAY_TYPE } from './types';
import { MENU_TYPE } from './types';
import { useI18NContext } from '../../i18n';

export function NavBar() {
  const { _ } = useI18NContext();

  const { selectedMenu, setSelectedMenu } = useAppContext();
  const location = useLocation();

  const MENU: MENU_TYPE = {
    MENU_TICKER: {
      menuId: 'MENU_TICKER',
      pathname: '/',
      menuName: _('Ticker'),
    },
    MENU_ABOUT: {
      menuId: 'MENU_ABOUT',
      pathname: '/about',
      menuName: _('About'),
    },
    MENU_CONTACT: {
      menuId: 'MENU_CONTACT',
      pathname: '/contact',
      menuName: _('Contact'),
    },
    MENU_SETTINGS: {
      menuId: 'MENU_SETTINGS',
      pathname: '/settings',
      menuName: _('Settings'),
    },
  };

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
      <span>{_('Market Data')}</span>
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
