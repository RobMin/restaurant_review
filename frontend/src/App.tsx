import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { WithStyles, withStyles } from '@material-ui/core';

import styles from './AppStyles';

import * as userReducers from './redux/reducers/user';

import Header from './components/Header';
import RestaurantList from './routes/RestaurantList';
import Restaurant from './routes/Restaurant';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';


export const ROUTES = {
  restaurants: () => `/restaurants`,
  restaurant: (id?: string) => `/restaurants/${ id || ':id' }`,
  signIn: () => `/sign-in`,
  signUp: () => `/sign-up`,
};
export const HOME_PAGE = ROUTES.restaurants();

const App = ({ classes }: WithStyles) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userReducers.auth({}));
  }, [ dispatch ]);

  return (<>
    <Header/>
    <main className={ classes.main }>
      <Switch>
        <Route exact path={ ROUTES.restaurants() } component={ RestaurantList } />
        <Route exact path={ ROUTES.restaurant() } component={ Restaurant } />
        <Route exact path={ ROUTES.signIn() } component={ SignIn } />
        <Route exact path={ ROUTES.signUp() } component={ SignUp } />
        <Redirect to={ HOME_PAGE } />
      </Switch>
    </main>
  </>);
}

export default withStyles(styles)(App);
