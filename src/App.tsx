import Square from "./assets/Square";
import { useState } from "react";

export default function Board() {
  const [currentBoard, setNewBoard] = useState(Array(9).fill('-'));
  const [currentPlayer, setNextPlayer] = useState(true);

  function handleClick(index: number) {
    if (currentBoard[index] !== '-' || calculateWinner(currentBoard)) {
      return;
    }

    const duplicateBoard = currentBoard.slice();
    duplicateBoard[index] = currentPlayer ? 'X' : 'O';

    setNextPlayer(!currentPlayer);
    setNewBoard(duplicateBoard);
  }

  const winner = calculateWinner(currentBoard);
  const status = winner ? `Winner: ${winner.winner}` : `Next player: ${currentPlayer ? 'X' : 'O'}`;

  return (
    <div className="container">
      <div className="status">{status}</div>
      {Array.from({ length: 3 }, (_, rowIndex) => {
        return (
          <div className="board-row" key={rowIndex}>
            {Array.from({ length: 3 }, (_, colIndex) => {
              const index = rowIndex * 3 + colIndex;
              const isWinningSquare = winner ? winner.line.includes(index) : false;
              return (
                <Square
                  key={index}
                  value={currentBoard[index]}
                  onSquareClick={() => handleClick(index)}
                  highlight={isWinningSquare}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );

  function calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] !== '-' && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line };
      }
    }
    return false;
  }
}
