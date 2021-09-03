import React, { Component } from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';
import { connect } from 'react-redux';
import { getSecretWord } from './store/actions';
import Input from './Input';

export class UnConnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
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
  getSecretWord: () => dispatch(getSecretWord()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UnConnectedApp);
