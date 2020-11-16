import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const store = configureStore({
  reducer: rootReducer
});

export default store;