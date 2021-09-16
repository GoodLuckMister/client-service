import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts';
import { authReducer } from './auth';
import { middleware } from './middleWare';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(contactsPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
