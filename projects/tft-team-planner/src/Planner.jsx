import './Planner.css'
import { BoardChamp } from './BoardChamp.jsx'
import { Trait } from './Trait.jsx'

export function Planner( { board, traits, removeChamp } ){
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

	function compareTraitValueForUI(traitA, traitB) {
		if (traitA !== undefined && traitB !== undefined) {
			const traitALevel = calculateNextThreshold(traitA);
			const traitBLevel = calculateNextThreshold(traitB);

			const values = {
				'EMPTY': 0,
				'unique': 1,
				'bronze': 2,
				'silver': 3,
				'gold': 4,
				'prismatic': 5
			}

			const valueA = values[traitALevel[0]];
			const valueB = values[traitBLevel[0]];

			/*console.log("traitA");
			console.log(traitA);
			console.log(traitALevel[0]);
			console.log(valueA);
			console.log("traitB");
			console.log(traitB);
			console.log(traitBLevel[0]);
			console.log(valueB);*/

			// Inverted because reverse sort (higher values
			// appear to the left)
			if (valueA > valueB) {
				return -1;
			}
			if (valueB > valueA) {
				return 1;
			}
			return 0;
		}
	}

	function calculateNextThreshold(trait){
		if (trait !== undefined) {
			var level = 'EMPTY';
			const keys = Object.keys(traitThresholds[trait[0]]);
			const values = Object.values(traitThresholds[trait[0]]);
			if (Object.keys(traitThresholds[trait[0]]).length == 1) {
				level = Object.keys(traitThresholds[trait[0]])[0];
			} else {
				for (var i = 0; i < Object.keys(traitThresholds[trait[0]]).length; i++) {
					if (trait[1] < values[i]) {
						if (i >= 1) {
							level = keys[i-1];
						}
						break;
					}
				}
			}
			return [level, trait[1]];
		}
    }

	return(
		<div className="teamplanner-plannerSection">
			<div className="teamplanner-plannerSection-board">
				{board.map((champ, index) =>
					<BoardChamp key={champ + index} champ={champ} index={index} removeChamp={removeChamp}/>
				)}
			</div>
			<div className="teamplanner-plannerSection-traits">
				{Object.entries(traits).sort(compareTraitValueForUI).map((trait) =>
					<Trait key={trait} trait={trait} traitThresholds={traitThresholds[trait[0]]}></Trait>
				)}
				<div className='teamplanner-plannerSection-traits-scrollPadding'></div>
			</div>
		</div>
	)
}