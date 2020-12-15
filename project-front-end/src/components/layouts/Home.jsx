import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Project home pager</h1>
                <p className="lead">
                  {" "}
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr />
                <Link to="/Product">
                    <button type="button" class ="btn btn-lg btn-light">
                    Product
                    </button>
                </Link>
                <a href="login.html" className="btn btn-lg btn-light">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
