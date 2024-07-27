import Card from './Card.jsx';
import '../styles/CardsContainer.css';

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

// Returns whether or not user is using a touch screen device
function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

function CardsContainer({ pokémons, setScore, setIsLoss }) {
  const nextPokémons = [...pokémons];
  shuffle(nextPokémons);

  return (
    <ul>
      {nextPokémons.map((pokémon) => (
        <Card
          key={pokémon.name}
          pokémon={pokémon}
          setScore={setScore}
          setIsLoss={setIsLoss}
          tiltEnable={!isTouchDevice()}
        />
      ))}
    </ul>
  );
}

export default CardsContainer;
