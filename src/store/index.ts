import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {booksReducer, booksSlice} from './slice/resultBooksSearchSlice';
import {resultBooksSearchMiddleware} from './middleware/resultBooksSearchMiddleware';
import {authorMiddleware} from './middleware/authorMiddleware';
import {authorReducer, authorSlice} from './slice/authorSlice';
import {workMiddleware} from './middleware/workMiddleware';
import {workReducer, workSlice} from './slice/workSlice';
import {settingsReducer, settingsSlice} from './slice/settingsSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['settings', 'books'],
};

const rootReducer = combineReducers({
  [booksSlice.name]: booksReducer,
  [authorSlice.name]: authorReducer,
  [workSlice.name]: workReducer,
  [settingsSlice.name]: settingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(resultBooksSearchMiddleware, authorMiddleware, workMiddleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const store = setupStore();
export const persistor = persistStore(store);
