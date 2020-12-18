import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="p-3 mb-2 bg-light text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Company Catalog</h1>
                <hr />
                <Link to="/Register">
                  <button type="button" class="btn btn-lg btn-info mr-2">
                    Sign Up
                  </button>
                </Link>
                <Link to="/Login">
                  <button type="button" class="btn btn-lg btn-info mr-2">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
