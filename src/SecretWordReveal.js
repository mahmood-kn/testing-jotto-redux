import React from 'react';

const SecretWordReveal = ({ giveUp, secretWord }) => {
  return (
    <>
      {giveUp && (
        <div data-test='secret-reveal' className='alert alert-danger'>
          Better lock next Time. the secret word was "{secretWord}"
        </div>
      )}
    </>
  );
};

export default SecretWordReveal;
