import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';

const middleware = [
    logger
]

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);


const store = createStore(reducers, enhancer);

export default store;