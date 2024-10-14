import './BoardChamp.css'
import { BoardChampItemSlot } from './BoardChampItemSlot.jsx'

export function BoardChamp( { champ, champIndex, removeChamp, updateChamp } ) {

	function formatImgSource() {
		var newName = champ['name'].toLowerCase();
		newName = newName.replace("\'", "");
		newName = newName.replace(" ", "_");
		return `src/assets/${newName}.webp`;
	}

	const imageSource = formatImgSource();

	function handleClick() {
		removeChamp(champIndex);
	}

	function setBoardChampItem(item, itemIndex) {
		const newChamp = JSON.parse(JSON.stringify(champ));
		const newItems = [...champ['items']];
		if (item['type'] === undefined) {
			newItems[itemIndex] = undefined;
		} else {
			newItems[itemIndex] = item;
		}
		newChamp['items'] = newItems;
		updateChamp(champIndex, newChamp);
	}

	function addTraitToChamp(previousTrait, newTrait, champ) {
		var tempChamp = champ;
		if (previousTrait !== undefined) {
			tempChamp['traits'].splice(tempChamp['traits'].indexOf(previousTrait), 1);
		}
		if (newTrait !== undefined) {
			tempChamp['traits'] = [...tempChamp['traits'], newTrait];
		}
		updateChamp(index, tempChamp);
	}

	return(
		<div className='teamplanner-board-championSlot'>
			<img src={imageSource} className={`cost-${champ['cost']}`} onClick={handleClick}/>
			<div className="boardChampItemSlot-container">
				<BoardChampItemSlot index={0} champ={champ} setBoardChampItem={setBoardChampItem}/>
				<BoardChampItemSlot index={1} champ={champ} setBoardChampItem={setBoardChampItem}/>
				<BoardChampItemSlot index={2} champ={champ} setBoardChampItem={setBoardChampItem}/>
			</div>
		</div>
	)
}