import { shallow } from 'enzyme';
import Input from './Input';
import { findByTestAttr, storeFactory } from './test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {});

    test('renders input box', () => {});

    test('render submit button', () => {});
  });
  describe('word has been guessed', () => {
    test('renders component without error', () => {});

    test('does not renders input box', () => {});

    test('does not render submit button', () => {});
  });
});
describe('update state', () => {});
