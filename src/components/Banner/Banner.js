import React from 'react';

export default function Banner({ gameStatus, numGuesses, answer }) {
  return (
    <>
      {gameStatus === 'won' ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {numGuesses} guesses</strong>.
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}
