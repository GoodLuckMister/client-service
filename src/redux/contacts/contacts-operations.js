import axios from 'axios';
import contactsAction from './contacts-actions';

const addContact = text => async dispatch => {
  dispatch(contactsAction.addContactRequest());
  try {
    const { data } = await axios.post('/contacts', text);
    dispatch(contactsAction.addContactSuccess(data));
  } catch ({ message }) {
    dispatch(contactsAction.addContactError(message));
  }
};
const deleteContact = _id => async dispatch => {
  dispatch(contactsAction.deleteContactRequest());
  try {
    await axios.delete(`/contacts/${_id}`);
    dispatch(contactsAction.deleteContactSuccess(_id));
  } catch ({ message }) {
    dispatch(contactsAction.deleteContactError(message));
  }
};
const fetchContact = () => async dispatch => {
  dispatch(contactsAction.fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(contactsAction.fetchContactSuccess(data));
  } catch ({ message }) {
    dispatch(contactsAction.fetchContactError(message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContact,
  deleteContact,
  fetchContact,
};
