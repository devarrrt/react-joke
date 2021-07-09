import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { IJoke } from './types';
import JokeItem from './components/JokeItem';
import { SearchForm } from './components';




const App = () => {
	const [jokes, setJokes] = useState<IJoke[]>([])
	const [searchTerm, setSearchTerm] = useState<string>("")
	const [loading, setLoading] = useState<boolean>(false)
	const [favoriteCount, setFavoriteCount] = useState<number>(0)




	const getJokes = useCallback(async () => {
		try {
			setLoading(true)
			const { data } = await axios.get(`https://v2.jokeapi.dev/joke/Any?contains=${searchTerm}&amount=10`)
			setJokes(data.jokes)
		} catch (error) {
			setLoading(false)
			console.log(error)
		} finally {
			setLoading(false)
		}
	}, [searchTerm])


	useEffect(() => {
		getJokes()
	}, [getJokes])

	const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
		setSearchTerm(e.currentTarget.value)
	}

	const onChangeFavorite = () => {
		setFavoriteCount(prev => prev + 1)
	}



	return (
		<div className="app">
			<div className="search">
				<SearchForm searchTerm={searchTerm} onChangeSearch={onChangeSearch} />
			</div>
			{loading ?
				<p className="center" > Loading... </p> : (
					<div className="jokes">
						{jokes ? jokes.map(joke =>
							<JokeItem
								onChangeFavorite={onChangeFavorite}
								key={joke.id}
								{...joke}
							/>) : (
							<p className="center">
								Sorry, we don't have such a joke. Try again please :)
							</p>
						)
						}

						<div className="jokes_favorite">
							Favorite jokes: <b>{ favoriteCount }</b>	
						</div>
					</div>
				)}
		</div>
	)
}




export default App
