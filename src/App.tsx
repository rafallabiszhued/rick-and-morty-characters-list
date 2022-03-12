import ErrorPage from 'components/ErrorPage';
import Home from 'components/Home';
import { queryClient } from 'config/services';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import routes from 'routes';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path={routes.home} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
