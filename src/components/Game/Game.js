import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({handleAddGuess}) {
  let [guess, setGuess] = useState("");
  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();
      handleAddGuess(guess)
      setGuess("");
    }}>
  <label html-for="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" pattern="\w{5,5}" required title="Word should be 5 letters long" value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())} />
</form>
  )
}

export default Game;
