import React from 'react';
import { useDispatch } from 'react-redux';
import {
  AppBar,
  Toolbar,
  withStyles,
  WithStyles,
  Theme,
  createStyles,
  Typography,
  Button
} from "@material-ui/core";

import { HOME_PAGE, ROUTES } from '../App';

import { useSelector } from '../redux/store';
import * as userReducers from '../redux/reducers/user';

import { LinkWrapper } from './LinkWrapper';

const styles = createStyles((theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    flexGrow: 1
  },
  titleWrapper: {
    flexGrow: 1
  },
  title: {
    display: 'inline-block'
  }
}) );

const Header = ({ classes }: WithStyles) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  const logOut = () => {
    dispatch(userReducers.signOut({}));
  };

  return (
    <AppBar position="fixed" className={ classes.appBar }>
      <Toolbar>
        <div className={ classes.titleWrapper }>
          <LinkWrapper href={ HOME_PAGE }>
            <Typography variant="h6" className={ classes.title }>
              MENU.am
            </Typography>
          </LinkWrapper>
        </div>
        { user
          ? <Button color="inherit" onClick={ logOut }>
              Sign out
            </Button>
          : <LinkWrapper href={ ROUTES.signIn() }>
              <Button color="inherit">
                Sign in
              </Button>
            </LinkWrapper>
        }
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
