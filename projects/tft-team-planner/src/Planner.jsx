import './Planner.css'
import { BoardChamp } from './BoardChamp.jsx'
import { Trait } from './Trait.jsx'

export function Planner( { board, traits, removeChamp } ){
	return(
		<div className="teamplanner-plannerSection">
			<div className="teamplanner-plannerSection-board">
				{board.map((champ, index) =>
					<BoardChamp key={champ + index} champ={champ} index={index} removeChamp={removeChamp}/>
				)}
			</div>
			<div className="teamplanner-plannerSection-traits">
				{Object.entries(traits).map((trait) =>
					<Trait key={trait} trait={trait}></Trait>
				)}
				{/* TODO: add the logic for rendering the traits*/}
			</div>
		</div>
	)
}