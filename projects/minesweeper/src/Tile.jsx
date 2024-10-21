import { useEffect, useState } from 'react';
import './App.css'

export function Tile( { column, row, state, divSize, updateBoard } ) {
    const [explored, setExplored] = useState(false)
    let bkgColor = ''
    var icon = '';

    function handleClick(e) {
        setExplored(true)
        console.log(`Explored tile ${row}, ${column}`)
        updateBoard(row, column)
    }

    if (explored) {
        switch(state) {
            case 9:
                // Flag
                icon = 'F'
                bkgColor = 'lightblue'
                break;
            case 10:
                // Bomb
                icon = 'B'
                bkgColor = 'blue'
                break;
            default:
                // Explored (number of bombs around it)
                // We'll just use other numbers for it
                icon = state
                bkgColor = 'darkgray'
                break;
        }
    } else {
        bkgColor = 'black'
    }

    return (
        <div className='container-boardPosition' style={{backgroundColor: bkgColor, width: divSize, height: divSize}} onClick={handleClick}>
            {icon}
        </div>
    )
}