import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './store/actions';

export class UnConnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: '',
    };
    this.submitGuessWord = this.submitGuessWord.bind(this);
  }
  submitGuessWord(e) {
    e.preventDefault();
    const guessWord = this.state.currentGuess;
    if (guessWord && guessWord.length > 0) {
      this.props.guessWord(guessWord);
      this.setState({ currentGuess: '' });
    }
  }
  render() {
    return (
      <div data-test='component-input'>
        {this.props.success ? null : (
          <form className='form-inline'>
            <input
              value={this.state.currentGuess}
              type='text'
              data-test='input-box'
              className='mb-2 mx-sm-3'
              placeholder='Enter guess'
              onChange={(e) => this.setState({ currentGuess: e.target.value })}
            />
            <button
              data-test='submit-button'
              className='btn btn-primary mb-2'
              type='submit'
              onClick={(e) => this.submitGuessWord(e)}>
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => ({ success });

const mapDispatchToProps = (dispatch) => ({
  guessWord: (word) => dispatch(guessWord(word)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnConnectedInput);
