import { useState } from 'react';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function updateHighScore() {
    if (score > highScore) setHighScore(score);
  }

  return (
    <>
      <Header score={score} highScore={highScore} />
      <Main
        score={score}
        setScore={setScore}
        updateHighScore={updateHighScore}
      />
    </>
  );
}

export default App;
