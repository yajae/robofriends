
import React from 'react';

const SearchBox = ({searchfield, searchchange}) => {
	return (
		
	<div className ='tc'>
		<hi>Robofriends</hi>
		<input
		className='pa3 ba b--green bg-lightest-blue'
		type='search'
		placeholder='search robots'
		onchange={searchchange}
		/>
	</div>
	);
} 
export default SearchBox;