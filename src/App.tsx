import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { IJoke } from './types';
import JokeItem from './components/JokeItem';
import { SearchForm } from './components';
import { IFavJoke } from './components/JokeItem'



const App = () => {
	const [jokes, setJokes] = useState<IJoke[]>([])
	const [searchTerm, setSearchTerm] = useState<string>("")
	const [loading, setLoading] = useState<boolean>(false)
	const [favorite, setFavorite] = useState<string[]>([])




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


	const addJoke = ( joke: IFavJoke ) => {
		setFavorite(( prev ) =>{
			const item = [ ...prev, joke.joke || joke.setup]
			localStorage.setItem( 'joke', JSON.stringify(item))
			return item
			})		
		}

		//@ts-ignore
 const favoriteJokesRender = JSON.parse( localStorage.getItem('joke' ))


	useEffect(  () => {
		getJokes()
	}, [getJokes])

	const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
	 	setSearchTerm(e.currentTarget.value)
	}







	return (
		<div className="app">
			<div className="search">
				<SearchForm searchTerm={searchTerm} 
				onChangeSearch={onChangeSearch} />
			</div>
			{loading ?
				<p className="center" > Loading... </p> : (
					<div className="jokes">
						{jokes ? jokes.map(joke =>
							<JokeItem
							addJoke={ addJoke }
								key={joke.id}
								{...joke}
							/>) : (
							<p className="center">
								Sorry, we don't have such a joke. Try again please :)
							</p>
						)
						}

						<div className="jokes_favorite">
						<h5> Favorite jokes { favorite.length > 0 && favorite.length }: </h5>	
							<div> { favoriteJokesRender && favoriteJokesRender.map( (el: any, index: any) => 
							<p className="jokes_favorite-item"  key={ index }> { el } </p> )} 
							</div>  
						</div>
					</div>
				)}
		</div>
	)
}




export default App
