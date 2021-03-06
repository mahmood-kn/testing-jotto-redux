import { getLetterMatchCount } from '../../helpers';
import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  RESET: 'RESET',
  GIVE_UP: 'GIVE_UP',
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

export const getSecretWord = () => {
  return (dispatch) => {
    axios.get('http://localhost:3030').then((res) => {
      dispatch({ type: actionTypes.SET_SECRET_WORD, payload: res.data });
    });
  };
};

export const reset = () => {
  return (dispatch) => {
    axios.get('http://localhost:3030').then((res) => {
      dispatch({ type: actionTypes.RESET, payload: res.data });
    });
  };
};
export const giveUp = () => {
  return { type: actionTypes.GIVE_UP };
};
