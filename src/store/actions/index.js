export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

export const guessWord = () => (dispatch, getState) => {};

export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}
