import { DeviceEventEmitter } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import config from '../common/config';

import createSagaMiddleware from 'redux-saga';

/**
 *  blacklist config redux
 *  whitelist config redux persit
 * @type {{blacklist: string[], storage: WebStorage, whitelist: string[], key: string}}
 */

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
  blacklist: [],
};

const root = persistReducer(persistConfig, rootReducer);
export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  root,
  config.logEnabled
    ? applyMiddleware(sagaMiddleware, logger)
    : applyMiddleware(sagaMiddleware),
);
export const persistor = persistStore(store, {}, () =>
  DeviceEventEmitter.emit('PERSIST'),
);
