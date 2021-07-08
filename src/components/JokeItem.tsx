import React, { useState } from 'react'
import { IJoke } from './../types';

//@ts-ignore
import  likeSvg from '../icons/heart.svg'


interface IJokeItem extends IJoke {
	onChangeFavorite: ( ) => void
}

const JokeItem: React.FC<IJokeItem> = ({ setup, joke, type, onChangeFavorite }) => {
const [likes, setLikes] = useState<boolean>(false)




const addFavorite = () => {
	setLikes( !likes )
	onChangeFavorite()
}

	return (
		<div className={ likes ? 'joke_item favorite' : 'joke_item' } >
		<p className="joke_item-text">
				{ setup ? setup : joke } </p> 
		
		<button onClick={ addFavorite } 
		className={ likes ? 'joke_item-buttom likes' : 'joke_item-buttom' }>
			 Like </button> 
		</div>
	)
}



export default JokeItem
