//import logo from './logo.svg';
import React from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: ''
    };
  }


  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => {return response.json()})
    this.setState({robots: robots})
  }
  
  onSearchChange = async (event) => {
       await this.setState({searchfield: event.target.value.toString()})
      
     
  }
  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox  searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
