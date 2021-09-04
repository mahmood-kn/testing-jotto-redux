import { combineReducers } from 'redux';
import success from './successReducers';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import giveUp from './giveUpReducer';

const reducer = combineReducers({
  success,
  guessedWords,
  secretWord,
  giveUp,
});

export default reducer;
