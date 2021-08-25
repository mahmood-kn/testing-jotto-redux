import { combineReducers } from 'redux';
import success from './successReducers';
import guessedWord from './guessedWordReducer';

const reducer = combineReducers({
  success,
  guessedWord,
});

export default reducer;
