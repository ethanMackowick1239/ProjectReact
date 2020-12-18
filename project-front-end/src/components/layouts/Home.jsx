import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Home extends Component {
  render() {
    const headerStyle = {
      borderTop: "5px solid rgb(169, 169, 169)",
      marginTop: "3%"
    };
    return (
      <div className="home">
        <div className="p-3 mb-2 bg-light text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Update Catalog</h1>
                <p className="lead"> Add/Update/Delete from Catalog</p>
                <Link to="/Product">
                  <button type="button" class="btn btn-lg btn-info mr-2">
                    Product
                  </button>
                </Link>
                <Link to="/Price">
                  <button type="button" class="btn btn-lg btn-info mr-2">
                    Price
                  </button>
                </Link>
                <Link to="/Stock">
                  <button type="button" class="btn btn-lg btn-info mr-2">
                    Stock
                  </button>
                </Link>
                <Link to="/Review">
                  <button type="button" class="btn btn-lg btn-info mr-2">
                    Review
                  </button>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4" style={headerStyle}>Search Catalog</h1>
                <p className="lead">Search through the data of your Catalog</p>
                <Link to="/ProductGet">
                  <button type="button" class="btn btn-lg btn-info mr-2">
                    Product
                  </button>
                </Link>
                <Link to="/PriceGet">
                  <button type="button" class="btn btn-lg btn-info mr-2">
                    Price
                  </button>
                </Link>
                <Link to="/StockGet">
                  <button type="button" class="btn btn-lg btn-info mr-2">
                    Stock
                  </button>
                </Link>
                <Link to="/ReviewGet">
                  <button type="button" class="btn btn-lg btn-info mr-2">
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
