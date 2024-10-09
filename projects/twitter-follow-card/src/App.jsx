import './App.css'
import { FollowerCard } from './FollowerCard.jsx'

export function App() {
  return (
    <>
		<div className="cards">
			<div className="cards-header">
				<strong>A quién seguir</strong>
			</div>
			<FollowerCard userName="yamato" name="Japanese Hater" isFollowing></FollowerCard>
			<FollowerCard userName="batman" name="Bruce Wayne"></FollowerCard>
			<FollowerCard userName="barackobama" name="Barack Obama"></FollowerCard>
		</div>
    </>
  )
}