import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className ="p-3 mb-2 bg-dark text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Services</h1>
                <p className="lead">
                  {" "}
                  Add to your 
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
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Get Services</h1>
                <p className="lead">
                  {" "}
                  Or? Do you want to Get from a service
                </p>
                <Link to="/ProductGet">
                    <button type="button" class ="btn btn-lg btn-info mr-2">
                    Product
                    </button>
                </Link>
                <Link to="/PriceGet">
                    <button type="button" class ="btn btn-lg btn-info mr-2">
                    Price
                    </button>
                </Link>
                <Link to="/StockGet">
                    <button type="button" class ="btn btn-lg btn-info mr-2">
                    Stock
                    </button>
                </Link>
                <Link to="/ReviewGet">
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
