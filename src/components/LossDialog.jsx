function LossDialog({ setScore, setIsLoss }) {
  return (
    <>
      <p>You lose!</p>
      <button
        onClick={() => {
          setScore(0);
          setIsLoss(false);
        }}>
        Restart
      </button>
    </>
  );
}

export default LossDialog;
