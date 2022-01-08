import React, { useEffect, useState } from "react";
import { copyBoard, emptyBoard, winnerPositions } from "@/utilities";

export default function Board() {
  const [history, move] = useState([]);
  const [won, setWon] = useState(false);
  const [turn, setTurn] = useState(1);

  const getChar = (i) => {
    return i === 0 ? " " : i === 1 ? "X" : "O";
  };

  useEffect(() => {
    move((history) => [...history, emptyBoard]);
  }, []);

  const restartGame = () => {
    move([emptyBoard]);
    setTurn(1);
    setWon(false);
  };

  const checkWinner = (board) => {
    for (let line of winnerPositions) {
      const strLine = line.map(([x, y]) => board[x][y]).join("");
      if (strLine === "111" || strLine === "222") {
        return strLine[0];
      }
    }

    return null;
  };

  const markMe = (x, y) => {
    const currentBoard = history.slice(-1)[0];
    if (won || currentBoard[y][x] !== 0) return;

    const nextBoard = copyBoard(currentBoard);
    nextBoard[y][x] = turn;
    move((history) => [...history, nextBoard]);

    const winner = checkWinner(nextBoard);
    if (winner) {
      alert(`Ganador: ${getChar(turn)}`);
      setWon(true);
    }

    setTurn(turn === 1 ? 2 : 1);
  };

  return (
    <>
      <div className={`board ${won ? "won" : ""}`}>
        {history.slice(-1)[0]?.map((row, y) =>
          row.map((cell, x) => (
            <button onClick={() => markMe(x, y)} key={`${x}-${y}`}>
              {getChar(cell)}
            </button>
          ))
        )}
      </div>

      <div>
        <button onClick={restartGame}>Reiniciar juego</button>
      </div>
    </>
  );
}
