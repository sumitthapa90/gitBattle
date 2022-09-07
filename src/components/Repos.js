import React from "react";
class Repos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let details = this.props.details;
    console.log(details);
    return (
      <>
        <div className="card p-5 bg-light  ">
          <h2>#{this.props.index + 1}</h2>
          <div className="img-card pb-3">
            <img src={details.owner.avatar_url} alt="repo" />
          </div>
          <div>
            <p>{details.name}</p>
            <p>
              <i class="fa-solid fa-user fs-4"></i> {details.name}
            </p>
            <p>
              <i className="fa-solid fa-star fs-4"></i>
              {details.stargazers_count}
            </p>
            <p>
              <i class="fa-solid fa-code-fork fs-4"></i>
              {details.forks_count}
            </p>
            <p>
              <i class="fa-solid fa-triangle-exclamation fs-4"></i>{" "}
              {details.open_issues_count}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Repos;
