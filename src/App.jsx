import TCGdex from '@tcgdex/sdk';
import { useState, useEffect } from 'react';

import Header from './components/Header.jsx';
import CardsContainer from './components/CardsContainer.jsx';
import LossDialog from './components/LossDialog.jsx';
import WinDialog from './components/WinDialog.jsx';

// Instantiate the SDK
const tcgdex = new TCGdex('en');

const pokemonIds = [44, 45, 48, 50, 51, 52, 53, 56, 59, 60, 64, 68];

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isLoss, setIsLoss] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await Promise.all(
          pokemonIds.map((id) => tcgdex.fetch('cards', `ex16-${id}`))
        );
        setCards(response);
      } catch (e) {
        console.error('Error fetching card data', e);
      }
    };

    fetchCards();
  }, []);

  function updateHighScore() {
    if (score > highScore) setHighScore(score);
  }

  if (isLoss) updateHighScore();

  let mainContent;
  if (isLoss) {
    mainContent = <LossDialog setScore={setScore} setIsLoss={setIsLoss} />;
  } else if (score >= pokemonIds.length) {
    // Player has won!
    updateHighScore();
    mainContent = <WinDialog setScore={setScore} />;
  } else {
    mainContent = (
      <CardsContainer
        cards={cards}
        setCards={setCards}
        setScore={setScore}
        setIsLoss={setIsLoss}
      />
    );
  }

  return (
    <>
      <Header score={score} highScore={highScore} />
      <main>
        {cards.length === 0 ? 'Loading...' : ''}
        {mainContent}
      </main>
    </>
  );
}

export default App;
