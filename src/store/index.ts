import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from 'store/reducers/rootReducer';
import { ENV } from 'config';

const persistConfigs = {
    key: 'reducer',
    storage: storage,
};

const persistedReducer = persistReducer(persistConfigs, rootReducer);

interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: any;
}
declare let window: Window;

let enhancers = [ applyMiddleware() ]

if (ENV === 'dev') {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export const store = createStore( persistedReducer, compose(...enhancers));
export const persistedStore = persistStore(store);