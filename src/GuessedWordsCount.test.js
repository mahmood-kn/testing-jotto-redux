import GuessedWordsCount, {
  UnConnectedGuessedWordsCount,
} from './GuessedWordsCount';
import { findByTestAttr, storeFactory } from './test/testUtils';
import { shallow } from 'enzyme';

describe('guessed count', () => {
  test('should not display if no word guessed', () => {
    const state = {};
    const store = storeFactory(state);
    const wrapper = shallow(<GuessedWordsCount store={store} />)
      .dive()
      .dive();
    const message = findByTestAttr(wrapper, 'total-guess');
    expect(message.length).toBe(0);
  });
  test('number of guesses', () => {
    const props = {
      guessedWords: [{ guessedWord: 'train', letterMatchCount: 2 }],
    };
    const wrapper = shallow(<UnConnectedGuessedWordsCount {...props} />);

    wrapper.setState(props);
    const Message = findByTestAttr(wrapper, 'total-guess');
    expect(Message.text()).toContain(wrapper.state('guessedWords').length);
  });
});
