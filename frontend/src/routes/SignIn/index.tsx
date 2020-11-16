import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Container,
  Paper,
  WithStyles,
  withStyles,
  Grid,
  Typography,
  Link
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import { HOME_PAGE, ROUTES } from '../../App';
import * as validators from '../../utils/validators';
import styles from './styles';

import { useSelector } from '../../redux/store';
import * as userReducers from '../../redux/reducers/user';

import InputWithValidation from '../../components/InputWithValidation';

const SignIn = ({ classes }: WithStyles) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userReducers.signIn({ email, password }));
  };

  if (user) {
    return <Redirect to={ HOME_PAGE } />;
  }

  const isFormInvalid = !!(validators.email(email) || validators.password(password));
  return (
    <Container maxWidth="xs" className={ classes.container }>
      <div className={ classes.title }>
        <Typography variant="h4">
          Sign in
        </Typography>
      </div>
      <Paper elevation={ 3 }>
        <div className={ classes.formWrapper }>
          <Grid
            container
            spacing={ 1 }
            justify="center"
            component="form"
            className={ classes.form }
            onSubmit={ signIn }
            noValidate
          >
            <Grid item xs={ 12 }>
              <InputWithValidation
                setValue={ setEmail }
                value={ email }
                validator="email"
                textFieldProps={ {
                  name: 'email',
                  type: 'email',
                  label: 'Email',
                  fullWidth: true
                } }
              />
            </Grid>
            <Grid item xs={ 12 }>
              <InputWithValidation
                setValue={ setPassword }
                value={ password }
                validator="password"
                textFieldProps={ {
                  name: 'password',
                  type: 'password',
                  label: 'Password',
                  fullWidth: true
                } }
              />
            </Grid>
            <Grid item xs={ 12 }>
              <Button type="submit" color="primary" variant="contained" disabled={ isFormInvalid } fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>
      <div className={ classes.bottomText }>
        <span>
          Don't have an account? <Link href={ ROUTES.signUp() }>Sign up</Link>
        </span>
      </div>
    </Container>
  );
}

export default withStyles(styles)(SignIn);
