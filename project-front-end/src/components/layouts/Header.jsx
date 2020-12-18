import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="landing.html">
            Spring/React Project
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Stock">
                  Stock
                </Link>
              </li>

              <li className="nav-item" >
                <Link className="nav-link" to="/Price">
                  Price
                </Link>
              </li>
              <li className="nav-item" style={{ borderRight: "3px solid rgb(169,169,169)" }}>
                <Link className="nav-link" to="/Review">
                  Review
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                 </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
