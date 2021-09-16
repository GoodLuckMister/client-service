import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;

const changeFilterItems = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter),
    );
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getItems,
  getFilter,
  getLoading,
  changeFilterItems,
};
