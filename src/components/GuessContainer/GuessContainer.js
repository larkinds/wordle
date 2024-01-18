import React from 'react';
import Guess from "../Guess/Guess";

export default function GuessContainer({ guesses, empty, answer, setGameStatus }) {
  return (
    <div>
      {guesses.map((guess) => <Guess key={guess.id} guess={guess.word} answer={answer} setGameStatus={setGameStatus} />)}
        {empty.map((num) => <Guess key={num} guess={""} answer={answer} />)}
    </div>
  );
}
