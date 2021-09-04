import { actionTypes } from '../actions';

const guessWordsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    case actionTypes.RESET:
      return [];
    default:
      return state;
  }
};
export default guessWordsReducer;
