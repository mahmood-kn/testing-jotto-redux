import React from 'react';

const NewWord = ({ success }) => {
  return (
    <>
      {success && (
        <button className='btn btn-primary' data-test='new-word-btn'>
          New Word
        </button>
      )}
    </>
  );
};

export default NewWord;
