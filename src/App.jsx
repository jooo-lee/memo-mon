import { useState } from 'react';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isLoss, setIsLoss] = useState(false);
  const [isWin, setIsWin] = useState(false);

  function handleLoss() {
    setIsLoss(true);
    if (score > highScore) setHighScore(score);
  }

  function handleWin(maxScore) {
    setIsWin(true);
    setHighScore(maxScore);
  }

  function incrementScore(maxScore) {
    // Check if max score will be reached with this increment
    if (score + 1 === maxScore) {
      handleWin(maxScore);
    }

    setScore((prevScore) => prevScore + 1);
  }

  function handleRestartClick() {
    setScore(0);
    setIsLoss(false);
    setIsWin(false);
  }

  return (
    <>
      <Header score={score} highScore={highScore} />
      <Main
        isLoss={isLoss}
        handleLoss={handleLoss}
        isWin={isWin}
        incrementScore={incrementScore}
        handleRestartClick={handleRestartClick}
      />
    </>
  );
}

export default App;
