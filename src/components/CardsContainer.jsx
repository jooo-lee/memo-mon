import TCGdex from '@tcgdex/sdk';
import { useEffect, useMemo, useState } from 'react';

import Card from './Card';

// Instantiate the SDK
const tcgdex = new TCGdex('en');

/* 
Fisher-Yates (aka Knuth) shuffle from:
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function CardsContainer({ setScore, setIsLoss }) {
  const [cards, setCards] = useState([]);

  const pokemonIds = useMemo(
    () => [44, 45, 48, 50, 51, 52, 53, 56, 59, 60, 64, 68],
    []
  );

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await Promise.all(
          pokemonIds.map((id) => tcgdex.fetch('cards', `ex16-${id}`))
        );
        shuffle(response);
        setCards(response);
      } catch (e) {
        console.error('Error fetching card data', e);
      }
    };

    fetchCards();
  }, [pokemonIds]);

  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
      {cards === null ? 'Fetching card data...' : ''}
      {cards.map((pokemon) => (
        <Card
          key={pokemon.id}
          pokemon={pokemon}
          shuffleCards={() => {
            const nextCards = [...cards];
            shuffle(nextCards);
            setCards(nextCards);
          }}
          setScore={setScore}
          setIsLoss={setIsLoss}
        />
      ))}
    </ul>
  );
}

export default CardsContainer;
