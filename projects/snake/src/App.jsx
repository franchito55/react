import { useEffect, useState, useRef } from 'react'
import { BoardPosition } from './BoardPosition'
import './App.css'

const MAP_SIZE = 20;
export function App() {
  const [board, setBoard] = useState([]);
  const [score, setScore] = useState(0);
  const [headPos, setHeadPos] = useState([0, 0])
  const [tailPos, setTailPos] = useState([0, 0])
  const [gameState, setGameState] = useState('READY');

  function handleKeyPress(e) {
    const newBoard = [...board]
    const newHeadPos = [...headPos]
    const newTailPos = [...tailPos]

    switch(e.key) {
      case 'a':
        // TODO handle A key press
        if (headPos[1] === 0) {
          alert("You lost");
          setGameState('READY');
        } else {
          newHeadPos[0] = headPos[0]
          newHeadPos[1] = headPos[1] - 1
          newTailPos[0] = tailPos[0]
          newTailPos[1] = tailPos[1] - 1
        }
        break;
      case 'd':
        // TODO handle D key press
        if (headPos[1] === (MAP_SIZE - 1)) {
          alert("You lost");
          setGameState('READY');
        } else {
          newHeadPos[0] = headPos[0]
          newHeadPos[1] = headPos[1] + 1
          newTailPos[0] = tailPos[0]
          newTailPos[1] = tailPos[1] + 1
        }
        break;
      case 'w':
        // TODO handle W key press
        if (headPos[0] === 0) {
          alert("You lost");
          setGameState('READY');
        } else {
          newHeadPos[0] = headPos[0] - 1
          newHeadPos[1] = headPos[1]
          newTailPos[0] = tailPos[0] - 1
          newTailPos[1] = tailPos[1]
        }
        break;
      case 's':
        // TODO handle S key press
        if (headPos[0] === (MAP_SIZE - 1)) {
          alert("You lost");
          setGameState('READY');
        } else {
          newHeadPos[0] = headPos[0] + 1
          newHeadPos[1] = headPos[1]
          newTailPos[0] = tailPos[0] + 1
          newTailPos[1] = tailPos[1]
        }
        break;
        default:
          break;
    }
    
    if (newBoard[newHeadPos[0]][newHeadPos[1]] === 3) {
      if (tailPos !== headPos) {
        newBoard[headPos[0]][headPos[1]] = 2
        setTailPos([headPos[0], [headPos[1]]])
      } else {
        newBoard[headPos[0]][headPos[1]] = 4
        setTailPos([headPos[0], [headPos[1]]])
      }
    } else {
      
    }

    setHeadPos(newHeadPos)
    newBoard[newHeadPos[0]][newHeadPos[1]] = 1
    setBoard(newBoard)
  }

  // Initialize board
  useEffect(() => {
    const newBoard = Array.from(new Array(MAP_SIZE), () => new Array(MAP_SIZE));
    for (var i = 0; i < MAP_SIZE; i++) {
      for (var j = 0; j < MAP_SIZE; j++) {
        if (i === 4 && j === 4){
          newBoard[i][j] = 3
        } else {
          newBoard[i][j] = 0;
        }
      }  
    }
    const r = Math.floor(Math.random() * 100)
    const randomPosX = Math.floor(r / MAP_SIZE)
    const randomPosY = r % MAP_SIZE
    console.log(`Head will start in row ${randomPosX}, column ${randomPosY}`)
    setHeadPos([randomPosX, randomPosY])
    setTailPos([randomPosX, randomPosY])
    newBoard[randomPosX][randomPosY] = 1;
    setBoard(newBoard);
  }, [])
  
  return (
    <>
      <div id='container-main' onKeyDown={handleKeyPress} tabIndex={-1}>
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
                  return <BoardPosition key={[rowIndex, columnIndex]} divSize={`${Math.floor(100/MAP_SIZE)}%`} xpos={columnIndex} ypos={rowIndex} state={board[rowIndex][columnIndex]}/>
                })
              )
            })
          }
        </div>
      </div>
    </>
  )
}