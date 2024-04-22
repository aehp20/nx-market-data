import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

type AppProviderProps = {
  children: ReactNode;
};

type AppContextProps = {
  selectedMenu: string;
  setSelectedMenu: (selectedMenu: string) => void;
};

export const AppContext = createContext({} as AppContextProps);

export function AppProvider(props: AppProviderProps) {
  const { children } = props;

  const [selectedMenu, setSelectedMenu] = useState('/contact');

  const value = useMemo(
    () => ({
      selectedMenu,
      setSelectedMenu,
    }),
    [selectedMenu, setSelectedMenu]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
