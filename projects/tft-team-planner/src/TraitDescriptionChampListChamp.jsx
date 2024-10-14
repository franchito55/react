import { useState } from 'react';
import './TraitDescriptionChampListChamp.css'

export function TraitDescriptionChampListChamp( { champ } ) {
    const [isChampNameTooltipVisible, setIsChampNameTooltipVisible] = useState(false);
    const [position, setPosition] = useState({'top': 0, 'left': 0});

    function formatImgSource() {
		var newName = champ['name'].toLowerCase();
		newName = newName.replace("\'", "");
		newName = newName.replace(" ", "_");
		return `src/assets/${newName}.webp`;
	}
	const imageSource = formatImgSource();

    function handleOnMouseEnter(e) {
        const rect = e.target.getBoundingClientRect(); // Get position of the hovered element
        position['top'] = rect.top - 22;
        position['left'] = rect.left + 2;
        setPosition(position);
        setIsChampNameTooltipVisible(true);
    }

    function handleOnMouseLeave() {
        setIsChampNameTooltipVisible(false);
    }

    return(
        <div>
            <img src={imageSource} className="championIcon-traitDecriptionChampListChamp" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}></img>
            {isChampNameTooltipVisible &&
                <span className='champ-tooltip' style={{top: `${position['top']}px`, left: `${position['left']}px`}}>{champ['name']}</span>
            }
        </div>
    )
}