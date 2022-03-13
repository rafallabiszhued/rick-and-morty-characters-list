import LoadingIndicator from 'common/LoadingIndicator/LoadingIndicator';
import { queryClient } from 'config/services';
import { GlobalContextProvider } from 'contexts/GlobalContext';
import React, { lazy, Suspense } from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from 'routes';

const HomePage = lazy(() => import('components/Home'));
const NotFoundPage = lazy(() => import('components/NotFoundPage'));

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <Router>
          <Suspense fallback={<LoadingIndicator isLoading />}>
            <Routes>
              <Route path={routes.home} element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Router>
      </GlobalContextProvider>
    </QueryClientProvider>
  );
};

export default App;
