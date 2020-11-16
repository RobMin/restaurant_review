import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { WithStyles, withStyles, Container, CircularProgress, Typography, Grid } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import { useSelector } from '../../redux/store';
import * as restaurantsReducers from '../../redux/reducers/restaurants';

import styles from './styles';

import RestaurantComments from './RestaurantComments';
import AddRestaurantComment from './AddRestaurantComment';

const Restaurant = ({ classes }: WithStyles) => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { active: restaurant } = useSelector((state) => state.restaurants);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(restaurantsReducers.fetchActive({ id }))
  }, [ dispatch, id ]);

  if (!restaurant) {
    return (
      <div className={ classes.loadingContainer }>
        <CircularProgress />
      </div>
    );
  }

  return (<>
    <div className={ classes.topImage } style={{ backgroundImage: `url('${ restaurant.image }')` }} />
    <Container maxWidth="md" className={ classes.container }>
      <Grid container spacing={ 4 } justify="center" className={ classes.noTopMargin }>
        <Grid item md={ 9 } sm={ 12 }>
          <Typography variant="h4" className={ classes.title }>
            { restaurant.title }
          </Typography>
        </Grid>
        <Grid item md={ 3 } sm={ 12 } className={ classes.flexCenter }>
          <Rating value={ restaurant.rating } precision={ 0.5 } readOnly size="large" />
        </Grid>
        <Grid item xs={ 12 }>
          <Typography variant="body1">
            { restaurant.description }
          </Typography>
        </Grid>
      </Grid>
      { user && <AddRestaurantComment uId={ user.id } /> }
      <RestaurantComments comments={ restaurant.comments } />
    </Container>
  </>);
}

export default withStyles(styles)(Restaurant);
