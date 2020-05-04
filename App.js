import React, {Component} from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';
import SearchBox from './SearchBox';




class App extends Component {
	constructor(){
		super()
		this.state ={
			robots: robots,
			Searchfield: '' 
		}
	}
	onSearchchange=(event)=> {
		this.setState({searchfeild: event.target.value});
	}

render() {
	const filterrobots= this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
		})
	return (
			<div className='tc'>
				<h1>Robofriends</h1>
				<SearchBox searchchange={this.onSearchchange}/>
				<Cardlist robots ={filterrobots}/>
			</div>
    	);
	}
}
export default App;