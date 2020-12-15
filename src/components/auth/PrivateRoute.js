import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';

//import { useAuthContext } from '../../contexts/auth';
import { getLoggedUserId } from '../../store/selectors';

const PrivateRoute = ({isLogged,...props}) => {
 // const { isLogged } = useAuthContext();
  const location = useLocation();
  return isLogged ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: location } }} />
  );
};

export default connect(state => ({ isLogged: getLoggedUserId(state) }))(
  PrivateRoute
);
