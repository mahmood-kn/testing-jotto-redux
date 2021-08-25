import checkPropsTypes from 'check-prop-types';
import rootReducer from '../store/reducers';
import { createStore } from 'redux';

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
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
