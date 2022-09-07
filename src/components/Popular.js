import React from "react";
import Repos from "./Repos";
class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.selectedLanguage}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => ({
          repos: data.items,
        }));
      });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.selectedLanguage !== this.state.selectedLanguage) {
      fetch(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.selectedLanguage}&sort=stars&order=desc&type=Repositories`
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            repos: data.items,
          });
        });
    }
  }

  handlelanguage = (lang) => {
    this.setState((prevState) => ({
      selectedLanguage: lang,
    }));
  };

  handleRepos = (repos) => {
    return repos.map((repo, index) => {
      return <Repos details={repo} index={index} />;
    });
  };

  render() {
    console.log(this.state.repos);
    let language = ["All", "Javascript", "Rubby", "Java", "CSS", "Python"];
    return (
      <>
        <header>
          <h1 className="text-center fw-bold">Github Battle</h1>
          <nav>
            <ul className="d-flex justify-content-center align-items-center list-unstyled">
              {language.map((lang) => {
                return (
                  <li
                    onClick={() => this.handlelanguage(lang)}
                    className="mx-3 my-3 p-1 fs-3 fw-bold rounded-3 "
                  >
                    {lang}
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>

        <div className="main-cont ">
          {this.state.repos === null ? (
            <h1>Fetching Repos.....</h1>
          ) : (
            this.handleRepos(this.state.repos)
          )}
        </div>
      </>
    );
  }
}

export default Popular;
