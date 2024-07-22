import { useState } from 'react';

function Card({ pokemon, shuffleCards, setScore, setIsLoss }) {
  const [clicked, setClicked] = useState(false);

  return (
    <li>
      <button
        onClick={() => {
          if (clicked) {
            setIsLoss(true);
          } else {
            setClicked(true);
            setScore((prevScore) => prevScore + 1);
            shuffleCards();
          }
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
