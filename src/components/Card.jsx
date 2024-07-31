import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

import '../styles/Card.css';

function Card({ pokémon, handleCardClick, tiltEnable }) {
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
            handleCardClick(clicked);
            setClicked(true);
          }}>
          <img src={pokémon.imgUrl} alt="" />
          <p className="pokémon-name">{pokémon.name}</p>
        </button>
      </li>
    </Tilt>
  );
}

export default Card;
