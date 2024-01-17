import React from 'react';
import { range } from '../../utils';

export default function Guess({ guess }) {
    let letters;
    if (guess.length > 0) {
        letters = guess.split("");
    } else {
        letters = new Array(5).fill("");
    }

    letters = letters.map((letter) => {
        let replacementLetter = {
            value: letter,
            id: Math.random()
        }
        return replacementLetter;
    })
    

  return (
    <p className="guess">
      {letters.map((letter) => (
        <span key={letter.id} className="cell">{letter.value}</span>
      ))}
    </p>
  );
}
