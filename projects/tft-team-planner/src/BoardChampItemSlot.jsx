import './BoardChampItemSlot.css'
import { useState } from 'react'
import { ItemSelectionMenu } from './ItemSelectionMenu.jsx'

export function BoardChampItemSlot( { index, champ, setBoardChampItem } ) {
    const [item, setItem] = useState();
    const [isItemSelectionMenuVisible, setIsItemSelectionMenuVisible] = useState(false);

    function handleClick() {
        setIsItemSelectionMenuVisible(!isItemSelectionMenuVisible);
    }

    function setNewItem(newItem) {  
        setBoardChampItem(newItem, index);
    }

    return(
        <div className="boardChampItemSlot" onClick={handleClick}>
            {isItemSelectionMenuVisible && (
                <ItemSelectionMenu champ={champ} setBoardChampItem={setNewItem}/>
            )
            }
            {champ['items'][index] !== undefined &&
                <img className="itemSlotImage" src={`src/assets/${champ['items'][index]['name']}.webp`}></img>
            }
        </div>
    )
}