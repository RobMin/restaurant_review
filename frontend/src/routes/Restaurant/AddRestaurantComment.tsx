import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  WithStyles,
  withStyles,
  Typography,
  Grid,
  createStyles,
  Theme,
  Paper,
  Box,
  Button
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import * as validators from '../../utils/validators';

import * as restaurantsReducers from '../../redux/reducers/restaurants';

import InputWithValidation from '../../components/InputWithValidation';

interface RestaurantCommentsProps extends WithStyles {
  uId: string;
}

const styles = (theme: Theme) => createStyles({
  commentWrapper: {
    margin: '40px 0 0 0',
    width: '100%'
  },
  visitDateWrapper: {

  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const AddRestaurantComment = ({ uId, classes }: RestaurantCommentsProps) => {
  const dispatch = useDispatch();

  const [ text, setText ] = useState('');
  const [ visitDate, setVisitDate ] = useState<Date>(new Date());
  const [ rating, setRating ] = useState<number | null>(null);
  const submitComment = () => {
    dispatch(restaurantsReducers.addComment({ text, visitDate: visitDate.toISOString(), rating, uId }));
  };

  const isCommentValid = !validators.comment(text) && rating !== null;
  return (
    <MuiPickersUtilsProvider utils={ DateFnsUtils }>
      <Paper elevation={ 3 }>
        <Grid container spacing={ 4 } className={ classes.commentWrapper } justify="center">
          <Grid item xs={ 12 }>
            <InputWithValidation
              setValue={ setText }
              value={ text }
              validator="comment"
              noHelperTextPlaceHolder
              textFieldProps={ {
                name: 'text',
                type: 'text',
                label: 'Left a comment',
                rows: 3,
                multiline: true,
                fullWidth: true
              } }
            />
          </Grid>
          <Grid item sm={ 9 } xs={ 12 } className={ classes.visitDateWrapper }>
            <KeyboardDatePicker
              allowKeyboardControl={ false }
              disableFuture
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="visit-date-picker"
              label="Choose the visit date"
              value={ visitDate }
              onChange={ (newVisitDate) => setVisitDate(newVisitDate as Date) }
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
          <Grid item sm={ 3 } xs={ 12 } className={ classes.flexCenter }>
            <Box pt={ 1 }>
              <Typography component="legend">Rate the restaurant</Typography>
              <Rating
                value={ rating }
                precision={ 0.5 }
                name="comment-restaurant-rating"
                onChange={ (e, newRating) => setRating(newRating || rating) }
              />
            </Box>
          </Grid>
          <Grid item md={ 3 } sm={ 4 } xs={ 12 }>
            <Button
              variant="contained"
              color="primary"
              onClick={ submitComment }
              fullWidth
              disabled={ !isCommentValid }
            >
              Post comment
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </MuiPickersUtilsProvider>
  );
};

export default withStyles(styles)(AddRestaurantComment);
