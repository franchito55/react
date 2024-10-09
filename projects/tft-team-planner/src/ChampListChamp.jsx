import './ChampListChamp.css'

export function ChampListChamp( { champ, addChamp } ){
	function formatImgSource() {
		var newName = champ['name'].toLowerCase();
		newName = newName.replace("\'", "");
		newName = newName.replace(" ", "_");
		return `src/assets/${newName}.webp`;
	}
	const imageSource = formatImgSource();

	function handleClick() {
		addChamp(champ);
	};

	return(
		<img src={imageSource} className="championIcon" onClick={handleClick}></img>
	)
}