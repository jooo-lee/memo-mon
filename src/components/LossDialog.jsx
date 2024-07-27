import '../styles/LossDialog.css';

function LossDialog({ setScore, setIsLoss }) {
  return (
    <div className="loss-dialog">
      <p>You lost! Try again.</p>
      <button
        onClick={() => {
          setScore(0);
          setIsLoss(false);
        }}>
        Restart
      </button>
    </div>
  );
}

export default LossDialog;
