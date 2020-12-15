import React, { Component } from "react";
import axios from "axios";


export default class Price extends Component {
    constructor() {
        super();
        this.state = {
          priceid:"",
          productid: "",
          pricevalue: ""
        };
      }
      
      onSubmit = (e) => {
        e.preventDefault();
        console.log("Final state: " + JSON.stringify(this.state));
        const price = {
          priceid: this.state.productid,
          productid: this.state.productid,
          pricevalue: this.state.pricevalue
        };
        axios
          .post("http://localhost:9050/api/auth/signin", price)
          .then((response) =>{ console.log(response.data)
          
          localStorage.setItem('data',JSON.stringify(response.data))
          })
          .catch((err) => console.log(err));
      };
      
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
                    <h1 className="display-3 mb-4"> Product Catalog Service</h1>
                    <form  onSubmit={this.onSubmit}>
                    <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="Id" name="productid" required 
                          value={this.state.productid}
                          onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="Name" name="productname" required 
                          value={this.state.productname}
                          onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control form-control-lg" placeholder="Category" name="category" value={this.state.category} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-lg" placeholder="Description" name="description"  value={this.state.description} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-lg" placeholder="Expiry Date" name="expire" value={this.state.expire} onChange={this.handleChange} />
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    
