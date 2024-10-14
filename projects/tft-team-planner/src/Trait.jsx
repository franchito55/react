import { useState } from 'react';
import './Trait.css'
import { TraitDescription } from './TraitDescription.jsx'

export function Trait( { traitName, traitAmount, currentLevel, nextThreshold } ) {
    const hexStyle = currentLevel == undefined ? 'traitHex' : `traitHex ${currentLevel}`
    const imageSource = `src/assets/${traitName}_emblem.svg`;
    const [isChampListOfTraitVisible, setIsChampListOfTraitVisible] = useState(false);
    const [position, setPosition ]= useState({'top': 0, 'left': 0});

    function handleMouseEnter(e) {
        const rect = e.target.getBoundingClientRect(); // Get position of the hovered element
        position['top'] = rect.top - 450;
        position['left'] = rect.left;
        setPosition(position);
        setIsChampListOfTraitVisible(true);
    }

    function handleMouseLeave() {
        setIsChampListOfTraitVisible(false);
    }

    return(
        <div className='trait'>
            <div className='traitHex-hexagonalBorder' onMouseEnter={handleMouseEnter}>
                <div className={hexStyle}>
                    <img src={imageSource} className='emblemIcon'></img>
                </div>
            </div>
            <strong>{traitAmount}/{nextThreshold}</strong>
            {isChampListOfTraitVisible &&
                <TraitDescription traitName={traitName} position={position} onMouseLeave={handleMouseLeave}/>
            }
        </div>
    )
}