import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'js/rootReducer';
import rootSaga from 'js/rootSaga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

// redux-devtool-extensionの利用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();

const setStore = (initialState) => {
  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
      ),
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

export {
  setStore,
  history,
}