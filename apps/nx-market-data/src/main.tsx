import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';

import { AppThemeProvider } from './theme';
import { router } from './router';
import { I18NProvider } from './i18n';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18NProvider
        locale="en"
        urlApp="http://localhost:4200"
        folderPath="/translations/"
      >
        <AppThemeProvider>
          <RouterProvider router={router} />
        </AppThemeProvider>
      </I18NProvider>
    </QueryClientProvider>
  </StrictMode>
);
