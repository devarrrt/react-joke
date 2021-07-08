import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { IJoke } from './types';
import JokeItem from './components/JokeItem';
import { SearchForm } from './components';




const App = () => {
const [jokes, setJokes] = useState<IJoke[]>([])
const [searchTerm, setSearchTerm] = useState("")
const [loading, setLoading] = useState<boolean>(false)

const onChangeSearch = ( e: React.FormEvent<HTMLInputElement> ) => {
	setSearchTerm( e.currentTarget.value )
} 

const getJokes = async () => {
	const {data} = await axios.get( `https://v2.jokeapi.dev/joke/Any?amount=10`)
		setJokes( data.jokes )
}



useEffect(()=> {
	getJokes()
}, [])


	return (
	<>
		<div className="search">
			<SearchForm searchTerm={ searchTerm } onChangeSearch={ onChangeSearch } />
		</div>
		<div className="jokes">
		{ jokes.map( joke =>  <JokeItem key={ joke.id } { ...joke }  />)}
		</div>
	</>			
	)
}




export default App
