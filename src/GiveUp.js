import React from 'react';

const GiveUp = ({ success, giveUp, giveUpAction }) => {
  const handleClick = (e) => {
    e.preventDefault();
    giveUpAction();
    console.log(giveUpAction());
  };
  return (
    <>
      {!success && !giveUp && (
        <button
          onClick={handleClick}
          className='btn inline-block mx-3 mb-2 btn-danger'
          data-test='giveup-btn'>
          Give up
        </button>
      )}
    </>
  );
};

export default GiveUp;
