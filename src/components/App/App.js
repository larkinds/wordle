import React, {useState} from "react";
import Game from '../Game';
import Guesses from '../Guesses';
import Header from '../Header';

function App() {
  const [guesses, setGuesses] = useState([]);

  function handleAddGuess(guess) {
    let newGuess = {
      word: guess,
      id: crypto.randomUUID()
    }
    setGuesses([...guesses, newGuess]);
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game handleAddGuess={handleAddGuess} />
        <Guesses guesses={guesses} />
      </div>
    </div>
  );
}

export default App;
