import { BaseReducerState } from '../../typings';

export interface RestaurantItem {
  id: string;
  image: string;
  title: string;
  rating: number;
}

export interface RestaurantActive {
  id: string;
  image: string;
  title: string;
  rating: number;
  description: string;
  comments: Array<Comment>;
}

export interface Comment {
  id: string,
  rating: number;
  text: string;
  visitDate: string;
  uId: string;
}

export type RestaurantsState = BaseReducerState<RestaurantItem, RestaurantActive>;
