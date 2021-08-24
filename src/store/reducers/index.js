import { combineReducers } from 'redux';
import success from './successReducers';

const reducer = combineReducers({
  success,
});

export default reducer;
