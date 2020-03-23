import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { initialState } from './rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const middleware = [thunk];

const persistConfig: PersistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default () => {
  let store = configureStore;
  let persistor = persistStore(store);
  return { store, persistor };
};
