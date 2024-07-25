import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

import '../styles/Card.css';

function Card({ pokémon, setScore, setIsLoss }) {
  const [clicked, setClicked] = useState(false);

  return (
    <Tilt glareEnable={true} glareMaxOpacity={0.45} glarePosition="all">
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
    </Tilt>
  );
}

export default Card;
