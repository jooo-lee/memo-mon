import { useState } from 'react';

import Header from './components/Header';
import CardsContainer from './components/CardsContainer';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function updateHighScore() {
    if (score > highScore) setHighScore(score);
  }

  return (
    <>
      <Header score={score} highScore={highScore} />
      <CardsContainer setScore={setScore} updateHighScore={updateHighScore} />
    </>
  );
}

export default App;
