import React from "react";
import axios from "axios";
import "./App.css";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";
import Followers from "./components/Followers";

class App extends React.Component {
  constructor() {
    super();
    console.log("cd: App.js: App: constructor() -> was ran");
    this.state = {
      user: "chaddiaz",
      userData: [],
      followerData: [],
    };
  }

  componentDidMount() {
    this.getUserData(this.state.user);
    this.getFollowerData(this.state.user);
  }

  getUserData = (userName) => {
    const urlAPI = `https://api.github.com/users/${userName}`;
    axios.get(urlAPI).then((res) => {
      this.setState({
        userData: res.data,
      }).catch((err) => {
        alert("User does not exist on Github");
        console.log("error retrieving user data", err.message);
      });
    });
  };

  getFollowersData = (userName) => {
    const urlAPI = `https://api.github.com/users/${userName}/followers`;
    axios.get(urlAPI).then((res) => {
      this.setState({
        followerData: res.data,
      }).catch((err) => {
        alert("Not Following any GitHub Users");
        console.log("error finding followers", err.message);
      });
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      this.getUserData(this.state.user);
      this.getFollowerData(this.state.user);
    }
  }

  getNewUser = (userName) => {
    this.setState({
      user: userName,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>
            {this.state.userData.name !== null
              ? this.state.userData.name
              : this.state.userData.login}{" "}
            GitHub Info
          </h1>
          <UserForm getNewUser={this.getNewUser} />
        </header>

        <UserCard user={this.state.userData} />
        <Followers followers={this.state.followerData} />
      </div>
    );
  }
}

export default App;
