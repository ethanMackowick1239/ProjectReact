import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className ="p-3 mb-2 bg-dark text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Project home page</h1>
                <p className="lead">
                  {" "}
                  Which service do you want to manipulate
                </p>
                <Link to="/Product">
                    <button type="button" class ="btn btn-lg btn-info mr-2">
                    Product
                    </button>
                </Link>
                <Link to="/Price">
                    <button type="button" class ="btn btn-lg btn-info mr-2">
                    Price
                    </button>
                </Link>
                <Link to="/Stock">
                    <button type="button" class ="btn btn-lg btn-info mr-2">
                    Stock
                    </button>
                </Link>
                <Link to="/Review">
                    <button type="button" class ="btn btn-lg btn-info mr-2">
                    Review
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
