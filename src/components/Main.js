import React from "react";
import { Route, Switch } from "react-router-dom";
import Battle from "./Battle";
import Popular from "./Popular";
import BattleResult from "./BattleResult";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: "",
      user2: "",
      isUser1Present: false,
      isUser2Present: false,
      user1Data: null,
      user2Data: null,
    };
  }

  componentDidUpdate = (prevPros, prevState) => {
    if (prevState.isUser1Present !== this.state.isUser1Present) {
      fetch(`https://api.github.com/users/${this.state.user1}`)
        .then((res) => res.json())
        .then((data) => this.setState({ user1Data: data }));
    } else if (prevState.isUser2Present !== this.state.isUser2Present) {
      fetch(`https://api.github.com/users/${this.state.user2}`)
        .then((res) => res.json())
        .then((data) => this.setState({ user2Data: data }));
    }
  };

  handleUser1Input = (event) => {
    let value = event.target.value;
    this.setState({
      user1: value,
    });
  };

  handleUser2Input = (event) => {
    let value = event.target.value;
    this.setState({
      user2: value,
    });
  };

  handleUser1Submit = (event) => {
    event.preventDefault();
    this.setState({
      isUser1Present: true,
    });
  };

  handleUser2Submit = (event) => {
    event.preventDefault();
    this.setState({
      isUser2Present: true,
    });
  };

  handleDeleteUser1 = () => {
    this.setState({
      isUser1Present: false,
      user1: "",
    });
  };

  handleDeleteUser2 = () => {
    this.setState({
      isUser2Present: false,
      user2: "",
    });
  };

  handleUser1Visibility = () => {
    if (this.state.isUser1Present === true && this.state.user1Data) {
      return (
        <>
          <div className="flex-40  justify-content-between align-items-center bg-light w-25  ">
            <div className=" single-info d-flex justify-content-between align-items-center p-2">
              <div className="img-box">
                <img src={this.state.user1Data.avatar_url} alt="1" />
              </div>
              <h4>{this.state.user1Data.login}</h4>
              <i
                onClick={() => this.handleDeleteUser1()}
                className="fa-solid fa-circle-xmark"
              ></i>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <form onSubmit={(event) => this.handleUser1Submit(event)}>
            <input
              type="text"
              placeholder="enter a github user"
              value={this.state.user1}
              onChange={(event) => this.handleUser1Input(event)}
            />
            <input className="input-btn" type="submit" value="submit" />
          </form>
        </>
      );
    }
  };

  handleUser2Visibility = () => {
    if (this.state.isUser2Present === true && this.state.user2Data) {
      return (
        <>
          <div className="flex-40  justify-content-between align-items-center bg-light w-25 ">
            <div className="single-info d-flex justify-content-between align-items-center p-2">
              <div className="img-box">
                <img src={this.state.user2Data.avatar_url} alt="2" />
              </div>
              <h4>{this.state.user2Data.login}</h4>
              <i
                onClick={() => this.handleDeleteUser2()}
                className="fa-solid fa-circle-xmark"
              ></i>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <form onSubmit={(event) => this.handleUser2Submit(event)}>
            <input
              type="text"
              placeholder="enter a github user"
              value={this.state.user2}
              onChange={(event) => this.handleUser2Input(event)}
            />
            <input className="input-btn" type="submit" value="submit" />
          </form>
        </>
      );
    }
  };

  render() {
    return (
      <>
        <div className="container ">
          <Switch>
            <Route path="/" exact>
              <Popular />
            </Route>

            <Route path="/battle">
              <Battle
                data={this.state}
                handleUser1Visibility={() => this.handleUser1Visibility()}
                handleUser2Visibility={() => this.handleUser2Visibility()}
              />
            </Route>

            <Route path="/result">
              <BattleResult data={this.state} />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default Main;
