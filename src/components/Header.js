import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  render() {
    return (
      <>
        <header className="header container p-3 ">
          <div className="container d-flex justify-content-between align-items-center ">
            <nav>
              <ul className="d-flex">
                <Link
                  className="text-decoration-none list-unstyled"
                  to="/"
                  exact
                >
                  <li className="top-list mx-2 fs-3 text-dark p-2 fw-bold">
                    Popular
                  </li>
                </Link>
                <Link
                  className="text-decoration-none list-unstyled"
                  to="/battle"
                >
                  <li className="top-list mx-2 fs-3 text-dark  p-2 fw-bold ">
                    Battle
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
