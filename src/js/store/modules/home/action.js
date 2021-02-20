import { createActions } from 'redux-actions';

const actions = createActions(
  {
    SET_TEXT: (text) => ({ text })
  },
  'RESET',
)

export default actions;