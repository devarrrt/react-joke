import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { IJoke } from './types';
import JokeItem from './components/JokeItem';




const App = () => {
const [jokes, setJokes] = useState<IJoke[]>([])
const [loading, setLoading] = useState<boolean>(false)


const getJokes = async () => {
	const {data} = await axios.get( `https://v2.jokeapi.dev/joke/Any?amount=10`)
		setJokes( data.jokes )
}

useEffect(()=> {
	getJokes()
}, [])


	return (
	<>
		{ jokes.map( joke =>  <JokeItem key={ joke.id } { ...joke }  />)}
	</>			
	)
}




export default App
