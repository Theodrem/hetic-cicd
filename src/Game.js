import React, { useState } from 'react';
import Board from './Board';

function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  function handleClick(i) {
    const newHistory = history.slice(0, stepNumber + 1);
    const squares = current.squares.slice();

    if (winner || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';

    setHistory(newHistory.concat([{ squares: squares }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  let status;
  if (winner) {
    status = 'Le gagnant est : ' + winner;
  } else if (stepNumber === 9) {
    status = 'Match nul';
  } else {
    status = 'Prochain joueur : ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-info">
        <div>{status}</div>
        <div>
          <li>
            <button onClick={() => jumpTo(0)}>Restart</button>
          </li>
        </div>
      </div>
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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

  for (const element of lines) {
    const [a, b, c] = element;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default Game;
