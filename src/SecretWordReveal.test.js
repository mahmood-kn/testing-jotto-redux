import SecretWordReveal from './SecretWordReveal';
import { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';

let secretWord = 'train';
const defaultProps = { giveUp: false, secretWord };
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<SecretWordReveal {...setupProps} />);
  return wrapper;
};

test('should render on gave up', () => {
  const wrapper = setup({ giveUp: true });
  const secretReveal = findByTestAttr(wrapper, 'secret-reveal');
  expect(secretReveal.text()).toContain(secretWord);
});
