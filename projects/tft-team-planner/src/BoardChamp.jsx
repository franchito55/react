import './BoardChamp.css'

export function BoardChamp( { champ, index, removeChamp } ) {
	
	function formatImgSource() {
		var newName = champ['name'].toLowerCase();
		newName = newName.replace("\'", "");
		newName = newName.replace(" ", "_");
		return `src/assets/${newName}.webp`;
	}
	const imageSource = formatImgSource();
	const className = `teamplanner-board-championSlot cost-${champ['cost']}` 

	function handleClick() {
		removeChamp(index);
	}

	return(
		<img src={imageSource} className={className} onClick={handleClick}/>
	)
}