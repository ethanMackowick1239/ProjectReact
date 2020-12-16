import axios from "axios";
import React, { Component } from 'react'


export default class PriceGet extends Component {
  constructor() {
    super();
    this.state = {
      product: []
    };
  }
  
  //Gets all Products
  onGetAllProducts() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const product = res.data;
        this.setState({ product });
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


                  <h1 className="display-3 mb-4"> Get All  Products </h1>
                    <form  onSubmit={this.onGetAllProducts}>
                    {/* <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Name" name="productid" required 
                      value={this.state.productid}
                      onChange={this.handleChange} />
                    </div> */}
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                  <ul>
                     { this.state.product.map(product => <li>{product.productid} {product.productname}</li>)}
                  </ul>

                  <h1 className="display-3 mb-4"> Get Product By ID  </h1>
                    <form  onSubmit={this.getProductById}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Name" name="productid" required 
                      value={this.state.productid}
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
