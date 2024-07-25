import { useState, useEffect } from 'react';

import Header from './components/Header.jsx';
import CardsContainer from './components/CardsContainer.jsx';
import LossDialog from './components/LossDialog.jsx';
import WinDialog from './components/WinDialog.jsx';
import './styles/App.css';

const pokémonNames = [
  'exeggcute',
  'koffing',
  'tangela',
  'gastly',
  'shellder',
  'magnemite',
  'poliwag',
  'oddish',
  'kabuto',
  'omanyte',
  'voltorb',
  'ditto',
];

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isLoss, setIsLoss] = useState(false);
  const [pokémons, setPokémons] = useState([]);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const fetchPokémon = async () => {
      try {
        const newPokémon = await Promise.all(
          pokémonNames.map((name) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
              .then((response) => response.json())
              .then((data) => {
                return {
                  name: name,
                  imgUrl: data.sprites['front_default'],
                };
              })
          )
        );
        setPokémons(newPokémon);
        setShowError(false);
      } catch (e) {
        setShowError(true);
        console.error('Error fetching card data', e);
      }
    };
    fetchPokémon();
  }, []);

  function updateHighScore() {
    if (score > highScore) setHighScore(score);
  }

  if (isLoss) updateHighScore();

  let mainContent;
  if (isLoss) {
    mainContent = <LossDialog setScore={setScore} setIsLoss={setIsLoss} />;
  } else if (score >= pokémonNames.length) {
    // Player has won!
    updateHighScore();
    mainContent = <WinDialog setScore={setScore} />;
  } else {
    mainContent = (
      <CardsContainer
        pokémons={pokémons}
        setScore={setScore}
        setIsLoss={setIsLoss}
      />
    );
  }

  const errorDiv = (
    <div className="error">
      <p>Something seems to have gone wrong!</p>
    </div>
  );

  return (
    <>
      <Header score={score} highScore={highScore} />
      <main>
        {pokémons.length === 0 && !showError ? 'Loading...' : ''}
        {showError ? errorDiv : mainContent}
      </main>
    </>
  );
}

export default App;
