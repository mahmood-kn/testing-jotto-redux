import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './store/actions';

export class Input extends Component {
  render() {
    return (
      <div data-test='component-input'>
        {this.props.success ? null : (
          <form className='form-inline'>
            <input
              type='text'
              data-test='input-box'
              className='mb-2 mx-sm-3'
              placeholder='Enter guess'
            />
            <button
              data-test='submit-button'
              className='btn btn-primary mb-2'
              type='submit'>
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
  guessWord: dispatch(guessWord),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
