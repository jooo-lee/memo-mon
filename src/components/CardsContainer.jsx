import TCGdex from '@tcgdex/sdk';
import { useEffect, useState } from 'react';

// Instantiate the SDK
const tcgdex = new TCGdex('en');

function CardsContainer() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      const pokemonIds = [45, 50, 51, 52, 56, 59, 60, 64, 68];
      const response = await Promise.all(
        pokemonIds.map((id) => tcgdex.fetch('cards', `ex16-${id}`))
      );
      setCards(response);
    })();
  }, []);

  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: '200px 200px 200px',
        columnGap: '1.5rem',
        rowGap: '1rem',
      }}>
      {cards === null ? 'Fetching card data...' : ''}
      {cards.map((pokemon) => (
        <li key={pokemon.id}>
          <button>
            <img
              src={`${pokemon.image}/high.webp`}
              alt=""
              style={{ width: '200px' }}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CardsContainer;
