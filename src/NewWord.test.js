import NewWord from './NewWord';
import { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';

const setup = (props = {}) => {
  const wrapper = shallow(<NewWord {...props} />);
  return wrapper;
};

describe('NewWord', () => {
  test('render on success true', () => {
    const success = true;
    const wrapper = setup({ success });
    const newWordBtn = findByTestAttr(wrapper, 'new-word-btn');
    expect(newWordBtn.length).toBe(1);
  });
});
