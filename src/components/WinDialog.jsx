import '../styles/WinDialog.css';

function WinDialog({ handleRestartClick }) {
  return (
    <div className="win-dialog">
      <p>You won! &#127881;</p>
      <button onClick={handleRestartClick}>Restart</button>
    </div>
  );
}

export default WinDialog;
