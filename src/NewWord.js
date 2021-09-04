import React from 'react';

const NewWord = ({ success, reset, giveUp }) => {
  return (
    <>
      {(success || giveUp) && (
        <button
          onClick={reset}
          className='btn btn-primary my-2'
          data-test='new-word-btn'>
          New Word
        </button>
      )}
    </>
  );
};

export default NewWord;
