import { handleActions } from 'redux-actions';
import actions from './action';

const defaultState = {
  text: null,
}

export default handleActions({
  [actions.reset]: () => defaultState,
  [actions.setText]: (prevState, action) => {
    return {
      ...prevState,
      text: action.payload.text,
    };
  },
}, defaultState);
