import { useState } from 'react';

function Card({ pokemon, shuffleCards, setShowLoss }) {
  const [clicked, setClicked] = useState(false);

  return (
    <li>
      <button
        onClick={() => {
          if (clicked) setShowLoss(true);
          shuffleCards();
          setClicked(true);
        }}>
        <img
          src={`${pokemon.image}/high.webp`}
          alt={`${pokemon.name}`}
          style={{ width: '200px' }}
        />
      </button>
    </li>
  );
}

export default Card;
