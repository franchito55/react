import { useState, useContext } from 'react'
import './App.css'
import { ChampListCostSection } from './ChampListCostSection.jsx'
import { Planner } from './Planner.jsx'
import { oneCosts, twoCosts, threeCosts, fourCosts, fiveCosts } from './ChampionsContext.jsx';

export function App() {
	const [champs, setChamps] = useState([]);

	function addChampToBoard(champ) {
		champ['items'] = [undefined, undefined, undefined];
		const newChamps = [...champs, champ];
		setChamps(newChamps);
	}

	function removeChampFromBoard(index) {
		const newChamps = champs.slice();
		newChamps.splice(index, 1);
		setChamps(newChamps);
	}

	function updateChamp(index, champ) {
		const prevChamp = JSON.parse(JSON.stringify(champs[index]));

		// First, we update the traits of the original champ
		// (delete the last trait if we find an emblem -> it
		// means it has an extra trait from an emblem)
		// P.S: the items here can be null instead of undefined
		// because JSON.stringify parses undefined into null
		for (var i = 0; i < prevChamp['items'].length; i++) {
			const currentItem = prevChamp['items'][i];
			if (!(currentItem === null) && currentItem['type'] === 'emblem') {
				prevChamp['traits'].pop();
			}
		}
		
		prevChamp['items'] = champ['items'];

		// Then, we add the traits back up if they have an emblem
		// P.S: the items here WILL NOT be null instead of undefined
		for (var i = 0; i < prevChamp['items'].length; i++) {
			const currentItem = prevChamp['items'][i];
			if (currentItem !== undefined && currentItem['type'] === 'emblem') {
				prevChamp['traits'] = [...prevChamp['traits'], prevChamp['items'][i]['trait']];
			}
		}

		const newChamps = [...champs];
		newChamps[index] = prevChamp;
		setChamps(newChamps);
	}

	function clearBoard() {
		setChamps([]);
	}

	return (
		<div className="teamplanner">
			<div className="teamplanner-header">
				<strong className="teamplanner-title">TFT Set 12 Team Planner</strong>
				<button className="clearAllButton" onClick={clearBoard}>Clear</button>
			</div>
			<div className="teamplanner-body">
				<div className="teamplanner-champList">
					<ChampListCostSection title="1-cost" cost="1" champs={useContext(oneCosts)} addChamp={addChampToBoard}/>
					<ChampListCostSection title="2-cost" cost="2" champs={useContext(twoCosts)} addChamp={addChampToBoard}/>
					<ChampListCostSection title="3-cost" cost="3" champs={useContext(threeCosts)} addChamp={addChampToBoard}/>
					<ChampListCostSection title="4-cost" cost="4" champs={useContext(fourCosts)} addChamp={addChampToBoard}/>
					<ChampListCostSection title="5-cost" cost="5" champs={useContext(fiveCosts)} addChamp={addChampToBoard}/>
					<div className="teamplanner-champList-scrollPadding"></div>
				</div>
				<Planner board={champs} removeChamp={removeChampFromBoard} updateChamp={updateChamp}/>
			</div>
		</div>
	)
}
	