import React from 'react'

interface ISearchForm {
	searchTerm: string
	onChangeSearch: (e: React.FormEvent<HTMLInputElement>)=>void
}



const SearchForm:React.FC<ISearchForm> = ({ searchTerm, onChangeSearch }) => {
	return (
		<div>
			<input type="text" 
			value={ searchTerm }
			onChange={ onChangeSearch }
			placeholder="Введите слово для поиска анектодов..." />

		</div>
	)
}



export default SearchForm
