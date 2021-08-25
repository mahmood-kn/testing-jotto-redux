import { getLetterMatchCount } from '../../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

export const guessWord = (guess) => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const guessedWord = {
    guessedWord: guess,
    letterMatchCount: getLetterMatchCount(guess, secretWord),
  };

  dispatch({ type: actionTypes.GUESS_WORD, payload: guessedWord });
  if (guess === secretWord) {
    dispatch(correctGuess());
  }
};

export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}
