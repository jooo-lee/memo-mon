import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

import '../styles/Card.css';

function Card({ pokémon, setScore, setIsLoss, tiltEnable }) {
  const [clicked, setClicked] = useState(false);

  return (
    <Tilt
      tiltEnable={tiltEnable}
      glareEnable={tiltEnable}
      glareMaxOpacity={0.45}
      glarePosition="all">
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
          <img src={pokémon.imgUrl} alt="" />
          <p className="pokémon-name">{pokémon.name}</p>
        </button>
      </li>
    </Tilt>
  );
}

export default Card;
