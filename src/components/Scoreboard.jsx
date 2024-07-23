import '../styles/scoreboard.css';

function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <p>High score: {highScore}</p>
    </div>
  );
}

export default Scoreboard;
