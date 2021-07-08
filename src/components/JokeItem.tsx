import React, { useState } from 'react'
import { IJoke } from './../types';

//@ts-ignore
// import  likeSvg from '../icons/heart.svg'


interface IJokeItem extends IJoke {
	
}

const JokeItem: React.FC<IJokeItem> = ({ setup, joke, type }) => {
const [likes, seTlikes] = useState(false)


const onChangeLike = () => {
	seTlikes( true )
}

	return (
		<div className={ likes ? 'joke_item favorite' : 'joke_item' } >
		<p className="joke_item-text">	{ setup ? setup : joke } </p> 
		<button onClick={ onChangeLike } className={ likes ? 'joke_item-likes' : 'joke_item-unlikes' } > Like </button> 
		</div>
	)
}



export default JokeItem
