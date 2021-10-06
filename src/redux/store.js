import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from './contacts/contacts-reducer';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactPersistConfig = {
  key: 'contacts',
    storage,
  blacklist: ['filter'],
}

const rootReducer = combineReducers({
   contacts: persistReducer(contactPersistConfig, contactsReducer),
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
})

const persistor = persistStore(store)

const contactsStore = { store, persistor };

export default contactsStore;

