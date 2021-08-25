import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk];

const createStoreWithMiddleWare = applyMiddleware(...middlewares);

const store = createStore(rootReducer, createStoreWithMiddleWare);

export default store;
