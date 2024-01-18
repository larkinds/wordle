import React, { useState } from 'react';
import GuessContainer from '../GuessContainer';
import Banner from "../Banner";
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
  const [gameStatus, setGameStatus] = useState("");
  let empty = range(0, 6 - guesses.length);

  function handleAddGuess(guess) {
    if (guesses.length < NUM_OF_GUESSES_ALLOWED - 1) {
      let newGuess = {
        word: guess,
        id: crypto.randomUUID(),
      };
      setGuesses([...guesses, newGuess]);
    } else {
      let newGuess = {
        word: guess,
        id: crypto.randomUUID(),
      };
      setGuesses([...guesses, newGuess]);
      setGameStatus("lost");
      // window.alert("You've used all of your guesses!");
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
          disabled={gameStatus === "" ? false : true}
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </form>
      <GuessContainer guesses={guesses} empty={empty} answer={answer} setGameStatus={setGameStatus} />
      {gameStatus !== "" ?  <Banner gameStatus={gameStatus} numGuesses={guesses.length} answer={answer} /> : <></> }
    </>
  );
}

export default Game;
