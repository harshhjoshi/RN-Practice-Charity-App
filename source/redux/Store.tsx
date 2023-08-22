import {configureStore,applyMiddleware,createStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import UserSlice from './Slice/UserSlice';
import {persistReducer,persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage : AsyncStorage ,
    whitelist: ['message'], 
  }

  const reducers = combineReducers({
    message:UserSlice,
  });

const persistedReducer = persistReducer(persistConfig, reducers)
const Store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware().concat(thunk),
});

const persistor = persistStore(Store);

export { Store, persistor };