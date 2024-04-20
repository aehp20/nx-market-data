import { Outlet } from 'react-router-dom';
import NavBar from '../design-system/navBar/NavBar';
import { AppProvider } from './AppContext';

export default function App() {
  return (
    <AppProvider>
      <NavBar />
      <Outlet />
    </AppProvider>
  );
}
