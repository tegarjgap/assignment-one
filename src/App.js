import React, { Component } from "react";
import "./App.css";
import UserOutput from "./components/UserOutput";
import UserInput from "./components/UserInput";
import './components/UserStyle.css';

class App extends Component {
  state = {
    username: 'gotcha!'
  }

  changeUserNameHandler = (event) => {
    this.setState({
        username: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          <p>HI, I am parent component as App.js</p>
        </div>
        <div className="content">
          <UserInput change={this.changeUserNameHandler}/>
          <UserOutput username={ this.state.username }/>
          <UserOutput username={ this.state.username }/>
        </div>
      </div>
    );
  }
}

export default App;
