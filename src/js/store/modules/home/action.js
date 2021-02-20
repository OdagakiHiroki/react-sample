export const actionTypes = {
  RESET: 'home/reset',
  SET_TEXT: 'home/set_text',
};

export const actions = {
  reset: () => ({
    type: actionTypes.RESET
  }),
  setText: (text) => ({
    type: actionTypes.SET_TEXT,
    payload: { text },
  }),
}