import './Planner.css'
import { BoardChamp } from './BoardChamp'
import { useEffect } from 'react'

export function Planner( { board, removeChamp } ){

	return(
		<div className="teamplanner-plannerSection">
			<div className="teamplanner-plannerSection-board">
			{board.map((champ, index) =>
				<BoardChamp key={champ + index} champ={champ} index={index} removeChamp={removeChamp}/>
			)}
			</div>
			<div className="teamplanner-plannerSection-traits">
			</div>
		</div>
	)
}