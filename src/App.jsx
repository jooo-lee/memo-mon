import { useState } from 'react';

import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Header score={score} highScore={highScore} />
      <MainContent
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </>
  );
}

export default App;
