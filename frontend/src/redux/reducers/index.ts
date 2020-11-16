import { combineReducers } from "@reduxjs/toolkit";
import restaurants from './restaurants';
import user from './user';

const rootReducer = combineReducers({
  restaurants,
  user
});

export default rootReducer;
