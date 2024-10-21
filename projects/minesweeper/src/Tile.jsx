import './App.css'

export function Tile( { column, row, state, divSize, updateBoard } ) {
    let bkgColor = ''
    var icon = '';

    function handleClick(e) {
        if (state === 2) {
            updateBoard(row, column, 1)
        } else if (state === 1) {
            updateBoard(row, column, 2)
        }
    }
    
    switch(state) {
        case 0:
            // Inactive/not explored yet
            break;
        case 1:
            // Flag
            icon = 'F'
            bkgColor = 'lightblue'
            break;
        case 2:
            // Bomb
            icon = 'B'
            bkgColor = 'blue'
            break;
        case 3:
            icon = 'F'
            bkgColor = 'red'
            break;
        case 4:
            icon = 'T'
            bkgColor = 'purple'
        default:
            icon = '?'
            break;
    }

    return (
        <div className='container-boardPosition' style={{backgroundColor: bkgColor, width: divSize, height: divSize}} onClick={handleClick}>
            {icon}
        </div>
    )
}