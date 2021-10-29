import CircularProgress from '@material-ui/core/CircularProgress';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';

interface ProtectedRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
  const { loggedInUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedInUser && Object.keys(loggedInUser).length) {
          return <Component {...rest} {...props} loggedInUser={loggedInUser} />;
        } else if (loggedInUser === undefined) {
          return <CircularProgress />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
