import React from "react";
import { Link } from "react-router-dom";
class Battle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text-center my-3 mb-4 rounder-0 fw-bold">
            Instructions
          </h2>
          <div className="d-flex  justify-content-around">
            <div className="githubUsers text-center">
              <h3 className="fw-bold ">Enter 2 Github users</h3>
              <div className="box1  my-4">
                <i className="fa-solid fa-user icons p-3  "></i>
              </div>
            </div>

            <div className="githubUsers text-center">
              <h3 className="fw-bold ">Battle</h3>
              <div className="box1   my-4">
                <i class="fa-brands fa-battle-net icons p-3"></i>
              </div>
            </div>

            <div className="githubUsers text-center">
              <h3 className="fw-bold ">Winner</h3>
              <div className="box1   my-4">
                <i class="fa-solid fa-trophy icons p-3"></i>
              </div>
            </div>
          </div>

          <h2 className="text-center my-3 fw-bold ">Players</h2>

          <div className="input-div d-flex  justify-content-around ">
            <h4 className="fw-bold">Player One</h4>
            <h4 className="fw-bold">Player Two</h4>
          </div>

          <div className="input-div d-flex  justify-content-around ">
            {this.props.handleUser1Visibility()}
            {this.props.handleUser2Visibility()}
          </div>

          {this.props.data.isUser1Present === true &&
          this.props.data.isUser2Present === true ? (
            <>
              <div className="text-center">
                <Link to="/result">
                  <button className="btn-battle border-0 p-2 rounded-2 bg-dark text-light ">
                    Battle
                  </button>
                </Link>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

export default Battle;
