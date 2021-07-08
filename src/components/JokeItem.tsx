import React from 'react'
import { IJoke } from './../types';



interface IJokeItem extends IJoke {
	
}

const JokeItem: React.FC<IJokeItem> = ({ setup, joke }) => {
	return (
		<div className="joke-item" >
			{ setup ? setup : joke }
		</div>
	)
}



export default JokeItem
