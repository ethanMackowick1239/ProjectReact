import axios from "axios";
import React, { Component } from 'react'


export default class StockGet extends Component {
  constructor() {
    super();
    this.state = {
      stock: []
    };
  }
  
  //Gets all Products
  onGetAllProducts() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const stock = res.data;
        this.setState({ stock });
      })
  }
  handleGetById = event => {
    this.setState({ stockid: event.target.value });
  }
  getStockById() {
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.stockid}`)
      .then(res => {
        const stock = res.data;
        this.setState({ stock });
      })
  }
  
 
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="Product">
        <div className ="p-3 mb-2 bg-dark text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">


                  <h1 className="display-3 mb-4"> Get All Stocks </h1>
                    <form  onSubmit={this.onGetAllProducts}>
                    {/* <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Name" name="productid" required 
                      value={this.state.productid}
                      onChange={this.handleChange} />
                    </div> */}
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                  <ul>
                     { this.state.stock.map(stock =>
                         <li>{stock.stockid} {stock.quantity}</li>)}
                  </ul>

                  <h1 className="display-3 mb-4"> Get Stock By ID  </h1>
                    <form  onSubmit={this.getStockById}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Name" name="productid" required 
                      value={this.state.stockid}
                      onChange={this.handleChange} />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                  <ul>
                     { this.state.product.map(product => <li>{product.productid} {product.productname}</li>)}
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
