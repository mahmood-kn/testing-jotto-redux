import checkPropsTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, confirmingProps) => {
  const propError = checkPropsTypes(
    component.propTypes,
    confirmingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
