import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute, LoginPage } from '../auth';
import { AdvertPage, AdvertsPage, NewAdvertPage } from '../adverts';
import NotFoundPage from './NotFoundPage';
import * as actions from '../../store/actions';
import { getLoggedUserId } from '../../store/selectors';


class App extends React.Component {
  state = {
    isLogged: this.props.isInitiallyLogged,
  };




  render() {
    //const { isLogged } = this.state;
    return (
        <Switch>
          <Route path="/" exact>
            <Redirect to="/adverts" />
          </Route>
          <Route path="/login" exact>
            {routerProps => (
              <LoginPage  {...routerProps} />
            )}
          </Route>
          <PrivateRoute path="/adverts" exact>
            <AdvertsPage />
          </PrivateRoute>
          <PrivateRoute path="/adverts/new" exact component={NewAdvertPage} />
          <PrivateRoute path="/adverts/:id" exact component={AdvertPage} />
          <Route path="/404" exact>
            {NotFoundPage}
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
    
    );
  }
}

App.propTypes = {
  isInitiallyLogged: T.bool,
};

// Redux connection
const mapStateToProps = state => {
  return {
    loggedUserId: getLoggedUserId(state),
  };
};

const mapDispatchToProps = {
  authLogin: actions.authLogin,
  authLogout: actions.authLogout,
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;


