import './ItemSelectionMenu.css'
import { ItemSelectionMenuItem } from './ItemSelectionMenuItem.jsx'
import { useContext } from 'react';
import { items } from './ChampionsContext.jsx';

export function ItemSelectionMenu( { champ, setBoardChampItem } ) {
	const localItems = useContext(items);

    const itemList = localItems.map((item, index) => {
        var hasTrait = false;
        for (var i = 0; i < champ['traits'].length; i++) {
            if (item['type'] === 'emblem' && item['trait'] === champ['traits'][i]) {
                hasTrait = true;
                break;
            }
        }
        if (item['type'] === 'emblem' && !hasTrait) {
            return <ItemSelectionMenuItem key={index} item={item} setBoardChampItem={setBoardChampItem}/>
        } else if (item['type'] !== 'emblem') {
			return <ItemSelectionMenuItem key={index} item={item} setBoardChampItem={setBoardChampItem}/>
		}
    });

    return(
        <div className='itemSelectionMenu'>
            {itemList}
        </div>
    )
}