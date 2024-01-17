import React from 'react';
import Guess from "../Guess/Guess";

export default function GuessContainer({ guesses, empty }) {
  return (
    <div>
      {guesses.map((guess) => <Guess key={guess.id} guess={guess.word} />)}
        {empty.map((num) => <Guess key={num} guess={""} />)}
    </div>
  );
}
