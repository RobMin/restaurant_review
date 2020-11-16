import { getById } from '../helpers';
import { createSlice } from '@reduxjs/toolkit'
import { RestaurantsState, RestaurantItem, RestaurantActive, Comment } from './index.d';

const restaurantItemPlaceHolder = [
  {
    id: 'asd1',
    image: 'https://www.tasteofbeirut.com/wp-content/uploads/2015/11/shaw-sandwich.jpeg',
    title: 'Lebanon Shawarma',
    rating: 4.5
  },
  {
    id: 'asd2',
    image: 'https://www.tasteofbeirut.com/wp-content/uploads/2015/11/shaw-sandwich.jpeg',
    title: 'Lebanon Shawarma',
    rating: 4
  },
  {
    id: 'asd3',
    image: 'https://www.tasteofbeirut.com/wp-content/uploads/2015/11/shaw-sandwich.jpeg',
    title: 'Lebanon Shawarma',
    rating: 4.7
  },
  {
    id: 'asd4',
    image: 'https://www.tasteofbeirut.com/wp-content/uploads/2015/11/shaw-sandwich.jpeg',
    title: 'Lebanon Shawarma',
    rating: 3
  }
] as Array<RestaurantItem>;

const comments = [
  {
    id: 'badik1',
    rating: 4,
    text: 'vatiky chi',
    visitDate: new Date(Date.now() - 200000).toISOString(),
    uId: '123'
  },
  {
    id: 'badik2',
    rating: 5,
    text: 'sadasd3',
    visitDate: new Date(Date.now() - 200000).toISOString(),
    uId: '126'
  },
  {
    id: 'badik3',
    rating: 2,
    text: '55555555555555555555',
    visitDate: new Date(Date.now() - 200000).toISOString(),
    uId: '127'
  },
  {
    id: 'badik4',
    rating: 1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis semper consequat. Aenean purus nisl, vulputate eu bibendum nec, tincidunt quis tellus. In vestibulum nec risus at blandit. In fermentum quam eros, sit amet molestie elit venenatis vestibulum. Aenean suscipit semper `,
    visitDate: new Date(Date.now() - 200000).toISOString(),
    uId: '128'
  },
  {
    id: 'badik5',
    rating: 3,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis semper consequat. Aenean purus nisl, vulputate eu`,
    visitDate: new Date(Date.now() - 200000).toISOString(),
    uId: '129'
  }
] as Array<Comment>;

const restaurantActivePlaceHolder = [
  {
    id: 'asd1',
    image: 'https://www.tasteofbeirut.com/wp-content/uploads/2015/11/shaw-sandwich.jpeg',
    title: 'Lebanon Shawarma',
    rating: 4.5,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis semper consequat. Aenean purus nisl, vulputate eu bibendum nec, tincidunt quis tellus. In vestibulum nec risus at blandit. In fermentum quam eros, sit amet molestie elit venenatis vestibulum. Aenean suscipit semper tristique. Proin egestas est et quam rutrum, sit amet consequat magna luctus. Proin sed ligula sem. Cras at mattis magna, non vestibulum mi. Suspendisse potenti.\n\nSed commodo cursus accumsan. Suspendisse vestibulum ornare nibh, et porta metus tempor in. Nullam tempor mi vel posuere pellentesque. Phasellus fermentum neque sed nisl varius, id sagittis lectus malesuada. Sed pellentesque arcu eget arcu sagittis dignissim. Nam sed laoreet diam, quis ullamcorper libero. Maecenas sed est turpis. Praesent feugiat, urna a eleifend vulputate, orci lacus dictum sem, eget pharetra elit quam vel purus. Nam vestibulum condimentum velit non tempus. Ut feugiat justo non dui ornare, at pharetra nunc cursus. Maecenas tortor mi, porta eget iaculis nec, venenatis nec justo.`,
    comments: comments.filter(() => Math.random() < 0.5)
  },
  {
    id: 'asd2',
    image: 'https://www.tasteofbeirut.com/wp-content/uploads/2015/11/shaw-sandwich.jpeg',
    title: 'Lebanon Shawarma',
    rating: 4,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis semper consequat. Aenean purus nisl, vulputate eu bibendum nec, tincidunt quis tellus. In vestibulum nec risus at blandit. In fermentum quam eros, sit amet molestie elit venenatis vestibulum. Aenean suscipit semper tristique. Proin egestas est et quam rutrum, sit amet consequat magna luctus. Proin sed ligula sem. Cras at mattis magna, non vestibulum mi. Suspendisse potenti.\n\nSed commodo cursus accumsan. Suspendisse vestibulum ornare nibh, et porta metus tempor in. Nullam tempor mi vel posuere pellentesque. Phasellus fermentum neque sed nisl varius, id sagittis lectus malesuada. Sed pellentesque arcu eget arcu sagittis dignissim. Nam sed laoreet diam, quis ullamcorper libero. Maecenas sed est turpis. Praesent feugiat, urna a eleifend vulputate, orci lacus dictum sem, eget pharetra elit quam vel purus. Nam vestibulum condimentum velit non tempus. Ut feugiat justo non dui ornare, at pharetra nunc cursus. Maecenas tortor mi, porta eget iaculis nec, venenatis nec justo.`,
    comments: comments.filter(() => Math.random() < 0.5)
  },
  {
    id: 'asd3',
    image: 'https://www.tasteofbeirut.com/wp-content/uploads/2015/11/shaw-sandwich.jpeg',
    title: 'Lebanon Shawarma',
    rating: 4.7,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis semper consequat. Aenean purus nisl, vulputate eu bibendum nec, tincidunt quis tellus. In vestibulum nec risus at blandit. In fermentum quam eros, sit amet molestie elit venenatis vestibulum. Aenean suscipit semper tristique. Proin egestas est et quam rutrum, sit amet consequat magna luctus. Proin sed ligula sem. Cras at mattis magna, non vestibulum mi. Suspendisse potenti.\n\nSed commodo cursus accumsan. Suspendisse vestibulum ornare nibh, et porta metus tempor in. Nullam tempor mi vel posuere pellentesque. Phasellus fermentum neque sed nisl varius, id sagittis lectus malesuada. Sed pellentesque arcu eget arcu sagittis dignissim. Nam sed laoreet diam, quis ullamcorper libero. Maecenas sed est turpis. Praesent feugiat, urna a eleifend vulputate, orci lacus dictum sem, eget pharetra elit quam vel purus. Nam vestibulum condimentum velit non tempus. Ut feugiat justo non dui ornare, at pharetra nunc cursus. Maecenas tortor mi, porta eget iaculis nec, venenatis nec justo.`,
    comments: comments.filter(() => Math.random() < 0.5)
  },
  {
    id: 'asd4',
    image: 'https://www.tasteofbeirut.com/wp-content/uploads/2015/11/shaw-sandwich.jpeg',
    title: 'Lebanon Shawarma',
    rating: 3,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis semper consequat. Aenean purus nisl, vulputate eu bibendum nec, tincidunt quis tellus. In vestibulum nec risus at blandit. In fermentum quam eros, sit amet molestie elit venenatis vestibulum. Aenean suscipit semper tristique. Proin egestas est et quam rutrum, sit amet consequat magna luctus. Proin sed ligula sem. Cras at mattis magna, non vestibulum mi. Suspendisse potenti.\n\nSed commodo cursus accumsan. Suspendisse vestibulum ornare nibh, et porta metus tempor in. Nullam tempor mi vel posuere pellentesque. Phasellus fermentum neque sed nisl varius, id sagittis lectus malesuada. Sed pellentesque arcu eget arcu sagittis dignissim. Nam sed laoreet diam, quis ullamcorper libero. Maecenas sed est turpis. Praesent feugiat, urna a eleifend vulputate, orci lacus dictum sem, eget pharetra elit quam vel purus. Nam vestibulum condimentum velit non tempus. Ut feugiat justo non dui ornare, at pharetra nunc cursus. Maecenas tortor mi, porta eget iaculis nec, venenatis nec justo.`,
    comments: comments.filter(() => Math.random() < 0.5)
  }
] as Array<RestaurantActive>;

export const initialState: RestaurantsState = {
  active: null,
  list: null,
  byId: null,
  error: null,
  loading: true
};

const issuesDisplaySlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    fetch(state, action) {
      state.list = restaurantItemPlaceHolder;
      state.byId = getById(restaurantItemPlaceHolder);
      state.loading = false;
      state.error = null;
    },
    fetchActive(state, action) {
      const { id } = action.payload;
      state.active = restaurantActivePlaceHolder.find((rest) => rest.id === id) as RestaurantActive;
      state.loading = false;
      state.error = null;
    },
    addComment(state, action) {
      const comment = { id: `${ Math.random() * 5 * Math.random() }`, ...action.payload };

      if (!state.active) { return; }
      state.active.comments = [ comment, ...state.active.comments ];
    }
  }
})

export const { fetch, fetchActive, addComment } = issuesDisplaySlice.actions;
export default issuesDisplaySlice.reducer;
