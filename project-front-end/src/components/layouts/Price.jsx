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
      
      //Handles Creation
      onSubmit = (e) => {
        e.preventDefault();
        console.log("Final state: " + JSON.stringify(this.state));
        const price = {
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

      onDelete = (e) => {
        e.preventDefault();
        console.log("Final state: " + JSON.stringify(this.state));
        const priceDelete = {
          priceid: this.state.productid,
        };
        axios
          .post("http://localhost:9050/api/auth/signin", priceDelete)
          .then((response) =>{ console.log(response.data)
          
          localStorage.setItem('data',JSON.stringify(response.data))
          })
          .catch((err) => console.log(err));
      };

      onUpdate = (e) => {
        e.preventDefault();
        console.log("Final state: " + JSON.stringify(this.state));
        const priceUpdate = {
          priceid: this.state.productid,
          productid: this.state.productid,
          pricevalue: this.state.pricevalue
        };
        axios
          .post("http://localhost:9050/api/auth/signin", priceUpdate)
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
                    <h1 className="display-3 mb-4"> Create a New Price</h1>
                    <form  onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="Product ID" name="productid" required 
                          value={this.state.productid}
                          onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="Price Value" name="pricevalue" value={this.state.pricevalue} onChange={this.handleChange}/>
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                      </form>

                      <h1 className="display-3 mb-4"> Delete a Price</h1>
                      <form  onSubmit={this.onDelete}>
                        <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="ID" name="priceid" required 
                          value={this.state.priceid}
                          onChange={this.handleChange} />
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                      </form>

                      <h1 className="display-3 mb-4">Update a Price</h1>
                      <form  onSubmit={this.onUpdate}>
                      <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="ID" name="priceid" required 
                          value={this.state.priceid}
                          onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="Product ID" name="productid" required 
                          value={this.state.productid}
                          onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="Price Value" name="pricevalue" value={this.state.pricevalue} onChange={this.handleChange}/>
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
    
