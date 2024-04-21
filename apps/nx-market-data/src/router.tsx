import { createBrowserRouter } from 'react-router-dom';
import App from './app/App';
import Ticker from './app/ticker/Ticker';
import Contact from './app/contact/Contact';
import About from './app/about/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Ticker />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
