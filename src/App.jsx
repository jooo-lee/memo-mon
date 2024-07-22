import { useState } from 'react';

import Header from './components/Header';
import CardsContainer from './components/CardsContainer';
import LossDialog from './components/LossDialog';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isLoss, setIsLoss] = useState(false);

  function updateHighScore() {
    if (score > highScore) setHighScore(score);
  }

  if (isLoss) {
    updateHighScore();
  }

  return (
    <>
      <Header score={score} highScore={highScore} />
      {isLoss ? (
        <LossDialog setScore={setScore} setIsLoss={setIsLoss} />
      ) : (
        <CardsContainer
          score={score}
          setScore={setScore}
          updateHighScore={updateHighScore}
          setIsLoss={setIsLoss}
        />
      )}
    </>
  );
}

export default App;
