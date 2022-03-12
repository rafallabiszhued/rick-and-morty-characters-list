import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to={routes.home}>Go to the home page</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
