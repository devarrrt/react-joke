import React, { useState } from 'react'
import { IJoke } from './../types';



interface IJokeItem extends IJoke {
	addJoke: (favJoke: any)=>void
}


//@ts-ignore
const JokeItem: React.FC<IJokeItem> = ({ id, setup, joke, addJoke }) => {
	const [likes, setLikes] = useState<boolean>(false)

	const addFavorite = (id: any) => {
		setLikes(true)
		const favJoke = {
			id,
			setup,
			joke
		}
		addJoke( favJoke )
	}




	return (
		<div className={likes ? 'joke_item favorite' : 'joke_item'} >
			<p className="joke_item-text">
				{joke ? joke : setup}
			</p>
			<button
				onClick={()=> addFavorite(id)}
				className={likes ? 'joke_item-button likes' : 'joke_item-button'}>
				Like
			</button>
		</div>
	)
}



export default JokeItem
