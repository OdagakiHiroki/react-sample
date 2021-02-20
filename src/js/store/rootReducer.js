import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import home from 'js/store/modules/home/reducer';

const rootReducer = (history) => {
  const reducers = combineReducers({
    home,
    router: connectRouter(history),
  })
  return reducers;
}

export default rootReducer;