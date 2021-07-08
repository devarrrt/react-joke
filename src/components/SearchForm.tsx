import React from 'react'



interface ISearchForm {
	searchTerm: string
	onChangeSearch: (e: React.FormEvent<HTMLInputElement>)=>void
}

const SearchForm:React.FC<ISearchForm> = ({ searchTerm, onChangeSearch }) => {
	return (
		<div className="search">
			<input type="text" 
			name="searchTerm"
			value={ searchTerm }
			onChange={ onChangeSearch }
			placeholder="Enter a search word..." 
			className="search_input"
			/>
		</div>
	)
}



export default SearchForm
