import NewWord from './NewWord';
import { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';

const defaultProps = { success: true };
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<NewWord {...setupProps} />);
  return wrapper;
};

describe('NewWord', () => {
  test('render on success true', () => {
    const wrapper = setup();
    const newWordBtn = findByTestAttr(wrapper, 'new-word-btn');
    expect(newWordBtn.length).toBe(1);
  });
});
test('calls reset on button click', () => {
  const resetMock = jest.fn();
  const wrapper = setup({ reset: resetMock });
  const resetBtn = findByTestAttr(wrapper, 'new-word-btn');
  resetBtn.simulate('click');
  expect(resetMock.mock.calls.length).toBe(1);
});
