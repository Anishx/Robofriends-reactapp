import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import Scroll from '../components//Scroll';

class App extends Component { //Smart Components

    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield : ''
        }
    } 

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{return response.json();})
        .then(users=>{this.setState({robots:users})});
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})    
    }

   render()
   {
        //Destructuring 
        const {robots, searchfield} = this.state; 
        // instead of writing this.state.robots.blabla everywhere you can replace it with robots.blabla

        const filerRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        //Loading 
        return !robots.length ? <h1>Loading... </h1> : 
        (
            <div className='tc'>
                <h1 className='f1'>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filerRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default App; 