import React, { useState } from 'react'
import { IJoke } from './../types';



interface IJokeItem extends IJoke {
	onChangeFavorite: ( ) => void
}



const JokeItem: React.FC<IJokeItem> = ({ setup, joke, onChangeFavorite }) => {
const [likes, setLikes] = useState<boolean>(false)

const addFavorite = () => {
	setLikes( !likes )
	onChangeFavorite()
}

	return (
		<div className={ likes ? 'joke_item favorite' : 'joke_item' } >
		<p className="joke_item-text">
				{ setup ? setup : joke } 
		</p> 
		<button onClick={ addFavorite } 
		className={ likes ? 'joke_item-button likes' : 'joke_item-button' }>
			 Like </button> 
		</div>
	)
}



export default JokeItem
