import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';

interface ProtectedRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
  const { loggedInUser } = useAuth();
  return loggedInUser ? (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  ) : (
    <Redirect to="/login" />
  );
};
