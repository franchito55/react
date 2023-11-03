import './App.css'
import { useState } from 'react'

export function Tile({ index, initialValue = 0 }) {
    const [value, setValue] = useState(initialValue)

    let svgCrossClassName = '';
    let svgCircleClassName = '';
    if (value === 0) {
        svgCrossClassName = 'svg svg-displayNone';
        svgCircleClassName = 'svg svg-displayNone';
    } else if (value === 1) {
        svgCrossClassName = 'svg';
        svgCircleClassName = 'svg svg-displayNone';
    } else {
        svgCrossClassName = 'svg svg-displayNone';
        svgCircleClassName = 'svg';
    }

    const handleClick = () => {
        if (value === 2){
            setValue(0)
        } else {
            setValue(value+1);
        }
    }

    return (
        <div className="tiar-tile" onClick={handleClick}>
            <svg className={svgCrossClassName} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#DD2E44" d="M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.498 2.498 0 0 0-3.535 0a2.498 2.498 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.493 2.493 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267L21.533 18.002z"></path></g></svg>
            <svg className={svgCircleClassName} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#001A72" strokeWidth="1.5"></path> </g></svg>
        </div>
    )
}