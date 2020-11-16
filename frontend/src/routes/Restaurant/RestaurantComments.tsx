import React from 'react';
import {
  WithStyles,
  withStyles,
  Typography,
  Grid,
  createStyles,
  Theme,
  Paper
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import { Comment } from '../../redux/reducers/restaurants/index.d';

interface RestaurantCommentsProps extends WithStyles {
  comments: Array<Comment>;
}

const styles = (theme: Theme) => createStyles({
  commentsWrapper: {
    marginBottom: 100,
    marginTop: 30
  }
});

const RestaurantComments = ({ comments, classes }: RestaurantCommentsProps) => {
  return (
    <Grid container spacing={ 4 } justify="center" className={ classes.commentsWrapper }>
      { comments.map(comment =>
        <Grid item xs={ 12 } key={ comment.id }>
          <Paper elevation={ 3 }>
            <RestaurantComment comment={ comment }/>
          </Paper>
        </Grid>
      ) }
    </Grid>
  );
};



interface RestaurantCommentProps extends WithStyles {
  comment: Comment;
}

const restaurantCommentStyles = (theme: Theme) => createStyles({
  visitDateWrapper: {
    flexGrow: 1
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  commentWrapper: {
    margin: 0,
    width: '100%'
  }
});

const parseVisitDate = (_date: string) => {
  const date = new Date(_date);
  return `${ date.getDay() }/${ date.getMonth() }/${ date.getFullYear() }`;
};

const RestaurantComment = withStyles(restaurantCommentStyles)(({ comment, classes }: RestaurantCommentProps) => {
  return (
    <Grid container spacing={ 4 } className={ classes.commentWrapper }>
      <Grid item xs={ 12 }>{ comment.text }</Grid>
      <Grid item sm={ 9 } xs={ 12 } className={ classes.visitDateWrapper }>
        <Typography variant="body2">
          Visit date:{' '}{' '}{ parseVisitDate(comment.visitDate) }
        </Typography>
      </Grid>
      <Grid item sm={ 3 } xs={ 12 } className={ classes.flexCenter }>
        <Rating value={ comment.rating } precision={ 0.5 } readOnly />
      </Grid>
    </Grid>
  );
});



export default withStyles(styles)(RestaurantComments);
