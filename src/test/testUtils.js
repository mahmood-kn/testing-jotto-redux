import checkPropsTypes from 'check-prop-types';
import rootReducer from '../store/reducers';
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../store/configureStore';

export const storeFactory = (initialState) => {
  const createStoreWithMiddleWare = applyMiddleware(...middlewares);
  return createStore(rootReducer, initialState, createStoreWithMiddleWare);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, confirmingProps) => {
  const propError = checkPropsTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    confirmingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
