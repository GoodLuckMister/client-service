import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/FetchContactRequest');
const fetchContactSuccess = createAction('contacts/FetchContactSuccess');
const fetchContactError = createAction('contacts/FetchContactError');

const addContactRequest = createAction('contacts/AddContactRequest');
const addContactSuccess = createAction('contacts/AddContactSuccess');
const addContactError = createAction('contacts/AddContactError');

const deleteContactRequest = createAction('contacts/DeleteContactRequest');
const deleteContactSuccess = createAction('contacts/DeleteContactSuccess');
const deleteContactError = createAction('contacts/DeleteContactError');

const filterChanged = createAction('contacts/Filter/Changed');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterChanged,
};
