import './App.css'
import { Row } from './Row.jsx'
import { useState } from 'react'

export function ThreeInARow() {
    const [tiles, setTiles] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]])

    return (
        <div className='three-in-a-row'>
            <Row initialIndex={0}/>
            <Row initialIndex={3}/>
            <Row initialIndex={6}/>
        </div>
    )
}