import React, {useState} from "react";
import Game from '../Game';
import GuessContainer from '../GuessContainer';
import Header from '../Header';
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function App() {
  const [guesses, setGuesses] = useState([]);
  let empty = range(0, 6 - guesses.length);

  function handleAddGuess(guess) {
    if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
      let newGuess = {
        word: guess,
        id: crypto.randomUUID()
      }
      setGuesses([...guesses, newGuess]);
    } else {
      window.alert("You've used all of your guesses!");
    }
    
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game handleAddGuess={handleAddGuess} />
        <GuessContainer guesses={guesses} empty={empty} />
      </div>
    </div>
  );
}

export default App;
