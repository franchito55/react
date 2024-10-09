import './ChampListCostSection.css'
import { ChampListChamp } from './ChampListChamp.jsx'

export function ChampListCostSection( { cost, champs, addChamp }){

	const champList = champs.map((champ) => 
		<ChampListChamp key={champ['name']} champ={champ} addChamp={addChamp}/>
	);

	const className = 'champList-costSection-champs ' + `cost-${parseInt(cost)}`;

	return(
		<div className="champList-costSection">
			<div className="champList-costSection-header">
				<strong>{parseInt(cost)}-cost</strong>
			</div>
			<div className={className}>
				{champList}
			</div>
		</div>
	)
}