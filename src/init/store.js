import { createStore, applyMiddleware, compose } from 'redux';

// Middlewares
import { middlewares } from './middleware';

import createRootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    createRootReducer(),
    composeEnhancers(applyMiddleware(...middlewares)),
);
