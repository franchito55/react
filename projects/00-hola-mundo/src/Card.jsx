import {useState} from 'react'
import './Card.css'

export function Card() {
    const [name, setName] = useState("Fran")

    const handleClick = (e) => {
        setName(e.target.parentElement.children[0].value)
    }

    return (
        <>
            <div className='card'>
                <input className='card-input' placeholder='Enter the new name'></input>
                <p>{name}</p>
                <button className='card-button' onClick={handleClick}>
                Click me
                </button>
            </div>
        </> 
    )
}