import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { IJoke } from './types';
import JokeItem from './components/JokeItem';
import { SearchForm } from './components';




const App = () => {
	const [jokes, setJokes] = useState<IJoke[]>([])
	const [searchTerm, setSearchTerm] = useState("")
	const [loading, setLoading] = useState<boolean>(false)



	const getJokes = useCallback(async () => {
		const { data } = await axios.get(`https://v2.jokeapi.dev/joke/Any?contains=${searchTerm}&amount=10`)
		setJokes(data.jokes)
	}, [searchTerm])

	useEffect(() => {
		getJokes()
	}, [getJokes])


	const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
		setSearchTerm(e.currentTarget.value)
	}


	return (
		<>
			<div className="search">
				<SearchForm searchTerm={searchTerm} onChangeSearch={onChangeSearch} />
			</div>
			<div className="jokes">
				{jokes ? jokes.map(joke => <JokeItem key={joke.id} 
				{...joke} />) : (
				<p> Sorry, we don't have such a joke. Try again please :)
				</p>)
				}
			</div>
		</>
	)
}




export default App
