import { useState, useEffect } from 'react';

import CardsContainer from './CardsContainer.jsx';
import LossDialog from './LossDialog.jsx';
import WinDialog from './WinDialog.jsx';
import LoadingDiv from './LoadingDiv.jsx';
import '../styles/MainContent.css';

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

const errorDiv = (
  <div className="error">
    <p>Something seems to have gone wrong!</p>
  </div>
);

function MainContent({ score, setScore, highScore, setHighScore }) {
  const [isLoss, setIsLoss] = useState(false);
  const [pokémons, setPokémons] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('pokémons')) {
      setShowLoading(true);
      const fetchPokémon = async () => {
        try {
          const newPokémons = await Promise.all(
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
          localStorage.setItem('pokémons', JSON.stringify(newPokémons));
          setPokémons(newPokémons);
          setShowError(false);
          setShowLoading(false);
        } catch (e) {
          setShowLoading(false);
          setShowError(true);
          console.error('Error fetching card data', e);
        }
      };
      fetchPokémon();
    } else {
      setPokémons(JSON.parse(localStorage.getItem('pokémons')));
    }
  }, []);

  function updateHighScore() {
    if (score > highScore) setHighScore(score);
  }

  let mainContent;
  if (isLoss) {
    updateHighScore();
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

  return (
    <main>
      {showLoading ? <LoadingDiv /> : ''}
      {showError ? errorDiv : mainContent}
    </main>
  );
}

export default MainContent;
