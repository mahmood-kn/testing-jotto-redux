import React, { Component } from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';
import { connect } from 'react-redux';
import { getSecretWord } from './store/actions';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  success: state.success,
  guessedWords: state.guessedWords,
  secretWord: state.secretWord,
});
const mapDispatchToProps = (dispatch) => ({
  getSecretWord: dispatch(getSecretWord),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
