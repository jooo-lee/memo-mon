import '../styles/LossDialog.css';

function LossDialog({ handleRestartClick }) {
  return (
    <div className="loss-dialog">
      <p>You lost! Try again.</p>
      <button onClick={handleRestartClick}>Restart</button>
    </div>
  );
}

export default LossDialog;
