import './App.css'
import { Tile } from './Tile'

export function Row({initialIndex}) {
    return (
        <div className="tiar-row">
            <Tile index={initialIndex}/>
            <Tile index={initialIndex+1}/>
            <Tile index={initialIndex+2}/>
        </div>
    )
}