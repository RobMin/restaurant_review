export interface BaseReducerState<Item, Active> {
  active: null | Active;
  list: null | Item[];
  byId: null | { [ id: string ]: Item };
  error: null | string;
  loading: boolean;
}
