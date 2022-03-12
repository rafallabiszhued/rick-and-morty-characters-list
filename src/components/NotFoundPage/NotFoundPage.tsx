import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <MainLayout>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to={routes.home}>Go to the home page</Link>
      </p>
    </MainLayout>
  );
};

export default NotFoundPage;
