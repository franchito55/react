import { useEffect, useState, useRef } from 'react'
import { Tile } from './Tile'
import './App.css'

const MAP_SIZE = 20;
const BOMB_VALUE = 10;
const FLAG_VALUE = 9;
const UNEXPLORED_VALUE = 11;
const BOMB_SPAWN_PROBABILTY = 20;
export function App() {
  const [board, setBoard] = useState([]);
  const [score, setScore] = useState(0);

  // Initialize board
  useEffect(() => {
    const newBoard = Array.from(new Array(MAP_SIZE), () => new Array(MAP_SIZE));
    for (var i = 0; i < MAP_SIZE; i++) {
      for (var j = 0; j < MAP_SIZE; j++) {
        if (Math.random() * 100 < BOMB_SPAWN_PROBABILTY) {
          newBoard[i][j] = BOMB_VALUE
        } else {
          newBoard[i][j] = UNEXPLORED_VALUE
        }
      }  
    }
    setBoard(newBoard);
  }, [])

  function handleClick(row, column) {
    const newBoard = [...board]
    // Bomb
    if (newBoard[row][column] === BOMB_VALUE) {
      alert("You lost")
    } else if (newBoard[row][column] === UNEXPLORED_VALUE) {
      let bombs = 0
      for (var i = row - 1; i <= row + 1; i++) {
        for (var j = column - 1; j <= column + 1; j++) {
          if (i < MAP_SIZE && i >= 0 && j < MAP_SIZE && j >= 0) {
            if (newBoard[i][j] === BOMB_VALUE) {
              bombs += 1
            } else {
            }
          }
        }
      }
      newBoard[row][column] = bombs
    }
    setBoard(newBoard)
  }
  
  return (
    <>
      <div id='container-main'>
        <div id='container-info'>
          <span>
            <strong>Score: {score}</strong>
          </span>
        </div>
        <div id='container-game'>
          {
            board.map((row, rowIndex) => {
              return(
                row.map((column, columnIndex) => {
                  return <Tile key={[rowIndex, columnIndex]} divSize={`${Math.floor(100/MAP_SIZE)}%`} column={columnIndex} row={rowIndex} state={board[rowIndex][columnIndex]} updateBoard={handleClick}/>
                })
              )
            })
          }
        </div>
      </div>
    </>
  )
}