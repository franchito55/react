import './App.css'

export function BoardPosition( { xpos, ypos, state, divSize } ) {
    let bkgColor = ''
    var icon = '';
    
    switch(state) {
        case 0:
            break;
        case 1:
            icon = 'H'
            bkgColor = 'lightblue'
            break;
        case 2:
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
        <div className='container-boardPosition' style={{backgroundColor: bkgColor, width: divSize, height: divSize}}>
            {icon}
        </div>
    )
}