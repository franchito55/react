import { useState } from 'react'
import './App.css'
import { ChampListCostSection } from './ChampListCostSection.jsx'
import { Planner } from './Planner.jsx'

export function App() {

	const [champs, setChamps] = useState([]);

	function addChampToBoard(champ){
		const newChamps = [...champs, champ];
		setChamps(newChamps);
	}

	function removeChampFromBoard(champIndex){
		const newChamps = champs.slice(); // Create a shallow copy of the array
		newChamps.splice(champIndex, 1);  // Remove one element at the given index
		setChamps(newChamps);
		console.log(champs);
	}

	const oneCosts = [
		{
			"name": "Ashe",
			"cost": 1,
			"traits": [
				"eldritch",
				"multistriker"
			]
		},
		{
			"name": "Blitzcrank",
			"cost": 1,
			"traits": [
				"honeymancy",
				"vanguard"
			]
		},
		{
			"name": "Elise",
			"cost": 1,
			"traits": [
				"eldritch",
				"shapeshifter"
			]
		},
		{
			"name": "Jax",
			"cost": 1,
			"traits": [
				"chrono",
				"multistriker"
			]
		},
		{
			"name": "Jayce",
			"cost": 1,
			"traits": [
				"portal",
				"shapeshifter"
			]
		},
		{
			"name": "Lillia",
			"cost": 1,
			"traits": [
				"faerie",
				"bastion"
			]
		},
		{
			"name": "Nomsy",
			"cost": 1,
			"traits": [
				"dragon",
				"hunter"
			]
		},
		{
			"name": "Poppy",
			"cost": 1,
			"traits": [
				"witchcraft",
				"bastion"
			]
		},
		{
			"name": "Seraphine",
			"cost": 1,
			"traits": [
				"faerie",
				"mage"
			]
		},
		{
			"name": "Soraka",
			"cost": 1,
			"traits": [
				"sugarcraft",
				"mage"
			]
		},
		{
			"name": "Twitch",
			"cost": 1,
			"traits": [
				"frost",
				"hunter"
			]
		},
		{
			"name": "Warwick",
			"cost": 1,
			"traits": [
				"frost",
				"vanguard"
			]
		},
		{
			"name": "Ziggs",
			"cost": 1,
			"traits": [
				"honeymancy",
				"incantor"
			]
		},
		{
			"name": "Zoe",
			"cost": 1,
			"traits": [
				"witchcraft",
				"portal",
				"scholar"
			]
		}
	]

	const twoCosts = [
		{
			"name": "Ahri",
			"cost": 2,
			"traits": [
				"arcana",
				"scholar"
			]
		},
		{
			"name": "Akali",
			"cost": 2,
			"traits": [
				"pyro",
				"warrior",
				"multistriker"
			]
		},
		{
			"name": "Cassiopeia",
			"cost": 2,
			"traits": [
				"witchcraft",
				"incantor"
			]
		},
		{
			"name": "Galio",
			"cost": 2,
			"traits": [
				"portal",
				"vanguard",
				"mage"
			]
		},
		{
			"name": "Kassadin",
			"cost": 2,
			"traits": [
				"portal",
				"multistriker"
			]
		},
		{
			"name": "Kog'Maw",
			"cost": 2,
			"traits": [
				"honeymancy",
				"hunter"
			]
		},
		{
			"name": "Nilah",
			"cost": 2,
			"traits": [
				"eldritch",
				"warrior"
			]
		},
		{
			"name": "Nunu",
			"cost": 2,
			"traits": [
				"honeymancy",
				"bastion"
			]
		},
		{
			"name": "Rumble",
			"cost": 2,
			"traits": [
				"sugarcraft",
				"blaster",
				"vanguard"
			]
		},
		{
			"name": "Shyvana",
			"cost": 2,
			"traits": [
				"dragon",
				"shapeshifter"
			]
		},
		{
			"name": "Syndra",
			"cost": 2,
			"traits": [
				"eldritch",
				"incantor"
			]
		},
		{
			"name": "Tristana",
			"cost": 2,
			"traits": [
				"faerie",
				"blaster"
			]
		},
		{
			"name": "Zilean",
			"cost": 2,
			"traits": [
				"chrono",
				"frost",
				"preserver"
			]
		}
	]

	const threeCosts = [
		{
			"name": "Bard",
			"cost": 3,
			"traits": [
				"sugarcraft",
				"preserver",
				"scholar"
			]
		},
		{
			"name": "Ezreal",
			"cost": 3,
			"traits": [
				"portal",
				"blaster"
			]
		},
		{
			"name": "Hecarim",
			"cost": 3,
			"traits": [
				"arcana",
				"bastion",
				"multistriker"
			]
		},
		{
			"name": "Hwei",
			"cost": 3,
			"traits": [
				"frost",
				"blaster"
			]
		},
		{
			"name": "Jinx",
			"cost": 3,
			"traits": [
				"sugarcraft",
				"hunter"
			]
		},
		{
			"name": "Katarina",
			"cost": 3,
			"traits": [
				"faerie",
				"warrior"
			]
		},
		{
			"name": "Mordekaiser",
			"cost": 3,
			"traits": [
				"eldritch",
				"vanguard"
			]
		},
		{
			"name": "Neeko",
			"cost": 3,
			"traits": [
				"witchcraft",
				"shapeshifter"
			]
		},
		{
			"name": "Shen",
			"cost": 3,
			"traits": [
				"pyro",
				"bastion"
			]
		},
		{
			"name": "Swain",
			"cost": 3,
			"traits": [
				"frost",
				"shapeshifter"
			]
		},
		{
			"name": "Veigar",
			"cost": 3,
			"traits": [
				"honeymancy",
				"mage"
			]
		},
		{
			"name": "Vex",
			"cost": 3,
			"traits": [
				"chrono",
				"mage"
			]
		},
		{
			"name": "Wukong",
			"cost": 3,
			"traits": [
				"druid"
			]
		}
	]
	
	const fourCosts = [
		{
			"name": "Fiora",
			"cost": 4,
			"traits": [
				"witchcraft",
				"warrior"
			]
		},
		{
			"name": "Gwen",
			"cost": 4,
			"traits": [
				"sugarcraft",
				"warrior"
			]
		},
		{
			"name": "Kalista",
			"cost": 4,
			"traits": [
				"faerie",
				"multistriker"
			]
		},
		{
			"name": "Karma",
			"cost": 4,
			"traits": [
				"chrono",
				"incantor"
			]
		},
		{
			"name": "Nami",
			"cost": 4,
			"traits": [
				"eldritch",
				"mage"
			]
		},
		{
			"name": "Nasus",
			"cost": 4,
			"traits": [
				"pyro",
				"shapeshifter"
			]
		},
		{
			"name": "Olaf",
			"cost": 4,
			"traits": [
				"frost",
				"hunter"
			]
		},
		{
			"name": "Rakan",
			"cost": 4,
			"traits": [
				"faerie",
				"preserver"
			]
		},
		{
			"name": "Ryze",
			"cost": 4,
			"traits": [
				"portal",
				"scholar"
			]
		},
		{
			"name": "Tahm Kench",
			"cost": 4,
			"traits": [
				"arcana",
				"vanguard"
			]
		},
		{
			"name": "Taric",
			"cost": 4,
			"traits": [
				"portal",
				"bastion"
			]
		},
		{
			"name": "Varus",
			"cost": 4,
			"traits": [
				"pyro",
				"blaster"
			]
		},
	]

	const fiveCosts = [
		{
			"name": "Briar",
			"cost": 5,
			"traits": [
				"eldritch",
				"shapeshifter",
				"ravenous"
			]
		},
		{
			"name": "Camille",
			"cost": 5,
			"traits": [
				"chrono",
				"multistriker"
			]
		},
		{
			"name": "Diana",
			"cost": 5,
			"traits": [
				"frost",
				"bastion"
			]
		},
		{
			"name": "Millio",
			"cost": 5,
			"traits": [
				"faerie",
				"scholar"
			]
		},
		{
			"name": "Morgana",
			"cost": 5,
			"traits": [
				"witchcraft",
				"preserver",
				"bat_queen"
			]
		},
		{
			"name": "Norra",
			"cost": 5,
			"traits": [
				"portal",
				"mage",
				"best_friends"
			]
		},
		{
			"name": "Smolder",
			"cost": 5,
			"traits": [
				"dragon",
				"blaster"
			]
		},
		{
			"name": "Xerath",
			"cost": 5,
			"traits": [
				"arcana",
				"ascendant"
			]
		},
	]

	return (
		<div className="teamplanner">
			<div className="teamplanner-header">
				<strong className="teamplanner-title">TFT Set 11 Team Planner</strong>
			</div>
			<div className="teamplanner-content">
				<div className="teamplanner-champList">
					<ChampListCostSection cost="1" champs={oneCosts} addChamp={addChampToBoard}/>
					<ChampListCostSection cost="2" champs={twoCosts} addChamp={addChampToBoard}/>
					<ChampListCostSection cost="3" champs={threeCosts} addChamp={addChampToBoard}/>
					<ChampListCostSection cost="4" champs={fourCosts} addChamp={addChampToBoard}/>
					<ChampListCostSection cost="5" champs={fiveCosts} addChamp={addChampToBoard}/>
					<div className="teamplanner-champList-scrollPadding"></div>
				</div>
				<Planner board={champs} removeChamp={removeChampFromBoard}/>
			</div>
		</div>
	)
}
	