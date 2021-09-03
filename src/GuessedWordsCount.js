import { Component } from 'react';
import { connect } from 'react-redux';

export class UnConnectedGuessedWordsCount extends Component {
  render() {
    return (
      <>
        {this.props.guessedWords && this.props.guessedWords.length > 0 && (
          <p data-test='total-guess'>
            Total Guesses: {this.props.guessedWords.length}
          </p>
        )}
      </>
    );
  }
}
const mapStateToProps = ({ guessedWords }) => ({ guessedWords });
export default connect(mapStateToProps)(UnConnectedGuessedWordsCount);
