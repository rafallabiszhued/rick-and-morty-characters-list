import LoadingIndicator from 'common/LoadingIndicator';
import { queryClient } from 'config/services';
import { GlobalContextProvider } from 'contexts/GlobalContext';
import React, { lazy, Suspense } from 'react';
import { QueryClientProvider } from 'react-query';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
              <Route path={routes.default} element={<Navigate to={routes.home} />} />
            </Routes>
          </Suspense>
        </Router>
      </GlobalContextProvider>
    </QueryClientProvider>
  );
};

export default App;
