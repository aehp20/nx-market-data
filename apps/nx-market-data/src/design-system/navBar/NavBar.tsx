import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../app/AppContext';
import {
  MENU_CONTACT,
  MENU_SETTINGS,
  MENU_TICKER,
  MENU_ABOUT,
} from '../../app/constants';
import classNames from 'classnames';

export default function NavBar() {
  const { selectedMenu, setSelectedMenu } = useAppContext();

  const menu = [
    {
      to: '/',
      menuId: MENU_TICKER,
      menuName: 'Ticker',
    },
    {
      to: '/settings',
      menuId: MENU_SETTINGS,
      menuName: 'Settings',
    },
    {
      to: '/contact',
      menuId: MENU_CONTACT,
      menuName: 'Contact',
    },
    {
      to: '/about',
      menuId: MENU_ABOUT,
      menuName: 'About',
    },
  ];

  return (
    <Nav>
      <span>Market Data</span>
      {menu.map((item) => (
        <Link
          onClick={() => setSelectedMenu(item.menuId)}
          to={item.to}
          className={classNames(selectedMenu === item.menuId && 'active')}
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
