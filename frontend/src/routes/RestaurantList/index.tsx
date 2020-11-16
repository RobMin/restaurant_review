import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { WithStyles, withStyles, Grid, Container } from '@material-ui/core';

import { useSelector } from '../../redux/store';
import * as restaurantsReducers from '../../redux/reducers/restaurants';

import styles from './styles';

import RestaurantCard from './RestaurantCard';

const RestaurantsList = ({ classes }: WithStyles) => {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.restaurants);

  useEffect(() => {
    dispatch(restaurantsReducers.fetch({}))
  }, [ dispatch ]);

  return (
    <Container maxWidth="lg" className={ classes.container }>
      <Grid container spacing={ 3 } justify="space-around">
        { list?.map?.((res, i) =>
          <Grid key={ i } item>
            <RestaurantCard restaurant={ res } />
          </Grid>
        ) }
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(RestaurantsList);
