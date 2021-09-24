import { createReducer, combineReducers } from '@reduxjs/toolkit';
import contactsAction from './contacts-actions';

const items = createReducer([], {
  [contactsAction.fetchContactSuccess]: (_, { payload }) =>
    payload.data.contacts,
  [contactsAction.addContactSuccess]: (state, { payload }) => [
    payload.data.contact,
    ...state,
  ],
  [contactsAction.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const loading = createReducer(false, {
  [contactsAction.fetchContactRequest]: () => true,
  [contactsAction.fetchContactSuccess]: () => false,
  [contactsAction.fetchContactError]: () => false,
  [contactsAction.addContactRequest]: () => true,
  [contactsAction.addContactSuccess]: () => false,
  [contactsAction.addContactError]: () => false,
  [contactsAction.deleteContactRequest]: () => true,
  [contactsAction.deleteContactSuccess]: () => false,
  [contactsAction.deleteContactError]: () => false,
});

const filter = createReducer('', {
  [contactsAction.filterChanged]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter, loading });
