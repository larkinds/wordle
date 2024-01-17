import React from 'react';

export default function Guesses({ guesses }) {
  return (
    <div>
      {guesses.map((guess) => (
        <p key={guess.id}>{guess.word}</p>
      ))}
    </div>
  );
}
