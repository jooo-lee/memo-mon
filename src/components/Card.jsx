import { useState } from 'react';

import '../styles/Card.css';

function Card({ pokémon, setScore, setIsLoss }) {
  const [clicked, setClicked] = useState(false);

  return (
    <li className="card">
      <button
        onClick={() => {
          if (clicked) {
            setIsLoss(true);
          } else {
            setClicked(true);
            setScore((prevScore) => prevScore + 1);
          }
        }}>
        <img src={pokémon.imgUrl} alt={pokémon.name} />
      </button>
    </li>
  );
}

export default Card;
