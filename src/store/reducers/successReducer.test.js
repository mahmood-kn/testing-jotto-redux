import successReducers from './successReducers';
import { actionTypes } from '../actions';

test('should returns default initial state of false when no action dispatched', () => {
  const newState = successReducers(undefined, {});
  expect(newState).toBe(false);
});

test('should return state true for action type `CORRECT_GUESS`', () => {
  const newState = successReducers(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
