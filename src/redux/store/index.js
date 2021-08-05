import * as storage from 'redux-storage';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import filter from 'redux-storage-decorator-filter';
import {composeWithDevTools} from 'remote-redux-devtools';
import {createStore, applyMiddleware} from 'redux';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

import sagas from '../sagas';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

export default function configureStore(reducers, onComplete) {
  const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_SUCCESS') {
      state = {};
    }
    return reducers(state, action);
  };

  const engine = filter(
    createEngine('AppTree'),
    ['whitelisted-key', ['userDetails', 'data']],
    [],
  );

  const storeMiddleware = storage.createMiddleware(engine);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    storage.reducer(rootReducer),
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, storeMiddleware, logger),
    ),
  );

  if (isDebuggingInChrome) {
    window.store = store;
  }

  const load = storage.createLoader(engine);
  load(store)
    .then(onComplete)
    .catch(ex =>
      console.log(ex, 'Failed to load previous state @ configureStore.js#44'),
    );

  sagaMiddleware.run(sagas);
  return store;
}
