function WinDialog({ setScore }) {
  return (
    <>
      <p>You win!</p>
      <button
        onClick={() => {
          setScore(0);
        }}>
        Restart
      </button>
    </>
  );
}

export default WinDialog;
