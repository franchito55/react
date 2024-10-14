import './Planner.css'
import { BoardChamp } from './BoardChamp.jsx'
import { Trait } from './Trait.jsx'
import { useEffect, useState } from 'react'

export function Planner( { board, removeChamp, updateChamp } ){
	const traitThresholds = {
		'arcana': {
			'bronze': 2,
			'silver': 3,
			'gold': 4,
			'prismatic': 5
		},
		'chrono': {
			'bronze': 2,
			'silver': 4,
			'gold': 6
		},
		'dragon': {
			'bronze': 2,
			'gold': 3
		},
		'druid': {
			'gold': 1
		},
		'eldritch': {
			'bronze': 3,
			'silver': 5,
			'gold': 7,
			'prismatic': 10
		},
		'faerie': {
			'bronze': 3,
			'silver': 5,
			'gold': 7,
			'prismatic': 9
		},
		'frost': {
			'bronze': 3,
			'silver': 5,
			'gold': 7,
			'prismatic': 9
		},
		'honeymancy': {
			'bronze': 3,
			'silver': 5,
			'gold': 7,
		},
		'portal': {
			'bronze': 3,
			'silver': 6,
			'gold': 8,
			'prismatic': 10
		},
		'pyro': {
			'bronze': 2,
			'silver': 3,
			'gold': 4,
			'prismatic': 5
		},
		'ravenous': {
			'unique': 1
		},
		'sugarcraft': {
			'bronze': 2,
			'silver': 4,
			'gold': 6
		},
		'witchcraft': {
			'bronze': 2,
			'silver': 4,
			'gold': 6,
			'prismatic': 8
		},
		'ascendant': {
			'unique': 1
		},
		'bastion': {
			'bronze': 2,
			'silver': 4,
			'gold': 6,
			'prismatic': 8
		},
		'bat_queen': {
			'unique': 1
		},
		'best_friends': {
			'unique': 1
		},
		'blaster': {
			'bronze': 2,
			'silver': 4,
			'gold': 6
		},
		'hunter': {
			'bronze': 2,
			'silver': 4,
			'gold': 6
		},
		'incantor': {
			'bronze': 2,
			'gold': 4
		},
		'mage': {
			'bronze': 3,
			'silver': 5,
			'gold': 7,
			'prismatic': 10
		},
		'multistriker': {
			'bronze': 3,
			'silver': 5,
			'gold': 7,
			'prismatic': 9
		},
		'preserver': {
			'bronze': 2,
			'silver': 3,
			'gold': 4,
			'prismatic': 5
		},
		'scholar': {
			'bronze': 2,
			'silver': 4,
			'gold': 6
		},
		'shapeshifter': {
			'bronze': 2,
			'silver': 4,
			'gold': 6,
			'prismatic': 8
		},
		'vanguard': {
			'bronze': 2,
			'silver': 4,
			'gold': 6
		},
		'warrior': {
			'bronze': 2,
			'silver': 4,
			'gold': 6
		}
	}

	const [globalLevels, setGlobalLevels] = useState([]);

	useEffect(() => {
		const traits = calculateTraits(board);
		var tempLevels = [];
		for (var i = 0; i < Object.keys(traits).length; i++) {
			const traitName = Object.keys(traits)[i];
			const traitAmount = Object.values(traits)[i];
			tempLevels = [...tempLevels, calculateNextThreshold([traitName, traitAmount])];
		}
		setGlobalLevels(tempLevels.sort(compareTraitValueForUI));
	}, [board]);

	function setChampItems() {

	}

	function calculateTraits(champs) {
		const countedChamps = [];
		const traits = {};
		for (var i = 0; i < champs.length; i++) {
			var champAlreadyCounted = false;
			for (var j = 0; j < countedChamps.length; j++) {
				if (champs[i]['name'] == countedChamps[j] && champs[i]['cost'] !== 0) {
					champAlreadyCounted = true;
				}
			}
			if (!champAlreadyCounted) {
				countedChamps.push(champs[i].name);
				for (var j = 0; j < champs[i]['traits'].length; j++){
					if (champs[i]['traits'][j] in traits) {
						traits[champs[i]['traits'][j]] += 1;
					} else {
						traits[champs[i]['traits'][j]] = 1;
					}
				}
			}
		}
		return traits;
	}

	function calculateNextThreshold(trait){
		if (trait !== undefined) {
			const traitName = trait[0];
			const traitAmount = trait[1];
			const levels = Object.keys(traitThresholds[traitName]);
			const values = Object.values(traitThresholds[traitName]);
			var currentLevel;
			var nextThreshold = 0;
			if (levels.length == 1) {
				currentLevel = levels[0];
				nextThreshold = 1;
			} else {
				for (var i = 0; i < levels.length; i++) {
					if (traitAmount < values[i]) {
						currentLevel = levels[i-1];
						nextThreshold = values[i];
						break;
					} else if (i == levels.length - 1) {
						currentLevel = levels[i];
						nextThreshold = values[i];
						break;
					}
				}
			}

			const level = {};
			level['name'] = traitName;
			level['currentLevel'] = currentLevel;
			level['nextThreshold'] = nextThreshold;
			level['amount'] = traitAmount;
			
			return level;
		}
    }

	function compareTraitValueForUI(traitA, traitB) {
		if (traitA !== undefined && traitB !== undefined) {
			const traitAAmount = traitA['amount'];
			const traitBAmount = traitB['amount'];
			const traitALevel = traitA['currentLevel'];
			const traitBLevel = traitB['currentLevel'];

			const values = {
				undefined: 0,
				'unique': 1,
				'bronze': 2,
				'silver': 3,
				'gold': 4,
				'prismatic': 5
			}

			const valueA = values[traitALevel];
			const valueB = values[traitBLevel];

			// Inverted because reverse sort (higher values
			// appear to the left)
			if (valueA > valueB) {
				return -1;
			}
			if (valueB > valueA) {
				return 1;
			}
			if (traitAAmount > traitBAmount) {
				return -1;
			}
			if (traitBAmount < traitAAmount) {
				return 1;
			}
			return 0;
		}
	}

	return(
		<div className="teamplanner-plannerSection">
			<div className="teamplanner-plannerSection-board">
				{board.map((champ, index) =>
					<BoardChamp key={champ + index} champ={champ} champIndex={index} removeChamp={removeChamp} updateChamp={updateChamp}/>
				)}
			</div>
			<div className="teamplanner-plannerSection-traits">
				{globalLevels.map((trait) =>
					<Trait key={trait['name']} traitName={trait['name']} traitAmount={trait['amount']} currentLevel={trait['currentLevel']} nextThreshold={trait['nextThreshold']}></Trait>
				)}
				<div className='teamplanner-plannerSection-traits-scrollPadding'></div>
			</div>
		</div>
	)
}