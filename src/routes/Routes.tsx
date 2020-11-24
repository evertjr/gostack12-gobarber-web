/* eslint-disable react/prop-types */
import React from 'react';
import { RouteProps, Route as CustomRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface ReactRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<ReactRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <CustomRoute
      {...rest}
      render={() => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? '/' : '/dashboard'} />
        );
      }}
    />
  );
};

export default Route;
