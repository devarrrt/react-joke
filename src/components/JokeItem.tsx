import React, { useState } from 'react'
import { IJoke } from './../types';


export interface IFavJoke {
	id: number
	setup: string,
	joke: string
}


interface IJokeItem extends IJoke {
	addJoke: (favJoke: IFavJoke)=> void
}


const JokeItem: React.FC<IJokeItem> = ({ id, setup, joke, addJoke }) => {
	const [likes, setLikes] = useState<boolean>(false)

	const addFavorite = () => {
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
				onClick={addFavorite}
				className={likes ? 'joke_item-button likes' : 'joke_item-button'}>
				Like
			</button>
		</div>
	)
}



export default JokeItem
