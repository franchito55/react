import './App.css'
import { useState } from 'react'

export function FollowButton( { onClick } ){
	return(
		<button className={buttonClassName} onClick={handleClick}>
			<strong>{buttonText}</strong>
		</button>
	)
}