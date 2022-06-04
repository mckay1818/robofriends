import React from 'react';
import CardList from '../components/CardList';
import Search from '../components/Search';
import '../containers/App.css';
import Scroll from '../components/Scroll';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots:[],
            searchfield: '',
        }
        console.log('constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
        console.log('componentDidMount');
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})  
    }
    render() {
        const { robots, searchfield } = this.state; 
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        if (!robots.length) {
            return <h1 className='tc'>Loading</h1>
        } else {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <Search onSearchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
        }
    }
}

export default App;