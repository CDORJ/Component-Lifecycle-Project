import React from "react";
import axios from "axios";
import "./App.css";
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    console.log("cd: App.js: App: constructor() -> was ran");
    this.state = {
      userCard: {},
      user: 'chaddiaz',
      newUserCard: "chaddiaz",
      userFollowing: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/ChadDiaz")
      .then((res) => {
        console.log("cd: App.js: App: CDM: user data", res);
        this.setState({
          userCard: res.data,
        });
      })
      .catch((err) => console.log("err user data", err.message));
    axios
      .get("https://api.github.com/users/ChadDiaz/following")
      .then((res) => {
        console.log("cd: App.js: App: CDM: followers data", res);
        this.setState({
          userFollowing: res.data,
        });
      })
      .catch((err) => console.log("err followers data", err.message));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userCard !== this.state.userCard) {
      axios
        .get(`https://api.github.com/users/${this.state.user}`)
        .then((res) => {
          console.log("cd: App.js: App: CDU: axios get new User", res);
          this.setState({
            userCard: res.data,
          }).catch((err) => console.log("err new user data", err.message));
        });
      axios
        .get(`https://api.github.com/users/${this.state.user}/following`)
        .then((res) => {
          this.setState({
            userFollowing: res.data,
          }).catch((err) => console.log("err new user followers data", err));
        });
    }
  }

  handleClick = (e) => {
    this.setState({
      userCard: this.state.newUserCard,
    });
  };

  handleChange = (e) => {
    this.setState({
      newUserCard: e.target.value,
    });
  };

  
  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <br />
        <input value={this.state.newUserCard} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Set User</button>
        <br />
        <br />
        <UserCard
          user={this.state.userCard}
          following={this.state.userFollowing}
        />
      </div>
    );
  }
}
export default App;
