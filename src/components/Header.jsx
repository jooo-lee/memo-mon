import Scoreboard from './Scoreboard.jsx';
import '../styles/header.css';

function Header({ score, highScore }) {
  return (
    <header>
      <div className="title-and-instructions">
        <h1>MemoMon</h1>
        <p>
          Get points by clicking on images but don&apos;t click on any more than
          once!
        </p>
      </div>
      <Scoreboard score={score} highScore={highScore} />
    </header>
  );
}

export default Header;
