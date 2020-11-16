import { createSlice } from '@reduxjs/toolkit'
import { UserState } from './index.d';

export const initialState: UserState = {
  user: null,
  error: null,
  loading: false
};

const issuesDisplaySlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, action) {
      const { email } = action.payload;
      const loggedUser = { email, id: 'unique!' };

      localStorage.setItem('user', JSON.stringify(loggedUser));
      state.user = loggedUser;

      state.loading = false;
      state.error = null;
    },
    signUp(state, action) {
      const { email } = action.payload;
      const newUser = { email, id: 'stillUnique!' };

      localStorage.setItem('user', JSON.stringify(newUser));
      state.user = newUser;

      state.loading = false;
      state.error = null;
    },
    signOut(state, action) {
      localStorage.removeItem('user');
      state.user = null;

      state.loading = false;
      state.error = null;
    },
    auth(state, action) {
      const user = localStorage.getItem('user');
      if (user) {
        try {
          state.user = JSON.parse(user);
        } catch {
          state.user = null;
          localStorage.removeItem('user');
        }
      }

      state.loading = false;
      state.error = null;
    }
  }
})

export const { signIn, signUp, signOut, auth } = issuesDisplaySlice.actions;
export default issuesDisplaySlice.reducer;
