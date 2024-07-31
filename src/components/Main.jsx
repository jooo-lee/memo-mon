import { useState, useEffect } from 'react';

import CardsContainer from './CardsContainer.jsx';
import LossDialog from './LossDialog.jsx';
import WinDialog from './WinDialog.jsx';
import LoadingDiv from './LoadingDiv.jsx';
import ErrorDiv from './ErrorDiv.jsx';
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

function Main({
  isLoss,
  handleLoss,
  isWin,
  incrementScore,
  handleRestartClick,
}) {
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

  function handleCardClick(prevClicked) {
    if (prevClicked) {
      handleLoss();
    } else {
      incrementScore(pokémonNames.length);
    }
  }

  let mainContent;
  if (isLoss) {
    mainContent = <LossDialog handleRestartClick={handleRestartClick} />;
  } else if (isWin) {
    mainContent = <WinDialog handleRestartClick={handleRestartClick} />;
  } else {
    mainContent = (
      <CardsContainer pokémons={pokémons} handleCardClick={handleCardClick} />
    );
  }

  return (
    <main>
      {showLoading ? <LoadingDiv /> : ''}
      {showError ? <ErrorDiv /> : mainContent}
    </main>
  );
}

export default Main;
