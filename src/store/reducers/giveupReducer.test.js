import { actionTypes } from '../actions';
import giveUpReducer from './giveUpReducer';

test('should returns default initial state false when no action is passed', () => {
  const newState = giveUpReducer(undefined, {});
  expect(newState).toBe(false);
});

test('should returns true on action type GIVE_UP', () => {
  const newState = giveUpReducer(false, { type: actionTypes.GIVE_UP });
  expect(newState).toBe(true);
});
test('should returns true on action type RESET', () => {
  const newState = giveUpReducer(true, { type: actionTypes.RESET });
  expect(newState).toBe(false);
});
