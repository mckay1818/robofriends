import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import Search from './Search';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState( {searchfield: event.target.value})
       
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });

        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <Search onSearchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
        }
}

export default App;