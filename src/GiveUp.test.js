import GiveUp from './GiveUp';
import { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<GiveUp {...setupProps} />);
  return wrapper;
};

describe('render', () => {
  test('should render on success false', () => {
    const wrapper = setup();
    const btn = findByTestAttr(wrapper, 'giveup-btn');
    expect(btn.length).toBe(1);
  });
  // test('should call giveUp action when clicked', () => {
  //   const giveUpMock = jest.fn();
  //   const props = {
  //     giveUpAction: giveUpMock,
  //   };
  //   const wrapper = setup({ props });
  //   const btn = findByTestAttr(wrapper, 'giveup-btn');
  //   btn.simulate('click', { preventDefault: () => {} });
  //   expect(giveUpMock.mock.calls.length).toBe(1);
  // });
});
