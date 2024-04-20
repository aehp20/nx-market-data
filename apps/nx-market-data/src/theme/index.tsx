import {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  createContext,
} from 'react';

export const AppThemeContext = createContext({});

type AppThemeProviderProps = {
  children: ReactNode;
};

export function AppThemeProvider(props: AppThemeProviderProps) {
  const { children } = props;

  const value = useMemo(() => {
    return {};
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = '#ff6f3c';
  }, []);

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  );
}

export function useAppThemeContext() {
  return useContext(AppThemeContext);
}
