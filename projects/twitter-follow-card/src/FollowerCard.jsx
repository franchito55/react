import './App.css'
import { FollowButton } from './FollowButton.jsx'
import { useState } from 'react'

export function FollowerCard( { userName, name, isFollowing } ){
	const [following, setFollowing] = useState(isFollowing);
	const handleClick = () => {
		setFollowing(!following)
	}
	
	const buttonClassName = following ? "button-follow-following" : "button-follow-notfollowing";
	const buttonText = following ? "Siguiendo" : "Seguir";
	return(
		<div className="follower-card">
			<img className="user-icon" src={`https://unavatar.io/${userName}`}/>
			<div className="follower-card-names">
				<strong className="name">{name}</strong>
				<span className="username">@{userName}</span>
			</div>
			<button className={buttonClassName} onClick={handleClick}>
				<strong>{buttonText}</strong>
			</button>
		</div>
	)
}