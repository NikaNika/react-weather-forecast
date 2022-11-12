import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search({onChangeCity}) {
  let inputValue = '';

  const onChangeInputValue = (event) => {
    event.preventDefault();
		inputValue = event.target.value;
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    onChangeCity(inputValue);
  }

	return (
		<form onSubmit={onSubmitForm}>
			<input
				type='search'
				placeholder='Type a city..'
				className='formControl'
				id='cityInput'
				autoComplete='off'
        required
        onChange={onChangeInputValue}
			/>
			<button type='submit' value='Search' className='searchButton'>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</button>
		</form>
	);
}

export default Search;
