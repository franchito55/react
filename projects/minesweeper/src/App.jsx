import { useEffect, useState, useRef } from 'react'
import { Tile } from './Tile'
import './App.css'

const MAP_SIZE = 20;
export function App() {
  const [board, setBoard] = useState([]);
  const [score, setScore] = useState(0);

  // Initialize board
  useEffect(() => {
    const newBoard = Array.from(new Array(MAP_SIZE), () => new Array(MAP_SIZE));
    for (var i = 0; i < MAP_SIZE; i++) {
      for (var j = 0; j < MAP_SIZE; j++) {
        if (Math.random() * 100 < 5) {
          newBoard[i][j] = 2
        } else {
          newBoard[i][j] = 0
        }
      }  
    }
    setBoard(newBoard);
  }, [])

  function updateBoard(row, column, value) {
    const newBoard = [...board]
    newBoard[row][column] = value
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
                  return <Tile key={[rowIndex, columnIndex]} divSize={`${Math.floor(100/MAP_SIZE)}%`} column={columnIndex} row={rowIndex} state={board[rowIndex][columnIndex]} updateBoard={updateBoard}/>
                })
              )
            })
          }
        </div>
      </div>
    </>
  )
}