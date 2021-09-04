import { actionTypes } from '../actions';

const giveUpReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.GIVE_UP:
      return true;
    case actionTypes.RESET:
      return false;
    default:
      return state;
  }
};

export default giveUpReducer;
