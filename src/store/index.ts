// import { createWrapper } from 'next-redux-wrapper';
// import { createStore } from 'redux';
// import reducer from 'reducers';

// const configureSotre = () => {
//     const store = createStore(reducer);
//     return store;
// };

// const wrapper = createWrapper(configureSotre, {
//     debug: process.env.NODE_ENV === 'development',
// });

// export default wrapper;

import { createStore, applyMiddleware, Middleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';
import rootReducer from 'reducers';
// import middleware from 'store/middleware';

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

export const makeStore = () => {
  const loggerMiddleware = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  // const middlewares = [middleware, sagaMiddleware, loggerMiddleware];
  const middlewares = [sagaMiddleware, loggerMiddleware];

  const store = createStore(rootReducer, bindMiddleware(middlewares));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV !== 'production' });
