import './App.css'
import { useState } from 'react'
import { Tile } from './Tile.jsx'
import {TurnSquare} from './TurnSquare.jsx'

export function ThreeInARow() {
    const [tiles, setTiles] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [turns, setTurns] = useState('X')
    const [gameOver, setGameOver] = useState(0)
    
    let restartButtonClass = ''

    let winScreenClassName = 'winScreen'
    let winScreenCirclesWin = 'displayNone'
    let winScreenCrossesWin = 'displayNone'
    let winScreenTie = 'displayNone'
    let turnsDivClassName = 'displayNone'

    const updateBoard = (index) => {
        if (gameOver === 0) {
            const newTiles = tiles
            newTiles[index] = turns === 'X' ? 1 : 2
            setTiles(newTiles)
            handleWin()
            setTurns(turns === 'O' ? 'X' : 'O')
        }
    }
    
    const handleWin = () => {
        if (tiles[0] !== 0 && tiles[0] === tiles[1] && tiles[1] === tiles[2]){
            console.log()
            setGameOver(tiles[0])
        } else if (tiles[3] !== 0 && tiles[3] === tiles[4] && tiles[4] === tiles[5]){
            setGameOver(tiles[3])
        } else if (tiles[6] !== 0 && tiles[6] === tiles[7] && tiles[7] === tiles[8]){
            setGameOver(tiles[6])
        } else if (tiles[0] !== 0 && tiles[0] === tiles[3] && tiles[3] === tiles[6]){
            setGameOver(tiles[0])
        } else if (tiles[1] !== 0 && tiles[1] === tiles[4] && tiles[4] === tiles[7]){
            setGameOver(tiles[1])
        } else if (tiles[2] !== 0 && tiles[2] === tiles[5] && tiles[5] === tiles[8]){
            setGameOver(tiles[2])
        } else if (tiles[0] !== 0 && tiles[0] === tiles[4] && tiles[4] === tiles[8]){
            setGameOver(tiles[0])
        } else if (tiles[2] !== 0 && tiles[2] === tiles[4] && tiles[4] === tiles[6]){
            setGameOver(tiles[2])
        }
        
        if (gameOver !== 0) {
            return
        }

        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i] === 0) {
                return
            }
        }
        setGameOver(3)
    }

    const restartGame = () => {
        setTiles([0, 0, 0, 0, 0, 0, 0, 0, 0])
        setTurns('X')
        setGameOver(0)
    }

    /*
    if (gameOver === 0) {
        restartButtonClass = 'displayNone'
        winScreenClassName += ' displayNone'
        turnsDivClassName = ''
    } else if (gameOver === 1) {
        winScreenCrossesWin = ''
    } else if (gameOver === 2) {
        winScreenCirclesWin = ''
    } else {
        winScreenTie = ''
    }*/

    return (
        <>
            <h1>Tic tac toe</h1>
            <div className='three-in-a-row'>
                {
                    tiles.map((_, index) => {
                        return(
                            <Tile
                                index={index}
                                value={tiles[index]}
                                key={index}
                                updateBoard={updateBoard}>
                            </Tile>
                        )
                    })
                }
            </div>
            { 
            gameOver !== 0 &&
                <div className='winScreen'>
                    {
                        gameOver === 1 && <h2>Crosses win!</h2>
                    }
                    {
                        gameOver === 2 && <h2>Circles win!</h2>
                    }
                    {
                        gameOver === 3 && <h2>It's a tie!</h2>
                    }
                    <button onClick={restartGame} className='restartButton'>
                        Restart game
                    </button>
                </div>
            }
            {
                gameOver === 0 &&
                <div className='turns-div'>
                <h2>Turn:</h2>
                <div className='turns-squares'>
                    <TurnSquare value='X' active={turns === 'X'}></TurnSquare>
                    <TurnSquare value='O' active={turns === 'O'}></TurnSquare>
                </div>
            </div>
            }
        </>
    )
}