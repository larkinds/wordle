import React, { useState } from 'react';
import GuessContainer from '../GuessContainer';
import { range, sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  let [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  let empty = range(0, 6 - guesses.length);

  function handleAddGuess(guess) {
    if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
      let newGuess = {
        word: guess,
        id: crypto.randomUUID(),
      };
      setGuesses([...guesses, newGuess]);
    } else {
      window.alert("You've used all of your guesses!");
    }
  }

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          handleAddGuess(guess);
          setGuess('');
        }}
      >
        <label html-for="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern="\w{5,5}"
          required
          title="Word should be 5 letters long"
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </form>
      <GuessContainer guesses={guesses} empty={empty} answer={answer} />
    </>
  );
}

export default Game;
