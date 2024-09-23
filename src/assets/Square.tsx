export default function Square({ value, onSquareClick, highlight }) {
   return (
      <button
         className={`square ${highlight ? 'winner-square' : ''}`}
         onClick={onSquareClick}
      >
         {value}
      </button>
   );
}

