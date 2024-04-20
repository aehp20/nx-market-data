import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './app/app';
import { AppThemeProvider } from './theme';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
