import React from 'react';
import { checkGuess } from '../../game-helpers';

export default function Guess({ guess, answer , setGameStatus}) {
    let letters;
    if (guess.length > 0) {
        letters = checkGuess(guess, answer);
        let winningGuess = letters.every((letter) => letter.status === 'correct');
        if (winningGuess) {
          setGameStatus("won")
        }
    } else {
        letters = new Array(5).fill("");
    }

    letters = letters.map((letter) => {
      let id = crypto.randomUUID();
      if (Array.isArray(letter)) {
        return [...letter, id]
      }

      let replacementLetter = {
          value: letter,
          id: id
      }
      return replacementLetter;
  })


  return (
    <p className="guess">
      {letters.map((letter) => (
        <span key={letter.id} className={`cell ${letter.value.status ? letter.value.status : ""}`}>{letter.value.letter}</span>
      ))}
    </p>
  );
}
