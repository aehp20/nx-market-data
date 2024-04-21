export type MENU_TYPE = {
  [key: string]: {
    menuId: string;
    pathname: string;
    menuName: string;
  };
};

export type MENU_DISPLAY_TYPE = {
  to: string;
  menuId: string;
  menuName: string;
};
