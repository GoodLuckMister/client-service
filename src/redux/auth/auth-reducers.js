import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = { id: null, email: null, subscription: null };
const setUser = (_, { payload }) => payload.data;

const user = createReducer(initialUserState, {
  [authActions.loginSuccess]: setUser,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: setUser,
});
const register = createReducer(
  {},
  {
    [authActions.registerSuccess]: setUser,
  },
);
const isAuthenticated = createReducer(false, {
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
});

const setToken = (_, { payload }) => payload.data.token;

const token = createReducer(null, {
  [authActions.loginSuccess]: setToken,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

export default combineReducers({
  user,
  register,
  isAuthenticated,
  token,
  error,
});
