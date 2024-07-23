import Card from './Card.jsx';

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

function CardsContainer({ cards, setScore, setIsLoss }) {
  const nextCards = [...cards];
  shuffle(nextCards);

  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
      {nextCards.map((pokemon) => (
        <Card
          key={pokemon.id}
          pokemon={pokemon}
          setScore={setScore}
          setIsLoss={setIsLoss}
        />
      ))}
    </ul>
  );
}

export default CardsContainer;
