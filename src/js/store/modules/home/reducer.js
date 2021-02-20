import { handleActions } from 'redux-actions';
import { actionTypes } from './action';

const defaultState = {
  text: null,
}

export default handleActions({
  [actionTypes.RESET]: () => defaultState,
  [actionTypes.SET_TEXT]: (prevState, action) => {
    return {
      ...prevState,
      text: action.payload.text,
    };
  },
}, defaultState);