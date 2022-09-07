import React from "react";
import { Link } from "react-router-dom";

class BattleResult extends React.Component {
  constructor(props) {
    super(props);
  }

  handleWinner = (score1, score2) => {
    if (score1 > score2) {
      return "Winner";
    } else if (score1 < score2) {
      return "Looser";
    } else if (score1 === score2) {
      return "Tie";
    }
  };

  render() {
    let user1 = this.props.data.user1Data;
    let user2 = this.props.data.user2Data;

    let score1 = user1 ? user1.public_repos + user1.followers : 0;
    let score2 = user2 ? user2.public_repos + user2.followers : 0;
    return (
      <>
        <div className="d-flex justify-content-around align-items-center ">
          {user1 && user2 ? (
            <>
              <div className="repo-detail flex-26 bg-light mt-5 p-4">
                <h1>{this.handleWinner(score1, score2)}</h1>
                <div>
                  <img src={user1.avatar_url} alt="repo1" />
                </div>
                <h6 className="fs-2">Score: {score1}</h6>
                <h6 className="fs-5">
                  <i className="fa-solid fa-user mx-2"></i> {user1.login}
                </h6>

                <h6 className="fs-5">
                  <i className="fa-solid fa-user mx-2"></i>
                  {user1.name || "N/A"}
                </h6>

                <h6 className="fs-5">
                  <i className="fa-solid fa-location-dot mx-2"></i>
                  {user1.location || "N/A"}
                </h6>
                <h6 className="fs-5">
                  <i className="fa-regular fa-building mx-2"></i>

                  {user1.company || "N/A"}
                </h6>
                <h6 className="fs-5">
                  <i className="fa-solid fa-people-group mx-2"></i>
                  <span className="mx-2"> Followers:</span>
                  {user1.followers}
                </h6>
                <h6 className="fs-5">
                  <i className="fa-solid fa-people-pulling mx-2"></i>
                  <span className="mx-2">Following:</span>
                  {user1.following}
                </h6>
                <h6 className="fs-5">
                  <i class="fa-solid fa-code mx-2"></i> {user1.public_repos}
                </h6>
              </div>

              <div className="repo-detail flex-26 bg-light mt-5 p-4">
                <h1>{this.handleWinner(score2, score1)}</h1>
                <div>
                  <img src={user2.avatar_url} alt="repo1" />
                </div>
                <h6 className="fs-2">Score: {score2}</h6>
                <h6 className="fs-5">
                  <i className="fa-solid fa-user mx-2"></i> {user2.login}
                </h6>

                <h6 className="fs-5">
                  <i className="fa-solid fa-user mx-2"></i>
                  {user2.name || "N/A"}
                </h6>

                <h6 className="fs-5">
                  <i className="fa-solid fa-location-dot mx-2"></i>
                  {user2.location || "N/A"}
                </h6>
                <h6 className="fs-5">
                  <i className="fa-regular fa-building mx-2"></i>

                  {user2.company || "N/A"}
                </h6>
                <h6 className="fs-5">
                  <i className="fa-solid fa-people-group mx-2"></i>
                  <span className="mx-2"> Followers:</span>
                  {user2.followers}
                </h6>
                <h6 className="fs-5">
                  <i className="fa-solid fa-people-pulling mx-2"></i>
                  <span className="mx-2">Following:</span>
                  {user2.following}
                </h6>
                <h6 className="fs-5">
                  <i class="fa-solid fa-code mx-2"></i> {user2.public_repos}
                </h6>
              </div>
            </>
          ) : (
            "Somethingwent wrong"
          )}
        </div>
        <div className="reset mb-4">
          <Link to="/battle">
            <button className="btn-reset">Reset</button>
          </Link>
        </div>
      </>
    );
  }
}

export default BattleResult;
