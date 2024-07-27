import '../styles/WinDialog.css';

function WinDialog({ setScore }) {
  return (
    <div className="win-dialog">
      <p>You win! &#127881;</p>
      <button
        onClick={() => {
          setScore(0);
        }}>
        Restart
      </button>
    </div>
  );
}

export default WinDialog;
