import React from 'react'
import axios from 'axios'
import './App.css'
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    console.log('cd: App.js: App: constructor() -> was ran')
    this.state= {
      userCard: {},
      userFollowing: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/ChadDiaz')
    .then((res) => {
      console.log("cd: App.js: App: CDM: user data", res)
      this.setState({
        userCard: res.data,
      })
    }).catch((err) => console.log('err user data', err.message))
    axios.get('https://api.github.com/users/ChadDiaz/following')
    .then((res) => {
      console.log("cd: App.js: App: CDM: followers data", res)
      this.setState({
        userFollowing: res.data
      })
    }).catch((err) => console.log("err followers data", err.message))
  }
  
  render() {
    return(
      <div className="App">
        <h1>Chad Diaz Github User Card</h1>
        <UserCard user={this.state.userCard} following={this.state.userFollowing}/>
      </div>
    );
  }
}
export default App;