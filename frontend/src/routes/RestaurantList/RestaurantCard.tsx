import React from 'react';
import {
  withStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  createStyles,
  WithStyles,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import { RestaurantItem } from '../../redux/reducers/restaurants/index.d';

import { LinkWrapper } from '../../components/LinkWrapper';
import { ROUTES } from '../../App';

interface RestaurantsCardProps extends WithStyles {
  restaurant: RestaurantItem
}

const styles = createStyles({
  root: {
    width: 280
  },
  media: {
    height: 210
  }
});

const RestaurantCard = ({ classes, restaurant }: RestaurantsCardProps) => {
  return (
    <LinkWrapper href={ ROUTES.restaurant(restaurant.id) }>
      <Card className={ classes.root }>
        <CardActionArea>
          <CardMedia
            className={ classes.media }
            image={ restaurant.image }
            title={ restaurant.title }
          />
          <CardContent>
            <Typography variant="body1">
              { restaurant.title }
            </Typography>
            <Rating value={ restaurant.rating } precision={ 0.5 } readOnly />
          </CardContent>
        </CardActionArea>
      </Card>
    </LinkWrapper>
  );
}

export default withStyles(styles)(RestaurantCard);
