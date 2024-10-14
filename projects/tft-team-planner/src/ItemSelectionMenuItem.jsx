import './ItemSelectionMenuItem.css'

export function ItemSelectionMenuItem( { item, setBoardChampItem } ) {
    function handleClick() {
        setBoardChampItem(item);
    }

    return(
        <img className="itemSelectionMenuItem" src={`src/assets/${item['name']}.webp`} onClick={handleClick}/>
    )
}