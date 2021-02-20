import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) => {
  const reducers = combineReducers({
    router: connectRouter(history),
  })
  return reducers;
}

export default rootReducer;