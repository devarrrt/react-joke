import axios from 'axios'

 
export const getJokes = async () => {
	const data = await axios.get( `https://v2.jokeapi.dev/joke/Any?amount=10`)
	.then( ({data}) => console.log( data.jokes ))
	return data
}

//вставить в будущем дополнительные параметры для поиска


