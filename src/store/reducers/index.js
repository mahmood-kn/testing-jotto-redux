import { combineReducers } from 'redux';
import success from './successReducers';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';

const reducer = combineReducers({
  success,
  guessedWords,
  secretWord,
});

export default reducer;
